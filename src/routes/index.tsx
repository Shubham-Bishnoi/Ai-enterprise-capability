import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileDown,
  Layers,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import neural from "@/assets/neural.jpg";
import { SiteFooter, SiteNav } from "@/components/SiteNav";
import { capabilities } from "@/lib/capabilities";
import { categoryLabel, getProposal, proposals, type Proposal } from "@/lib/proposals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolve AI — AI for Bharat" },
      {
        name: "description",
        content:
          "Fifteen ready AI proposals for India's national priorities, with Bureaucrat and Minister editions — and an agent that writes the next one live.",
      },
      { property: "og:title", content: "Evolve AI — AI for Bharat" },
      { property: "og:description", content: "AI proposals for government, ready for the room." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURED = ["agriculture", "healthcare", "solar-energy", "justice-ecourts"];

const prompts = [
  "Tourism & Heritage — for the State Tourism Minister",
  "Fisheries — for the District Collector, Ratnagiri",
  "Cybersecurity — for the Principal Secretary, IT",
  "Mining safety — for the PSU Board of Directors",
];

function useTyped() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    const full = prompts[i] ?? "";
    const t = setTimeout(
      () => {
        if (n < full.length) setN(n + 1);
        else {
          setN(0);
          setI((i + 1) % prompts.length);
        }
      },
      n < full.length ? 45 : 2200,
    );
    return () => clearTimeout(t);
  }, [i, n]);
  return (prompts[i] ?? "").slice(0, n);
}

function Index() {
  const typed = useTyped();
  const featured = FEATURED.map(getProposal).filter((p): p is Proposal => !!p);

  return (
    <div>
      <SiteNav />

      {/* Hero */}
      <section className="pt-14 text-center md:pt-20">
        <div className="section-x reveal">
          <p className="type-eyebrow text-ink-2">Evolve AI for Government</p>
          <h1 className="type-hero mt-2">AI for Bharat.</h1>
          <p className="type-subhead mx-auto mt-4 max-w-[720px] text-ink-2">
            Fifteen proposals for India's national priorities. One agent that writes the next.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/proposals" className="btn-primary">
              Explore proposals
            </Link>
            <Link to="/studio" className="btn-secondary">
              Open Studio
            </Link>
          </div>
        </div>
        <div className="section-wide reveal mt-14" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src={hero}
              alt="A person looking up at the sky, wearing smart glasses"
              width={1920}
              height={1088}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-left text-white md:p-12">
              <p className="type-intro max-w-[520px]">
                Every proposal comes in two editions — one for the Secretary who implements it, one
                for the Minister who announces it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo tiles, apple.com home-page grid */}
      <section className="section-wide mt-3 grid gap-3 pt-3 md:grid-cols-2">
        {featured.map((p, i) => (
          <PromoTile key={p.id} p={p} dark={i === 1 || i === 2} />
        ))}
      </section>

      <Lineup />

      {/* How it works */}
      <section className="bg-paper-2 py-24">
        <div className="section-x text-center">
          <h2 className="type-section">From idea to the minister's desk.</h2>
          <p className="type-intro mx-auto mt-4 max-w-[620px] text-ink-2">
            Three steps. No templates to fill.
          </p>
        </div>
        <div className="section-x mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              Icon: Layers,
              title: "Pick a sector.",
              text: "Start from fifteen researched proposals — or name any domain in Studio.",
            },
            {
              Icon: MessageSquareText,
              title: "Name your audience.",
              text: "Bureaucrat, Minister, Collector, PSU board or CSR partner. The agent asks what it needs.",
            },
            {
              Icon: FileDown,
              title: "Download the edition.",
              text: "A designed PDF with the ask, the centralized system, roadmap, budget and KPIs.",
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="rounded-[18px] bg-white p-8">
              <Icon className="h-8 w-8 text-blue" />
              <h3 className="type-card-title mt-6">{title}</h3>
              <p className="mt-2 text-ink-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Studio */}
      <section className="bg-night py-24 text-white">
        <div className="section-x text-center">
          <p className="type-eyebrow text-[#a1a1a6]">Studio</p>
          <h2 className="type-headline mt-2">Any domain. Written live.</h2>
          <p className="type-intro mx-auto mt-4 max-w-[640px] text-[#a1a1a6]">
            Type a domain. The agent researches current schemes, asks who you're presenting to, and
            writes a complete proposal in minutes.
          </p>
          <div className="mx-auto mt-12 flex max-w-[620px] items-center gap-3 rounded-full border border-white/15 bg-night-2 py-2 pl-6 pr-2 text-left">
            <Sparkles className="h-5 w-5 shrink-0 text-link-dark" />
            <span className="min-w-0 flex-1 truncate text-[17px] text-[#f5f5f7]">
              {typed}
              <span className="animate-pulse text-link-dark">|</span>
            </span>
            <Link to="/studio" className="btn-primary shrink-0 !py-2">
              Try it
            </Link>
          </div>
        </div>
        <div className="section-wide mt-16">
          <img
            src={neural}
            alt="A glowing neural network above the ocean"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-[320px] w-full rounded-[28px] object-cover opacity-90 md:h-[440px]"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="section-wide">
          <div className="flex items-end justify-between gap-6">
            <h2 className="type-section max-w-[640px]">What AI can do today.</h2>
            <Link
              to="/capabilities"
              className="link-apple hidden shrink-0 items-center md:inline-flex"
            >
              All capabilities <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.slice(0, 8).map((c) => (
              <div key={c.title} className="rounded-[18px] bg-paper-2 p-7">
                <h3 className="text-[19px] font-semibold tracking-tight">{c.title}</h3>
                <p className="type-caption mt-2 text-ink-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function PromoTile({ p, dark }: { p: Proposal; dark: boolean }) {
  return (
    <div
      className={`flex min-h-[520px] flex-col items-center px-6 pt-12 pb-10 text-center md:min-h-[580px] ${dark ? "bg-night text-white" : "bg-paper-2"}`}
    >
      <p className={`type-caption font-semibold ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>
        {p.sector}
      </p>
      <h3 className="type-tile mt-1 max-w-[480px] text-balance">{p.title}</h3>
      <p className={`type-intro mt-2 max-w-[440px] ${dark ? "text-[#a1a1a6]" : "text-ink-2"}`}>
        {p.tagline}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Link
          to="/proposals/$sectorId"
          params={{ sectorId: p.id }}
          className="btn-primary !px-4 !py-2 !text-[14px]"
        >
          View proposal
        </Link>
        <Link
          to="/proposals/$sectorId"
          params={{ sectorId: p.id }}
          search={{ view: "minister" }}
          className={`inline-flex items-center text-[14px] ${dark ? "text-link-dark" : "text-link"} hover:underline`}
        >
          Minister edition <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-auto pt-10">
        <p className="bg-gradient-to-r from-[#2997ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-[64px] font-semibold leading-none tracking-tight text-transparent md:text-[80px]">
          {p.heroStat.value}
        </p>
        <p
          className={`type-caption mx-auto mt-3 max-w-[360px] ${dark ? "text-[#86868b]" : "text-ink-3"}`}
        >
          {p.heroStat.label}
        </p>
      </div>
    </div>
  );
}

function Lineup() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  return (
    <section className="py-24">
      <div className="section-wide flex items-end justify-between gap-6">
        <h2 className="type-section">Explore all fifteen.</h2>
        <Link to="/proposals" className="link-apple hidden shrink-0 items-center md:inline-flex">
          View all proposals <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-[6.25vw] px-[6.25vw] pb-6 xl:scroll-px-[calc((100vw-1260px)/2)] xl:px-[calc((100vw-1260px)/2)]"
      >
        {proposals.map((p) => (
          <Link
            key={p.id}
            to="/proposals/$sectorId"
            params={{ sectorId: p.id }}
            className="card-shadow flex h-[400px] w-[300px] shrink-0 snap-start flex-col rounded-[18px] bg-white p-7 md:w-[340px]"
          >
            <p className="type-micro font-semibold text-ink-3">{categoryLabel(p.category)}</p>
            <p className="mt-1 text-[14px] font-semibold text-blue">{p.sector}</p>
            <h3 className="type-card-title mt-3 text-balance">{p.title}</h3>
            <p className="type-caption mt-3 text-ink-2 line-clamp-3">{p.tagline}</p>
            <div className="mt-auto">
              <p className="text-[36px] font-semibold leading-none tracking-tight">
                {p.heroStat.value}
              </p>
              <p className="type-micro mt-2 text-ink-2 line-clamp-2">{p.heroStat.label}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="section-wide flex justify-end gap-3">
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8e8ed] text-ink/70 transition-colors hover:bg-[#dcdce1]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8e8ed] text-ink/70 transition-colors hover:bg-[#dcdce1]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
