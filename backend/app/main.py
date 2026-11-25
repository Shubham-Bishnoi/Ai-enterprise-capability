"""Evolve AI backend — FastAPI orchestration between the website and Claude.

Run:  uvicorn app.main:app --reload --port 8000   (from the backend/ directory)
"""

from __future__ import annotations

import json
import logging
from collections.abc import AsyncIterator
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse

from . import agent, store
from .config import settings
from .prompts import AUDIENCES
from .schema import GenerateRequest, Proposal, QuestionSet, QuestionsRequest

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
log = logging.getLogger("evolve.api")

app = FastAPI(title="Evolve AI Proposal API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(settings.cors_origins),
    # Any localhost port during development, unless CORS_ORIGINS pins the list.
    allow_origin_regex=None if settings.cors_origins else r"https?://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_methods=["GET", "POST", "DELETE"],
    allow_headers=["*"],
)


def _require_ai() -> None:
    if not settings.ai_ready:
        raise HTTPException(503, "The Claude API key is not configured. Add ANTHROPIC_API_KEY to backend/.env and restart.")


@app.get("/api/health")
async def health() -> dict[str, Any]:
    return {"status": "ok", "aiReady": settings.ai_ready, "model": settings.model, "research": settings.research}


@app.get("/api/audiences")
async def audiences() -> list[dict[str, str]]:
    return [{"id": k, "label": v["label"], "who": v["who"]} for k, v in AUDIENCES.items()]


@app.post("/api/agent/questions", response_model=QuestionSet)
async def questions(req: QuestionsRequest) -> QuestionSet:
    _require_ai()
    try:
        return await agent.ask_questions(req)
    except agent.AgentError as err:
        raise HTTPException(502, str(err)) from err


def _sse(event: dict[str, Any]) -> str:
    return f"event: {event['type']}\ndata: {json.dumps(event, ensure_ascii=False)}\n\n"


@app.post("/api/proposals/generate")
async def generate(req: GenerateRequest) -> StreamingResponse:
    """Server-sent events: status | section | progress | done | error."""
    _require_ai()

    async def events() -> AsyncIterator[str]:
        try:
            async for event in agent.generate_events(req):
                if event["type"] == "draft":
                    proposal = store.save(event["draft"])
                    yield _sse({"type": "done", "proposal": proposal.model_dump()})
                else:
                    yield _sse(event)
        except agent.AgentError as err:
            yield _sse({"type": "error", "message": str(err)})
        except Exception:  # noqa: BLE001 — the stream must always end with an event
            log.exception("generation failed")
            yield _sse({"type": "error", "message": "Something went wrong while writing the proposal."})

    return StreamingResponse(
        events(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@app.get("/api/proposals")
async def list_proposals() -> list[dict[str, str]]:
    return store.summaries()


@app.get("/api/proposals/{proposal_id}", response_model=Proposal)
async def get_proposal(proposal_id: str) -> Proposal:
    proposal = store.load(proposal_id)
    if proposal is None:
        raise HTTPException(404, "Proposal not found.")
    return proposal


@app.delete("/api/proposals/{proposal_id}", status_code=204)
async def delete_proposal(proposal_id: str) -> None:
    if not store.delete(proposal_id):
        raise HTTPException(404, "Proposal not found.")
