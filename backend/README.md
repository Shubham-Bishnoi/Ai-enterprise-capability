# Evolve AI — Proposal backend

FastAPI service behind **Studio** (`/studio` on the website). It runs the proposal agent on Claude:

1. **Intake** — `POST /api/agent/questions` takes a domain and an audience and returns 4–6 tailored questions.
2. **Research** — live web search for current schemes, outlays and statistics (switch off with `EVOLVE_RESEARCH=false`).
3. **Draft** — a structured proposal in exactly the same shape as the 15 ready-made ones (`src/lib/proposals/types.ts`), so the website renders it and exports the same PDFs.

`POST /api/proposals/generate` streams the pipeline as server-sent events (`status`, `section`, `progress`, `done`, `error`), and each finished proposal is saved under `data/generated/`.

## Run

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
cp .env.example .env          # then set ANTHROPIC_API_KEY
.venv/bin/uvicorn app.main:app --reload --port 8000
```

The website calls `http://localhost:8000` by default. To point it elsewhere, set `VITE_API_URL` for the frontend.

## Configuration (`backend/.env`)

| Variable | Default | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | — | Required for Studio. |
| `EVOLVE_MODEL` | `claude-opus-5-5` | Claude model used for every step. |
| `EVOLVE_EFFORT` | `medium` | Effort for the full draft (`low` … `max`). |
| `EVOLVE_QUESTIONS_EFFORT` | `low` | Effort for the intake questions. |
| `EVOLVE_RESEARCH` | `true` | Live web research before drafting. |
| `EVOLVE_FALLBACKS` | `true` | Server-side refusal fallbacks (beta); turned off automatically if your account rejects them. |
| `CORS_ORIGINS` | any localhost port | Comma-separated origins allowed in production. |

## API

| Method | Path | |
| --- | --- | --- |
| GET | `/api/health` | `aiReady`, `model`, `research` |
| GET | `/api/audiences` | Audience playbooks (Bureaucrat, Minister, District Collector, PSU Board, CSR partner, custom) |
| POST | `/api/agent/questions` | `{domain, audience, audienceDetail?, prompt?}` → questions |
| POST | `/api/proposals/generate` | the above + `answers[]` → SSE stream |
| GET | `/api/proposals` | Saved proposals, newest first |
| GET / DELETE | `/api/proposals/{id}` | One saved proposal |

## Tests

```bash
.venv/bin/python -m pytest -q
```

The tests stub out Claude, so they need no key or network access.
