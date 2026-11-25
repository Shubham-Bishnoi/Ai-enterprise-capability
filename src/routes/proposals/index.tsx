import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteNav";
import { categories, categoryLabel, proposals, type CategoryId } from "@/lib/proposals";

type Filter = Exclude<CategoryId, "custom">;
const isFilter = (v: unknown): v is Filter => categories.some((c) => c.id === v);

export const Route = createFileRoute("/proposals/")({
  validateSearch: (s: Record<string, unknown>): { category?: Filter } =>
    isFilter(s["category"]) ? { category: s["category"] } : {},
  head: () => ({
    meta: [
      { title: "Proposals — Evolve AI" },
      {
        name: "description",
        content:
          "Fifteen AI proposals for India's national priorities — each with a Bureaucrat and a Minister edition, ready to download.",
      },
      { property: "og:title", content: "Proposals — Evolve AI" },
      {
        property: "og:description",
        content: "AI proposals for agriculture, health, education, energy, justice and more.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  const shown = category ? proposals.filter((p) => p.category === category) : proposals;

  return (
    <div>
      <SiteNav />
      <section className="section-wide pt-16 pb-10 md:pt-20">
        <h1 className="type-headline max-w-[760px]">
          Proposals.{" "}
          <span className="text-ink-2">Fifteen national priorities, ready for the room.</span>
        </h1>
        <div
          className="no-scrollbar -mx-[5.33vw] mt-10 flex gap-2 overflow-x-auto px-[5.33vw] md:mx-0 md:px-0"
          role="tablist"
          aria-label="Filter by category"
        >
          <Link
            to="/proposals"
            search={{}}
            className="chip shrink-0"
            data-active={!category}
            role="tab"
          >
            All sectors
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/proposals"
              search={{ category: c.id }}
              className="chip shrink-0"
              data-active={category === c.id}
              role="tab"
            >
              {c.label}
            </Link>
          ))}
        </div>
        {category ? (
          <p className="type-caption mt-4 text-ink-2">
            {categories.find((c) => c.id === category)?.blurb}
          </p>
        ) : null}
      </section>

      <section className="section-wide pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <article
              key={p.id}
              className="card-shadow reveal flex flex-col rounded-[18px] bg-white p-8"
              style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
            >
              <p className="type-micro font-semibold text-ink-3">{categoryLabel(p.category)}</p>
              <h2 className="mt-1 text-[14px] font-semibold text-blue">{p.sector}</h2>
              <h3 className="type-card-title mt-3 text-balance">{p.title}</h3>
              <p className="mt-3 flex-1 text-ink-2">{p.tagline}</p>
              <div className="mt-8 border-t border-hairline pt-5">
                <p className="text-[32px] font-semibold leading-none tracking-tight">
                  {p.heroStat.value}
                </p>
                <p className="type-caption mt-1.5 text-ink-2 line-clamp-2">{p.heroStat.label}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  to="/proposals/$sectorId"
                  params={{ sectorId: p.id }}
                  className="btn-primary !px-4 !py-2 !text-[14px]"
                >
                  View proposal
                </Link>
                {p.briefs.map((b) => (
                  <Link
                    key={b.audience}
                    to="/proposals/$sectorId"
                    params={{ sectorId: p.id }}
                    search={{ view: b.audience }}
                    className="inline-flex items-center type-caption text-link hover:underline"
                  >
                    {b.label.replace(" edition", "")} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wide pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-night px-8 py-16 text-center text-white md:py-20">
          <Sparkles className="mx-auto h-8 w-8 text-link-dark" />
          <h2 className="type-section mt-5">Not on the list?</h2>
          <p className="type-intro mx-auto mt-3 max-w-[560px] text-[#a1a1a6]">
            Name any domain. Studio asks who you're presenting to, then writes the proposal live —
            ready as a PDF.
          </p>
          <Link to="/studio" className="btn-primary mt-8">
            Open Studio
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
