import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  Landmark,
  Loader2,
  UserRound,
} from "lucide-react";
import type { Proposal } from "@/lib/proposals/types";
import type { Edition } from "@/lib/pdf/download";

export interface EditionOption {
  key: string;
  edition: Edition;
  title: string;
  detail: string;
}

export function editionsFor(p: Proposal): EditionOption[] {
  const briefs = p.briefs.map<EditionOption>((b) => ({
    key: b.audience,
    edition: { kind: "brief", audience: b.audience },
    title: b.label,
    detail:
      b.audience === "minister"
        ? "Vision, citizen impact and a 100-day plan, with condensed detail."
        : b.audience === "bureaucrat"
          ? "Implementation, procurement, compliance, with full technical detail."
          : `Addressed to ${b.addressee}.`,
  }));
  return [
    ...briefs,
    {
      key: "full",
      edition: { kind: "full" },
      title: "Complete proposal",
      detail: "Everything, with every audience brief as an appendix.",
    },
  ];
}

export function editionIcon(key: string) {
  if (key === "bureaucrat") return BriefcaseBusiness;
  if (key === "minister") return Landmark;
  if (key === "full") return BookOpen;
  return UserRound;
}

/** Shared download state so every button on the page reflects one render at a time. */
export function usePdfDownload(proposal: Proposal) {
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  async function download(opt: EditionOption) {
    if (busy) return;
    setBusy(opt.key);
    setError(null);
    try {
      const { downloadProposalPdf } = await import("@/lib/pdf/download");
      await downloadProposalPdf(proposal, opt.edition);
    } catch (err) {
      console.error(err);
      setError("The PDF couldn't be created. Please try again.");
    } finally {
      setBusy(null);
    }
  }
  return { busy, error, download };
}

/** Compact pill with a dropdown of editions, for the local nav. */
export function DownloadMenu({
  proposal,
  pdf,
}: {
  proposal: Proposal;
  pdf: ReturnType<typeof usePdfDownload>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        className="btn-small"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {pdf.busy ? <Loader2 className="h-3 w-3 animate-spin" /> : <Download className="h-3 w-3" />}
        Download PDF
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div
          role="menu"
          className="reveal absolute right-0 top-9 w-72 overflow-hidden rounded-2xl border border-black/10 bg-white p-1.5 shadow-[0_10px_40px_rgb(0_0_0/0.16)]"
          style={{ animationDuration: "0.25s" }}
        >
          {editionsFor(proposal).map((opt) => {
            const Icon = editionIcon(opt.key);
            return (
              <button
                key={opt.key}
                role="menuitem"
                disabled={!!pdf.busy}
                onClick={() => {
                  void pdf.download(opt);
                  setOpen(false);
                }}
                className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-paper-2 disabled:opacity-50"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                <span>
                  <span className="block text-[14px] font-semibold">{opt.title}</span>
                  <span className="block type-micro text-ink-2">{opt.detail}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
