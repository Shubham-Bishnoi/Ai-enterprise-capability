import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "policing-safety",
  sector: "Policing & Public Safety",
  category: "governance",
  title: "Faster help. Stronger cases.",
  tagline:
    "Rights-respecting AI that helps police stop cyber fraud in the golden hour, answer every 112 call, and build cases that hold up in court.",
  summary:
    "Cybercrime crossed one lakh registered cases for the first time in 2024, while overall crime fell. We propose a Raksha AI Command Centre that works inside I4C, CCTNS, ICJS and 112 — helping officers freeze fraud money faster, write better case files, protect digital evidence and dispatch help sooner. It does not do mass surveillance or predictive targeting of individuals, and every action is human-approved and logged.",
  heroStat: {
    value: "24 lakh+",
    label:
      "cybercrime complaints on the National Cybercrime Reporting Portal in 2025, reporting ₹22,495 crore in fraud",
    source: "I4C / NCRP data, 2025",
  },
  context: {
    stats: [
      {
        value: "1,01,928",
        label: "cybercrime cases registered in 2024, up 17.9% — the first year above one lakh",
        source: "NCRB, Crime in India 2024",
      },
      {
        value: "₹11,158 crore",
        label:
          "saved across 32.80 lakh complaints through the 1930 helpline and CFCFRMS, to 30 June 2026",
        source: "Ministry of Home Affairs, 2026",
      },
      {
        value: "17,130",
        label: "police stations connected to CCTNS — 100% coverage across States and UTs",
        source: "Ministry of Home Affairs, 2025",
      },
      {
        value: "₹26,275 crore",
        label:
          "central outlay of the umbrella scheme for Modernisation of Police Forces, 2021-22 to 2025-26",
        source: "Ministry of Home Affairs",
      },
    ],
    challenges: [
      "Cyber fraud money moves in minutes. Every delay between complaint and freeze cuts the chance of recovery.",
      "Investigating officers spend hours on case diaries, notices and charge sheets, under strict timelines set by the BNSS.",
      "Digital evidence is growing fast, but many states are still notifying e-Sakshya rules, and chain-of-custody gaps weaken prosecutions.",
      "Forensic labs face long queues, so trials wait for reports.",
      "112 control rooms handle call surges in many languages, with unclear locations and repeat calls slowing dispatch.",
    ],
  },
  policyAlignment: [
    {
      name: "Indian Cyber Crime Coordination Centre (I4C), NCRP and 1930",
      ministry: "Ministry of Home Affairs",
      note: "Golden Hour Fraud Shield plugs into CFCFRMS and the e-Zero FIR process launched in 2025, speeding up triage and bank requests on complaints already filed.",
    },
    {
      name: "CCTNS and ICJS 2.0",
      ministry: "Ministry of Home Affairs (NCRB)",
      note: "Case Diary Copilot works inside CCTNS, and completed case files flow to prosecution and courts through ICJS, approved at ₹3,375 crore for 2022-23 to 2025-26.",
    },
    {
      name: "Modernisation of Police Forces (incl. Forensic Capacities)",
      ministry: "Ministry of Home Affairs",
      note: "State police modernisation and forensic capacity sub-schemes, and their successor cycle, can fund AI tools, training and lab workflow upgrades.",
    },
    {
      name: "Emergency Response Support System (112)",
      ministry: "Ministry of Home Affairs",
      note: "112 Voice Assist runs inside state ERSS control rooms, operational in all 36 States and UTs, to help call-takers in every language.",
    },
    {
      name: "New criminal laws and e-Sakshya",
      ministry: "Ministry of Home Affairs, with NIC",
      note: "AI supports audio-video recording of search and seizure, hashing and indexing of evidence, and BNSS deadline alerts.",
    },
    {
      name: "Digital India BHASHINI and IndiaAI Mission",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Multilingual speech and translation for 112 and citizen helplines, and subsidised compute for model training.",
    },
  ],
  solutions: [
    {
      name: "Golden Hour Fraud Shield",
      description:
        "Reads 1930 calls and NCRP complaints in any language, extracts transaction IDs, UPI handles and bank details, and prepares freeze requests for CFCFRMS within minutes. A cyber cell officer approves every request.",
      impact:
        "Median complaint-to-bank-request time under 15 minutes; amount saved per complaint up 30%.",
    },
    {
      name: "Case Diary Copilot",
      description:
        "Helps investigating officers draft case diaries, notices and charge sheets in their state language inside CCTNS, checks for missing documents, and sends BNSS deadline alerts. The officer signs off on every document.",
      impact: "Charge sheets filed within statutory timelines in 95% of pilot cases.",
    },
    {
      name: "Sakshya Assist",
      description:
        "Works with e-Sakshya to hash, tag and index photos, videos and documents at the scene, transcribe recordings with BHASHINI, and keep a tamper-evident chain of custody.",
      impact: "Zero evidence rejected in pilot courts for chain-of-custody defects.",
    },
    {
      name: "112 Voice Assist",
      description:
        "Transcribes and translates 112 calls in real time, pulls out location clues, flags likely duplicates and suggests a priority level. The call-taker and dispatcher make every decision.",
      impact: "Average response time cut by 20% in pilot control rooms.",
    },
    {
      name: "Forensic Queue Optimiser",
      description:
        "Orders forensic lab work by court date and statutory deadline, and drafts structured summaries of mobile and computer extraction reports for expert review.",
      impact: "Forensic report turnaround down 30% in pilot labs.",
    },
    {
      name: "Cyber Saathi",
      description:
        "A WhatsApp and IVR assistant in 22 languages that helps citizens check whether a call or message looks like a scam, report it to 1930 or Sanchar Saathi, and learn what to do next.",
      impact:
        "50 lakh citizen interactions a year in pilot states, with a measurable rise in early reporting.",
    },
  ],
  centralSystem: {
    name: "Raksha AI Command Centre",
    description:
      "One secure AI platform for police forces, hosted in government cloud. States plug in through CCTNS, ICJS, 112 and I4C interfaces and choose the services they need, under a national rulebook on lawful, audited and human-supervised AI use.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Cyber Saathi on WhatsApp and IVR",
          "112 call-taker and dispatcher consoles",
          "Investigating officer app inside CCTNS",
          "Cyber cell and forensic lab workbenches",
        ],
      },
      {
        name: "AI services",
        items: [
          "Speech-to-text and translation via BHASHINI",
          "Complaint entity extraction and fraud-pattern analysis on reported data",
          "Document drafting and completeness checks",
          "Evidence indexing and transcription",
          "Queue optimisation for labs and control rooms",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "CCTNS and ICJS 2.0 records",
          "NCRP and CFCFRMS complaint data",
          "ERSS 112 call and dispatch logs",
          "e-Sakshya evidence store",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "NIC and state data centres, hosted in India",
          "Role-based access and immutable audit logs",
          "Independent oversight board and annual AI audit",
          "Prohibited-use list: no mass facial recognition, no individual predictive targeting",
        ],
      },
    ],
    dataSources: [
      "NCRP complaints and 1930 call records",
      "CFCFRMS bank and payment responses",
      "CCTNS FIRs, case diaries and charge sheets",
      "ICJS 2.0 court, prosecution and prison feeds",
      "ERSS 112 call and dispatch logs",
      "e-Sakshya evidence metadata",
      "Forensic lab case queues",
    ],
    integrations: [
      "I4C NCRP and CFCFRMS",
      "CCTNS and ICJS 2.0",
      "ERSS 112",
      "e-Sakshya",
      "Digital India BHASHINI",
      "Sanchar Saathi",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Golden Hour Fraud Shield live in 2 state cyber cells",
        "Case Diary Copilot in 30 police stations across 6 districts",
        "112 Voice Assist in one state control room",
        "Oversight board constituted and prohibited-use rules published",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All police stations in 2 pilot states using Case Diary Copilot",
        "Sakshya Assist live wherever e-Sakshya rules are notified",
        "Forensic Queue Optimiser in state forensic labs",
        "Independent evaluation and first public AI audit report",
      ],
    },
    {
      phase: "Phase 3 — Multi-state",
      duration: "Months 19–36",
      milestones: [
        "10+ states onboarded through CCTNS and ICJS",
        "Cyber Saathi in 22 languages nationwide",
        "112 Voice Assist in all pilot-state control rooms",
        "Platform handed over to NCRB and I4C for national operation",
      ],
    },
  ],
  budget: {
    total: "₹300 crore over 3 years",
    items: [
      {
        head: "Cyber fraud AI and bank integrations",
        amount: "₹70 crore",
        note: "Fraud Shield and Cyber Saathi",
      },
      {
        head: "Investigation copilot and CCTNS integration",
        amount: "₹55 crore",
        note: "State-language drafting and BNSS alerts",
      },
      {
        head: "112 Voice Assist",
        amount: "₹45 crore",
        note: "Speech, translation and control-room tools",
      },
      {
        head: "Digital evidence and forensics",
        amount: "₹50 crore",
        note: "Sakshya Assist and lab workflow",
      },
      {
        head: "Compute and secure cloud",
        amount: "₹40 crore",
        note: "IndiaAI GPUs and NIC hosting",
      },
      {
        head: "Training, PMU and independent audits",
        amount: "₹40 crore",
        note: "Includes oversight board secretariat",
      },
    ],
    note: "Indicative estimate, to be refined after the pilot. Designed to converge with Modernisation of Police Forces, I4C, ICJS and Nirbhaya Fund-supported ERSS budgets.",
  },
  kpis: [
    {
      metric: "Median time from 1930 complaint to bank freeze request",
      target: "Under 15 minutes",
    },
    { metric: "Amount saved per reported cyber fraud complaint", target: "Up 30%" },
    { metric: "Charge sheets filed within BNSS timelines, pilot stations", target: "95%" },
    { metric: "112 average response time, pilot control rooms", target: "Down 20%" },
    { metric: "Forensic report turnaround, pilot labs", target: "Down 30%" },
    { metric: "AI actions with a named human approver and audit log", target: "100%" },
  ],
  risks: [
    {
      risk: "Misuse of AI for surveillance or profiling.",
      mitigation:
        "A published prohibited-use list, purpose limitation, independent oversight, immutable audit logs and annual public AI audits. No mass facial recognition and no predictive targeting of individuals.",
    },
    {
      risk: "Breach of victim, witness or accused data.",
      mitigation:
        "Compliance with the DPDP Act 2023, DPDP Rules 2025 and applicable law-enforcement provisions, hosting only on NIC or state data centres, encryption and strict role-based access.",
    },
    {
      risk: "Errors or bias in AI outputs harm investigations.",
      mitigation:
        "AI drafts and suggests; officers decide. Accuracy and bias tested per language and district, with low-confidence outputs routed for human review.",
    },
    {
      risk: "Field staff see AI as extra work.",
      mitigation:
        "Tools built into CCTNS and the apps officers already use, training through state police academies, and features chosen with station house officers.",
    },
    {
      risk: "Lock-in to one vendor on sensitive systems.",
      mitigation:
        "Government ownership of data and models, open APIs, source-code escrow and periodic re-competition.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Joint Secretary, Police Modernisation Division, Ministry of Home Affairs",
      headline:
        "Put AI where it saves money, time and cases — inside the systems MHA already runs.",
      ask: "Approve a 6-month pilot in two states covering 6 districts, funded under the Modernisation of Police Forces scheme's IT component with I4C support, and nominate nodal officers from the Police Modernisation Division, I4C and NCRB.",
      keyPoints: [
        "Works inside I4C, CCTNS, ICJS, e-Sakshya and 112. No new database of citizens.",
        "Focuses on cyber fraud, case quality, evidence and emergency response.",
        "Pilot cost about ₹35 crore within a ₹300 crore three-year envelope.",
        "Prohibited-use rules and an independent oversight board from day one.",
        "Every AI action has a named human approver and an audit log.",
      ],
      sections: [
        {
          heading: "Implementation architecture and integration",
          body: "AI services are exposed as APIs to the systems officers already use. Fraud Shield sits behind NCRP and CFCFRMS, the Copilot inside CCTNS, Voice Assist inside ERSS consoles, and Sakshya Assist alongside e-Sakshya.",
          bullets: [
            "API integration with NCRP, CFCFRMS and the e-Zero FIR flow",
            "CCTNS and ICJS 2.0 connectors maintained with NCRB",
            "ERSS 112 console plug-ins in state control rooms",
            "BHASHINI for speech and translation",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "Funding converges with the Modernisation of Police Forces scheme and its successor cycle, I4C budgets, ICJS and Nirbhaya Fund support for ERSS. Procurement uses a QCBS RFP with security-cleared bidders, plus GeM for standard services.",
          bullets: [
            "MPF state police and forensic capacity sub-schemes",
            "I4C and ICJS programme budgets",
            "IndiaAI compute portal for model training",
            "QCBS RFP with security clearance; GeM for cloud and hardware",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Joint Secretary, with I4C, NCRB, BPR&D and pilot-state DGPs' nominees, oversees delivery. An independent oversight board, including a retired judge and a data protection expert, reviews use and audits.",
          bullets: [
            "Steering Committee meeting every quarter",
            "PMU anchored with NCRB and I4C",
            "Nodal IG-level officer in each pilot state",
            "Independent oversight board with public reporting",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "Processing follows the DPDP Act 2023 and DPDP Rules 2025, applicable law-enforcement provisions, the new criminal laws and MeitY's India AI Governance Guidelines. All data remains on NIC or state data centres in India.",
          bullets: [
            "Purpose limitation and published prohibited uses",
            "Encryption, role-based access and immutable logs",
            "Masking of victim identities, especially in crimes against women and children",
            "Annual CERT-In empanelled security audit",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "Dashboards track freeze time, amount saved, timeline compliance, response time and lab turnaround, compared with non-pilot districts. An independent agency evaluates outcomes and rights safeguards together.",
          bullets: [
            "Pilot versus comparison-district design",
            "Monthly KPI review in the Steering Committee",
            "Mid-term and end-line independent evaluations",
            "Public summary of the annual AI audit",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officers from the Police Modernisation Division, I4C and NCRB.",
        "Week 3–4: Select two pilot states and sign MoUs with their Home Departments.",
        "Month 2: Constitute the oversight board and publish prohibited-use rules.",
        "Month 2–3: Issue the QCBS RFP and complete the data protection assessment.",
        "Month 4: Go live in pilot cyber cells, stations and control rooms.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Home Affairs",
      headline: "Stop the fraud. Solve the case. Reach the caller faster.",
      ask: "Announce the Raksha AI initiative as part of India's fight against cyber fraud and the rollout of the new criminal laws, with pilots in two states within 100 days.",
      keyPoints: [
        "Cyber fraud complaints turned into bank freeze requests in under 15 minutes.",
        "30% more money saved for fraud victims in pilot states.",
        "Charge sheets on time in 95% of pilot cases under the new criminal laws.",
        "Help reaches 112 callers 20% faster.",
        "No mass surveillance — every AI action is human-approved and audited.",
      ],
      sections: [
        {
          heading: "A citizen's story",
          body: "A retired teacher in Coimbatore loses ₹4 lakh to a fake digital-arrest call. Her son calls 1930. Within minutes, AI pulls the transaction details from the Tamil conversation, a cyber cell officer approves the freeze request, and the bank holds the money before it is withdrawn. Weeks later, the investigating officer files a complete charge sheet on time, with evidence that holds up in court.",
          bullets: [
            "Her money is protected in the golden hour",
            "Her case is investigated faster and more thoroughly",
            "She is updated in her own language",
          ],
        },
        {
          heading: "Viksit Bharat @2047 and national priorities",
          body: "A secure, digital India needs police forces that move as fast as criminals. This initiative builds on I4C, CCTNS, ICJS and the new criminal laws to deliver smart, sensitive and technology-driven policing.",
          bullets: [
            "Strengthens the national fight against cyber fraud",
            "Makes the new criminal laws work on the ground",
            "Sets a global benchmark for rights-respecting police AI",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "With two partner states, the first results can be shown within 100 days.",
          bullets: [
            "Day 30: Partner states and oversight board announced",
            "Day 70: Fraud Shield live in pilot cyber cells",
            "Day 100: First public report on money saved and response times",
          ],
        },
        {
          heading: "Value for money",
          body: "Over ₹22,000 crore of cyber fraud was reported in 2025 alone. Even a modest rise in recovery would pay back the programme's ₹300 crore cost many times over.",
          bullets: [
            "Builds on systems MHA has already funded",
            "Subsidised compute under the IndiaAI Mission",
            "Vendor payments linked to measured outcomes",
          ],
        },
      ],
      nextSteps: [
        "Approve the concept and direct MHA to prepare a two-state pilot.",
        "Announce the initiative at a national cybercrime or police conference.",
        "Invite two Chief Ministers to partner in the first phase.",
      ],
    },
  ],
};
