import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "citizen-services",
  sector: "Citizen Services & Grievances",
  category: "governance",
  title: "Every voice, heard and resolved.",
  tagline:
    "One AI layer across CPGRAMS, UMANG and state portals, so every citizen can ask, complain and get a real answer in their own language.",
  summary:
    "India has cut average grievance disposal time for Central Ministries from 157 days in 2014 to 15 days in 2025. The next leap is resolution quality, not just speed. We propose a single Jan Seva AI Command Centre that lets citizens speak a grievance in any of 22 languages, routes it to the right officer first time, and helps officers close it with a reasoned, verifiable answer.",
  heroStat: {
    value: "20 lakh+",
    label: "public grievances received on CPGRAMS in 2025 (to November)",
    source: "DARPG, CPGRAMS Annual Report 2025",
  },
  context: {
    stats: [
      {
        value: "15 days",
        label:
          "average grievance disposal time for Central Ministries in 2025, down from 157 days in 2014",
        source: "DARPG, 2025",
      },
      {
        value: "72.43 crore",
        label: "registered DigiLocker users",
        source: "MeitY, Rajya Sabha reply, August 2026",
      },
      {
        value: "2,575",
        label: "active services on UMANG — 880 Central and 1,695 State",
        source: "MeitY, August 2026",
      },
      {
        value: "36",
        label: "Indian languages supported for text on BHASHINI, with voice in 22 or more",
        source: "MeitY / Digital India BHASHINI Division, 2026",
      },
    ],
    challenges: [
      "Grievances arrive in many languages, scripts and formats. Manual categorisation sends a share of them to the wrong desk, which means delays, reopenings and appeals.",
      "Fast closure is not the same as resolution. Reply quality and citizen satisfaction vary widely between departments.",
      "Only 15 State and UT portals are fully integrated with CPGRAMS. Most state and district grievances still live in separate silos.",
      "A single life event — a birth, a death, a pension, a land mutation — still sends citizens across several portals, forms and offices.",
      "Over 1.1 lakh Grievance Redressal Officers work with little decision support, so recurring systemic failures surface late.",
    ],
  },
  policyAlignment: [
    {
      name: "CPGRAMS and the 10-step CPGRAMS reforms",
      ministry:
        "Department of Administrative Reforms & Public Grievances, Ministry of Personnel, Public Grievances & Pensions",
      note: "Our AI triage, reply assistant and analytics plug into CPGRAMS and IGMS 2.0 through APIs, extending the Samadhan Didi voice chatbot rather than replacing it.",
    },
    {
      name: "Digital India BHASHINI",
      ministry: "Ministry of Electronics & Information Technology",
      note: "All speech recognition, translation and text-to-speech run on BHASHINI models, so every service works in the citizen's own language from day one.",
    },
    {
      name: "UMANG and DigiLocker",
      ministry: "Ministry of Electronics & Information Technology (NeGD)",
      note: "Grievances and service requests can start inside UMANG, and supporting documents are pulled from DigiLocker with consent instead of being uploaded again.",
    },
    {
      name: "Mission Karmayogi (iGOT Karmayogi)",
      ministry: "Department of Personnel & Training / Capacity Building Commission",
      note: "Role-based AI courses for Grievance Redressal Officers are published on iGOT, which already has over 1.70 crore registered users.",
    },
    {
      name: "IndiaAI Mission",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Model fine-tuning and inference use subsidised GPUs on the IndiaAI compute portal, within the ₹10,371.92 crore mission.",
    },
    {
      name: "State Right to Services Acts and e-District",
      ministry: "State IT and Administrative Reforms Departments",
      note: "AI tracks every notified service against its legal time limit and alerts officers before a deadline is missed, not after.",
    },
  ],
  solutions: [
    {
      name: "Samvad Voice Desk",
      description:
        "Citizens speak or type a grievance on WhatsApp, IVR, UMANG or at a CSC in 22 languages. BHASHINI-powered AI transcribes it, asks follow-up questions and files a complete, structured complaint.",
      impact: "A complete grievance filed in under three minutes, in the citizen's own language.",
    },
    {
      name: "Smart Router",
      description:
        "A classifier trained on CPGRAMS history maps each grievance to the right ministry, scheme, office and officer, and flags urgent cases such as pensions, medical or safety issues.",
      impact: "Misrouted grievances cut by 60%; urgent cases reach an officer within 24 hours.",
    },
    {
      name: "Resolution Copilot",
      description:
        "Drafts a reasoned reply for the Grievance Redressal Officer, citing the relevant rule, circular or scheme guideline and the action taken. The officer edits and approves every word.",
      impact: "Average disposal time below 10 days with a measurable rise in reply quality scores.",
    },
    {
      name: "Pulse Analytics",
      description:
        "Clusters lakhs of grievances to find root causes — a stuck payment file, a faulty portal, a district office pattern — and briefs Secretaries weekly with evidence.",
      impact: "At least 50 systemic issues a year identified and fixed at source.",
    },
    {
      name: "Life-Event Navigator",
      description:
        "Turns a single request, such as registering a death, into a guided bundle of linked services — certificate, pension, insurance, mutation — using consented DigiLocker documents.",
      impact: "Office visits per life event cut by half in pilot districts.",
    },
    {
      name: "Satisfaction Loop",
      description:
        "An AI voice agent calls citizens after closure in their language, checks whether the problem was actually solved, and reopens or escalates when it was not.",
      impact: "Verified feedback on 70% of closed grievances, in the citizen's own language.",
    },
  ],
  centralSystem: {
    name: "Jan Seva AI Command Centre",
    description:
      "One national AI platform for grievances and service delivery. Any ministry, state or district plugs in through standard APIs, keeps its own workflows and officers, and gets shared language, routing and analytics services.",
    layers: [
      {
        name: "Citizen & officer interfaces",
        items: [
          "WhatsApp, IVR and voice bots in 22 languages",
          "UMANG, CPGRAMS and state portal widgets",
          "CSC operator assist console",
          "Officer workbench and Secretary dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Speech, translation and text-to-speech via BHASHINI",
          "Grievance classification, routing and urgency scoring",
          "Reply drafting with rule and circular retrieval",
          "Root-cause clustering and trend detection",
          "Post-closure feedback voice agent",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Unified grievance and service request schema",
          "Consent manager aligned to the DPDP Act",
          "API gateway for CPGRAMS, IGMS 2.0 and state portals",
          "Knowledge base of rules, circulars and FAQs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud hosting inside India",
          "IndiaAI compute for training and inference",
          "Role-based access, audit logs and model registry",
          "Bias, accuracy and language-coverage monitoring",
        ],
      },
    ],
    dataSources: [
      "CPGRAMS and IGMS 2.0 grievance history",
      "State grievance portals and CM helplines",
      "UMANG service transaction metadata",
      "Right to Services notified services and timelines",
      "Ministry rules, circulars and scheme guidelines",
      "Feedback call centre records",
    ],
    integrations: [
      "CPGRAMS / IGMS 2.0",
      "Digital India BHASHINI",
      "UMANG",
      "DigiLocker",
      "IndiaAI compute portal",
      "iGOT Karmayogi",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Go live in two Central Ministries with high grievance volumes",
        "Voice Desk and Smart Router in 6 districts across 2 states",
        "Baseline survey of routing accuracy, disposal time and satisfaction",
        "DPDP impact assessment and security audit signed off",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "Full rollout across 2 pilot states and their CM helplines",
        "Resolution Copilot used by 10,000+ Grievance Redressal Officers",
        "Life-Event Navigator live for 5 life events",
        "Independent mid-term evaluation published",
      ],
    },
    {
      phase: "Phase 3 — National platform",
      duration: "Months 19–36",
      milestones: [
        "All Central Ministries and 15+ states onboarded",
        "22-language voice intake available nationwide",
        "Pulse Analytics briefings institutionalised in Secretary reviews",
        "Platform handed to DARPG and NeGD with open APIs",
      ],
    },
  ],
  budget: {
    total: "₹180 crore over 3 years",
    items: [
      {
        head: "AI platform and model development",
        amount: "₹45 crore",
        note: "Routing, reply drafting and analytics models",
      },
      {
        head: "Voice, language and contact channels",
        amount: "₹30 crore",
        note: "BHASHINI integration, IVR and WhatsApp",
      },
      {
        head: "Compute and secure cloud",
        amount: "₹28 crore",
        note: "IndiaAI GPUs and MeghRaj hosting",
      },
      {
        head: "State integration and change management",
        amount: "₹35 crore",
        note: "Connectors for state portals and helplines",
      },
      {
        head: "Officer training on iGOT",
        amount: "₹12 crore",
        note: "Role-based courses for GROs and nodal officers",
      },
      {
        head: "PMU, evaluation and security audits",
        amount: "₹30 crore",
        note: "Programme office and third-party evaluation",
      },
    ],
    note: "Indicative estimate for a pilot-to-national programme. To be refined after the Phase 1 pilot and converged with existing DARPG, NeGD and state e-governance budgets.",
  },
  kpis: [
    { metric: "Grievances routed to the correct officer first time", target: "95%" },
    { metric: "Average disposal time, pilot ministries", target: "Under 10 days" },
    { metric: "Citizen satisfaction on closed grievances", target: "+25 points over baseline" },
    {
      metric: "Grievances filed in a language other than English or Hindi",
      target: "30% of pilot-state volume",
    },
    { metric: "Reopened or appealed grievances", target: "Down 40%" },
    { metric: "Systemic issues identified and resolved at source", target: "50 a year" },
  ],
  risks: [
    {
      risk: "Personal data in grievances is exposed or misused.",
      mitigation:
        "Consent-based processing under the DPDP Act 2023 and DPDP Rules 2025, data minimisation, masking of identifiers in analytics, hosting only on MeghRaj or NIC cloud, and quarterly audits.",
    },
    {
      risk: "Models misread dialects or under-serve smaller languages.",
      mitigation:
        "Language-wise accuracy dashboards, human review for low-confidence cases, and continuous fine-tuning with BHASHINI on real, consented data.",
    },
    {
      risk: "Officers copy AI drafts without checking, or resist the new tools.",
      mitigation:
        "Mandatory human approval, edit tracking, iGOT training, and recognition of high-quality resolutions in performance reviews.",
    },
    {
      risk: "Faster closure is gamed at the cost of real resolution.",
      mitigation:
        "Satisfaction Loop calls every closed case sample, and closure quality — not speed alone — becomes the headline KPI.",
    },
    {
      risk: "Lock-in to a single vendor's models or cloud.",
      mitigation:
        "Open APIs, open-weight or BHASHINI models where possible, government ownership of data and fine-tuned weights, and exit clauses in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary, Department of Administrative Reforms & Public Grievances",
      headline: "From fast disposal to real resolution, on the rails DARPG already runs.",
      ask: "Approve a 6-month pilot of the Jan Seva AI Command Centre in two Central Ministries and 6 districts of two states, integrated with CPGRAMS and IGMS 2.0, and nominate a Joint Secretary as nodal officer.",
      keyPoints: [
        "Builds on CPGRAMS, IGMS 2.0 and Samadhan Didi. No new portal, no parallel database.",
        "Targets routing accuracy, reply quality and satisfaction, the next frontier after the 15-day disposal milestone.",
        "Pilot cost about ₹20 crore, within a ₹180 crore three-year envelope.",
        "Uses BHASHINI and IndiaAI compute, cutting model and infrastructure cost.",
        "DPDP-compliant by design, hosted on MeghRaj or NIC cloud with full audit trails.",
      ],
      sections: [
        {
          heading: "Implementation architecture and integration",
          body: "The platform sits behind CPGRAMS as a set of AI services called through APIs. Grievances keep flowing through existing GRO hierarchies; the AI adds language, routing, drafting and analytics. State portals connect through the same gateway, starting with the two pilot states.",
          bullets: [
            "API integration with CPGRAMS, IGMS 2.0 and the Samadhan Didi chatbot",
            "BHASHINI for speech, translation and text-to-speech",
            "DigiLocker pull for supporting documents, with citizen consent",
            "Single sign-on for officers through existing government credentials",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We recommend a QCBS RFP for the platform with services procured on GeM, funded through convergence of DARPG's CPGRAMS budget, NeGD's Digital India components and state e-governance funds. Compute is drawn from the IndiaAI Mission at subsidised rates.",
          bullets: [
            "QCBS RFP for the system integrator; GeM for cloud and contact services",
            "Convergence with DARPG, NeGD and state IT department budgets",
            "IndiaAI compute portal for GPUs at subsidised rates",
            "Milestone-linked payments tied to KPI achievement",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by Secretary, DARPG, with MeitY, NeGD and pilot-state representatives, sets direction quarterly. A dedicated PMU runs day-to-day delivery, and every participating ministry and district names a nodal officer.",
          bullets: [
            "Steering Committee chaired by Secretary, DARPG",
            "PMU housed in DARPG with NeGD technical support",
            "Nodal officers in each ministry and pilot district",
            "Monthly review in the existing CPGRAMS review meetings",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "All processing follows the DPDP Act 2023 and the DPDP Rules 2025, with the core obligations that apply from May 2027 built in from day one. Data stays in India on MeghRaj or NIC cloud, and every AI action is logged for audit.",
          bullets: [
            "Notice and consent flows in the citizen's language",
            "Data minimisation and masking in analytics",
            "Alignment with MeitY's India AI Governance Guidelines",
            "Annual third-party security and algorithmic audit",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "Live dashboards track routing accuracy, disposal time, reply quality and satisfaction by ministry, state and language. An independent agency conducts baseline, mid-term and end-line evaluations.",
          bullets: [
            "Real-time KPI dashboards for DARPG and pilot states",
            "Baseline study before go-live",
            "Third-party evaluation at months 6 and 18",
            "Public summary in the monthly CPGRAMS report",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate a Joint Secretary as nodal officer and identify two pilot ministries.",
        "Week 3–4: Constitute the Steering Committee and sign an MoU with the two pilot states.",
        "Month 2: Issue the QCBS RFP and secure IndiaAI compute allocation.",
        "Month 3: Complete the DPDP impact assessment and baseline study.",
        "Month 4: Go live in pilot ministries and districts.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Minister of State, Ministry of Personnel, Public Grievances & Pensions",
      headline: "Speak in your language. Get an answer that solves it.",
      ask: "Announce the Jan Seva AI Command Centre as India's next step in citizen-centric governance, with a pilot launch within 100 days.",
      keyPoints: [
        "Any citizen can file a grievance by voice in 22 Indian languages.",
        "Every grievance reaches the right officer the first time.",
        "Average resolution time below 10 days in pilot ministries.",
        "Every closed case is checked with the citizen, and reopened if unsolved.",
        "Built on CPGRAMS, UMANG, DigiLocker and BHASHINI — India's own digital public infrastructure.",
      ],
      sections: [
        {
          heading: "A citizen's story",
          body: "Kamla Devi, a widow in a village in eastern Uttar Pradesh, has not received her family pension for four months. Today she would need a cyber café and a form in English. With Jan Seva AI, she calls a number or sends a WhatsApp voice note in Bhojpuri, the system files her complaint with the right pension office, and an officer replies within days. A week later, an automated call checks that the money has arrived.",
          bullets: [
            "No forms, no middlemen, no travel",
            "Her complaint is routed correctly the first time",
            "She is called back to confirm it is truly resolved",
          ],
        },
        {
          heading: "Viksit Bharat @2047 and national priorities",
          body: "A developed India needs a government that listens at scale. This proposal takes the Prime Minister's vision of minimum government, maximum governance and the Digital India programme to the last citizen, in every language.",
          bullets: [
            "Advances the CPGRAMS reforms and the shift from disposal to resolution",
            "Puts BHASHINI and the IndiaAI Mission to work for citizens",
            "Equips civil servants through Mission Karmayogi",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "The pilot can be launched within 100 days, with clear milestones the public can see.",
          bullets: [
            "Day 30: Pilot ministries, states and districts announced",
            "Day 60: Voice grievance line opens in 6 districts",
            "Day 100: First public dashboard on resolution and satisfaction",
          ],
        },
        {
          heading: "Value for money",
          body: "At about ₹180 crore over three years, the programme costs a fraction of what delays cost citizens in lost wages, travel and repeat visits. It reuses platforms India has already paid for.",
          bullets: [
            "Reuses CPGRAMS, UMANG, DigiLocker and BHASHINI",
            "Subsidised compute through the IndiaAI Mission",
            "Payments to vendors linked to measured outcomes",
          ],
        },
      ],
      nextSteps: [
        "Approve the concept and direct DARPG to prepare the pilot.",
        "Announce the initiative at the next CPGRAMS review or public event.",
        "Write to two Chief Ministers inviting their states to partner in the pilot.",
      ],
    },
  ],
};
