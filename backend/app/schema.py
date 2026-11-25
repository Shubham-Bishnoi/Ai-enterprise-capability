"""Pydantic mirror of src/lib/proposals/types.ts.

Every field is required so the JSON schema handed to Claude's structured output
is strict; optional values (sources, notes) come back as empty strings.
"""

from __future__ import annotations

import copy
from typing import Any, Literal

from pydantic import BaseModel, Field

AudienceId = Literal[
    "bureaucrat", "minister", "district-collector", "psu-board", "csr-partner", "custom"
]


class Stat(BaseModel):
    value: str
    label: str
    source: str


class Scheme(BaseModel):
    name: str
    ministry: str
    note: str


class Solution(BaseModel):
    name: str
    description: str
    impact: str


class SystemLayer(BaseModel):
    name: str
    items: list[str]


class CentralSystem(BaseModel):
    name: str
    description: str
    layers: list[SystemLayer]
    dataSources: list[str]
    integrations: list[str]


class Phase(BaseModel):
    phase: str
    duration: str
    milestones: list[str]


class BudgetLine(BaseModel):
    head: str
    amount: str
    note: str


class Budget(BaseModel):
    total: str
    items: list[BudgetLine]
    note: str


class Kpi(BaseModel):
    metric: str
    target: str


class Risk(BaseModel):
    risk: str
    mitigation: str


class BriefSection(BaseModel):
    heading: str
    body: str
    bullets: list[str]


class AudienceBrief(BaseModel):
    audience: str
    label: str
    addressee: str
    headline: str
    ask: str
    keyPoints: list[str]
    sections: list[BriefSection]
    nextSteps: list[str]


class Context(BaseModel):
    stats: list[Stat]
    challenges: list[str]


class ProposalDraft(BaseModel):
    """What Claude writes. The server adds id, category and generatedAt."""

    sector: str
    title: str
    tagline: str
    summary: str
    heroStat: Stat
    context: Context
    policyAlignment: list[Scheme]
    solutions: list[Solution]
    centralSystem: CentralSystem
    roadmap: list[Phase]
    budget: Budget
    kpis: list[Kpi]
    risks: list[Risk]
    briefs: list[AudienceBrief]


class Proposal(ProposalDraft):
    id: str
    category: Literal["custom"] = "custom"
    generatedAt: str


class Question(BaseModel):
    id: str
    question: str
    hint: str
    options: list[str]


class QuestionSet(BaseModel):
    sector: str
    intro: str
    questions: list[Question]


# ---- request bodies -------------------------------------------------------


class QuestionsRequest(BaseModel):
    domain: str = Field(min_length=2, max_length=200)
    audience: AudienceId
    audienceDetail: str = Field(default="", max_length=300)
    prompt: str = Field(default="", max_length=4000)


class Answer(BaseModel):
    question: str = Field(max_length=500)
    answer: str = Field(max_length=2000)


class GenerateRequest(QuestionsRequest):
    answers: list[Answer] = Field(default_factory=list, max_length=12)
    research: bool | None = None  # None → server default


# ---- JSON schema for structured outputs -----------------------------------


def strict_schema(model: type[BaseModel]) -> dict[str, Any]:
    """Inline $defs and close every object, as structured outputs expects."""
    raw = model.model_json_schema()
    defs = raw.pop("$defs", {})

    def resolve(node: Any) -> Any:
        if isinstance(node, dict):
            if "$ref" in node:
                return resolve(copy.deepcopy(defs[node["$ref"].split("/")[-1]]))
            props = node.get("properties")
            node = {k: resolve(v) for k, v in node.items() if k not in ("title", "default", "properties")}
            if props is not None:
                # Keys here are field names (one is literally "title"), not schema metadata.
                node["properties"] = {name: resolve(sub) for name, sub in props.items()}
            if node.get("type") == "object":
                node["additionalProperties"] = False
                node["required"] = list(node.get("properties", {}).keys())
            return node
        if isinstance(node, list):
            return [resolve(v) for v in node]
        return node

    return resolve(raw)
