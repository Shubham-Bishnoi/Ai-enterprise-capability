import { useState } from "react";
import { ArrowDown, Check, ChevronRight, Database, Loader2, Plug } from "lucide-react";
import type { AudienceBrief, Proposal } from "@/lib/proposals/types";
import { LocalNav } from "@/components/SiteNav";
import { DownloadMenu, editionIcon, editionsFor, usePdfDownload } from "./DownloadMenu";

type View = "overview" | string; // or a brief's audience id

/** The complete proposal page — shared by the 15 sector pages and Studio output. */
export function ProposalView({
  proposal: p,
  initialView = "overview",
  onViewChange,
}: {
  proposal: Proposal;
  initialView?: View;
  onViewChange?: (view: View) => void;
}) {
  const [view, setView] = useState<View>(
    p.briefs.some((b) => b.audience === initialView) ? initialView : "overview",
  );
  const pdf = usePdfDownload(p);
  const brief = p.briefs.find((b) => b.audience === view);

  function choose(v: View) {
    setView(v);
    onViewChange?.(v);
    document.getElementById("audience")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <LocalNav title={p.sector}>
        <a href="#system" className="hidden type-micro text-ink/80 hover:text-ink md:inline">
          System
        </a>
        <a href="#roadmap" className="hidden type-micro text-ink/80 hover:text-ink md:inline">
          Roadmap
        </a>
        <a href="#download" className="hidden type-micro text-ink/80 hover:text-ink md:inline">
          Editions
        </a>
        <DownloadMenu proposal={p} pdf={pdf} />
      </LocalNav>

      {/* Hero */}
      <section className="pt-16 pb-14 text-center md:pt-24">
        <div className="section-x reveal">
          <p className="type-eyebrow text-ink-2">{p.sector}</p>
          <h1 className="type-hero mx-auto mt-3 max-w-[900px] text-balance">{p.title}</h1>
          <p className="type-intro mx-auto mt-5 max-w-[680px] text-ink-2 text-pretty">
            {p.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a href="#download" className="btn-primary">
              Download proposal
            </a>
            <button
              onClick={() => choose(p.briefs[0]?.audience ?? "overview")}
              className="link-apple inline-flex items-center"
            >
              Read the {p.briefs[0]?.label.replace(" edition", "").toLowerCase() ?? ""} brief{" "}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Hero stat */}
      <section className="section-wide">
        <div className="rounded-[28px] bg-night px-8 py-16 text-center text-white md:py-24">
          <p className="type-stat bg-gradient-to-r from-[#2997ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent md:text-[96px] md:leading-none">
            {p.heroStat.value}
          </p>
          <p className="type-intro mx-auto mt-4 max-w-[560px] text-[#a1a1a6]">{p.heroStat.label}</p>
          {p.heroStat.source ? (
            <p className="type-micro mt-3 text-[#6e6e73]">Source: {p.heroStat.source}</p>
          ) : null}
          <p className="type-intro mx-auto mt-10 max-w-[720px] text-[#f5f5f7]">{p.summary}</p>
        </div>
      </section>

      {/* Audience switch */}
      <section id="audience" className="scroll-mt-14 pt-20 text-center">
        <p className="type-caption text-ink-2">Who are you presenting to?</p>
        <div className="mt-3 segmented" role="tablist">
          <button
            role="tab"
            className="segment"
            data-active={view === "overview"}
            onClick={() => choose("overview")}
          >
            Overview
          </button>
          {p.briefs.map((b) => (
            <button
              key={b.audience}
              role="tab"
              className="segment"
              data-active={view === b.audience}
              onClick={() => choose(b.audience)}
            >
              {b.label.replace(" edition", "")}
            </button>
          ))}
        </div>
      </section>

      {brief ? <BriefPanel brief={brief} /> : <OverviewIntro p={p} onPick={choose} />}

      <Challenge p={p} />
      <Policy p={p} />
      <Solutions p={p} />
      <System p={p} />
      <Roadmap p={p} />
      <Investment p={p} />
      <Risks p={p} />
      <Editions p={p} pdf={pdf} />
    </div>
  );
}

function OverviewIntro({ p, onPick }: { p: Proposal; onPick: (v: View) => void }) {
  return (
    <section className="section-x py-14">
      <div className={`grid gap-4 ${p.briefs.length > 1 ? "md:grid-cols-2" : ""}`}>
        {p.briefs.map((b) => {
          const Icon = editionIcon(b.audience);
          return (
            <button
              key={b.audience}
              onClick={() => onPick(b.audience)}
              className="card-shadow flex flex-col items-start rounded-[18px] bg-paper-2 p-8 text-left"
            >
              <Icon className="h-7 w-7 text-blue" />
              <p className="type-caption mt-5 text-ink-2">
                {b.label} · {b.addressee}
              </p>
              <h3 className="type-card-title mt-2">{b.headline}</h3>
              <p className="mt-3 text-ink-2">{b.ask}</p>
              <span className="link-apple mt-5 inline-flex items-center">
                Open the brief <ChevronRight className="h-4 w-4" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function BriefPanel({ brief }: { brief: AudienceBrief }) {
  return (
    <section className="section-x reveal py-14" key={brief.audience}>
      <p className="type-caption text-center text-ink-2">
        {brief.label} · Prepared for {brief.addressee}
      </p>
      <h2 className="type-headline mx-auto mt-3 max-w-[820px] text-center text-balance">
        {brief.headline}
      </h2>

      <div className="mt-10 rounded-[18px] bg-paper-2 p-8 md:p-10">
        <p className="type-caption font-semibold text-blue">The ask</p>
        <p className="type-subhead mt-2">{brief.ask}</p>
      </div>

      <ol className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {brief.keyPoints.map((k, i) => (
          <li key={i} className="flex gap-4 border-t border-hairline pt-5">
            <span className="type-eyebrow text-blue">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[17px]">{k}</span>
          </li>
        ))}
      </ol>

      <div className="mt-14 space-y-4">
        {brief.sections.map((s) => (
          <details
            key={s.heading}
            className="group rounded-[18px] border border-hairline bg-white p-6 open:shadow-[2px_4px_12px_rgb(0_0_0/0.08)] md:p-8"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="type-card-title">{s.heading}</h3>
              <ChevronRight className="h-5 w-5 shrink-0 text-ink-3 transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-4 text-ink-2">{s.body}</p>
            {s.bullets && s.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-blue" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="type-tile">Next steps.</h3>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {brief.nextSteps.map((n, i) => (
            <li key={i} className="flex gap-4 rounded-[18px] bg-paper-2 p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-[14px] font-semibold text-white">
                {i + 1}
              </span>
              <span>{n}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-14 flex items-center justify-center gap-2 type-caption text-ink-2">
        Supporting detail <ArrowDown className="h-4 w-4" />
      </p>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
  dark,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[760px]">
      <p className={`type-eyebrow ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>{eyebrow}</p>
      <h2 className="type-section mt-2 text-balance">{title}</h2>
      {intro ? (
        <p className={`type-intro mt-4 ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

function Challenge({ p }: { p: Proposal }) {
  return (
    <section className="bg-paper-2 py-24">
      <div className="section-x">
        <SectionHead eyebrow="The challenge" title="Where India stands today." />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {p.context.stats.map((s) => (
            <div key={s.label} className="border-t border-hairline pt-6">
              <p className="type-stat">{s.value}</p>
              <p className="type-intro mt-2">{s.label}</p>
              {s.source ? <p className="type-micro mt-2 text-ink-3">Source: {s.source}</p> : null}
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-[18px] bg-white p-8 md:p-10">
          <h3 className="type-card-title">What holds outcomes back.</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {p.context.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-ink-2">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Policy({ p }: { p: Proposal }) {
  return (
    <section className="py-24">
      <div className="section-x">
        <SectionHead
          eyebrow="Policy alignment"
          title="Built on missions already in motion."
          intro="Every product plugs into a scheme the government already funds, so adoption starts on day one."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {p.policyAlignment.map((s) => (
            <div key={s.name} className="rounded-[18px] border border-hairline p-7">
              <p className="type-micro text-ink-3">{s.ministry}</p>
              <h3 className="mt-1 text-[21px] font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-3 text-ink-2">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions({ p }: { p: Proposal }) {
  return (
    <section className="bg-paper-2 py-24">
      <div className="section-wide">
        <div className="mx-auto max-w-[980px]">
          <SectionHead
            eyebrow="Solutions"
            title={`${p.solutions.length} AI products. One outcome.`}
          />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {p.solutions.map((s, i) => (
            <div key={s.name} className="card-shadow flex flex-col rounded-[18px] bg-white p-8">
              <span className="type-caption font-semibold text-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="type-card-title mt-3">{s.name}</h3>
              <p className="mt-3 flex-1 text-ink-2">{s.description}</p>
              <p className="mt-6 border-t border-hairline pt-4 type-caption font-semibold">
                {s.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function System({ p }: { p: Proposal }) {
  const cs = p.centralSystem;
  return (
    <section id="system" className="scroll-mt-14 bg-night py-24 text-white">
      <div className="section-x">
        <SectionHead dark eyebrow="The centralized system" title={cs.name} intro={cs.description} />
        <div className="mt-14 space-y-3">
          {cs.layers.map((l, i) => (
            <div
              key={l.name}
              className="rounded-[18px] border border-white/10 bg-night-2 p-6 md:flex md:items-start md:gap-8"
            >
              <div className="md:w-60 md:shrink-0">
                <p className="type-micro text-[#86868b]">Layer {i + 1}</p>
                <h3 className="text-[19px] font-semibold tracking-tight">{l.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 md:mt-0">
                {l.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 type-caption text-[#f5f5f7]"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[18px] bg-night-2 p-7">
            <Database className="h-6 w-6 text-link-dark" />
            <h3 className="mt-4 text-[19px] font-semibold">Data sources</h3>
            <ul className="mt-3 space-y-1.5 text-[#a1a1a6]">
              {cs.dataSources.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[18px] bg-night-2 p-7">
            <Plug className="h-6 w-6 text-link-dark" />
            <h3 className="mt-4 text-[19px] font-semibold">Integrates with</h3>
            <ul className="mt-3 space-y-1.5 text-[#a1a1a6]">
              {cs.integrations.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Static class names so Tailwind can see them.
const ROADMAP_COLS: Record<number, string> = {
  1: "",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

function Roadmap({ p }: { p: Proposal }) {
  return (
    <section id="roadmap" className="scroll-mt-14 py-24">
      <div className="section-x">
        <SectionHead eyebrow="Roadmap" title="From pilot to every district." />
        <div
          className={`mt-14 grid gap-8 ${ROADMAP_COLS[Math.min(p.roadmap.length, 4)] ?? "md:grid-cols-4"}`}
        >
          {p.roadmap.map((ph, i) => (
            <div key={ph.phase} className="relative border-t-2 border-ink pt-6">
              <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-blue" />
              <p className="type-caption font-semibold text-blue">{ph.duration}</p>
              <h3 className="mt-1 text-[21px] font-semibold tracking-tight">{ph.phase}</h3>
              <ul className="mt-4 space-y-2 text-ink-2">
                {ph.milestones.map((m) => (
                  <li key={m} className="type-caption">
                    {m}
                  </li>
                ))}
              </ul>
              <span className="sr-only">Phase {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investment({ p }: { p: Proposal }) {
  return (
    <section className="bg-paper-2 py-24">
      <div className="section-x grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Investment" title={p.budget.total} />
          <div className="mt-10">
            {p.budget.items.map((b) => (
              <div
                key={b.head}
                className="flex items-start justify-between gap-6 border-t border-hairline py-4"
              >
                <div>
                  <p>{b.head}</p>
                  {b.note ? <p className="type-micro mt-1 text-ink-3">{b.note}</p> : null}
                </div>
                <p className="shrink-0 font-semibold">{b.amount}</p>
              </div>
            ))}
            {p.budget.note ? (
              <p className="type-micro border-t border-hairline pt-4 text-ink-3">{p.budget.note}</p>
            ) : null}
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Outcomes" title="What we will measure." />
          <div className="mt-10 grid grid-cols-2 gap-3">
            {p.kpis.map((k) => (
              <div key={k.metric} className="rounded-[18px] bg-white p-5">
                <p className="text-[24px] font-semibold leading-tight tracking-tight text-blue">
                  {k.target}
                </p>
                <p className="type-caption mt-2 text-ink-2">{k.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Risks({ p }: { p: Proposal }) {
  return (
    <section className="py-24">
      <div className="section-x">
        <SectionHead eyebrow="Risks" title="Anticipated. Mitigated." />
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {p.risks.map((r) => (
            <div key={r.risk} className="border-t border-hairline py-6">
              <h3 className="text-[19px] font-semibold tracking-tight">{r.risk}</h3>
              <p className="mt-2 text-ink-2">{r.mitigation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editions({ p, pdf }: { p: Proposal; pdf: ReturnType<typeof usePdfDownload> }) {
  const options = editionsFor(p);
  return (
    <section id="download" className="scroll-mt-14 bg-paper-2 py-24">
      <div className="section-x text-center">
        <h2 className="type-section">Take it into the room.</h2>
        <p className="type-intro mx-auto mt-4 max-w-[620px] text-ink-2">
          Download the edition written for the person across the table. Same proposal, the right
          depth.
        </p>
        <div
          className={`mt-12 grid gap-4 text-left ${options.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {options.map((opt) => {
            const Icon = editionIcon(opt.key);
            const loading = pdf.busy === opt.key;
            return (
              <div key={opt.key} className="flex flex-col rounded-[18px] bg-white p-8">
                <Icon className="h-8 w-8 text-blue" />
                <h3 className="type-card-title mt-5">{opt.title}</h3>
                <p className="mt-2 flex-1 text-ink-2">{opt.detail}</p>
                <button
                  className="btn-primary mt-8 self-start"
                  disabled={!!pdf.busy}
                  onClick={() => void pdf.download(opt)}
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {loading ? "Preparing PDF" : "Download PDF"}
                </button>
              </div>
            );
          })}
        </div>
        {pdf.error ? <p className="mt-6 text-destructive">{pdf.error}</p> : null}
      </div>
    </section>
  );
}
