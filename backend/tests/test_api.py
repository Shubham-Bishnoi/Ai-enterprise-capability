"""API tests with Claude stubbed out — no network or key needed."""

import json
from dataclasses import replace

import pytest
from fastapi.testclient import TestClient

from app import agent, config, main, store
from app.schema import ProposalDraft, strict_schema

DRAFT = {
    "sector": "Tourism & Heritage",
    "title": "India, discovered.",
    "tagline": "AI that brings every heritage site to life.",
    "summary": "A short summary.",
    "heroStat": {"value": "1", "label": "thing", "source": "Test"},
    "context": {"stats": [], "challenges": ["c"]},
    "policyAlignment": [{"name": "Swadesh Darshan 2.0", "ministry": "Ministry of Tourism", "note": "n"}],
    "solutions": [{"name": "Guide", "description": "d", "impact": "i"}],
    "centralSystem": {
        "name": "Paryatan AI Command Centre",
        "description": "d",
        "layers": [{"name": "AI services", "items": ["a"]}],
        "dataSources": ["s"],
        "integrations": ["UMANG"],
    },
    "roadmap": [{"phase": "Pilot", "duration": "0–6 months", "milestones": ["m"]}],
    "budget": {"total": "₹50 crore", "items": [{"head": "h", "amount": "₹1 crore", "note": ""}], "note": "Indicative"},
    "kpis": [{"metric": "m", "target": "t"}],
    "risks": [{"risk": "r", "mitigation": "m"}],
    "briefs": [{
        "audience": "x", "label": "x", "addressee": "Secretary, Tourism", "headline": "h", "ask": "a",
        "keyPoints": ["k"], "sections": [{"heading": "h", "body": "b", "bullets": []}], "nextSteps": ["n"],
    }],
}


@pytest.fixture
def client(tmp_path, monkeypatch):
    s = replace(config.settings, data_dir=tmp_path)
    for module in (config, main, store, agent):
        monkeypatch.setattr(module, "settings", s, raising=False)
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    return TestClient(main.app)


def parse_sse(text: str) -> list[dict]:
    return [json.loads(line[6:]) for line in text.splitlines() if line.startswith("data: ")]


def test_health(client):
    body = client.get("/api/health").json()
    assert body["status"] == "ok" and body["aiReady"] is True


def test_requires_key(client, monkeypatch):
    monkeypatch.delenv("ANTHROPIC_API_KEY")
    monkeypatch.delenv("ANTHROPIC_AUTH_TOKEN", raising=False)
    r = client.post("/api/agent/questions", json={"domain": "Tourism", "audience": "minister"})
    assert r.status_code == 503


def test_strict_schema_is_closed_and_inlined():
    schema = strict_schema(ProposalDraft)
    dumped = json.dumps(schema)
    assert "$ref" not in dumped and "$defs" not in dumped
    assert schema["additionalProperties"] is False
    assert set(schema["required"]) == set(ProposalDraft.model_fields)


def test_generate_streams_and_saves(client, monkeypatch):
    async def fake_events(req):
        yield {"type": "status", "message": "Drafting the proposal"}
        yield {"type": "section", "key": "solutions", "label": "Designing six AI solutions"}
        draft = agent._finalise(ProposalDraft.model_validate(DRAFT), req)
        yield {"type": "draft", "draft": draft}

    monkeypatch.setattr(agent, "generate_events", fake_events)
    r = client.post("/api/proposals/generate", json={"domain": "Tourism", "audience": "minister", "answers": []})
    events = parse_sse(r.text)
    assert [e["type"] for e in events] == ["status", "section", "done"]
    proposal = events[-1]["proposal"]
    assert proposal["category"] == "custom"
    assert proposal["briefs"][0]["audience"] == "minister"
    assert proposal["briefs"][0]["label"] == "Minister edition"

    listed = client.get("/api/proposals").json()
    assert listed[0]["id"] == proposal["id"]
    assert client.get(f"/api/proposals/{proposal['id']}").json()["title"] == "India, discovered."
    assert client.delete(f"/api/proposals/{proposal['id']}").status_code == 204
    assert client.get(f"/api/proposals/{proposal['id']}").status_code == 404


def test_generate_reports_agent_errors(client, monkeypatch):
    async def failing(req):
        yield {"type": "status", "message": "Drafting the proposal"}
        raise agent.AgentError("The Claude API key is missing or invalid.")

    monkeypatch.setattr(agent, "generate_events", failing)
    r = client.post("/api/proposals/generate", json={"domain": "Tourism", "audience": "bureaucrat"})
    assert parse_sse(r.text)[-1] == {"type": "error", "message": "The Claude API key is missing or invalid."}


def test_custom_audience_label():
    req = agent.GenerateRequest(domain="Mining", audience="custom", audienceDetail="Chief Secretary, Odisha")
    draft = agent._finalise(ProposalDraft.model_validate(DRAFT), req)
    assert draft.briefs[0].label == "Chief Secretary, Odisha edition"


def test_rejects_path_traversal(client):
    assert client.get("/api/proposals/..%2F..%2Fetc").status_code == 404
