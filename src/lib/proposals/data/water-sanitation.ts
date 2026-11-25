import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "water-sanitation",
  sector: "Water & Sanitation",
  category: "infrastructure",
  title: "Every tap. Every day. Safe.",
  tagline:
    "AI that keeps India's new water and sanitation assets working, clean and accountable, from the source to the tap.",
  summary:
    "Jal Jeevan Mission has taken tap water from 17% of rural homes to over 81%. The next challenge is service: water that flows every day, is safe to drink and is drawn from aquifers that last. We propose a Jal Shakti AI Command Centre that predicts breakdowns, flags contamination, forecasts groundwater and lets every citizen report a problem by voice.",
  heroStat: {
    value: "15.79 crore",
    label:
      "rural households now have a tap connection — 81.56% of all rural homes, up from 17% in 2019",
    source: "Ministry of Jal Shakti, January 2026",
  },
  context: {
    stats: [
      {
        value: "₹8.69 lakh crore",
        label: "total outlay for Jal Jeevan Mission, extended to December 2028",
        source: "Union Cabinet, March 2026",
      },
      {
        value: "730 of 6,762",
        label: "groundwater assessment units are over-exploited",
        source: "CGWB Dynamic Ground Water Resources Assessment 2025",
      },
      {
        value: "24.80 lakh",
        label: "women trained to test drinking water with field test kits",
        source: "Ministry of Jal Shakti, 2025",
      },
      {
        value: "4.89 lakh",
        label: "villages declared ODF Plus (Model) under SBM-Grameen Phase II",
        source: "DDWS, December 2025",
      },
    ],
    challenges: [
      "Connections are not the same as supply. Many schemes still face irregular hours, low pressure and slow repairs.",
      "Water quality testing is growing fast, but results rarely predict where contamination will appear next.",
      "Over 1 in 10 groundwater units is over-exploited, and many piped schemes depend on these same aquifers.",
      "ODF Plus assets such as soak pits and waste units need continuous verification, not one-time certification.",
      "Citizens have few simple ways to report a dry tap or dirty water and see it fixed.",
    ],
  },
  policyAlignment: [
    {
      name: "Jal Jeevan Mission 2.0 (Har Ghar Jal)",
      ministry: "Ministry of Jal Shakti (Department of Drinking Water & Sanitation)",
      note: "JJM 2.0 shifts from building infrastructure to delivering service. Jal Drishti and Jal Saathi give it the monitoring and grievance layer that shift needs.",
    },
    {
      name: "Swachh Bharat Mission (Grameen) Phase II",
      ministry: "Ministry of Jal Shakti (Department of Drinking Water & Sanitation)",
      note: "Swachh Netra uses AI on geo-tagged photos to verify ODF Plus assets and flag those that stop working.",
    },
    {
      name: "Atal Bhujal Yojana",
      ministry: "Ministry of Jal Shakti (Department of Water Resources, RD & GR)",
      note: "Bhujal Lens gives the 8,562 Atal Jal gram panchayats village-level groundwater forecasts for their water security plans.",
    },
    {
      name: "Namami Gange Programme",
      ministry: "Ministry of Jal Shakti (National Mission for Clean Ganga)",
      note: "Nirmal Dhara applies predictive maintenance and anomaly detection to sewage treatment plants built under the mission.",
    },
    {
      name: "AMRUT 2.0",
      ministry: "Ministry of Housing & Urban Affairs",
      note: "The same water-supply AI services extend to urban utilities through a common API.",
    },
    {
      name: "IndiaAI Mission & Bhashini",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Bhashini voice in 22 languages and IndiaAI compute make the platform multilingual and affordable.",
    },
  ],
  solutions: [
    {
      name: "Jal Drishti",
      description:
        "Low-cost flow, pressure and chlorine sensors on piped water schemes feed an AI model that spots leaks, pump failures and supply gaps, and predicts breakdowns before they happen.",
      impact:
        "Target: 80% of pilot schemes supplying water every day at the norm of 55 litres per person.",
    },
    {
      name: "Jal Saathi",
      description:
        "Citizens report a dry tap, low pressure or dirty water by voice on WhatsApp or a toll-free IVR, in any of 22 languages. AI classifies the complaint, routes it to the Pani Samiti or engineer, and confirms when it is fixed.",
      impact: "Target: 90% of complaints resolved within 72 hours.",
    },
    {
      name: "Shuddh Jal AI",
      description:
        "Risk models that combine lab and field-kit results, geology and season to predict where arsenic, fluoride, nitrate or bacterial contamination is likely, so testing and treatment go there first.",
      impact: "Target: 2x more contaminated sources detected per 1,000 tests.",
    },
    {
      name: "Bhujal Lens",
      description:
        "Gram panchayat-level groundwater forecasts using CGWB monitoring wells, rainfall, cropping and satellite data, shared with villages as simple voice and visual water budgets.",
      impact: "Target: water security plans in 100% of pilot panchayats backed by forecasts.",
    },
    {
      name: "Swachh Netra",
      description:
        "Computer vision checks geo-tagged photos of toilets, soak pits and waste units uploaded by field staff, flagging duplicates, non-functional assets and villages at risk of slipping back.",
      impact: "Target: 100% of ODF Plus assets in pilot districts verified each year.",
    },
    {
      name: "Nirmal Dhara",
      description:
        "Predictive maintenance and compliance monitoring for sewage treatment plants, using online effluent monitoring data to flag under-performance and forecast equipment failure.",
      impact: "Target: 95% of monitored STPs meeting discharge norms each month.",
    },
  ],
  centralSystem: {
    name: "Jal Shakti AI Command Centre",
    description:
      "One national AI platform for drinking water, sanitation and groundwater. States, districts and utilities plug in through open APIs, reuse validated models and see every scheme on one map.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Jal Saathi on WhatsApp and toll-free IVR",
          "Field apps for Pani Samitis, pump operators and FTK-trained women",
          "Gram panchayat water budget boards",
          "District and state command dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Scheme anomaly detection and breakdown prediction",
          "Water quality risk mapping",
          "Groundwater forecasting",
          "Computer vision for sanitation asset verification",
          "Multilingual complaint triage on Bhashini",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "IoT data hub for scheme sensors",
          "Connectors to JJM IMIS, WQMIS and SBM-G IMIS",
          "Geospatial layer on Bhuvan and India-WRIS",
          "Model registry with accuracy and audit logs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud with data stored in India",
          "IndiaAI compute for model training",
          "Technical steering group with CGWB and NIC",
          "Cyber-security standards for connected water assets",
        ],
      },
    ],
    dataSources: [
      "JJM IMIS scheme and connection data",
      "WQMIS lab and field test kit results",
      "CGWB groundwater monitoring wells and assessments",
      "IMD rainfall and weather data",
      "SBM-G asset and geo-tagged photo data",
      "Online effluent monitoring from STPs",
      "Satellite imagery from ISRO / Bhuvan",
    ],
    integrations: [
      "JJM IMIS and eJalShakti dashboards",
      "WQMIS",
      "SBM-G IMIS",
      "India-WRIS and Bhuvan",
      "Bhashini",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 0 — Foundations",
      duration: "Months 0–3",
      milestones: [
        "MoU with state PHED / RWS department",
        "Sensor standards and open data protocols agreed",
        "Data sharing with JJM IMIS, WQMIS and CGWB",
        "Baseline service-level survey in 6 districts",
      ],
    },
    {
      phase: "Phase 1 — Pilot in 6 districts",
      duration: "Months 4–12",
      milestones: [
        "Jal Drishti sensors on 1,500 piped water schemes",
        "Jal Saathi live in 2 languages",
        "Shuddh Jal AI risk maps guiding testing plans",
        "Independent mid-line evaluation",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 13–24",
      milestones: [
        "All multi-village schemes in the state connected",
        "Bhujal Lens forecasts for every gram panchayat",
        "Swachh Netra verification of all ODF Plus villages",
        "Nirmal Dhara on all state STPs",
      ],
    },
    {
      phase: "Phase 3 — Multi-state platform",
      duration: "Months 25–36",
      milestones: [
        "Shared service offered to 5+ states and AMRUT cities",
        "All 22 scheduled languages live on Jal Saathi",
        "Open models and data standards published",
        "Endline evaluation of service levels",
      ],
    },
  ],
  budget: {
    total: "₹310 crore over 3 years",
    items: [
      {
        head: "IoT sensors & installation",
        amount: "₹90 crore",
        note: "Flow, pressure and chlorine sensors on priority schemes",
      },
      {
        head: "AI models & geospatial analytics",
        amount: "₹55 crore",
        note: "With CGWB, an IIT and an AI CoE",
      },
      {
        head: "Platform, integration & cloud hosting",
        amount: "₹60 crore",
        note: "JJM IMIS, WQMIS, SBM-G integration",
      },
      {
        head: "Training of Pani Samitis & field staff",
        amount: "₹45 crore",
        note: "Operators, engineers, FTK-trained women",
      },
      { head: "Programme management unit", amount: "₹35 crore", note: "State and national PMU" },
      {
        head: "Independent evaluation & security audits",
        amount: "₹25 crore",
        note: "Third-party service-level evaluation",
      },
    ],
    note: "Indicative estimate for a one-state pilot scaling to a multi-state shared service. To be refined after Phase 1 and converged with JJM support activities and water quality monitoring components.",
  },
  kpis: [
    { metric: "Schemes supplying water daily at 55 lpcd", target: "80% of monitored schemes" },
    { metric: "Citizen complaints resolved", target: "90% within 72 hours" },
    { metric: "Contaminated sources detected per 1,000 tests", target: "2x baseline" },
    { metric: "Gram panchayats with groundwater forecasts", target: "100% in pilot districts" },
    { metric: "ODF Plus assets verified each year", target: "100% in pilot districts" },
    { metric: "STPs meeting discharge norms", target: "95% each month" },
  ],
  risks: [
    {
      risk: "Data privacy and DPDP Act 2023 compliance for citizen complaints.",
      mitigation:
        "Only minimal personal data collected, consent at first contact, data stored in India on MeghRaj / NIC cloud, and full readiness for DPDP Rules 2025 obligations.",
    },
    {
      risk: "Sensor failure, theft or poor maintenance in the field.",
      mitigation:
        "Ruggedised, low-cost sensors with tamper alerts, O&M built into contracts, and Pani Samitis trained as first responders.",
    },
    {
      risk: "Model bias and language coverage gaps.",
      mitigation:
        "Accuracy reported by district and language. Bhashini models tuned with local speech data. Human review for every high-impact alert.",
    },
    {
      risk: "Low adoption by engineers and village committees.",
      mitigation:
        "Alerts arrive in tools they already use, in their own language. Performance linked to JJM 2.0 service-delivery reviews.",
    },
    {
      risk: "Vendor lock-in for sensors and software.",
      mitigation:
        "Open sensor protocols, government ownership of data and models, multi-vendor sensor panels and source code escrow.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee:
        "Secretary, Department of Drinking Water & Sanitation, Ministry of Jal Shakti (copy: Mission Director, National Jal Jeevan Mission)",
      headline: "From Har Ghar Jal to Har Din Jal.",
      ask: "Approve a 6-district pilot of the Jal Shakti AI Command Centre under JJM 2.0 support activities and water quality monitoring components, and nominate a Joint Secretary-level nodal officer with a CGWB technical lead.",
      keyPoints: [
        "Built on JJM IMIS, WQMIS and SBM-G IMIS. No parallel system.",
        "Six AI tools from aquifer to tap to treatment plant.",
        "Indicative ₹310 crore over three years, pilot first.",
        "Directly supports JJM 2.0's shift to service delivery.",
        "Hosted in India, DPDP-ready, open sensor standards.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The Command Centre connects scheme sensors, lab results, groundwater data and citizen complaints into one AI layer. It reads from and writes back to existing JJM and SBM-G systems.",
          bullets: [
            "IoT data hub with open protocols",
            "APIs to JJM IMIS, WQMIS, SBM-G IMIS and India-WRIS",
            "Bhashini for voice complaints in 22 languages",
            "Geospatial layer on Bhuvan",
          ],
        },
        {
          heading: "Procurement & funding route",
          body: "A QCBS RFP selects the platform integrator. Sensors are procured through GeM from a multi-vendor panel. Funding converges JJM support activities, water quality monitoring and SBM-G administrative heads.",
          bullets: [
            "QCBS selection under GFR 2017",
            "GeM rate contracts for sensors and cloud",
            "Convergence with JJM 2.0 and SBM-G Phase II funds",
            "IndiaAI compute portal for model training",
          ],
        },
        {
          heading: "Governance",
          body: "A steering committee chaired by the Secretary sets direction. A PMU runs delivery. A technical group with CGWB, NIC and an IIT validates models.",
          bullets: [
            "National steering committee, quarterly",
            "State Mission Director, JJM as state nodal officer",
            "Executive Engineers as district nodal officers",
            "Technical validation group with CGWB and an IIT",
          ],
        },
        {
          heading: "Data protection & compliance",
          body: "Most data here is about assets, not people. Where citizens are involved, the platform follows the DPDP Act 2023 and DPDP Rules 2025.",
          bullets: [
            "Minimal personal data, consent at first contact",
            "Data localisation on MeghRaj / NIC cloud",
            "Cyber-security hardening for connected water assets",
            "CERT-In incident reporting and annual audits",
          ],
        },
        {
          heading: "Monitoring & evaluation",
          body: "Daily supply, water quality and complaint resolution are tracked live. An independent agency verifies service levels.",
          bullets: [
            "Live dashboard for Ministry, states and districts",
            "Monthly service-level reports per scheme",
            "Third-party evaluation at Months 12 and 36",
          ],
        },
      ],
      nextSteps: [
        "Week 2: Nominate nodal officer and CGWB technical lead.",
        "Week 4: Select pilot state and 6 districts with the State Mission Director.",
        "Week 8: Sign MoU and issue QCBS RFP and sensor tender.",
        "Week 12: Baseline service-level survey complete.",
        "Month 4: First sensors live and Jal Saathi launched.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Jal Shakti",
      headline: "Safe water, every day, for every home.",
      ask: "Announce the Jal Shakti AI Command Centre as the digital backbone of Jal Jeevan Mission 2.0, with a pilot launch in 100 days.",
      keyPoints: [
        "15.79 crore homes have a tap. Now every tap can be watched over.",
        "A voice helpline in 22 languages for any water complaint.",
        "Early warning of contamination before people fall ill.",
        "Village-level groundwater forecasts for a water-secure future.",
        "Built in India, on India's own AI and language infrastructure.",
      ],
      sections: [
        {
          heading: "A day in the life",
          body: "In a village in a dry district, the tap runs low for two days. Lakshmi, a member of the Pani Samiti, does not need to wait for the engineer's monthly visit. The pressure sensor has already flagged a failing pump, and the repair team is on its way. Her neighbour reports cloudy water by phone in her own language. Shuddh Jal AI marks the source as high-risk, and a test is done the same week.",
          bullets: [
            "Breakdowns fixed before taps run dry",
            "Every complaint heard and tracked",
            "Unsafe water caught early",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "A developed India needs water security for every home and farm. This programme helps protect the investment made under Jal Jeevan Mission and Swachh Bharat, and makes it last.",
          bullets: [
            "Delivers JJM 2.0's focus on service, not just connections",
            "Strengthens SBM-G ODF Plus sustainability",
            "Supports Atal Bhujal and Namami Gange",
            "Uses Bhashini and the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Three announceable moments in the first 100 days.",
          bullets: [
            "Day 30: Launch of the Jal Shakti AI Command Centre and pilot state",
            "Day 60: Jal Saathi voice helpline live",
            "Day 100: First 500 water schemes monitored by AI",
          ],
        },
        {
          heading: "Value for money",
          body: "An indicative ₹310 crore over three years is a tiny fraction of the ₹8.69 lakh crore Jal Jeevan Mission outlay. It helps keep those assets working for decades.",
          bullets: [
            "Less than 0.05% of JJM's total outlay",
            "Fewer breakdowns, lower repair costs",
            "Outcomes independently verified",
          ],
        },
      ],
      nextSteps: [
        "Approve the programme in principle.",
        "Announce the pilot state on World Water Day.",
        "Review service levels publicly at 100 days.",
      ],
    },
  ],
};
