import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "agriculture",
  sector: "Agriculture",
  category: "livelihoods",
  title: "Every farm, a smart farm.",
  tagline:
    "One AI layer on top of AgriStack that turns India's farm data into advice, insurance and income for every farmer, in her own language.",
  summary:
    "India has built the rails of digital agriculture: 11 crore Farmer IDs, crore-scale digital crop surveys and a national soil database. What is missing is the intelligence that turns this data into a decision at the farm gate. Krishi AI plugs into AgriStack and Bharat-VISTAAR to give every farmer voice-first advice, faster claims and fairer prices, and gives every district a live view of its fields.",
  heroStat: {
    value: "11 crore",
    label: "Farmer IDs created under AgriStack, five months ahead of the March 2027 target",
    source: "MoA&FW, Oct 2026",
  },
  context: {
    stats: [
      {
        value: "23.5 crore",
        label: "crop plots surveyed under the Digital Crop Survey",
        source: "MoA&FW, Feb 2026",
      },
      {
        value: "9 crore",
        label: "farmers paid ₹18,000 crore in the 21st PM-KISAN instalment",
        source: "MoA&FW, Nov 2025",
      },
      {
        value: "25 crore+",
        label: "Soil Health Cards distributed to farmers",
        source: "MoA&FW, 2025",
      },
      {
        value: "1,656",
        label: "mandis integrated with e-NAM across 23 States and 4 UTs",
        source: "MoA&FW, Mar 2026",
      },
    ],
    challenges: [
      "Data is rich but advice is thin. Farmer IDs, crop surveys and soil cards sit in separate systems, and very little of it reaches the farmer as a timely, personal recommendation.",
      "Extension staff are stretched across thousands of farmers each, so pest outbreaks and weather shocks are often spotted after the damage is done.",
      "Crop insurance still depends heavily on manual crop-cutting experiments, which slows assessment and fuels disputes over claims.",
      "Small and marginal farmers sell with little price visibility, and most still decide where and when to sell on word of mouth.",
      "Most digital services are text-first and English-first, which excludes farmers who are more comfortable speaking than typing.",
    ],
  },
  policyAlignment: [
    {
      name: "Digital Agriculture Mission (AgriStack, Krishi DSS, Soil Profile Mapping)",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      note: "Approved in September 2024 with an outlay of ₹2,817 crore. Krishi AI consumes Farmer Registry, Crop Sown Registry and geo-referenced village maps through AgriStack APIs, and returns district-level insights to the Krishi Decision Support System.",
    },
    {
      name: "Bharat-VISTAAR",
      ministry: "Ministry of Agriculture & Farmers Welfare (Union Budget 2026-27)",
      note: "The multilingual AI advisory platform announced in Budget 2026-27 with ₹150 crore. Our advisory and crop-doctor services are built as state-level extensions that feed Bharat-VISTAAR rather than compete with it.",
    },
    {
      name: "PM-KISAN and Kisan e-Mitra",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      note: "Kisan e-Mitra already answers PM-KISAN queries in 11 languages. Our Scheme Saathi extends that pattern to resolve payment failures, e-KYC and land-seeding mismatches at district level.",
    },
    {
      name: "PMFBY with YES-TECH, WINDS and CROPIC",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      note: "YES-TECH weightage in yield estimation has risen to up to 50% in some states. Our claims engine fuses satellite, weather-station and geo-tagged crop photos to speed up loss assessment within the scheme's existing rules.",
    },
    {
      name: "Soil Health Card and e-NAM",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      note: "Soil test results drive our fertiliser planner, and e-NAM arrival and price data trains our mandi price forecasts.",
    },
    {
      name: "IndiaAI Mission and Bhashini",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Models are trained and served on subsidised IndiaAI compute, datasets are published to AIKosh where permissible, and all voice and translation runs on Bhashini.",
    },
  ],
  solutions: [
    {
      name: "Kisan Saathi",
      description:
        "A voice-first farm advisor on WhatsApp, IVR and a missed-call line. It knows the farmer's plot from AgriStack and answers in her dialect through Bhashini, from sowing windows to irrigation to scheme eligibility.",
      impact:
        "Personalised advisory reaching 10 lakh farmers in the pilot districts within 12 months.",
    },
    {
      name: "Crop Doctor",
      description:
        "Farmers or Krishi Sakhis photograph a sick plant and get a diagnosis and treatment in seconds. Every confirmed case is geo-tagged and feeds the National Pest Surveillance System as an early-warning signal.",
      impact:
        "Pest and disease alerts issued to a block within 72 hours of the first cluster of cases.",
    },
    {
      name: "Fasal Bima Fast-Track",
      description:
        "An AI engine that combines satellite indices, WINDS weather data and CROPIC photos to estimate yield loss at village level. It flags outliers for targeted crop-cutting instead of blanket field visits.",
      impact: "Loss assessment time cut by 40% in pilot districts, with fewer disputed claims.",
    },
    {
      name: "Mandi Mitra",
      description:
        "Seven-day price forecasts for the top crops in every e-NAM mandi within reach, delivered by voice note. It tells a farmer where to sell, when to hold and what transport will cost.",
      impact: "Measured price realisation gain of 5–8% for farmers who follow the advice.",
    },
    {
      name: "Mitti Planner",
      description:
        "Reads the Soil Health Card and crop plan and prescribes a balanced fertiliser schedule, sized to the plot. It speaks the recommendation aloud and syncs with the nearest input dealer's stock.",
      impact: "10–15% reduction in excess urea use on enrolled plots.",
    },
    {
      name: "Scheme Saathi",
      description:
        "An assistant for farmers and field staff that diagnoses why a PM-KISAN, PMFBY or KCC benefit failed, whether Aadhaar seeding, land record mismatch or bank error, and routes the fix to the right officer.",
      impact: "70% of benefit-failure cases resolved within 15 days in pilot districts.",
    },
  ],
  centralSystem: {
    name: "Krishi AI Command Centre",
    description:
      "A single, sovereign AI platform for agriculture that any state agriculture department, district or central scheme can plug into. It sits on top of AgriStack, reuses national DPI and returns insight to both the farmer and the officer.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "WhatsApp, IVR and missed-call voice advisory in 22 languages via Bhashini",
          "Krishi Sakhi and extension worker field app with offline mode",
          "District and state dashboards for officers",
          "Open APIs for FPOs, banks and insurers under consent",
        ],
      },
      {
        name: "AI services",
        items: [
          "Advisory large language model grounded in ICAR packages of practice",
          "Crop and pest vision models trained on Indian field imagery",
          "Yield, loss and price forecasting models",
          "Benefit-failure diagnosis and grievance triage",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "AgriStack connectors for Farmer Registry and Crop Sown Registry",
          "Satellite and weather data pipelines",
          "Consent manager aligned to the DPDP Act 2023",
          "Feature store and model registry with audit logs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "Hosting on MeghRaj / NIC cloud within India",
          "IndiaAI compute for training and fine-tuning",
          "Model evaluation, bias testing and red-teaming before every release",
          "Role-based access and a public transparency register of models in use",
        ],
      },
    ],
    dataSources: [
      "AgriStack Farmer Registry and Crop Sown Registry",
      "Digital Crop Survey and geo-referenced village maps",
      "Soil Health Card and soil profile maps",
      "IMD forecasts and WINDS weather stations",
      "PMFBY, YES-TECH and CROPIC records",
      "e-NAM and Agmarknet arrivals and prices",
      "Sentinel and ISRO satellite imagery",
    ],
    integrations: [
      "AgriStack and Krishi Decision Support System",
      "Bharat-VISTAAR",
      "PM-KISAN portal and Kisan e-Mitra",
      "Bhashini language APIs",
      "Aadhaar e-KYC and DigiLocker",
      "IndiaAI compute portal and AIKosh",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Go live in 6 districts across 2 agro-climatic zones",
        "Kisan Saathi and Crop Doctor launched in 3 languages",
        "AgriStack and PM-KISAN integrations certified",
        "Baseline survey and third-party evaluation design completed",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All districts of 2 partner states onboarded",
        "Fasal Bima Fast-Track used in one full Kharif and Rabi season",
        "Mandi Mitra covering all e-NAM mandis in partner states",
        "10 lakh active farmers on voice advisory",
      ],
    },
    {
      phase: "Phase 3 — Multi-state",
      duration: "Months 19–30",
      milestones: [
        "Platform offered to 8–10 states as a shared service",
        "All 22 scheduled languages live through Bhashini",
        "Open models and anonymised datasets published on AIKosh",
      ],
    },
    {
      phase: "Phase 4 — National handover",
      duration: "Months 31–36",
      milestones: [
        "Platform integrated into Bharat-VISTAAR as a national service",
        "Operations transferred to a state or central agency PMU",
        "Independent impact evaluation published",
      ],
    },
  ],
  budget: {
    total: "₹180 crore over 3 years",
    items: [
      { head: "Platform build and AgriStack integration", amount: "₹45 crore" },
      {
        head: "AI models, training and IndiaAI compute",
        amount: "₹35 crore",
        note: "Net of IndiaAI compute subsidy",
      },
      {
        head: "Voice, WhatsApp and IVR operations",
        amount: "₹30 crore",
        note: "Telephony and messaging for 3 years",
      },
      { head: "Field rollout and Krishi Sakhi training", amount: "₹30 crore" },
      { head: "Cloud hosting, security and DPDP compliance", amount: "₹22 crore" },
      { head: "PMU, monitoring and third-party evaluation", amount: "₹18 crore" },
    ],
    note: "Indicative estimate for a 2-state pilot-to-scale programme. To be refined after the 6-district pilot and aligned with Digital Agriculture Mission and Bharat-VISTAAR funding.",
  },
  kpis: [
    { metric: "Farmers actively using voice advisory", target: "10 lakh by month 18" },
    { metric: "Advisory answered in the farmer's own language", target: "95% of queries" },
    { metric: "Time from first pest report to block alert", target: "Under 72 hours" },
    { metric: "Crop loss assessment turnaround", target: "40% faster than baseline" },
    { metric: "Benefit-failure cases resolved", target: "70% within 15 days" },
    { metric: "Farmer satisfaction with advice", target: "4 out of 5 or higher" },
  ],
  risks: [
    {
      risk: "Farmer data privacy and consent under the DPDP Act 2023 and DPDP Rules 2025.",
      mitigation:
        "Consent-first design, purpose limitation, data stays on MeghRaj / NIC cloud in India, and a Data Protection Impact Assessment before go-live.",
    },
    {
      risk: "Models perform worse for some crops, regions or dialects.",
      mitigation:
        "Region-wise accuracy testing, Bhashini dialect coverage checks, human review for low-confidence answers and published model cards.",
    },
    {
      risk: "Wrong advice causes crop loss.",
      mitigation:
        "All advice grounded in ICAR packages of practice, conservative thresholds, a 'talk to an expert' escalation, and KVK scientists in the review loop.",
    },
    {
      risk: "Low adoption by extension staff who see AI as extra work.",
      mitigation:
        "Build tools that remove their paperwork first, train through Krishi Sakhis, and count AI-assisted visits in staff performance metrics.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Open standards, government ownership of code, data and model weights, and exit clauses in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare",
      headline: "A 6-district pilot that puts AgriStack to work in six months.",
      ask: "Approve a 6-district pilot of the Krishi AI Command Centre under the Digital Agriculture Mission, nominate a Joint Secretary as nodal officer, and authorise API access to AgriStack and PM-KISAN for the pilot.",
      keyPoints: [
        "Builds on AgriStack, which now covers 11 crore Farmer IDs. No new registry, no duplicate data collection.",
        "Six AI services share one platform, one data layer and one security model.",
        "Designed as a state-level extension of Bharat-VISTAAR, not a parallel system.",
        "Pilot cost of about ₹25 crore within a ₹180 crore three-year envelope, funded through DAM and convergence.",
        "Government owns all code, data and model weights from day one.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The Command Centre is a thin AI layer over existing digital public infrastructure. It reads from AgriStack registries through consented APIs, writes insights back to the Krishi Decision Support System, and uses Bhashini for every language interaction.",
          bullets: [
            "Read-only APIs to Farmer Registry, Crop Sown Registry and Soil Health Card",
            "Write-back of district insights to Krishi DSS",
            "Voice and translation through Bhashini; identity through Aadhaar e-KYC",
            "Modular services so states can adopt one or all six",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We propose a QCBS tender on GeM for the system integrator, with the platform funded from the Digital Agriculture Mission IT component and state convergence funds. Compute is drawn from the IndiaAI Mission at subsidised rates.",
          bullets: [
            "QCBS RFP on GeM with open-source and data-ownership clauses",
            "Pilot funded under DAM; scale-up co-funded by partner states",
            "IndiaAI Mission compute and application development support",
            "Milestone-linked payments tied to adoption and accuracy",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Secretary sets direction, and a PMU in the Digital Agriculture Division runs delivery. Each pilot district names a nodal officer from the agriculture department.",
          bullets: [
            "Steering Committee meets quarterly; PMU reports monthly",
            "District nodal officers and KVK scientist reviewers",
            "Technical committee with ICAR, MeitY and Bhashini representatives",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "The platform follows the DPDP Act 2023 and DPDP Rules 2025, whose core obligations apply from May 2027, and the India AI Governance Guidelines of November 2025. All personal data is hosted in India on MeghRaj / NIC cloud.",
          bullets: [
            "Explicit, purpose-bound farmer consent with easy withdrawal",
            "Data Protection Impact Assessment before go-live",
            "CERT-In aligned security audits and STQC certification",
            "Public register of AI models, their purpose and accuracy",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "Every service reports live adoption, accuracy and grievance data to a ministry dashboard. A third-party evaluator runs a baseline and endline study across pilot and comparison districts.",
          bullets: [
            "Real-time dashboard for the Secretary and state Directors",
            "Monthly accuracy audits against expert-verified samples",
            "Independent randomised evaluation of income and yield outcomes",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officer and select 6 pilot districts with 2 states.",
        "Week 3–4: Sign data-sharing MoU for AgriStack and PM-KISAN APIs.",
        "Week 5–8: Issue QCBS RFP on GeM and constitute the PMU.",
        "Month 3: Kisan Saathi and Crop Doctor live in the first district.",
        "Month 6: Pilot review by the Steering Committee and go or no-go for state scale.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Agriculture & Farmers Welfare",
      headline: "Every farmer, an expert on call.",
      ask: "Announce Krishi AI as the first state-level rollout of Bharat-VISTAAR, with a pilot in 6 districts and a commitment to reach 1 crore farmers by 2029.",
      keyPoints: [
        "11 crore farmers now have a digital ID. Krishi AI gives each of them advice in their own voice and language.",
        "A photo of a sick crop gets a diagnosis in seconds.",
        "Faster, fairer crop insurance assessment using satellites and AI.",
        "Better prices through seven-day mandi forecasts.",
        "Built on Indian AI, Indian compute and Indian languages.",
      ],
      sections: [
        {
          heading: "A day with Kisan Saathi",
          body: "Sunita grows soybean on two acres in Vidisha. At dawn she sends a voice note in Hindi about yellowing leaves. Within a minute she hears a diagnosis, the right spray and the nearest dealer that has it in stock. In the evening, Kisan Saathi tells her prices at the nearby mandi will rise this week, so she waits three days to sell.",
          bullets: [
            "No app, no typing, no English needed",
            "Advice based on her own plot, soil and weather",
            "Her PM-KISAN and insurance status in the same conversation",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "Krishi AI turns the Digital Agriculture Mission from a data project into a farmer service. It delivers on the Budget 2026-27 promise of Bharat-VISTAAR and on the goal of raising farm incomes through technology.",
          bullets: [
            "Puts AgriStack to work for every farmer",
            "Strengthens natural farming and balanced fertiliser use",
            "Showcases sovereign AI under the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "The first 100 days deliver visible, announceable results in the pilot districts. Each milestone is a public moment.",
          bullets: [
            "Day 30: Kisan Saathi helpline number launched",
            "Day 60: Crop Doctor live with Krishi Sakhis in 6 districts",
            "Day 90: First AI pest alert issued to farmers",
            "Day 100: 1 lakh farmers served, results shared publicly",
          ],
        },
        {
          heading: "Value for money",
          body: "At about ₹180 crore over three years for two states, the cost per farmer reached is a small fraction of the value of one avoided crop loss. Shared infrastructure means every additional state costs far less than the first.",
          bullets: [
            "One platform, reusable by every state",
            "Payments tied to adoption and accuracy",
            "All code and data owned by government",
          ],
        },
      ],
      nextSteps: [
        "Approve the pilot and announce Krishi AI at the next Kisan event.",
        "Invite two states to co-lead the pilot.",
        "Review the 100-day results and announce state-wide scale-up.",
      ],
    },
  ],
};
