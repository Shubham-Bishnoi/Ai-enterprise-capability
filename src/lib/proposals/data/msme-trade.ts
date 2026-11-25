import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "msme-trade",
  sector: "MSME, Trade & Industry",
  category: "livelihoods",
  title: "Small business, big reach.",
  tagline:
    "An AI co-pilot for every Udyam-registered enterprise: credit, government buyers and export markets, one conversation away.",
  summary:
    "India has formalised its small businesses at record speed, with more than 8.9 crore enterprises now on Udyam and Udyam Assist. The next step is to turn that registration into growth. Udyam AI gives every micro and small enterprise a voice-first co-pilot for credit, GeM tenders, ONDC and exports, and gives the Ministry and states a live view of where enterprises are stuck.",
  heroStat: {
    value: "8.9 crore+",
    label: "enterprises registered on Udyam and Udyam Assist, employing over 38 crore people",
    source: "Ministry of MSME, Jul 2026",
  },
  context: {
    stats: [
      {
        value: "3.21 crore",
        label: "informal micro-enterprises registered on the Udyam Assist Platform",
        source: "Ministry of MSME, Mar 2026",
      },
      {
        value: "₹12.39 lakh crore",
        label: "MSME exports in 2024-25, up from ₹3.95 lakh crore in 2020-21",
        source: "Ministry of MSME, 2025",
      },
      {
        value: "47.1%",
        label: "of GeM order value won by micro and small enterprises in FY 2025-26",
        source: "GeM, Apr 2026",
      },
      {
        value: "₹3.03 lakh crore",
        label: "of credit guarantees approved by CGTMSE in FY 2025-26 (to December 2025)",
        source: "Ministry of MSME, 2026",
      },
    ],
    challenges: [
      "Registration has outpaced handholding. Crores of micro-enterprises hold an Udyam number but do not know which schemes, buyers or lenders they now qualify for.",
      "Collateral-free credit is available, yet thin-file enterprises are still hard for banks to assess, so loans are slow or smaller than needed.",
      "GeM and ONDC open huge markets, but bidding, cataloguing and compliance remain hard for a first-time seller without staff.",
      "Exporting needs HS codes, certifications and market intelligence that most small firms cannot afford to buy.",
      "Delayed payments from buyers lock up working capital, and grievances move slowly through manual review.",
    ],
  },
  policyAlignment: [
    {
      name: "Udyam Registration and Udyam Assist Platform",
      ministry: "Ministry of Micro, Small & Medium Enterprises",
      note: "Udyam AI uses the Udyam number as the enterprise's digital identity, with consent, to pre-fill applications and match each enterprise to eligible schemes.",
    },
    {
      name: "Revised MSME classification and enhanced CGTMSE cover (Union Budget 2025-26)",
      ministry: "Ministry of Micro, Small & Medium Enterprises",
      note: "Investment limits rose 2.5 times and turnover limits 2 times, and guarantee cover for micro and small enterprises rose from ₹5 crore to ₹10 crore. Credit Lens helps lenders use this headroom for thin-file borrowers.",
    },
    {
      name: "SME Growth Fund and TReDS measures (Union Budget 2026-27)",
      ministry: "Ministry of Finance and Ministry of MSME",
      note: "The ₹10,000 crore SME Growth Fund and wider TReDS adoption need a pipeline of investment-ready firms. Our platform identifies high-potential enterprises and prepares them for both.",
    },
    {
      name: "Government e-Marketplace (GeM)",
      ministry: "Ministry of Commerce & Industry",
      note: "Tender Mitra reads GeM bids, checks eligibility and helps micro sellers prepare compliant offers, growing the MSE share of public procurement.",
    },
    {
      name: "ONDC and the MSME-TEAM initiative",
      ministry: "DPIIT and Ministry of MSME",
      note: "MSME-TEAM aims to onboard 5 lakh MSMEs onto ONDC. Our catalogue assistant turns a phone photo and a voice description into an ONDC-ready listing.",
    },
    {
      name: "Export Promotion Mission and RAMP",
      ministry: "Ministry of Commerce & Industry and Ministry of MSME",
      note: "Export Compass gives first-time exporters market, tariff and compliance guidance, and RAMP state plans can fund local rollout.",
    },
  ],
  solutions: [
    {
      name: "Udyam Saathi",
      description:
        "A WhatsApp and voice assistant in 22 languages that explains, in plain words, every scheme, subsidy and certification an enterprise qualifies for. It pre-fills applications from Udyam data with the owner's consent.",
      impact: "25 lakh enterprises guided to at least one new scheme benefit in three years.",
    },
    {
      name: "Credit Lens",
      description:
        "A cash-flow scoring service for banks and NBFCs that reads GST returns, bank statements and digital payments through the Account Aggregator framework. It gives lenders a clear view of thin-file borrowers and flags CGTMSE eligibility.",
      impact:
        "Loan decision time for micro-enterprises cut from weeks to under 72 hours at partner lenders.",
    },
    {
      name: "Tender Mitra",
      description:
        "Reads new GeM bids every morning, matches them to an enterprise's products, checks eligibility and explains in local language what documents are needed. It drafts the technical response for the owner to review.",
      impact: "Doubling of GeM bids submitted by enrolled micro-enterprises within a year.",
    },
    {
      name: "Catalogue Kart",
      description:
        "Turns a phone photo and a 30-second voice note into a complete product listing for ONDC or GeM, with title, attributes, HSN code and price guidance.",
      impact: "2 lakh first-time online sellers onboarded to ONDC through the platform.",
    },
    {
      name: "Export Compass",
      description:
        "A guided assistant that recommends target markets, tariff lines and certifications for a product, using trade data and export promotion council inputs. It links firms to the nearest export facilitation centre.",
      impact: "5,000 first-time exporters supported to their first shipment.",
    },
    {
      name: "Samadhan AI",
      description:
        "Triage for delayed-payment and grievance cases filed on MSME Samadhaan and state portals. It summarises each case, checks documents and recommends the route, so facilitation councils can act faster.",
      impact: "Average time to first hearing for delayed-payment cases cut by half.",
    },
  ],
  centralSystem: {
    name: "Udyam AI Exchange",
    description:
      "One national AI platform for enterprise support that the Ministry of MSME, DPIIT, state industries departments and District Industries Centres can all plug into. It reuses Udyam, GeM, ONDC and the Account Aggregator rails, and gives each enterprise a single, consented profile.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "WhatsApp, IVR and web assistant in 22 languages via Bhashini",
          "District Industries Centre and MSME-DFO officer console",
          "Lender and buyer APIs with enterprise consent",
          "State and national MSME dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Scheme eligibility and application co-pilot",
          "Cash-flow credit scoring and fraud signals",
          "Tender matching and bid drafting",
          "Catalogue generation, export intelligence and grievance triage",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Consented enterprise profile keyed to the Udyam number",
          "Account Aggregator, GSTN and TReDS connectors",
          "GeM, ONDC and export data pipelines",
          "Audit trail for every data access and model decision",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "Hosting on MeghRaj / NIC cloud within India",
          "IndiaAI compute for model training",
          "Fairness testing across sectors, regions, gender and social category",
          "Open APIs, open standards and government ownership of models",
        ],
      },
    ],
    dataSources: [
      "Udyam Registration and Udyam Assist Platform",
      "GST returns via GSTN (with consent)",
      "Bank and payment data via Account Aggregator",
      "CGTMSE and TReDS records",
      "GeM bid and order data",
      "ONDC network catalogue data",
      "DGCI&S and export promotion council trade data",
    ],
    integrations: [
      "Udyam portal and MSME Samadhaan",
      "GeM and ONDC",
      "Account Aggregator framework and GSTN",
      "DigiLocker and Aadhaar e-KYC",
      "Bhashini language APIs",
      "IndiaAI compute portal and AIKosh",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Launch in 5 MSME clusters across 2 states",
        "Udyam Saathi and Tender Mitra live in 4 languages",
        "Credit Lens pilot with 3 public sector banks",
        "Baseline of 20,000 enterprises for evaluation",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All District Industries Centres in partner states onboarded",
        "Catalogue Kart integrated with ONDC under MSME-TEAM",
        "Samadhan AI live in partner state facilitation councils",
        "5 lakh active enterprises on the platform",
      ],
    },
    {
      phase: "Phase 3 — National platform",
      duration: "Months 19–36",
      milestones: [
        "Offered as a shared service to all states and UTs",
        "Export Compass linked to export promotion councils",
        "Credit Lens available to all scheduled commercial banks and SIDBI",
        "Independent impact evaluation published",
      ],
    },
  ],
  budget: {
    total: "₹220 crore over 3 years",
    items: [
      { head: "Platform build and DPI integrations", amount: "₹55 crore" },
      { head: "AI models, credit scoring and IndiaAI compute", amount: "₹40 crore" },
      { head: "Multilingual voice and WhatsApp operations", amount: "₹30 crore" },
      {
        head: "Cluster rollout, DIC training and facilitators",
        amount: "₹45 crore",
        note: "Including enterprise handholding camps",
      },
      { head: "Cloud, security and DPDP compliance", amount: "₹25 crore" },
      { head: "PMU, monitoring and third-party evaluation", amount: "₹25 crore" },
    ],
    note: "Indicative estimate. Can be funded through convergence with RAMP state plans, MSME-TEAM and IndiaAI Mission application support; refined after the pilot.",
  },
  kpis: [
    { metric: "Enterprises actively using the platform", target: "25 lakh by month 36" },
    { metric: "Micro-enterprise loan decision time at partner lenders", target: "Under 72 hours" },
    {
      metric: "GeM bids submitted by enrolled micro-enterprises",
      target: "2x baseline in 12 months",
    },
    { metric: "First-time ONDC sellers onboarded", target: "2 lakh" },
    { metric: "Delayed-payment cases reaching first hearing", target: "50% faster than baseline" },
    { metric: "Women-owned enterprises among active users", target: "At least 30%" },
  ],
  risks: [
    {
      risk: "Misuse of enterprise financial data, and DPDP Act 2023 obligations.",
      mitigation:
        "Consent through the Account Aggregator framework, purpose-limited access, data hosted in India, and a Data Protection Impact Assessment before launch.",
    },
    {
      risk: "Credit models disadvantage women-owned, rural or first-generation firms.",
      mitigation:
        "Fairness audits by gender, region and social category, explainable scores, and human review of every adverse decision.",
    },
    {
      risk: "Low uptake among micro-enterprises unfamiliar with digital tools.",
      mitigation:
        "Voice-first design, cluster camps, and DIC staff and Udyam Assist entities trained as facilitators.",
    },
    {
      risk: "Banks treat AI scores as a black box and ignore them.",
      mitigation:
        "Co-design with partner banks, transparent score reasons, and a guarantee-linked pilot with CGTMSE.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Government owns code, data and model weights; open APIs and documented exit plans in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Ministry of Micro, Small & Medium Enterprises (with the Additional Secretary & Development Commissioner, MSME)",
      headline: "Turn 8.9 crore registrations into measurable growth.",
      ask: "Approve a 5-cluster pilot of the Udyam AI Exchange, funded through RAMP and MSME-TEAM convergence, and nominate a Joint Secretary as nodal officer with authority to sign data-sharing agreements with Udyam, GeM and ONDC.",
      keyPoints: [
        "Reuses Udyam, GeM, ONDC and Account Aggregator. No new registration for enterprises.",
        "Six AI services on one platform with one consent and security model.",
        "Directly supports Budget 2025-26 and 2026-27 measures on credit guarantees, the SME Growth Fund and TReDS.",
        "Pilot cost of about ₹30 crore inside a ₹220 crore three-year envelope.",
        "Government owns all code, data and models.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The Exchange is an AI layer over existing MSME infrastructure. It reads Udyam data with enterprise consent, pulls financial data through the Account Aggregator framework, and connects to GeM and ONDC through published APIs.",
          bullets: [
            "Single consented enterprise profile keyed to the Udyam number",
            "Account Aggregator and GSTN connectors for credit scoring",
            "GeM and ONDC APIs for tenders and catalogues",
            "Modular services that states can adopt one at a time",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We recommend a QCBS RFP on GeM for the system integrator, with pilot funding from RAMP state investment plans and MSME-TEAM. Compute is drawn from the IndiaAI Mission at subsidised rates.",
          bullets: [
            "QCBS tender on GeM with open-source and exit clauses",
            "Convergence with RAMP, MSME-TEAM and state industrial policy funds",
            "IndiaAI Mission compute and application support",
            "Milestone payments tied to active enterprises and outcomes",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Secretary, MSME, with DPIIT, GeM, ONDC, SIDBI and CGTMSE as members, sets direction. A PMU in the Office of the Development Commissioner runs delivery.",
          bullets: [
            "Quarterly Steering Committee; monthly PMU reviews",
            "Nodal officers in each District Industries Centre",
            "Lender working group led by SIDBI",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "The platform complies with the DPDP Act 2023 and DPDP Rules 2025, RBI rules on credit information, and the India AI Governance Guidelines. All data stays in India on MeghRaj / NIC cloud.",
          bullets: [
            "Consent through the Account Aggregator framework",
            "Data Protection Impact Assessment and CERT-In aligned audits",
            "Explainable credit scores and human review of adverse outcomes",
            "Public register of models and their purpose",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "A live dashboard tracks enterprises served, loans decided, bids placed and grievances resolved. An independent evaluator compares pilot clusters with matched comparison clusters.",
          bullets: [
            "Real-time Ministry and state dashboards",
            "Quarterly fairness and accuracy audits",
            "Third-party impact study on credit, sales and jobs",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officer and select 5 clusters in 2 states.",
        "Week 3–6: Sign data-sharing MoUs with Udyam, GeM, ONDC and partner banks.",
        "Week 7–10: Issue QCBS RFP on GeM and set up the PMU.",
        "Month 4: Udyam Saathi and Tender Mitra live in the first cluster.",
        "Month 6: Steering Committee review and decision on state scale-up.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Micro, Small & Medium Enterprises",
      headline: "A business advisor for every small business in India.",
      ask: "Announce the Udyam AI Exchange as a national AI co-pilot for small businesses, with a 5-cluster pilot this year and a goal of 25 lakh enterprises served by 2029.",
      keyPoints: [
        "Over 8.9 crore enterprises are now registered. Udyam AI helps each of them grow.",
        "Credit decisions in days, not weeks.",
        "A voice assistant that finds government tenders and fills the forms.",
        "Sell online on ONDC with one photo and one voice note.",
        "First-time exporters guided to their first shipment.",
      ],
      sections: [
        {
          heading: "A day with Udyam Saathi",
          body: "Rehana runs a six-person garment unit in Tiruppur. On Monday she asks Udyam Saathi, in Tamil, whether she can supply the railways. By noon it has found three open GeM bids that fit her products and told her which documents she needs. Her bank, using Credit Lens, approves a working capital loan backed by CGTMSE by Thursday.",
          bullets: [
            "No consultant fees and no English forms",
            "Credit based on her real sales, not just collateral",
            "Government buyers within reach of a small unit",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "Small businesses are the engine of jobs and exports. Udyam AI makes the reforms of the last two Budgets, from bigger credit guarantees to the SME Growth Fund, reach the smallest firms.",
          bullets: [
            "Supports the vision of MSMEs becoming tomorrow's champions",
            "Deepens Digital India and the open networks of GeM and ONDC",
            "Built on sovereign AI under the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "The first 100 days deliver public, visible results in five clusters.",
          bullets: [
            "Day 30: Udyam Saathi WhatsApp number launched",
            "Day 60: First GeM orders won with Tender Mitra",
            "Day 90: Credit Lens loans sanctioned with partner banks",
            "Day 100: 50,000 enterprises served, results shared publicly",
          ],
        },
        {
          heading: "Value for money",
          body: "About ₹220 crore over three years, shared across every state that joins. One additional loan or government order per enterprise repays the cost many times over.",
          bullets: [
            "One national platform, reused by all states",
            "Payments tied to outcomes",
            "Government owns every line of code and every dataset",
          ],
        },
      ],
      nextSteps: [
        "Approve the pilot and announce it at the next national MSME event.",
        "Invite two states to co-lead the first clusters.",
        "Review 100-day results and announce national scale-up.",
      ],
    },
  ],
};
