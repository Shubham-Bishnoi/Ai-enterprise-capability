import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "healthcare",
  sector: "Healthcare",
  category: "social",
  title: "Care that reaches every village.",
  tagline:
    "An AI layer on India's digital health rails, so every citizen gets the right care, first time, in their own language.",
  summary:
    "India has built one of the world's largest digital health backbones: ABHA, PM-JAY, eSanjeevani and over 1.8 lakh Ayushman Arogya Mandirs. What it lacks is intelligence at the point of care. We propose a single Swasthya AI Command Centre that puts voice triage, clinical decision support, TB screening and claims integrity on top of ABDM, in 22 languages.",
  heroStat: {
    value: "93.95 crore",
    label: "ABHA health IDs created under the Ayushman Bharat Digital Mission",
    source: "MoHFW / NHA, July 2026",
  },
  context: {
    stats: [
      {
        value: "105 crore+",
        label: "digital health records linked to ABHA",
        source: "MoHFW / NHA, July 2026",
      },
      {
        value: "50 crore+",
        label: "free teleconsultations delivered on eSanjeevani",
        source: "MoHFW, October 2026",
      },
      {
        value: "1,80,906",
        label: "Ayushman Arogya Mandirs operational nationwide",
        source: "MoHFW, October 2025",
      },
      {
        value: "21%",
        label: "decline in India's TB incidence, 2015 to 2024 — still a quarter of global cases",
        source: "WHO Global TB Report 2025",
      },
    ],
    challenges: [
      "Records are digital, but decisions are not. Over 105 crore linked records sit largely unused at the point of care.",
      "Community Health Officers at Ayushman Arogya Mandirs manage 12 service packages with limited specialist backup.",
      "Citizens describe symptoms in their own language and dialect. Most digital health tools still expect English or Hindi text.",
      "India still carries about a quarter of the world's TB burden. Missed and late diagnoses keep transmission alive.",
      "PM-JAY's scale, now including every citizen aged 70 and above, makes manual claims scrutiny slow and leaky.",
    ],
  },
  policyAlignment: [
    {
      name: "Ayushman Bharat Digital Mission (ABDM)",
      ministry: "Ministry of Health & Family Welfare (National Health Authority)",
      note: "Every AI service reads and writes through ABDM consent flows and FHIR records. No parallel database is created.",
    },
    {
      name: "Ayushman Bharat PM-JAY, incl. Ayushman Vay Vandana (70+)",
      ministry: "Ministry of Health & Family Welfare (National Health Authority)",
      note: "Claim Sentinel adds AI anomaly detection to the NHA transaction management system, protecting a fast-growing senior citizen cohort.",
    },
    {
      name: "Ayushman Arogya Mandirs under National Health Mission",
      ministry: "Ministry of Health & Family Welfare",
      note: "CHO Copilot runs on existing AAM tablets and follows national standard treatment guidelines for the 12 service packages.",
    },
    {
      name: "TB Mukt Bharat / National TB Elimination Programme (Ni-kshay)",
      ministry: "Ministry of Health & Family Welfare",
      note: "TB Radar pushes AI-flagged presumptive cases straight into Ni-kshay for confirmatory testing and Ni-kshay Poshan Yojana support.",
    },
    {
      name: "AI Centres of Excellence in Health (AIIMS Delhi, PGIMER Chandigarh, AIIMS Rishikesh)",
      ministry: "Ministry of Health & Family Welfare",
      note: "Clinical validation of every model is anchored with a designated AI CoE before state roll-out.",
    },
    {
      name: "IndiaAI Mission",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Subsidised GPU compute through the IndiaAI compute portal and Bhashini language models keep running costs low and sovereign.",
    },
  ],
  solutions: [
    {
      name: "Arogya Saathi",
      description:
        "A voice-first health assistant on WhatsApp and a toll-free IVR. Citizens speak symptoms in any of 22 languages via Bhashini; AI triages, books the nearest Ayushman Arogya Mandir slot or an eSanjeevani call, and sends reminders.",
      impact: "Target: 30% fewer avoidable district hospital OPD visits in pilot blocks.",
    },
    {
      name: "CHO Copilot",
      description:
        "Clinical decision support for Community Health Officers on AAM tablets. It reads the ABHA history, suggests protocol-based next steps for NCDs, maternal and child care, and flags red cases for teleconsultation.",
      impact: "Target: 90% protocol adherence for hypertension and diabetes follow-ups.",
    },
    {
      name: "TB Radar",
      description:
        "AI reading of chest X-rays at block facilities and mobile vans, plus cough-sound screening in community camps. Presumptive cases are pushed to Ni-kshay for NAAT confirmation.",
      impact: "Target: 25% more presumptive TB cases identified per 1 lakh population screened.",
    },
    {
      name: "Claim Sentinel",
      description:
        "Machine learning on PM-JAY pre-authorisation and claims data to flag duplicate, upcoded or phantom claims for human review, prioritised by risk score.",
      impact: "Target: ₹100 crore+ in suspect claims flagged for review each year at state scale.",
    },
    {
      name: "Scribe AI",
      description:
        "Ambient, consent-based voice documentation for doctors at PHCs and CHCs. It converts a spoken consultation in the local language into a structured, ABDM-compliant prescription and record.",
      impact: "Target: 40% less documentation time per OPD patient.",
    },
    {
      name: "Pulse Watch",
      description:
        "Early-warning models that combine IHIP disease surveillance, weather, Ni-kshay notifications and drug stock data to predict outbreaks and medicine stock-outs two to four weeks ahead.",
      impact: "Target: 50% fewer essential-medicine stock-out days at AAMs and PHCs.",
    },
  ],
  centralSystem: {
    name: "Swasthya AI Command Centre",
    description:
      "One national AI platform, hosted on government cloud, that any state health department, NHM unit or hospital can plug into through ABDM-compliant APIs. Models are built once, validated once and reused everywhere.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Arogya Saathi on WhatsApp, IVR and the ABHA app",
          "CHO Copilot on AAM tablets",
          "Doctor-facing Scribe AI in HMIS and eSanjeevani",
          "District and state command dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Multilingual voice triage on Bhashini ASR and TTS",
          "Clinical decision support aligned to national STGs",
          "Medical imaging models for TB and NCD screening",
          "Claims fraud and anomaly detection",
          "Outbreak and supply forecasting",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "ABDM consent manager and FHIR gateway",
          "De-identified analytics lake for model training",
          "Model registry with version, validation and audit logs",
          "API gateway with role-based access",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud, data stored in India",
          "IndiaAI compute portal GPUs for training",
          "Clinical safety board with AI CoE reviewers",
          "DPDP-compliant consent, retention and breach protocols",
        ],
      },
    ],
    dataSources: [
      "ABHA-linked health records (with consent)",
      "PM-JAY transaction and claims data",
      "Ni-kshay TB notifications and outcomes",
      "eSanjeevani consultation metadata",
      "IHIP disease surveillance feeds",
      "Drugs and vaccine stock data (DVDMS, U-WIN)",
      "HMIS facility performance data",
    ],
    integrations: [
      "ABDM (ABHA, HPR, HFR, consent manager)",
      "NHA PM-JAY transaction management system",
      "Ni-kshay",
      "eSanjeevani",
      "Bhashini",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 0 — Foundations",
      duration: "Months 0–3",
      milestones: [
        "MoU with state health department and NHA sandbox access",
        "Clinical safety board constituted with an AI CoE partner",
        "Data protection impact assessment completed",
        "Baseline survey in 6 pilot districts",
      ],
    },
    {
      phase: "Phase 1 — Pilot in 6 districts",
      duration: "Months 4–9",
      milestones: [
        "Arogya Saathi live in 3 languages across 300 AAMs",
        "CHO Copilot deployed to 600 Community Health Officers",
        "TB Radar on 20 X-ray units and 6 mobile vans",
        "Independent mid-line evaluation published",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 10–21",
      milestones: [
        "All AAMs, PHCs and CHCs in the state onboarded",
        "Claim Sentinel integrated with state PM-JAY operations",
        "Scribe AI in every district hospital OPD",
        "Pulse Watch forecasts shared weekly with district collectors",
      ],
    },
    {
      phase: "Phase 3 — Multi-state platform",
      duration: "Months 22–36",
      milestones: [
        "Command Centre offered as a shared service to 5+ states",
        "All 22 scheduled languages live on Arogya Saathi",
        "Models published to the national AI CoE registry",
        "Endline impact evaluation and cost-effectiveness study",
      ],
    },
  ],
  budget: {
    total: "₹380 crore over 3 years",
    items: [
      {
        head: "AI model development & clinical validation",
        amount: "₹85 crore",
        note: "Including CoE validation studies",
      },
      {
        head: "Platform, integration & cloud hosting",
        amount: "₹95 crore",
        note: "MeghRaj / NIC cloud, ABDM integration",
      },
      {
        head: "Field devices & imaging AI licences",
        amount: "₹70 crore",
        note: "Tablets top-up, X-ray AI at block level",
      },
      {
        head: "Training & change management",
        amount: "₹55 crore",
        note: "CHOs, ANMs, ASHAs, medical officers",
      },
      {
        head: "Programme management unit",
        amount: "₹40 crore",
        note: "State and national PMU for 3 years",
      },
      {
        head: "Independent evaluation & security audits",
        amount: "₹35 crore",
        note: "Third-party M&E, CERT-In empanelled audits",
      },
    ],
    note: "Indicative estimate for a one-state pilot scaling to a multi-state shared service. To be refined after the Phase 1 pilot and converged with NHM, ABDM and PM-JAY administrative budgets.",
  },
  kpis: [
    {
      metric: "Citizens triaged through Arogya Saathi",
      target: "1 crore interactions by Month 24",
    },
    { metric: "CHO protocol adherence for NCD follow-up", target: "90% in pilot facilities" },
    {
      metric: "Additional presumptive TB cases identified",
      target: "+25% vs baseline in pilot districts",
    },
    {
      metric: "Suspect PM-JAY claims flagged and reviewed",
      target: "100% of high-risk claims within 72 hours",
    },
    { metric: "Essential-medicine stock-out days", target: "50% reduction at AAMs and PHCs" },
    { metric: "Citizen satisfaction with AI-assisted care", target: "85%+ in independent survey" },
  ],
  risks: [
    {
      risk: "Clinical safety — an AI suggestion could be wrong.",
      mitigation:
        "AI only assists; a qualified clinician decides. Models are validated with an AI Centre of Excellence, follow ICMR ethical guidelines for AI in healthcare, and go through CDSCO pathways where software qualifies as a medical device.",
    },
    {
      risk: "Health data privacy and DPDP Act 2023 compliance.",
      mitigation:
        "ABDM consent for every record, purpose limitation, data stored in India on MeghRaj / NIC cloud, de-identified training data, and full readiness for DPDP Rules 2025 obligations before May 2027.",
    },
    {
      risk: "Model bias and uneven language coverage.",
      mitigation:
        "Accuracy reported by language, gender, age and district. Bhashini models fine-tuned on local dialect data. A language goes live only after crossing accuracy thresholds.",
    },
    {
      risk: "Low adoption by overburdened field staff.",
      mitigation:
        "Tools reduce work rather than add forms. Offline-first design, training in local language, and champions in every block.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Open standards (FHIR, ABDM APIs), government ownership of data and model weights, and source code escrow written into the contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Department of Health & Family Welfare, Government of India (copy: CEO, National Health Authority)",
      headline: "Intelligence on rails you have already built.",
      ask: "Approve a 6-district pilot of the Swasthya AI Command Centre in one state, funded through NHM and ABDM IT components, and nominate a Joint Secretary-level nodal officer and an NHA technical lead.",
      keyPoints: [
        "No new database. Every service runs on ABDM consent flows and FHIR records.",
        "Six AI products, one platform, one clinical safety board.",
        "Indicative ₹380 crore over three years, with a pilot that costs a fraction of that.",
        "Procurement through GeM and QCBS, with IndiaAI compute and Bhashini at subsidised cost.",
        "DPDP-ready from day one, hosted on MeghRaj / NIC cloud inside India.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The Command Centre is a thin AI layer on top of systems the Ministry already runs. It plugs into ABDM, PM-JAY, Ni-kshay, eSanjeevani and IHIP through published APIs. States consume it as a shared service rather than building their own.",
          bullets: [
            "ABDM gateway for consent-based record access",
            "Bhashini APIs for speech and translation in 22 languages",
            "Offline-first apps on existing AAM tablets",
            "Single model registry with audit logs",
          ],
        },
        {
          heading: "Procurement & funding route",
          body: "We recommend a QCBS RFP for the system integrator and GeM for devices and cloud. Funding converges NHM IT budgets, the ABDM allocation and PM-JAY administrative costs, with compute from the IndiaAI Mission.",
          bullets: [
            "QCBS selection under GFR 2017 for the platform integrator",
            "GeM procurement for tablets, X-ray AI licences and cloud",
            "Convergence with NHM PIP and ABDM implementation funds",
            "IndiaAI compute portal for subsidised GPU access",
          ],
        },
        {
          heading: "Governance",
          body: "A steering committee chaired by the Secretary sets direction. A PMU runs delivery. A clinical safety board signs off every model before it touches a patient.",
          bullets: [
            "National steering committee meeting quarterly",
            "State Mission Director, NHM as state nodal officer",
            "District nodal officers in each pilot district",
            "Clinical safety board with AIIMS / PGIMER AI CoE reviewers",
          ],
        },
        {
          heading: "Data protection & compliance",
          body: "Health data is sensitive and the law is now clear. The platform is designed to meet the DPDP Act 2023 and DPDP Rules 2025 well before obligations become fully enforceable in May 2027.",
          bullets: [
            "Explicit, purpose-specific consent via ABDM",
            "Data localisation on MeghRaj / NIC cloud",
            "De-identified data for model training only",
            "CERT-In incident reporting and annual security audits",
          ],
        },
        {
          heading: "Monitoring & evaluation",
          body: "Live dashboards track usage, accuracy and outcomes by district. An independent agency runs baseline, mid-line and endline evaluations.",
          bullets: [
            "Real-time KPI dashboard for the Ministry and states",
            "Model accuracy reported by language and demographic group",
            "Third-party evaluation at Months 9 and 36",
            "Quarterly report to the steering committee",
          ],
        },
      ],
      nextSteps: [
        "Week 2: Nominate nodal officer and NHA technical lead.",
        "Week 4: Select pilot state and 6 districts with the state Mission Director.",
        "Week 8: Sign MoU and issue QCBS RFP for the platform integrator.",
        "Week 10: Constitute clinical safety board with an AI CoE.",
        "Month 4: Go live in pilot districts.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Health & Family Welfare",
      headline: "A doctor's guidance, in every language, in every village.",
      ask: "Announce the Swasthya AI Command Centre as India's national AI platform for public health, with a pilot launch in 100 days.",
      keyPoints: [
        "93.95 crore Indians already have an ABHA ID. Now that record can work for them.",
        "Health guidance by voice, in 22 languages, on WhatsApp or a simple phone call.",
        "Faster TB detection, supporting the national push to end TB.",
        "Stronger protection for PM-JAY, including every senior citizen aged 70 and above.",
        "Built in India, hosted in India, owned by India.",
      ],
      sections: [
        {
          heading: "A day in the life",
          body: "Kamla Devi, 72, lives in a village two hours from the district hospital. Her cough has lasted three weeks. She calls a toll-free number and speaks in her own dialect. Arogya Saathi asks a few questions, books her a slot at the nearest Ayushman Arogya Mandir and flags her for a TB check. The CHO sees her history on screen, an AI-read X-ray flags TB, and she starts treatment the same week.",
          bullets: [
            "No travel to the district hospital for a first opinion",
            "Diagnosis in days, not months",
            "Treatment and nutrition support linked through Ni-kshay",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "A developed India needs healthy citizens. This programme turns the digital health stack India has built into better outcomes, and positions India as a global leader in public-interest AI.",
          bullets: [
            "Builds on ABDM, PM-JAY and Ayushman Arogya Mandirs",
            "Uses the IndiaAI Mission and Bhashini",
            "Supports TB Mukt Bharat and NCD control",
            "Exportable as a model for the Global South",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Three announceable moments in the first 100 days, each with a visible citizen benefit.",
          bullets: [
            "Day 30: Launch of the Swasthya AI Command Centre and pilot state",
            "Day 60: Arogya Saathi voice helpline live in 3 languages",
            "Day 100: First 300 Ayushman Arogya Mandirs running CHO Copilot",
          ],
        },
        {
          heading: "Value for money",
          body: "An indicative ₹380 crore over three years is small against the national health budget. Savings from claims integrity and fewer avoidable hospital visits can repay a large share of it.",
          bullets: [
            "One platform shared by many states, not many silos",
            "Claims integrity savings re-invested in care",
            "Every outcome independently measured",
          ],
        },
      ],
      nextSteps: [
        "Approve the programme in principle.",
        "Announce the pilot state at the next health ministers' conference.",
        "Review progress at 100 days with a public dashboard.",
      ],
    },
  ],
};
