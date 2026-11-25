import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteNav";
import { ProposalView } from "@/components/proposal/ProposalView";
import { getProposal, proposals } from "@/lib/proposals";

export const Route = createFileRoute("/proposals/$sectorId")({
  validateSearch: (s: Record<string, unknown>): { view?: string } =>
    typeof s["view"] === "string" ? { view: s["view"] } : {},
  loader: ({ params }) => {
    const proposal = getProposal(params.sectorId);
    if (!proposal) throw notFound();
    return { proposal };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.proposal;
    const title = p ? `${p.sector} — AI Proposal — Evolve AI` : "Proposal — Evolve AI";
    return {
      meta: [
        { title },
        { name: "description", content: p?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.tagline ?? "" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { proposal } = Route.useLoaderData();
  const { view } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const i = proposals.findIndex((p) => p.id === proposal.id);
  const next = proposals[(i + 1) % proposals.length];

  return (
    <div>
      <SiteNav sticky={false} />
      <ProposalView
        key={proposal.id}
        proposal={proposal}
        initialView={view ?? "overview"}
        onViewChange={(v) =>
          void navigate({
            search: v === "overview" ? {} : { view: v },
            replace: true,
            resetScroll: false,
          })
        }
      />
      {next && next.id !== proposal.id ? (
        <section className="section-x py-16 text-center">
          <p className="type-caption text-ink-2">Next proposal</p>
          <Link
            to="/proposals/$sectorId"
            params={{ sectorId: next.id }}
            className="type-tile mt-2 inline-flex items-center gap-1 hover:text-link"
          >
            {next.sector} <ChevronRight className="h-7 w-7" />
          </Link>
        </section>
      ) : null}
      <SiteFooter />
    </div>
  );
}
