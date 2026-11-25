import { createElement } from "react";
import type { Proposal } from "@/lib/proposals/types";
import type { Edition } from "./ProposalDocument";

export type { Edition };

function fileName(p: Proposal, edition: Edition) {
  const label =
    edition.kind === "full"
      ? "Complete"
      : (p.briefs.find((b) => b.audience === edition.audience)?.label ?? edition.audience);
  return `Evolve-AI_${p.sector}_${label}.pdf`.replace(/[^\w.-]+/g, "-").replace(/-+/g, "-");
}

/** Renders the proposal to PDF in the browser and saves it. */
export async function downloadProposalPdf(p: Proposal, edition: Edition): Promise<void> {
  const [{ pdf }, { ProposalDocument }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("./ProposalDocument"),
  ]);
  // pdf() is typed for a <Document> element; ProposalDocument renders one.
  const element = createElement(ProposalDocument, {
    proposal: p,
    edition,
  }) as unknown as Parameters<typeof pdf>[0];
  const blob = await pdf(element).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName(p, edition);
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
