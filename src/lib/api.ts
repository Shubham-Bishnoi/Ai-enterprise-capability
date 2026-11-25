// Client for the FastAPI backend in /backend.
import type { AudienceId, Proposal } from "@/lib/proposals/types";

export const API_URL =
  (import.meta.env["VITE_API_URL"] as string | undefined)?.replace(/\/$/, "") ??
  "http://localhost:8000";

export interface Health {
  status: string;
  aiReady: boolean;
  model: string;
  research: boolean;
}

export interface AgentQuestion {
  id: string;
  question: string;
  hint: string;
  options: string[];
}

export interface QuestionSet {
  sector: string;
  intro: string;
  questions: AgentQuestion[];
}

export interface Brief {
  domain: string;
  audience: AudienceId;
  audienceDetail: string;
  prompt: string;
}

export interface GeneratedSummary {
  id: string;
  sector: string;
  title: string;
  audience: string;
  generatedAt: string;
}

export type GenerateEvent =
  | { type: "status"; message: string }
  | { type: "section"; key: string; label: string }
  | { type: "progress"; chars: number }
  | { type: "done"; proposal: Proposal }
  | { type: "error"; message: string };

export class ApiError extends Error {}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new ApiError(
      `Can't reach the Evolve AI backend at ${API_URL}. Start it with: cd backend && uvicorn app.main:app --port 8000`,
    );
  }
  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { detail?: unknown } | null;
    const detail =
      typeof body?.detail === "string" ? body.detail : `Request failed (${res.status}).`;
    throw new ApiError(detail);
  }
  return (res.status === 204 ? undefined : await res.json()) as T;
}

export const api = {
  health: () => request<Health>("/api/health"),
  questions: (brief: Brief) =>
    request<QuestionSet>("/api/agent/questions", { method: "POST", body: JSON.stringify(brief) }),
  list: () => request<GeneratedSummary[]>("/api/proposals"),
  get: (id: string) => request<Proposal>(`/api/proposals/${encodeURIComponent(id)}`),
  remove: (id: string) =>
    request<void>(`/api/proposals/${encodeURIComponent(id)}`, { method: "DELETE" }),

  /** Streams the generation pipeline; resolves with the finished proposal. */
  async generate(
    body: Brief & { answers: { question: string; answer: string }[] },
    onEvent: (e: GenerateEvent) => void,
    signal?: AbortSignal,
  ): Promise<Proposal> {
    let res: Response;
    try {
      res = await fetch(`${API_URL}/api/proposals/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: signal ?? null,
      });
    } catch (err) {
      if (signal?.aborted) throw err;
      throw new ApiError(`Can't reach the Evolve AI backend at ${API_URL}.`);
    }
    if (!res.ok || !res.body) {
      const detail = ((await res.json().catch(() => null)) as { detail?: string } | null)?.detail;
      throw new ApiError(detail ?? `Generation failed (${res.status}).`);
    }

    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = "";
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += value;
      let split: number;
      while ((split = buffer.indexOf("\n\n")) !== -1) {
        const frame = buffer.slice(0, split);
        buffer = buffer.slice(split + 2);
        const data = frame.split("\n").find((l) => l.startsWith("data: "));
        if (!data) continue;
        const event = JSON.parse(data.slice(6)) as GenerateEvent;
        onEvent(event);
        if (event.type === "done") return event.proposal;
        if (event.type === "error") throw new ApiError(event.message);
      }
    }
    throw new ApiError("The connection closed before the proposal was finished.");
  },
};
