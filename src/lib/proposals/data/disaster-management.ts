import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "disaster-management",
  sector: "Disaster Management & Climate",
  category: "governance",
  title: "Warned early. Ready always.",
  tagline:
    "AI that turns every forecast into a village-level action plan, and every alert into a message people understand and act on.",
  summary:
    "India faced extreme weather on almost every day of 2025. The country already has world-class forecasting through IMD and Mission Mausam, and nationwide alerting through SACHET. We propose an Aapda AI Command Centre that converts forecasts into impact-based local warnings, speeds up damage assessment and relief, and coordinates volunteers — so warnings become actions and actions save lives.",
  heroStat: {
    value: "270 of 273",
    label: "days with extreme weather events in India, January to September 2025",
    source: "CSE and Down To Earth, Climate India 2025",
  },
  context: {
    stats: [
      {
        value: "4,064",
        label: "deaths linked to extreme weather events in the first nine months of 2025",
        source: "CSE and Down To Earth, Climate India 2025",
      },
      {
        value: "134 billion+",
        label: "SMS alerts sent through SACHET in 19+ languages across all 36 States and UTs",
        source: "C-DOT / Department of Telecommunications, May 2026",
      },
      {
        value: "₹2,04,401 crore",
        label: "recommended for State Disaster Response and Mitigation Funds, 2026-27 to 2030-31",
        source: "16th Finance Commission Report, 2026",
      },
      {
        value: "₹2,000 crore",
        label: "Mission Mausam outlay to make India weather-ready and climate-smart",
        source: "Union Cabinet, September 2024",
      },
    ],
    challenges: [
      "Alerts reach phones, but too many are generic. People need to know what the forecast means for their road, their crop and their home.",
      "District disaster management plans are often static documents, with vulnerability data spread across departments.",
      "Heatwaves and lightning, now recommended by the 16th Finance Commission for the notified disaster list, need hyperlocal, fast warnings.",
      "Damage and needs assessment is slow and manual, which delays relief to families and memoranda for central assistance.",
      "Mitigation funds are growing, but spending them well needs evidence on where risk is highest and which measures work.",
    ],
  },
  policyAlignment: [
    {
      name: "National Disaster Management Plan and SACHET (Common Alerting Protocol)",
      ministry: "National Disaster Management Authority, Ministry of Home Affairs",
      note: "The Alert Composer drafts CAP-compliant alerts for SACHET and its Cell Broadcast upgrade launched in May 2026. Authorised officers approve before dispatch.",
    },
    {
      name: "Mission Mausam",
      ministry: "Ministry of Earth Sciences (IMD, IITM, NCMRWF)",
      note: "IMD forecasts and nowcasts are the input; our impact models translate them into local risk for districts and blocks.",
    },
    {
      name: "SDRF, SDMF, NDRF and NDMF under the 16th Finance Commission",
      ministry: "Ministry of Home Affairs and Ministry of Finance",
      note: "Mitigation funds can finance AI-enabled early warning and risk mapping; Rapid Damage Lens speeds up assessments for response funds.",
    },
    {
      name: "Aapda Mitra and Yuva Aapda Mitra",
      ministry: "National Disaster Management Authority",
      note: "Aapda Mitra Connect coordinates over 1 lakh trained volunteers and the 2.37 lakh youth volunteers being trained across 315 districts.",
    },
    {
      name: "Coalition for Disaster Resilient Infrastructure (CDRI)",
      ministry: "India-led global partnership, with NDMA and Ministry of External Affairs",
      note: "Infrastructure risk scores and post-disaster lessons feed CDRI's resilience work and can be shared with partner countries.",
    },
    {
      name: "Digital India BHASHINI and IndiaAI Mission",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Voice alerts and helplines in local languages, and subsidised compute for impact and imagery models.",
    },
  ],
  solutions: [
    {
      name: "Impact Forecast Engine",
      description:
        "Combines IMD forecasts with terrain, river, housing and population data to say what will happen where — which villages may flood, which roads may close, which wards face dangerous heat.",
      impact: "Block-level impact forecasts 72 hours ahead for every major hazard in pilot states.",
    },
    {
      name: "Last-Mile Alert Composer",
      description:
        "Drafts clear, CAP-compliant alerts in the local language and dialect with specific actions, and creates voice versions through BHASHINI for IVR and community radio. An authorised officer approves every alert.",
      impact: "Alerts with specific actions issued within 15 minutes of a forecast update.",
    },
    {
      name: "Heat and Lightning Shield",
      description:
        "Hyperlocal heat-health and lightning warnings for farmers, outdoor workers, schools and hospitals, linked to heat action plans and delivered by voice call and WhatsApp.",
      impact: "Lightning and heat deaths in pilot districts down 30% over three seasons.",
    },
    {
      name: "Rapid Damage Lens",
      description:
        "Uses satellite and drone imagery to map damaged houses, crops, roads and power lines within days, and pre-fills damage reports for field officers to verify.",
      impact: "Preliminary damage assessment in 72 hours instead of weeks.",
    },
    {
      name: "Relief Ledger",
      description:
        "Tracks relief camps, supplies and payments to affected families, matches needs to stocks, and flags duplicate or missed beneficiaries for officers to review.",
      impact: "Relief payments reach 90% of verified families within 15 days.",
    },
    {
      name: "Aapda Mitra Connect",
      description:
        "A WhatsApp and IVR coordination tool that assigns tasks to trained volunteers, collects ground reports with photos and location, and supports family reunification with consent.",
      impact: "Verified ground reports from every affected gram panchayat within 24 hours.",
    },
  ],
  centralSystem: {
    name: "Aapda AI Command Centre",
    description:
      "A national AI platform hosted with NDMA that any state or district emergency operations centre can plug into. It reads forecasts, maps risk, drafts alerts, measures damage and tracks relief, while states keep command of every decision.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "SACHET alerts, Cell Broadcast, IVR and WhatsApp",
          "Aapda Mitra volunteer app",
          "District and state EOC dashboards",
          "Field officer damage verification app",
        ],
      },
      {
        name: "AI services",
        items: [
          "Impact-based forecasting and risk scoring",
          "Multilingual alert drafting and voice via BHASHINI",
          "Satellite and drone damage detection",
          "Relief need-matching and duplicate checks",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "IMD forecasts, nowcasts and observations",
          "Hazard, exposure and vulnerability maps",
          "Census, housing and infrastructure layers",
          "Relief, beneficiary and payment records",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud with disaster-site failover",
          "IndiaAI compute for model training",
          "Alert approval workflow and audit logs",
          "Model validation against observed events",
        ],
      },
    ],
    dataSources: [
      "IMD and Mission Mausam forecasts and radar data",
      "Central Water Commission flood forecasts",
      "ISRO / NRSC satellite imagery and Bhuvan layers",
      "PM Gati Shakti infrastructure layers",
      "Census and housing data",
      "State relief and DBT payment records",
      "Aapda Mitra ground reports",
    ],
    integrations: [
      "SACHET (Common Alerting Protocol) and Cell Broadcast",
      "IMD and Mission Mausam data services",
      "ISRO Bhuvan",
      "Digital India BHASHINI",
      "PFMS / DBT for relief payments",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Impact Forecast Engine and Alert Composer in 6 multi-hazard districts across 2 states",
        "Heat and Lightning Shield ready before the summer season",
        "Rapid Damage Lens tested on recent events",
        "Baseline on alert lead time, reach and response",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All districts of the 2 pilot states covered through the monsoon and cyclone season",
        "Aapda Mitra Connect onboarded for trained volunteers",
        "Relief Ledger used for at least one major event",
        "Independent evaluation after the first full monsoon",
      ],
    },
    {
      phase: "Phase 3 — National",
      duration: "Months 19–36",
      milestones: [
        "10+ states, prioritising coastal, Himalayan and flood-prone states",
        "Alerts in all 22 scheduled languages",
        "Damage Lens outputs accepted for central assistance memoranda",
        "Platform operated by NDMA with state EOCs",
      ],
    },
  ],
  budget: {
    total: "₹220 crore over 3 years",
    items: [
      {
        head: "Impact forecasting models and data",
        amount: "₹50 crore",
        note: "Hazard, exposure and vulnerability modelling",
      },
      {
        head: "Alerting and language services",
        amount: "₹25 crore",
        note: "Alert Composer, BHASHINI voice and IVR",
      },
      {
        head: "Satellite and drone damage assessment",
        amount: "₹40 crore",
        note: "Imagery, drones and detection models",
      },
      {
        head: "Compute and resilient cloud",
        amount: "₹35 crore",
        note: "IndiaAI GPUs and MeghRaj with failover",
      },
      {
        head: "District rollout, volunteers and training",
        amount: "₹35 crore",
        note: "EOC staff and Aapda Mitras",
      },
      {
        head: "PMU, evaluation and audits",
        amount: "₹35 crore",
        note: "Including post-event reviews",
      },
    ],
    note: "Indicative estimate, to be refined after the pilot. Designed to converge with mitigation funds under the 16th Finance Commission, Mission Mausam and NDMA programmes.",
  },
  kpis: [
    {
      metric: "Lead time of impact-based alerts for major hazards",
      target: "72 hours for cyclones and floods",
    },
    {
      metric: "Alerts issued in the local language with specific actions",
      target: "100% in pilot districts",
    },
    {
      metric: "Heat and lightning deaths in pilot districts",
      target: "Down 30% over three seasons",
    },
    { metric: "Time to preliminary damage assessment", target: "72 hours" },
    { metric: "Verified families receiving relief within 15 days", target: "90%" },
    {
      metric: "Gram panchayats reporting ground status within 24 hours",
      target: "100% of affected GPs",
    },
  ],
  risks: [
    {
      risk: "A wrong or excessive alert erodes public trust.",
      mitigation:
        "Every alert is approved by an authorised officer, models are validated against IMD and observed events, and false-alarm rates are tracked publicly.",
    },
    {
      risk: "Personal data of affected families is misused.",
      mitigation:
        "Processing under the DPDP Act 2023 and DPDP Rules 2025, collection limited to relief purposes, hosting on MeghRaj or NIC cloud, and deletion schedules after relief closes.",
    },
    {
      risk: "Models under-serve remote, tribal or low-connectivity areas.",
      mitigation:
        "Voice and community-radio channels, local-language testing, and accuracy reported separately for hilly, coastal and tribal districts.",
    },
    {
      risk: "District staff fall back to manual methods during a crisis.",
      mitigation:
        "Drills before every season, offline-capable apps, and training of EOC staff and Aapda Mitras.",
    },
    {
      risk: "Dependence on one vendor for critical systems.",
      mitigation:
        "Open standards such as CAP, government-owned data and models, multi-cloud failover and exit clauses.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Member Secretary, National Disaster Management Authority",
      headline: "From forecast to action in minutes, on the systems NDMA already runs.",
      ask: "Approve a 6-month pilot in 6 multi-hazard districts across two states, funded through NDMA programmes and state mitigation funds, and nominate a nodal Joint Advisor and state nodal officers.",
      keyPoints: [
        "Builds on SACHET, Cell Broadcast, IMD and Mission Mausam. No parallel alert system.",
        "Turns forecasts into impact-based, local-language actions.",
        "Pilot cost about ₹25 crore within a ₹220 crore three-year envelope.",
        "Speeds damage assessment for relief and central assistance.",
        "Human approval of every alert; full audit trail.",
      ],
      sections: [
        {
          heading: "Implementation architecture and integration",
          body: "The platform consumes IMD and CWC forecasts, adds local exposure and vulnerability data, and sends approved alerts through SACHET using the Common Alerting Protocol. State EOCs use a shared dashboard, and districts keep full control.",
          bullets: [
            "CAP-compliant integration with SACHET and Cell Broadcast",
            "IMD, Mission Mausam and CWC data feeds",
            "ISRO Bhuvan and PM Gati Shakti layers for exposure",
            "PFMS / DBT for relief payment tracking",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "Funding converges with NDMA programmes, state mitigation funds under the 16th Finance Commission and Mission Mausam outputs, with compute from the IndiaAI Mission. Procurement uses a QCBS RFP, with imagery and drones on GeM.",
          bullets: [
            "State Disaster Mitigation Funds for early warning and risk mapping",
            "NDMA programme budgets for national platform costs",
            "IndiaAI compute portal for GPUs",
            "QCBS RFP for the integrator; GeM for drones and imagery",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Member Secretary, NDMA, with IMD, NRSC, C-DOT and pilot-state SDMA representatives, oversees the programme. A PMU at NDMA runs delivery, and each district names its DDMA nodal officer.",
          bullets: [
            "Steering Committee meeting quarterly and before each season",
            "PMU housed at NDMA",
            "SDMA and DDMA nodal officers in pilot states",
            "Post-event reviews after every major disaster",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "All processing follows the DPDP Act 2023 and the DPDP Rules 2025, with emergency-use provisions applied narrowly. Data stays in India on MeghRaj or NIC cloud, and every alert and model output is logged.",
          bullets: [
            "Purpose-limited collection of beneficiary data",
            "Hosting in India with disaster-site failover",
            "Alignment with MeitY's India AI Governance Guidelines",
            "Annual security and model audit",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "Dashboards track lead time, reach, false alarms, damage assessment time and relief speed. An independent agency evaluates outcomes after each season against comparison districts.",
          bullets: [
            "Pre-season baseline in pilot and comparison districts",
            "Season-end evaluation reports",
            "Public false-alarm and reach statistics",
            "Lessons shared with all SDMAs and CDRI",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate a nodal Joint Advisor at NDMA and select two pilot states.",
        "Week 3–4: Sign MoUs with pilot SDMAs and agree data-sharing with IMD, CWC and NRSC.",
        "Month 2: Issue the QCBS RFP and secure IndiaAI compute.",
        "Month 3: Complete the data protection assessment and seasonal baseline.",
        "Month 4: Go live ahead of the next heat or monsoon season.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Minister of State for Home Affairs (Disaster Management)",
      headline: "Every warning in your language. Every family ready.",
      ask: "Announce the Aapda AI initiative as India's next step towards zero-casualty disaster management, with pilots live before the coming monsoon.",
      keyPoints: [
        "Village-level warnings 72 hours ahead of cyclones and floods.",
        "Every alert in the local language, with clear actions.",
        "Heat and lightning deaths cut by 30% in pilot districts.",
        "Damage assessed in 72 hours, so relief reaches families faster.",
        "Built on SACHET, IMD and Mission Mausam — India's own systems.",
      ],
      sections: [
        {
          heading: "A family's story",
          body: "Sunita runs a small farm in coastal Odisha. Today she hears a cyclone is coming, but not what it means for her village. With Aapda AI, she gets a voice message in Odia three days ahead telling her which shelter to use and when to move her cattle. After the storm, a drone survey records the damage to her house, and relief reaches her bank account within two weeks.",
          bullets: [
            "A clear warning she can act on",
            "Help from trained local volunteers",
            "Faster, fairer relief",
          ],
        },
        {
          heading: "Viksit Bharat @2047 and national priorities",
          body: "A developed India must be a resilient India. This initiative brings together Mission Mausam, SACHET and the 16th Finance Commission's focus on mitigation to protect lives, livelihoods and infrastructure.",
          bullets: [
            "Advances the goal of minimising disaster deaths",
            "Strengthens India's global leadership through CDRI",
            "Puts AI to work for the most vulnerable citizens",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "With two partner states, the first services can be live within 100 days, ahead of the next season.",
          bullets: [
            "Day 30: Partner states and districts announced",
            "Day 70: Local-language impact alerts tested in a live drill",
            "Day 100: Heat and Lightning Shield live in pilot districts",
          ],
        },
        {
          heading: "Value for money",
          body: "At about ₹220 crore over three years, the programme is a small share of the ₹2,04,401 crore recommended for state disaster funds for 2026-31, and it helps those funds work harder.",
          bullets: [
            "Reuses SACHET, IMD, Bhuvan and BHASHINI",
            "Faster assessments reduce relief delays and leakages",
            "Every rupee tied to measured outcomes",
          ],
        },
      ],
      nextSteps: [
        "Approve the concept and direct NDMA to prepare the pilot.",
        "Announce the initiative at the next NDMA Formation Day or national disaster preparedness event.",
        "Invite two disaster-prone states to lead the first phase.",
      ],
    },
  ],
};
