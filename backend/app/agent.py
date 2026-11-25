"""The Evolve AI proposal agent: intake questions → live research → structured draft."""

from __future__ import annotations

import json
import logging
from collections.abc import AsyncIterator
from typing import Any

import anthropic

from .config import settings
from .prompts import (
    AUDIENCES,
    PROPOSAL_SYSTEM,
    QUESTIONS_SYSTEM,
    RESEARCH_SYSTEM,
    audience_line,
)
from .schema import GenerateRequest, ProposalDraft, QuestionSet, QuestionsRequest, strict_schema

log = logging.getLogger("evolve.agent")

FALLBACK_BETA = "server-side-fallback-2026-07-01"
WEB_SEARCH_TOOL = {"type": "web_search_20260209", "name": "web_search", "max_uses": 6}
MAX_PAUSE_CONTINUATIONS = 4

# (JSON key, progress label) in the order the schema emits them.
SECTIONS = [
    ("heroStat", "Framing the opportunity"),
    ("context", "Sizing the problem"),
    ("policyAlignment", "Aligning with national missions"),
    ("solutions", "Designing six AI solutions"),
    ("centralSystem", "Architecting the centralized system"),
    ("roadmap", "Planning the rollout"),
    ("budget", "Costing the programme"),
    ("kpis", "Setting KPIs"),
    ("risks", "Mapping risks"),
    ("briefs", "Writing the audience brief"),
]

QUESTION_SCHEMA = strict_schema(QuestionSet)
PROPOSAL_SCHEMA = strict_schema(ProposalDraft)


class AgentError(Exception):
    """A failure worth showing to the user as-is."""


_client: anthropic.AsyncAnthropic | None = None
_fallbacks_supported = settings.fallbacks


def client() -> anthropic.AsyncAnthropic:
    global _client
    if _client is None:
        _client = anthropic.AsyncAnthropic()
    return _client


def _request(**kwargs: Any) -> dict[str, Any]:
    params: dict[str, Any] = {"model": settings.model, "thinking": {"type": "adaptive"}, **kwargs}
    if _fallbacks_supported:
        params["betas"] = [FALLBACK_BETA]
        params["fallbacks"] = "default"
    return params


def _disable_fallbacks_if_rejected(err: anthropic.BadRequestError) -> bool:
    """Some accounts or models reject the fallbacks beta; drop it once and retry."""
    global _fallbacks_supported
    if _fallbacks_supported and "fallback" in str(err).lower():
        log.warning("fallbacks rejected by the API; continuing without them: %s", err)
        _fallbacks_supported = False
        return True
    return False


def _check_stop(message: Any) -> None:
    if message.stop_reason == "refusal":
        raise AgentError("The model declined this request. Try rephrasing the domain or prompt.")
    if message.stop_reason == "max_tokens":
        raise AgentError("The proposal ran past the output limit. Try a narrower domain.")


def _text_of(message: Any) -> str:
    return "".join(b.text for b in message.content if b.type == "text")


def _translate(err: anthropic.APIError) -> AgentError:
    if isinstance(err, anthropic.AuthenticationError):
        return AgentError("The Claude API key is missing or invalid. Set ANTHROPIC_API_KEY in backend/.env.")
    if isinstance(err, anthropic.PermissionDeniedError):
        return AgentError("This API key cannot use the configured model. Check EVOLVE_MODEL in backend/.env.")
    if isinstance(err, anthropic.NotFoundError):
        return AgentError(f"Model '{settings.model}' was not found. Check EVOLVE_MODEL in backend/.env.")
    if isinstance(err, anthropic.RateLimitError):
        return AgentError("Claude is rate-limited right now. Wait a minute and try again.")
    if isinstance(err, anthropic.APIConnectionError):
        return AgentError("Could not reach the Claude API. Check the server's internet connection.")
    if isinstance(err, anthropic.APIStatusError) and err.status_code >= 500:
        return AgentError("Claude had a temporary server error. Try again shortly.")
    return AgentError(f"Claude API error: {getattr(err, 'message', str(err))}")


def _brief_context(req: QuestionsRequest) -> str:
    lines = [f"Domain: {req.domain.strip()}", audience_line(req.audience, req.audienceDetail)]
    if req.prompt.strip():
        lines.append(f"User's brief: {req.prompt.strip()}")
    return "\n".join(lines)


# ---- 1. intake questions --------------------------------------------------


async def ask_questions(req: QuestionsRequest) -> QuestionSet:
    for _ in range(2):
        try:
            message = await client().beta.messages.create(
                **_request(
                    max_tokens=16000,
                    system=QUESTIONS_SYSTEM,
                    output_config={
                        "effort": settings.questions_effort,
                        "format": {"type": "json_schema", "schema": QUESTION_SCHEMA},
                    },
                    messages=[{"role": "user", "content": _brief_context(req)}],
                )
            )
            break
        except anthropic.BadRequestError as err:
            if not _disable_fallbacks_if_rejected(err):
                raise _translate(err) from err
        except anthropic.APIError as err:
            raise _translate(err) from err
    _check_stop(message)
    return QuestionSet.model_validate_json(_text_of(message))


# ---- 2 + 3. research, then draft -----------------------------------------


async def _research(req: GenerateRequest) -> AsyncIterator[dict[str, Any]]:
    """Web research pass. Yields status events, then {"type": "notes", "text": ...}."""
    messages: list[dict[str, Any]] = [{"role": "user", "content": _brief_context(req)}]
    notes: list[str] = []
    for _ in range(MAX_PAUSE_CONTINUATIONS):
        async with client().beta.messages.stream(
            **_request(
                max_tokens=32000,
                system=RESEARCH_SYSTEM,
                tools=[WEB_SEARCH_TOOL],
                output_config={"effort": "low"},
                messages=messages,
            )
        ) as stream:
            async for event in stream:
                if event.type == "content_block_stop":
                    block = getattr(event, "content_block", None)
                    if block is not None and block.type == "server_tool_use":
                        query = (block.input or {}).get("query", "")
                        if query:
                            yield {"type": "status", "message": f"Searching: {query}"}
            final = await stream.get_final_message()
        notes.append(_text_of(final))
        if final.stop_reason != "pause_turn":
            break
        messages = [*messages, {"role": "assistant", "content": final.content}]
    yield {"type": "notes", "text": "\n".join(n for n in notes if n).strip()}


def _draft_prompt(req: GenerateRequest, notes: str) -> str:
    parts = [_brief_context(req)]
    answered = [a for a in req.answers if a.answer.strip()]
    if answered:
        parts.append("Answers from the user:\n" + "\n".join(f"- {a.question} → {a.answer.strip()}" for a in answered))
    if notes:
        parts.append(f"Research notes (current, sourced — prefer these figures):\n{notes}")
    parts.append("Write the complete proposal now.")
    return "\n\n".join(parts)


async def _draft(req: GenerateRequest, notes: str) -> AsyncIterator[dict[str, Any]]:
    """Streams the structured draft. Yields section/progress events, then the draft."""
    seen: set[str] = set()
    tail = ""
    chars = 0
    next_progress = 1500
    async with client().beta.messages.stream(
        **_request(
            max_tokens=64000,
            system=PROPOSAL_SYSTEM,
            output_config={
                "effort": settings.effort,
                "format": {"type": "json_schema", "schema": PROPOSAL_SCHEMA},
            },
            messages=[{"role": "user", "content": _draft_prompt(req, notes)}],
        )
    ) as stream:
        async for event in stream:
            if event.type != "content_block_delta" or event.delta.type != "text_delta":
                continue
            delta = event.delta.text
            chars += len(delta)
            window = tail + delta
            for key, label in SECTIONS:
                if key not in seen and f'"{key}"' in window:
                    seen.add(key)
                    yield {"type": "section", "key": key, "label": label}
            tail = window[-40:]
            if chars >= next_progress:
                next_progress += 1500
                yield {"type": "progress", "chars": chars}
        final = await stream.get_final_message()
    _check_stop(final)
    try:
        draft = ProposalDraft.model_validate(json.loads(_text_of(final)))
    except (json.JSONDecodeError, ValueError) as err:
        raise AgentError("The draft came back malformed. Please try again.") from err
    yield {"type": "draft", "draft": _finalise(draft, req)}


def _finalise(draft: ProposalDraft, req: GenerateRequest) -> ProposalDraft:
    label = AUDIENCES[req.audience]["label"]
    if req.audience == "custom" and req.audienceDetail.strip():
        label = f"{req.audienceDetail.strip()[:60]} edition"
    for brief in draft.briefs[:1]:
        brief.audience = req.audience
        brief.label = label
    draft.briefs = draft.briefs[:1]
    return draft


async def generate_events(req: GenerateRequest) -> AsyncIterator[dict[str, Any]]:
    """The full pipeline as a stream of UI events. Raises AgentError on failure."""
    do_research = settings.research if req.research is None else req.research
    for attempt in range(2):
        try:
            notes = ""
            if do_research:
                yield {"type": "status", "message": "Researching current schemes and figures"}
                try:
                    async for event in _research(req):
                        if event["type"] == "notes":
                            notes = event["text"]
                        else:
                            yield event
                except anthropic.BadRequestError as err:
                    if "fallback" in str(err).lower():
                        raise
                    # Web search may be disabled for this org; draft without it.
                    log.warning("research skipped: %s", err)
                    yield {"type": "status", "message": "Live research unavailable — drafting from model knowledge"}
            yield {"type": "status", "message": "Drafting the proposal"}
            async for event in _draft(req, notes):
                yield event
            return
        except anthropic.BadRequestError as err:
            if attempt == 0 and _disable_fallbacks_if_rejected(err):
                continue
            raise _translate(err) from err
        except anthropic.APIError as err:
            raise _translate(err) from err
