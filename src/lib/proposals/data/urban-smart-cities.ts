import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "urban-smart-cities",
  sector: "Urban Governance & Smart Cities",
  category: "infrastructure",
  title: "Cities that think ahead.",
  tagline:
    "AI that turns India's 100 command centres into one network that fixes problems before citizens have to complain.",
  summary:
    "The Smart Cities Mission left every one of its 100 cities with an Integrated Command and Control Centre. With the Mission closed and the ₹1 lakh crore Urban Challenge Fund now open, the question is what those centres do next. We propose a Nagar AI Command Centre that links them into one national platform for grievances, property tax, waste, flooding and building approvals, available to any city in India.",
  heroStat: {
    value: "60 crore",
    label: "Indians will live in towns and cities by 2036 — about 40% of the population",
    source: "World Bank, 2024",
  },
  context: {
    stats: [
      {
        value: "₹1 lakh crore",
        label:
          "Urban Challenge Fund approved to unlock ₹4 lakh crore of city investment, FY26–FY31",
        source: "Union Cabinet, February 2026",
      },
      {
        value: "100",
        label: "Integrated Command and Control Centres — one in every Smart City",
        source: "MoHUA, 2025",
      },
      {
        value: "0.6%",
        label: "of GDP — total revenue receipts of India's municipal corporations",
        source: "RBI Report on Municipal Finances, 2024",
      },
      {
        value: "1,048 of 2,476",
        label: "legacy dumpsites fully remediated under SBM-Urban 2.0",
        source: "MoHUA, 2025",
      },
    ],
    challenges: [
      "Command centres collect vast data from cameras and sensors, but much of it is watched rather than acted on.",
      "Property tax, about half of municipal tax revenue, is under 0.5% of GDP. Many properties are unassessed or under-assessed.",
      "Citizens raise the same complaint on many channels, in many languages, and rarely see it closed.",
      "Urban flooding, garbage hotspots and traffic are predictable, yet cities still respond after the fact.",
      "Building approvals remain slow and manual, holding back housing and investment.",
    ],
  },
  policyAlignment: [
    {
      name: "Urban Challenge Fund",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Cities can bundle the Nagar AI platform into reform-linked, market-financed UCF proposals, with better own revenue strengthening their creditworthiness.",
    },
    {
      name: "Smart Cities Mission — ICCC legacy",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Shahar Netra puts AI on the cameras and sensors already installed in 100 ICCCs, so past investment keeps paying back.",
    },
    {
      name: "National Urban Digital Mission & UPYOG",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Nagar Saathi and Kar Drishti plug into UPYOG modules for grievances, property tax and building permits.",
    },
    {
      name: "AMRUT 2.0",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Supports AMRUT 2.0 reforms on property tax and water, and its ₹2.99 lakh crore investment in urban water and sewerage.",
    },
    {
      name: "Swachh Bharat Mission (Urban) 2.0",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Swachh Route optimises collection and monitors dumpsites from space, supporting the Lakshya Zero Dumpsites goal.",
    },
    {
      name: "PMAY-Urban 2.0",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "Nakshe AI speeds up building plan approvals, helping homes for 1 crore urban families get built faster.",
    },
  ],
  solutions: [
    {
      name: "Nagar Saathi",
      description:
        "One citizen assistant for every municipal service on WhatsApp, IVR and the city app. Residents speak or type in any of 22 languages via Bhashini; AI files, de-duplicates and routes the complaint, and tracks it to closure.",
      impact: "Target: 85% of grievances resolved within service-level timelines.",
    },
    {
      name: "Kar Drishti",
      description:
        "AI that matches satellite and drone imagery with property tax records to find unassessed and under-assessed buildings, then generates verified notices for officials to review.",
      impact: "Target: 30% rise in property tax collection within 2 years in pilot cities.",
    },
    {
      name: "Shahar Netra",
      description:
        "Computer vision on existing ICCC cameras to detect waterlogging, garbage piles, potholes, illegal parking and traffic jams, raising a work order automatically. No facial recognition of citizens.",
      impact: "Target: 50% faster response to civic incidents.",
    },
    {
      name: "Swachh Route",
      description:
        "Route optimisation for waste collection vehicles, prediction of garbage hotspots and satellite monitoring of legacy dumpsites and new illegal dumping.",
      impact: "Target: 20% lower collection fuel cost and 100% door-to-door coverage tracked.",
    },
    {
      name: "Jal Prahari",
      description:
        "Ward-level urban flood forecasting from rainfall nowcasts, drain networks and terrain, with alerts to residents by SMS and voice and to field teams by app.",
      impact: "Target: 6-hour advance warning for flood-prone wards.",
    },
    {
      name: "Nakshe AI",
      description:
        "Automated checking of building plans against local bye-laws, flagging violations in minutes and leaving the final decision to the approving officer.",
      impact: "Target: standard residential approvals in under 7 days.",
    },
  ],
  centralSystem: {
    name: "Nagar AI Command Centre",
    description:
      "A national AI platform that turns India's city command centres into one network. Any urban local body, large or small, can plug in through UPYOG-compatible APIs and use the same validated models without building its own.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Nagar Saathi on WhatsApp, IVR and city apps",
          "Field apps for sanitation, engineering and revenue staff",
          "ICCC operator consoles",
          "Commissioner, state and national dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Multilingual grievance triage on Bhashini",
          "Geospatial property assessment",
          "Video analytics for civic incidents (privacy-safe)",
          "Flood and waste forecasting",
          "Building plan compliance checking",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "UPYOG-compatible API gateway",
          "City data exchange linking ICCC, GIS and ERP systems",
          "Geospatial base maps and imagery store",
          "Model registry with audit and accuracy logs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud and existing ICCC hardware",
          "IndiaAI compute for model training",
          "Urban AI ethics and privacy board",
          "DPDP-compliant retention and CCTV data policies",
        ],
      },
    ],
    dataSources: [
      "ICCC camera and sensor feeds",
      "Property tax and municipal ERP records",
      "Grievance data from city apps and CPGRAMS",
      "Satellite and drone imagery",
      "IMD rainfall and nowcasts",
      "Waste vehicle GPS and SBM-U data",
      "Building permission applications",
    ],
    integrations: [
      "UPYOG (National Urban Digital Mission)",
      "Smart City ICCCs",
      "CPGRAMS",
      "DigiLocker for certificates",
      "Bhashini",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 0 — Foundations",
      duration: "Months 0–3",
      milestones: [
        "MoU with state urban development department and 5 pilot cities",
        "City data exchange and privacy policy adopted",
        "Baseline of grievance, tax and service metrics",
        "ICCC readiness audit in pilot cities",
      ],
    },
    {
      phase: "Phase 1 — Pilot in 5 cities",
      duration: "Months 4–12",
      milestones: [
        "Nagar Saathi live in 2 languages",
        "Kar Drishti property survey in 20 wards per city",
        "Shahar Netra on existing ICCC cameras",
        "Independent mid-line evaluation",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 13–24",
      milestones: [
        "All ULBs in the state onboarded through UPYOG",
        "Jal Prahari flood alerts for every flood-prone ward",
        "Nakshe AI for all building permissions",
        "Swachh Route in every municipal corporation",
      ],
    },
    {
      phase: "Phase 3 — National network",
      duration: "Months 25–36",
      milestones: [
        "Shared service offered to all 100 Smart Cities and UCF cities",
        "All 22 scheduled languages live",
        "Open models and data standards published",
        "Endline evaluation and revenue impact study",
      ],
    },
  ],
  budget: {
    total: "₹450 crore over 3 years",
    items: [
      {
        head: "AI models & geospatial analytics",
        amount: "₹95 crore",
        note: "Including imagery and drone surveys",
      },
      {
        head: "Platform, integration & cloud hosting",
        amount: "₹110 crore",
        note: "UPYOG, ICCC and ERP integration",
      },
      {
        head: "ICCC upgrades & edge computing",
        amount: "₹85 crore",
        note: "Reuse existing cameras; add edge AI",
      },
      {
        head: "Training & change management",
        amount: "₹60 crore",
        note: "ULB staff, ICCC operators, councillors",
      },
      { head: "Programme management unit", amount: "₹60 crore", note: "National and state PMU" },
      {
        head: "Independent evaluation & security audits",
        amount: "₹40 crore",
        note: "Third-party M&E, CERT-In audits",
      },
    ],
    note: "Indicative estimate for a 5-city pilot scaling to a national shared service. To be refined after Phase 1; can be co-financed through Urban Challenge Fund projects, AMRUT 2.0 reform incentives and ULB own revenue gains.",
  },
  kpis: [
    { metric: "Grievances resolved within SLA", target: "85% in pilot cities" },
    { metric: "Property tax collection", target: "+30% in 2 years in pilot cities" },
    { metric: "Response time to civic incidents", target: "50% faster" },
    { metric: "Advance flood warning for at-risk wards", target: "6 hours" },
    { metric: "Standard building approvals", target: "Under 7 days" },
    {
      metric: "Citizen satisfaction with municipal services",
      target: "80%+ in independent survey",
    },
  ],
  risks: [
    {
      risk: "Surveillance concerns and data privacy under the DPDP Act 2023.",
      mitigation:
        "No facial recognition of citizens. Video analysed for incidents, not people. Short retention, data stored in India, and readiness for DPDP Rules 2025 before May 2027.",
    },
    {
      risk: "Model bias, such as poorer service detection in informal settlements, and language gaps.",
      mitigation:
        "Accuracy and response times reported by ward and language. Field validation in low-income areas. Human approval for every tax notice.",
    },
    {
      risk: "Low adoption by municipal staff.",
      mitigation:
        "Tools replace manual work, with training in the local language and performance reviews linked to service-level dashboards.",
    },
    {
      risk: "Political sensitivity of higher property tax assessments.",
      mitigation:
        "Transparent methodology, citizen self-assessment first, phased notices and a clear appeal process.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "UPYOG-compatible open standards, government ownership of data and models, and source code escrow in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Ministry of Housing & Urban Affairs (copy: Joint Secretary & Mission Director, Smart Cities Mission and NUDM)",
      headline: "Put 100 command centres to work, together.",
      ask: "Approve a 5-city pilot of the Nagar AI Command Centre as a reform-linked component eligible under the Urban Challenge Fund and AMRUT 2.0, and nominate a Joint Secretary-level nodal officer with an NUDM technical lead.",
      keyPoints: [
        "Reuses 100 ICCCs and UPYOG. No new city system to build.",
        "Six AI tools for grievances, tax, incidents, waste, floods and approvals.",
        "Indicative ₹450 crore over three years; pilot first.",
        "Property tax gains can repay much of the cost.",
        "No facial recognition, hosted in India, DPDP-ready.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The platform connects city ICCCs, UPYOG modules, municipal ERPs and geospatial data through one API layer. Cities consume AI as a shared service and keep control of their own data.",
          bullets: [
            "UPYOG-compatible APIs for every module",
            "Edge AI on existing ICCC cameras",
            "Bhashini for grievances in 22 languages",
            "Common model registry with audit trail",
          ],
        },
        {
          heading: "Procurement & funding route",
          body: "A QCBS RFP selects the platform integrator. Cloud, drones and edge devices are bought on GeM. Funding blends UCF project financing, AMRUT 2.0 reform incentives and a share of new property tax revenue.",
          bullets: [
            "QCBS selection under GFR 2017",
            "GeM for cloud, imagery and edge hardware",
            "Urban Challenge Fund and AMRUT 2.0 convergence",
            "IndiaAI compute portal for model training",
          ],
        },
        {
          heading: "Governance",
          body: "A national steering committee chaired by the Secretary sets standards. A PMU delivers. Each pilot city has a Municipal Commissioner as nodal officer.",
          bullets: [
            "National steering committee, quarterly",
            "State Urban Development Secretary as state lead",
            "Municipal Commissioners as city nodal officers",
            "Urban AI ethics and privacy board",
          ],
        },
        {
          heading: "Data protection & compliance",
          body: "Public trust depends on clear limits. The platform is designed for the DPDP Act 2023 and DPDP Rules 2025, with a published CCTV analytics policy.",
          bullets: [
            "No facial recognition; incident-only video analytics",
            "Data localisation on MeghRaj / NIC cloud",
            "Short retention and access logs for all footage",
            "CERT-In incident reporting and annual audits",
          ],
        },
        {
          heading: "Monitoring & evaluation",
          body: "Service levels, revenue and citizen satisfaction are tracked live. An independent agency evaluates outcomes against a baseline.",
          bullets: [
            "Live dashboard for Ministry, states and cities",
            "Public city scorecards each quarter",
            "Third-party evaluation at Months 12 and 36",
          ],
        },
      ],
      nextSteps: [
        "Week 2: Nominate nodal officer and NUDM technical lead.",
        "Week 4: Select 5 pilot cities with state urban development departments.",
        "Week 8: Sign MoUs and issue QCBS RFP.",
        "Week 12: ICCC readiness audit and baseline complete.",
        "Month 4: Nagar Saathi and Shahar Netra live in pilot cities.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Housing & Urban Affairs",
      headline: "One city network. Every citizen heard.",
      ask: "Announce the Nagar AI Command Centre as India's national urban AI platform, linked to the Urban Challenge Fund, with a 5-city launch in 100 days.",
      keyPoints: [
        "60 crore Indians will live in cities by 2036. Cities must get smarter, faster.",
        "One number, one WhatsApp, any language, for every civic complaint.",
        "Flood warnings hours ahead for at-risk neighbourhoods.",
        "Fairer property tax that funds better services.",
        "Building approvals in days, not months.",
      ],
      sections: [
        {
          heading: "A day in the life",
          body: "It rains hard in the evening. Before the water rises, Farah in a low-lying ward gets a voice alert in Urdu and moves her family's things to safety. Overnight, ICCC cameras spot waterlogging at two junctions and pumps are dispatched automatically. Next morning she reports a broken streetlight on WhatsApp. It is fixed by evening, and she gets a message saying so.",
          bullets: [
            "Warnings before the flood, not after",
            "Problems spotted and fixed without a complaint",
            "Every citizen heard in their own language",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "Cities will power India's growth to 2047. This programme builds on the Smart Cities Mission, the Urban Challenge Fund and India's digital public infrastructure to make cities liveable, solvent and resilient.",
          bullets: [
            "Gets more value from Smart Cities investments",
            "Strengthens city finances for UCF market borrowing",
            "Supports Swachh Bharat, AMRUT 2.0 and PMAY-U 2.0",
            "Uses Bhashini and the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Three announceable milestones in the first 100 days.",
          bullets: [
            "Day 30: Launch of the Nagar AI Command Centre and 5 pilot cities",
            "Day 60: Nagar Saathi live for citizens in pilot cities",
            "Day 100: First flood alerts and AI-detected incidents resolved",
          ],
        },
        {
          heading: "Value for money",
          body: "An indicative ₹450 crore over three years, shared across many cities. Better property tax assessment alone can recover a large share of the cost, while making cities more creditworthy.",
          bullets: [
            "Reuses existing ICCC investments",
            "Self-financing potential through own revenue",
            "Outcomes independently measured",
          ],
        },
      ],
      nextSteps: [
        "Approve the programme in principle.",
        "Announce the 5 pilot cities alongside the next Urban Challenge Fund round.",
        "Review results publicly at 100 days with city scorecards.",
      ],
    },
  ],
};
