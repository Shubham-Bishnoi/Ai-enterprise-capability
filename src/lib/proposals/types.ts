// One schema for every proposal — the 15 pre-built sectors and the ones the
// Proposal Studio agent writes live via the FastAPI backend (backend/app/schema.py
// mirrors this shape). The page view and the PDF renderer both consume it.

export type CategoryId = "livelihoods" | "social" | "infrastructure" | "governance" | "custom";

export type AudienceId =
  "bureaucrat" | "minister" | "district-collector" | "psu-board" | "csr-partner" | "custom";

export interface Stat {
  value: string; // "14.5 crore"
  label: string; // "farm holdings in India"
  source?: string; // "Agriculture Census 2015-16"
}

export interface Scheme {
  name: string; // "Digital Agriculture Mission"
  ministry: string; // "Ministry of Agriculture & Farmers Welfare"
  note: string; // how our proposal plugs into it
}

export interface Solution {
  name: string; // "Crop Doctor"
  description: string;
  impact: string; // one-line measurable outcome
}

export interface SystemLayer {
  name: string; // "Data layer"
  items: string[];
}

export interface CentralSystem {
  name: string; // "Krishi AI Command Centre"
  description: string;
  layers: SystemLayer[]; // ordered top (citizen-facing) to bottom (infrastructure)
  dataSources: string[];
  integrations: string[]; // existing government platforms it connects to
}

export interface Phase {
  phase: string; // "Phase 1 — Pilot"
  duration: string; // "Months 0–6"
  milestones: string[];
}

export interface BudgetLine {
  head: string;
  amount: string; // "₹18 crore"
  note?: string;
}

export interface Budget {
  total: string; // "₹120 crore over 3 years"
  items: BudgetLine[];
  note?: string; // "Indicative; refined after pilot"
}

export interface Kpi {
  metric: string;
  target: string;
}

export interface Risk {
  risk: string;
  mitigation: string;
}

export interface BriefSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface AudienceBrief {
  audience: AudienceId;
  label: string; // "Bureaucrat edition"
  addressee: string; // "Secretary, Department of Agriculture & Farmers Welfare"
  headline: string; // one line, Apple-style
  ask: string; // the specific decision / approval requested
  keyPoints: string[];
  sections: BriefSection[];
  nextSteps: string[];
}

export interface Proposal {
  id: string; // url slug
  sector: string; // "Agriculture"
  category: CategoryId;
  title: string; // "AI for every farm."
  tagline: string;
  summary: string;
  heroStat: Stat;
  context: {
    stats: Stat[];
    challenges: string[];
  };
  policyAlignment: Scheme[];
  solutions: Solution[];
  centralSystem: CentralSystem;
  roadmap: Phase[];
  budget: Budget;
  kpis: Kpi[];
  risks: Risk[];
  briefs: AudienceBrief[];
  generatedAt?: string; // set for agent-written proposals
}
