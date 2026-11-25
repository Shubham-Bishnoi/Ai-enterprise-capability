import type { AudienceId, CategoryId, Proposal } from "./types";

export type * from "./types";

export const categories: { id: Exclude<CategoryId, "custom">; label: string; blurb: string }[] = [
  {
    id: "livelihoods",
    label: "Livelihoods & Economy",
    blurb: "Farms, enterprises, jobs and rural assets.",
  },
  { id: "social", label: "Social Sector", blurb: "Health, learning, nutrition and care." },
  {
    id: "infrastructure",
    label: "Infrastructure & Energy",
    blurb: "Power, water, cities and logistics.",
  },
  {
    id: "governance",
    label: "Governance & Safety",
    blurb: "Services, justice, policing and resilience.",
  },
];

// Display order across the site.
const ORDER = [
  "agriculture",
  "healthcare",
  "education",
  "solar-energy",
  "water-sanitation",
  "urban-smart-cities",
  "citizen-services",
  "justice-ecourts",
  "policing-safety",
  "disaster-management",
  "skilling-employment",
  "msme-trade",
  "transport-logistics",
  "rural-development",
  "women-child-nutrition",
];

const modules = import.meta.glob<{ proposal: Proposal }>("./data/*.ts", { eager: true });

export const proposals: Proposal[] = Object.values(modules)
  .map((m) => m.proposal)
  .sort((a, b) => rank(a.id) - rank(b.id));

function rank(id: string) {
  const i = ORDER.indexOf(id);
  return i === -1 ? ORDER.length : i;
}

export function getProposal(id: string): Proposal | undefined {
  return proposals.find((p) => p.id === id);
}

export function categoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? "Custom";
}

export const audienceMeta: Record<AudienceId, { label: string; who: string; focus: string }> = {
  bureaucrat: {
    label: "Bureaucrat",
    who: "Secretary, Joint Secretary, Mission Director",
    focus: "Implementation, procurement, compliance and monitoring.",
  },
  minister: {
    label: "Minister",
    who: "Union or State Minister",
    focus: "Citizen impact, national priorities and a 100-day plan.",
  },
  "district-collector": {
    label: "District Collector",
    who: "Collector / District Magistrate",
    focus: "District pilot, scheme convergence and 90-day wins.",
  },
  "psu-board": {
    label: "PSU Board",
    who: "CMD and Board of Directors",
    focus: "Business case, payback, audit-ready procurement.",
  },
  "csr-partner": {
    label: "CSR & Industry",
    who: "Head of CSR / Foundation",
    focus: "Schedule VII fit, co-funding and measured impact.",
  },
  custom: {
    label: "Someone else",
    who: "Describe your audience",
    focus: "Tone, depth and the ask adapted to them.",
  },
};
