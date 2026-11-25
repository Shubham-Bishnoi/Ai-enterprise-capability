import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "rural-development",
  sector: "Rural Development & Land Records",
  category: "livelihoods",
  title: "Clear land. Honest work. Stronger villages.",
  tagline:
    "AI that keeps land records accurate, rural works verified and village enterprises growing, on top of India's rural digital infrastructure.",
  summary:
    "India has mapped its villages by drone, given crores of land parcels a Bhu-Aadhaar, and moved rural employment to a new law with biometric and geospatial safeguards. Gram AI turns these assets into everyday outcomes: fewer land disputes, verified works under VB-G RAM G, faster PMAY-G homes and more Lakhpati Didis. One platform serves the Ministry of Rural Development, the Department of Land Resources and every state.",
  heroStat: {
    value: "40 crore+",
    label: "land parcels assigned a 14-digit Bhu-Aadhaar (ULPIN)",
    source: "Department of Land Resources, Aug 2026",
  },
  context: {
    stats: [
      {
        value: "3.14 crore",
        label: "SVAMITVA property cards issued across 1.89 lakh villages",
        source: "Ministry of Panchayati Raj, May 2026",
      },
      {
        value: "125 days",
        label:
          "of guaranteed wage employment per rural household under the VB-G RAM G Act, in force from 1 July 2026",
        source: "Ministry of Rural Development, 2026",
      },
      {
        value: "2.99 crore",
        label: "rural homes completed under PMAY-G, towards a target of 4.95 crore by 2029",
        source: "Ministry of Rural Development, Mar 2026",
      },
      {
        value: "3.76 crore",
        label:
          "women in self-help groups have become Lakhpati Didis, towards 6 crore by March 2029",
        source: "Ministry of Rural Development, Jun 2026",
      },
    ],
    challenges: [
      "Land disputes clog the courts. Studies by DAKSH estimate that around two-thirds of pending civil cases involve land or property, and many begin with a mismatch between text records and maps.",
      "Records of rights are almost fully digitised, yet cadastral maps, mutation entries and ground reality still drift apart without anyone flagging it.",
      "The new rural employment law demands biometric authentication, geospatial planning and weekly public reporting, at a scale no manual review team can match.",
      "Verifying construction stages for PMAY-G homes and assets under rural works still relies on field visits and photos that are hard to check at scale.",
      "Self-help group enterprises lack market intelligence, bookkeeping help and access to formal credit at the moment they need to grow.",
    ],
  },
  policyAlignment: [
    {
      name: "DILRMP 3.0 and Bhu-Aadhaar (ULPIN)",
      ministry: "Department of Land Resources, Ministry of Rural Development",
      note: "DILRMP 3.0 has ₹565.5 crore for 2026-31 to integrate records, maps and registration. Gram AI's map-matching and mutation tools run on ULPIN-linked records to keep them consistent.",
    },
    {
      name: "SVAMITVA",
      ministry: "Ministry of Panchayati Raj",
      note: "Drone surveys are complete in over 3.3 lakh villages. Our models reuse SVAMITVA orthophotos to detect boundary changes and support property-card-based lending.",
    },
    {
      name: "VB-G RAM G Act, 2025",
      ministry: "Department of Rural Development, Ministry of Rural Development",
      note: "The Act replaced MGNREGA from 1 July 2026 and mandates biometric authentication, geospatial planning, mobile dashboards and weekly public disclosure. Kaam Sahi provides AI verification of works and attendance anomalies within this framework.",
    },
    {
      name: "PMAY-Gramin",
      ministry: "Department of Rural Development, Ministry of Rural Development",
      note: "Awaas Drishti checks geo-tagged stage photos automatically, so instalments move faster and officers focus only on flagged cases.",
    },
    {
      name: "DAY-NRLM and the Lakhpati Didi initiative",
      ministry: "Department of Rural Development, Ministry of Rural Development",
      note: "DAY-NRLM has mobilised about 10 crore women into 94 lakh SHGs. Didi Business Coach supports the push from 3.76 crore to 6 crore Lakhpati Didis.",
    },
    {
      name: "eGramSwaraj and Gram Manchitra",
      ministry: "Ministry of Panchayati Raj",
      note: "Gram AI feeds verified asset and demand data into Gram Panchayat plans and the PM Gati Shakti-linked planning the new Act requires.",
    },
  ],
  solutions: [
    {
      name: "Bhoomi Sahayak",
      description:
        "A voice and WhatsApp assistant that lets any landholder check their record, map and mutation status by Bhu-Aadhaar, in their own language. It explains what is wrong and how to fix it, and files the request.",
      impact: "Mutation requests in pilot districts completed 50% faster.",
    },
    {
      name: "Map Match",
      description:
        "AI compares text records of rights, cadastral maps, SVAMITVA drone imagery and satellite data, and flags parcels where they disagree. Tehsil staff get a ranked list of discrepancies to correct.",
      impact: "Record-map mismatches cut by 60% in pilot tehsils within 18 months.",
    },
    {
      name: "Dispute Early Warning",
      description:
        "Spots patterns that often precede land disputes, such as repeated mutation attempts, overlapping claims or sudden boundary change, so revenue officers can step in before a case reaches court.",
      impact: "Measurable fall in new land suits filed in pilot districts.",
    },
    {
      name: "Kaam Sahi",
      description:
        "Verifies rural works under VB-G RAM G using geo-tagged photos, satellite imagery and attendance data. It detects duplicate photos, ghost works and attendance anomalies, and generates the weekly public report automatically.",
      impact: "90% of works verified without a field visit; field audits focus on flagged cases.",
    },
    {
      name: "Awaas Drishti",
      description:
        "Checks PMAY-G stage photos for construction progress, location and duplication within seconds, and releases clean cases for instalment payment.",
      impact: "Time from stage photo to instalment approval cut to under 7 days.",
    },
    {
      name: "Didi Business Coach",
      description:
        "A voice coach for SHG entrepreneurs that helps with pricing, bookkeeping, demand trends and loan applications, in local language over WhatsApp or IVR.",
      impact: "5 lakh SHG members supported towards Lakhpati Didi status.",
    },
  ],
  centralSystem: {
    name: "Gram AI Command Centre",
    description:
      "One AI platform for rural governance that the Department of Rural Development, the Department of Land Resources, the Ministry of Panchayati Raj and every state revenue and rural department can plug into. It reuses Bhu-Aadhaar, SVAMITVA and the new rural employment systems instead of building new ones.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "WhatsApp, IVR and web assistants in 22 languages via Bhashini",
          "Field app for patwaris, gram rozgar sahayaks and CRPs",
          "Tehsil, block and district officer consoles",
          "Public dashboards for weekly disclosure",
        ],
      },
      {
        name: "AI services",
        items: [
          "Geospatial change detection and record-map matching",
          "Photo verification and duplicate detection",
          "Anomaly detection for attendance and payments",
          "Language assistants for land, housing and livelihoods",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Parcel graph keyed to Bhu-Aadhaar (ULPIN)",
          "SVAMITVA, satellite and drone imagery store",
          "Connectors to rural employment, PMAY-G and NRLM systems",
          "Consent and audit logs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "Hosting on MeghRaj / NIC cloud within India",
          "IndiaAI compute for geospatial and vision models",
          "Human review of every adverse action",
          "Government ownership of code, data and models",
        ],
      },
    ],
    dataSources: [
      "State land records and cadastral maps under DILRMP",
      "Bhu-Aadhaar (ULPIN) registry",
      "SVAMITVA drone orthophotos and property cards",
      "ISRO Bhuvan and satellite imagery",
      "Rural employment works, attendance and geo-tags",
      "PMAY-G AwaasSoft records and stage photos",
      "DAY-NRLM SHG and enterprise data",
    ],
    integrations: [
      "DILRMP land records and registration systems",
      "eGramSwaraj and Gram Manchitra",
      "PM Gati Shakti National Master Plan",
      "Aadhaar authentication and DigiLocker",
      "Bhashini language APIs",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Launch in 6 districts across 2 states",
        "Map Match and Bhoomi Sahayak live in 12 pilot tehsils",
        "Kaam Sahi verifying works in all pilot blocks",
        "Baseline of disputes, mismatches and payment times recorded",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All tehsils and blocks in partner states onboarded",
        "Awaas Drishti live for PMAY-G instalments state-wide",
        "Didi Business Coach rolled out through state rural livelihood missions",
        "Weekly VB-G RAM G public reports generated automatically",
      ],
    },
    {
      phase: "Phase 3 — National platform",
      duration: "Months 19–36",
      milestones: [
        "Offered to all states as a shared service",
        "Map Match integrated with DILRMP 3.0 national systems",
        "Open geospatial models published on AIKosh",
        "Independent impact evaluation published",
      ],
    },
  ],
  budget: {
    total: "₹260 crore over 3 years",
    items: [
      {
        head: "Platform build and land, rural works and housing integrations",
        amount: "₹60 crore",
      },
      { head: "Geospatial and vision AI models, IndiaAI compute", amount: "₹50 crore" },
      { head: "Satellite imagery and data licences", amount: "₹25 crore" },
      { head: "Field rollout and training of revenue and rural staff", amount: "₹55 crore" },
      { head: "Cloud, security and DPDP compliance", amount: "₹35 crore" },
      { head: "PMU, monitoring and third-party evaluation", amount: "₹35 crore" },
    ],
    note: "Indicative estimate. Can converge with DILRMP 3.0, VB-G RAM G administrative expenses and IndiaAI Mission support; refined after the pilot.",
  },
  kpis: [
    { metric: "Record-map mismatches in pilot tehsils", target: "60% reduction in 18 months" },
    { metric: "Mutation completion time", target: "50% faster than baseline" },
    { metric: "Rural works verified remotely", target: "90%" },
    { metric: "PMAY-G stage photo to instalment approval", target: "Under 7 days" },
    { metric: "SHG members supported by Didi Business Coach", target: "5 lakh" },
    { metric: "Citizen grievances on land records resolved", target: "80% within 30 days" },
  ],
  risks: [
    {
      risk: "Land and personal data are highly sensitive, and DPDP Act 2023 obligations apply.",
      mitigation:
        "Purpose-bound access, data hosted in India, strict role-based permissions, and a Data Protection Impact Assessment before go-live.",
    },
    {
      risk: "AI flags lead to wrongful denial of wages, housing instalments or land rights.",
      mitigation:
        "AI only flags; a named officer decides. Every adverse action needs human review and gives the citizen a clear appeal route.",
    },
    {
      risk: "Models misread local land patterns, scripts or dialects.",
      mitigation:
        "State-specific training data, testing across terrain and script types, and Bhashini dialect coverage checks.",
    },
    {
      risk: "Resistance from field staff who fear scrutiny.",
      mitigation:
        "Position tools as workload reducers, involve patwaris and rozgar sahayaks in design, and reward accuracy rather than punish flags.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Government owns code, data and model weights; open standards and exit clauses in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Department of Land Resources, with Secretary, Department of Rural Development, Ministry of Rural Development",
      headline: "Put Bhu-Aadhaar, SVAMITVA and VB-G RAM G data to work in six districts.",
      ask: "Approve a 6-district pilot of the Gram AI Command Centre under DILRMP 3.0 and the VB-G RAM G administrative component, nominate a Joint Secretary from each Department as nodal officers, and authorise data-sharing with the Ministry of Panchayati Raj for SVAMITVA imagery.",
      keyPoints: [
        "Uses existing systems: Bhu-Aadhaar, SVAMITVA, rural employment MIS, AwaasSoft and NRLM. No new data collection.",
        "Directly supports the VB-G RAM G mandate for biometric, geospatial and weekly public reporting.",
        "AI flags, officers decide. Every adverse action has human review.",
        "Pilot cost of about ₹35 crore within a ₹260 crore three-year envelope.",
        "Government owns all code, data and models.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "Gram AI is an analytics and assistant layer over the Ministry's existing systems. It builds a parcel graph keyed to Bhu-Aadhaar, links it to SVAMITVA imagery and works data, and returns flags and reports to the officer consoles states already use.",
          bullets: [
            "Read access to state land records and cadastral maps",
            "SVAMITVA and satellite imagery for change detection",
            "Connectors to rural employment, PMAY-G and NRLM systems",
            "Outputs integrated into PM Gati Shakti-linked panchayat planning",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We propose a QCBS RFP on GeM for the system integrator, with pilot funding from DILRMP 3.0 and the administrative expense head of VB-G RAM G. Compute comes from the IndiaAI Mission.",
          bullets: [
            "QCBS tender on GeM with open-source and exit clauses",
            "Convergence with DILRMP 3.0 and state revenue modernisation funds",
            "IndiaAI Mission compute and application support",
            "Milestone payments tied to verified outcomes",
          ],
        },
        {
          heading: "Governance",
          body: "A joint Steering Committee of the Department of Land Resources, Department of Rural Development and Ministry of Panchayati Raj sets direction. A PMU with NIC support runs delivery, and each district names a revenue and a rural development nodal officer.",
          bullets: [
            "Quarterly Steering Committee; monthly PMU reviews",
            "District Collector as pilot lead in each district",
            "Technical committee with NIC, ISRO-NRSC and Bhashini",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "The platform complies with the DPDP Act 2023 and DPDP Rules 2025, state land revenue laws and the India AI Governance Guidelines. All data is hosted on MeghRaj / NIC cloud.",
          bullets: [
            "Strict role-based access to land and identity data",
            "No automated denial of wages, homes or land rights",
            "Data Protection Impact Assessment and CERT-In aligned audits",
            "Public register of models and their purpose",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "A live dashboard tracks mismatches fixed, mutation times, works verified and payment delays. An independent evaluator compares pilot and comparison districts.",
          bullets: [
            "Ministry, state and district dashboards",
            "Quarterly accuracy audits against field-verified samples",
            "Third-party evaluation of dispute and payment outcomes",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officers and select 6 districts with 2 states.",
        "Week 3–6: Sign data-sharing MoUs with MoPR, NIC and partner states.",
        "Week 7–10: Issue QCBS RFP on GeM and set up the PMU.",
        "Month 4: Map Match and Kaam Sahi live in the first district.",
        "Month 6: Steering Committee review and scale-up decision.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Rural Development",
      headline: "Every village, a clear map and a fair deal.",
      ask: "Announce Gram AI as the technology backbone for VB-G RAM G and DILRMP 3.0, starting with a 6-district pilot and a national rollout by 2029.",
      keyPoints: [
        "Check your land record, by voice, in your own language.",
        "Land record errors fixed before they become court cases.",
        "Every rural work verified, every week, in public.",
        "PMAY-G instalments released within a week of each stage.",
        "A business coach for every Didi on the road to Lakhpati.",
      ],
      sections: [
        {
          heading: "A day in Gram AI's village",
          body: "Ramesh in Barabanki wants to take a loan against his house. He calls Bhoomi Sahayak and learns his property card and land record do not match. The assistant files a correction, and the tehsil fixes it in a week. His neighbour Kamla, a Lakhpati Didi in the making, asks her business coach how to price pickles for the district fair, while the village's new pond is verified by satellite without a single inspection visit.",
          bullets: [
            "Land records that match the ground",
            "Wages and homes that arrive on time",
            "Women entrepreneurs with expert advice on call",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "A developed India needs prosperous villages. Gram AI brings the promise of the new rural employment law, Bhu-Aadhaar and SVAMITVA to every household, and supports the goal of 6 crore Lakhpati Didis.",
          bullets: [
            "Clear titles unlock credit for rural families",
            "Transparent, verified rural works",
            "Built on sovereign AI under the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Visible results in six districts within the first 100 days.",
          bullets: [
            "Day 30: Bhoomi Sahayak helpline launched",
            "Day 60: First AI-generated weekly public report on rural works",
            "Day 90: 10,000 land record mismatches flagged and in correction",
            "Day 100: Results shared publicly at a national event",
          ],
        },
        {
          heading: "Value for money",
          body: "About ₹260 crore over three years, shared across all states that join. Fewer disputes, fewer leakages and faster payments return the investment many times over.",
          bullets: [
            "One platform reused nationwide",
            "Outcome-linked payments",
            "All code and data owned by government",
          ],
        },
      ],
      nextSteps: [
        "Approve the pilot and announce Gram AI alongside the VB-G RAM G rollout.",
        "Invite two states to co-lead the pilot.",
        "Review 100-day results and announce national scale-up.",
      ],
    },
  ],
};
