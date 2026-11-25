import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Loader2,
  RotateCcw,
  Sparkles,
  Trash2,
} from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteNav";
import { ProposalView } from "@/components/proposal/ProposalView";
import { editionIcon } from "@/components/proposal/DownloadMenu";
import { api, ApiError, type GeneratedSummary, type Health, type QuestionSet } from "@/lib/api";
import { audienceMeta, proposals, type AudienceId, type Proposal } from "@/lib/proposals";

export const Route = createFileRoute("/studio")({
  validateSearch: (s: Record<string, unknown>): { id?: string } =>
    typeof s["id"] === "string" ? { id: s["id"] } : {},
  head: () => ({
    meta: [
      { title: "Studio — Evolve AI" },
      {
        name: "description",
        content:
          "Name any domain. Evolve AI asks who you're presenting to, then writes a complete AI proposal live.",
      },
      { property: "og:title", content: "Studio — Evolve AI" },
      {
        property: "og:description",
        content: "An agent that writes AI proposals for any domain, for any audience.",
      },
    ],
  }),
  component: Page,
});

type Step = "domain" | "audience" | "questions" | "generating" | "result";

const SUGGESTIONS = [
  "Tourism & Heritage",
  "Fisheries & Blue Economy",
  "Mining & Minerals",
  "Cybersecurity for State Data Centres",
  "Forests & Wildlife",
  "Animal Husbandry & Dairy",
  "Public Finance & GST",
  "Sports & Youth Affairs",
];

const SECTION_ORDER = [
  "Framing the opportunity",
  "Sizing the problem",
  "Aligning with national missions",
  "Designing six AI solutions",
  "Architecting the centralized system",
  "Planning the rollout",
  "Costing the programme",
  "Setting KPIs",
  "Mapping risks",
  "Writing the audience brief",
];

function Page() {
  const { id } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const [health, setHealth] = useState<Health | null | "offline">(null);
  const [history, setHistory] = useState<GeneratedSummary[]>([]);
  const [step, setStep] = useState<Step>("domain");
  const [domain, setDomain] = useState("");
  const [prompt, setPrompt] = useState("");
  const [audience, setAudience] = useState<AudienceId | null>(null);
  const [audienceDetail, setAudienceDetail] = useState("");
  const [qs, setQs] = useState<QuestionSet | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const [sections, setSections] = useState<string[]>([]);
  const [chars, setChars] = useState(0);
  const [result, setResult] = useState<Proposal | null>(null);
  const abort = useRef<AbortController | null>(null);

  useEffect(() => {
    api
      .health()
      .then(setHealth)
      .catch(() => setHealth("offline"));
    api
      .list()
      .then(setHistory)
      .catch(() => {});
  }, []);

  // Deep link: /studio?id=… opens a saved proposal. Runs only when the id changes,
  // so clearing the result ("Start a new proposal") doesn't reload the old one.
  const shownId = useRef<string | null>(null);
  shownId.current = result?.id ?? null;
  useEffect(() => {
    if (!id || shownId.current === id) return;
    setLoading(true);
    api
      .get(id)
      .then((p) => {
        setResult(p);
        setStep("result");
      })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, [id]);

  const online = health !== null && health !== "offline";
  const ready = online && health.aiReady;
  const brief = {
    domain: domain.trim(),
    audience: audience ?? "bureaucrat",
    audienceDetail: audienceDetail.trim(),
    prompt: prompt.trim(),
  };

  async function fetchQuestions() {
    setError(null);
    setLoading(true);
    try {
      const set = await api.questions(brief);
      setQs(set);
      setAnswers({});
      setStep("questions");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }

  async function generate() {
    setError(null);
    setLog([]);
    setSections([]);
    setChars(0);
    setStep("generating");
    window.scrollTo({ top: 0, behavior: "smooth" });
    const ctrl = new AbortController();
    abort.current = ctrl;
    try {
      const proposal = await api.generate(
        {
          ...brief,
          answers: (qs?.questions ?? []).map((q) => ({
            question: q.question,
            answer: answers[q.id] ?? "",
          })),
        },
        (e) => {
          if (e.type === "status") setLog((l) => [...l, e.message]);
          if (e.type === "section") setSections((s) => [...s, e.label]);
          if (e.type === "progress") setChars(e.chars);
        },
        ctrl.signal,
      );
      setResult(proposal);
      setStep("result");
      setHistory((h) => [
        {
          id: proposal.id,
          sector: proposal.sector,
          title: proposal.title,
          audience: proposal.briefs[0]?.label ?? "",
          generatedAt: proposal.generatedAt ?? "",
        },
        ...h,
      ]);
      void navigate({ search: { id: proposal.id }, replace: true });
      window.scrollTo({ top: 0 });
    } catch (e) {
      if (ctrl.signal.aborted) {
        setStep("questions");
        return;
      }
      setError(e instanceof ApiError || e instanceof Error ? e.message : String(e));
      setStep("questions");
    } finally {
      abort.current = null;
    }
  }

  function reset() {
    abort.current?.abort();
    setStep("domain");
    setDomain("");
    setPrompt("");
    setAudience(null);
    setAudienceDetail("");
    setQs(null);
    setAnswers({});
    setResult(null);
    setError(null);
    void navigate({ search: {}, replace: true });
  }

  async function removeSaved(sid: string) {
    try {
      await api.remove(sid);
      setHistory((h) => h.filter((x) => x.id !== sid));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  if (step === "result" && result) {
    return (
      <div>
        <SiteNav sticky={false} />
        <div className="bg-paper-2">
          <div className="section-wide flex flex-col items-start justify-between gap-3 py-3 type-caption text-ink-2 md:flex-row md:items-center">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue" />
              Written live by Evolve AI
              {result.generatedAt
                ? ` on ${new Date(result.generatedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}`
                : ""}
              . Review figures before you submit.
            </span>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 text-link hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Start a new proposal
            </button>
          </div>
        </div>
        <ProposalView
          key={result.id}
          proposal={result}
          initialView={result.briefs[0]?.audience ?? "overview"}
        />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-2">
      <SiteNav />
      <main className="mx-auto w-[89.33%] max-w-[760px] pb-24 pt-14 md:pt-20">
        <header className="text-center">
          <AgentStatus health={health} />
          <h1 className="type-headline mt-5">Studio.</h1>
          <p className="type-intro mx-auto mt-3 max-w-[560px] text-ink-2">
            Name a domain. Evolve AI asks what it needs, then writes the whole proposal live.
          </p>
          <Stepper step={step} />
        </header>

        {error ? (
          <div
            className="mt-8 rounded-[18px] border border-destructive/30 bg-white p-5 text-[15px] text-destructive"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        {step === "domain" && (
          <Panel>
            <label htmlFor="domain" className="type-card-title block">
              What should the proposal cover?
            </label>
            <input
              id="domain"
              autoFocus
              className="field mt-5 !text-[21px]"
              placeholder="e.g. Tourism in Rajasthan"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && domain.trim().length > 1) setStep("audience");
              }}
              maxLength={200}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="chip !py-1.5 !text-[13px]"
                  data-active={domain === s}
                  onClick={() => setDomain(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <label htmlFor="prompt" className="mt-8 block text-[15px] font-semibold">
              Anything else the agent should know?{" "}
              <span className="font-normal text-ink-3">Optional</span>
            </label>
            <textarea
              id="prompt"
              rows={3}
              className="field mt-2"
              placeholder="e.g. Focus on homestays and heritage circuits. The state wants to double foreign tourists by 2030."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              maxLength={4000}
            />
            <div className="mt-8 flex items-center justify-between">
              <Link to="/proposals" className="type-caption text-link hover:underline">
                Or start from the 15 ready proposals
              </Link>
              <button
                className="btn-primary"
                disabled={domain.trim().length < 2}
                onClick={() => setStep("audience")}
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Panel>
        )}

        {step === "audience" && (
          <Panel>
            <p className="type-caption text-ink-2">{domain}</p>
            <h2 className="type-card-title mt-1">Who will you present to?</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(Object.keys(audienceMeta) as AudienceId[]).map((a) => {
                const Icon = editionIcon(a);
                const m = audienceMeta[a];
                return (
                  <button
                    key={a}
                    onClick={() => setAudience(a)}
                    data-active={audience === a}
                    className="rounded-[14px] border border-hairline bg-white p-5 text-left transition-colors hover:border-ink-3 data-[active=true]:border-blue data-[active=true]:shadow-[0_0_0_1px_var(--blue)]"
                  >
                    <Icon className="h-5 w-5 text-blue" />
                    <p className="mt-3 text-[17px] font-semibold">{m.label}</p>
                    <p className="type-micro mt-0.5 text-ink-3">{m.who}</p>
                    <p className="type-caption mt-2 text-ink-2">{m.focus}</p>
                  </button>
                );
              })}
            </div>
            {audience && (
              <div className="mt-6">
                <label htmlFor="who" className="text-[15px] font-semibold">
                  {audience === "custom" ? "Describe your audience" : "Name the office"}{" "}
                  <span className="font-normal text-ink-3">
                    {audience === "custom" ? "" : "Optional"}
                  </span>
                </label>
                <input
                  id="who"
                  className="field mt-2"
                  placeholder={
                    audience === "custom"
                      ? "e.g. Chief Secretary, Government of Odisha"
                      : `e.g. ${audienceMeta[audience].who.split(",")[0]}, Government of Rajasthan`
                  }
                  value={audienceDetail}
                  onChange={(e) => setAudienceDetail(e.target.value)}
                  maxLength={300}
                />
              </div>
            )}
            <Footer back={() => setStep("domain")}>
              <button
                className="btn-primary"
                disabled={
                  !audience ||
                  (audience === "custom" && !audienceDetail.trim()) ||
                  loading ||
                  !ready
                }
                onClick={() => void fetchQuestions()}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {loading ? "Preparing questions" : "Continue"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </Footer>
            {!ready && health !== null ? <BackendHint health={health} /> : null}
          </Panel>
        )}

        {step === "questions" && qs && (
          <Panel>
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="rounded-[18px] rounded-tl-md bg-paper-2 px-5 py-3.5">
                <p className="text-[15px] font-semibold">
                  {qs.sector} · {audienceMeta[brief.audience].label}
                </p>
                <p className="mt-0.5 text-[15px] text-ink-2">{qs.intro}</p>
              </div>
            </div>
            <div className="mt-8 space-y-8">
              {qs.questions.map((q, i) => (
                <div key={q.id}>
                  <label htmlFor={`q-${q.id}`} className="block text-[17px] font-semibold">
                    <span className="mr-2 text-blue">{i + 1}.</span>
                    {q.question}
                  </label>
                  <p className="type-caption mt-1 text-ink-3">{q.hint}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {q.options.map((o) => (
                      <button
                        key={o}
                        className="chip !py-1.5 !text-[13px]"
                        data-active={answers[q.id] === o}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: o }))}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                  <input
                    id={`q-${q.id}`}
                    className="field mt-3 !py-3 !text-[15px]"
                    placeholder="Or type your own answer"
                    value={answers[q.id] ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                    maxLength={2000}
                  />
                </div>
              ))}
            </div>
            <Footer back={() => setStep("audience")}>
              <button className="btn-primary" disabled={!ready} onClick={() => void generate()}>
                <Sparkles className="h-4 w-4" /> Write the proposal
              </button>
            </Footer>
          </Panel>
        )}

        {step === "generating" && (
          <Panel>
            <div className="flex items-center gap-3">
              <Loader2 className="h-5 w-5 animate-spin text-blue" />
              <h2 className="type-card-title">Writing your {domain} proposal</h2>
            </div>
            <p className="type-caption mt-2 text-ink-2">
              For the {audienceMeta[brief.audience].label.toLowerCase()} audience. This usually
              takes one to three minutes.
            </p>
            <ul className="mt-8 space-y-2.5">
              {SECTION_ORDER.map((label) => {
                const done = sections.includes(label);
                const active =
                  !done && sections.length > 0 && SECTION_ORDER[sections.length] === label;
                return (
                  <li
                    key={label}
                    className={`flex items-center gap-3 text-[15px] transition-colors ${done ? "text-ink" : active ? "text-ink" : "text-ink-3"}`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${done ? "bg-blue text-white" : "border border-hairline"}`}
                    >
                      {done ? (
                        <Check className="h-3 w-3" />
                      ) : active ? (
                        <Loader2 className="h-3 w-3 animate-spin text-blue" />
                      ) : null}
                    </span>
                    {label}
                  </li>
                );
              })}
            </ul>
            <div
              className="mt-8 max-h-40 overflow-y-auto rounded-[14px] bg-paper-2 p-4 font-mono text-[12px] leading-relaxed text-ink-2"
              aria-live="polite"
            >
              {log.length === 0 ? (
                <p>Connecting to the agent…</p>
              ) : (
                log.map((l, i) => <p key={i}>› {l}</p>)
              )}
              {chars > 0 ? <p>› {chars.toLocaleString("en-IN")} characters written</p> : null}
            </div>
            <div className="mt-6 text-right">
              <button
                className="type-caption text-link hover:underline"
                onClick={() => abort.current?.abort()}
              >
                Cancel
              </button>
            </div>
          </Panel>
        )}

        {loading && step === "domain" && id ? (
          <p className="mt-8 text-center text-ink-2">
            <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
            Opening saved proposal…
          </p>
        ) : null}

        {history.length > 0 && step !== "generating" && (
          <section className="mt-16">
            <h2 className="type-caption font-semibold text-ink-2">Recently written in Studio</h2>
            <ul className="mt-3 divide-y divide-hairline overflow-hidden rounded-[18px] bg-white">
              {history.slice(0, 8).map((h) => (
                <li key={h.id} className="flex items-center gap-3 px-5 py-4">
                  <Link to="/studio" search={{ id: h.id }} className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-semibold">
                      {h.sector} <span className="font-normal text-ink-3">· {h.audience}</span>
                    </p>
                    <p className="truncate type-caption text-ink-2">{h.title}</p>
                  </Link>
                  <button
                    aria-label={`Delete ${h.sector}`}
                    className="p-1 text-ink-3 hover:text-destructive"
                    onClick={() => void removeSaved(h.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <ChevronRight className="h-4 w-4 text-ink-3" />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16">
          <h2 className="type-caption font-semibold text-ink-2">Ready-made proposals</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {proposals.map((p) => (
              <Link
                key={p.id}
                to="/proposals/$sectorId"
                params={{ sectorId: p.id }}
                className="chip !py-1.5 !text-[13px]"
              >
                {p.sector}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <section
      className="reveal mt-10 rounded-[28px] bg-white p-7 shadow-[2px_4px_12px_rgb(0_0_0/0.08)] md:p-10"
      style={{ animationDuration: "0.5s" }}
    >
      {children}
    </section>
  );
}

function Footer({ back, children }: { back: () => void; children: ReactNode }) {
  return (
    <div className="mt-10 flex items-center justify-between">
      <button
        onClick={back}
        className="inline-flex items-center gap-1 type-caption text-link hover:underline"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back
      </button>
      {children}
    </div>
  );
}

const STEPS: { id: Step; label: string }[] = [
  { id: "domain", label: "Domain" },
  { id: "audience", label: "Audience" },
  { id: "questions", label: "Questions" },
  { id: "generating", label: "Write" },
];

function Stepper({ step }: { step: Step }) {
  const at = STEPS.findIndex((s) => s.id === step);
  return (
    <ol className="mt-8 flex items-center justify-center gap-2 type-micro">
      {STEPS.map((s, i) => (
        <li key={s.id} className="flex items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 ${i === at ? "bg-ink text-white" : i < at ? "text-ink" : "text-ink-3"}`}
          >
            {s.label}
          </span>
          {i < STEPS.length - 1 && <span className="h-px w-4 bg-hairline" />}
        </li>
      ))}
    </ol>
  );
}

function AgentStatus({ health }: { health: Health | null | "offline" }) {
  if (health === null) return <span className="type-micro text-ink-3">Checking agent…</span>;
  const [dot, text] =
    health === "offline"
      ? ["bg-[#ff3b30]", "Agent offline"]
      : health.aiReady
        ? [
            "bg-[#34c759]",
            `Agent online · ${health.model}${health.research ? " · live research" : ""}`,
          ]
        : ["bg-[#ff9f0a]", "Agent needs an API key"];
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 type-micro text-ink-2 shadow-[0_1px_3px_rgb(0_0_0/0.08)]">
      <span className={`h-2 w-2 rounded-full ${dot}`} /> {text}
    </span>
  );
}

function BackendHint({ health }: { health: Health | "offline" }) {
  return (
    <div className="mt-6 rounded-[14px] bg-paper-2 p-4 type-caption text-ink-2">
      {health === "offline" ? (
        <>
          Start the backend to use the agent:{" "}
          <code className="font-mono text-ink">
            cd backend && .venv/bin/uvicorn app.main:app --port 8000
          </code>
        </>
      ) : (
        <>
          Add <code className="font-mono text-ink">ANTHROPIC_API_KEY</code> to{" "}
          <code className="font-mono text-ink">backend/.env</code> and restart the backend.
        </>
      )}
    </div>
  );
}
