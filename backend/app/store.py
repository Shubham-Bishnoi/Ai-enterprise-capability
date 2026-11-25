"""Generated proposals, one JSON file each under settings.data_dir."""

from __future__ import annotations

import re
import uuid
from datetime import datetime, timezone

from .config import settings
from .schema import Proposal, ProposalDraft

_ID = re.compile(r"^[a-z0-9-]{1,80}$")


def _slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:48] or "proposal"


def save(draft: ProposalDraft) -> Proposal:
    proposal = Proposal(
        **draft.model_dump(),
        id=f"{_slug(draft.sector)}-{uuid.uuid4().hex[:6]}",
        generatedAt=datetime.now(timezone.utc).isoformat(timespec="seconds"),
    )
    settings.data_dir.mkdir(parents=True, exist_ok=True)
    (settings.data_dir / f"{proposal.id}.json").write_text(proposal.model_dump_json(indent=2), encoding="utf-8")
    return proposal


def load(proposal_id: str) -> Proposal | None:
    if not _ID.match(proposal_id):
        return None
    path = settings.data_dir / f"{proposal_id}.json"
    if not path.is_file():
        return None
    return Proposal.model_validate_json(path.read_text(encoding="utf-8"))


def delete(proposal_id: str) -> bool:
    if not _ID.match(proposal_id):
        return False
    path = settings.data_dir / f"{proposal_id}.json"
    if not path.is_file():
        return False
    path.unlink()
    return True


def summaries() -> list[dict[str, str]]:
    if not settings.data_dir.is_dir():
        return []
    items = []
    for path in settings.data_dir.glob("*.json"):
        try:
            p = Proposal.model_validate_json(path.read_text(encoding="utf-8"))
        except ValueError:
            continue
        items.append({
            "id": p.id,
            "sector": p.sector,
            "title": p.title,
            "audience": p.briefs[0].label if p.briefs else "",
            "generatedAt": p.generatedAt,
        })
    return sorted(items, key=lambda i: i["generatedAt"], reverse=True)
