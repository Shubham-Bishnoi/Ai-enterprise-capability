import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "solar-energy",
  sector: "Solar & Clean Energy",
  category: "infrastructure",
  title: "More sun. Less waste.",
  tagline:
    "AI that helps every rooftop go solar faster, every farm pump run on the sun, and every grid operator use every unit of clean power.",
  summary:
    "India's solar capacity has grown to about 175 GW and lakhs of homes are going solar every month. The next challenge is not just building capacity but using it well: faster rooftop approvals, smarter feeder solarisation and fewer units lost to grid constraints. Surya AI is one platform that serves households, farmers, DISCOMs and load despatch centres, on the path to 500 GW of non-fossil capacity by 2030.",
  heroStat: {
    value: "175 GW",
    label: "installed solar capacity, up from under 3 GW in 2014",
    source: "MNRE, Oct 2026",
  },
  context: {
    stats: [
      {
        value: "66 lakh",
        label: "homes solarised under PM Surya Ghar: Muft Bijli Yojana, towards 1 crore",
        source: "MNRE, Nov 2026",
      },
      {
        value: "55%",
        label: "of India's roughly 560 GW installed power capacity is now non-fossil",
        source: "MNRE / CEA, Oct 2026",
      },
      {
        value: "21.77 lakh",
        label: "farmers benefiting from PM-KUSUM solar pumps and feeder solarisation",
        source: "MNRE, Aug 2026",
      },
      {
        value: "20.33 crore",
        label: "smart meters sanctioned under RDSS, with about 6 crore installed by August 2026",
        source: "Ministry of Power, 2026",
      },
    ],
    challenges: [
      "Clean power is being wasted. Grid operators report more than 4 GW of commissioned capacity in Rajasthan facing near-total shutdown during peak solar hours due to transmission constraints.",
      "Rooftop solar has scaled fast, but inspection, net-metering and subsidy release still depend on manual checks by stretched DISCOM staff.",
      "Feeder solarisation under PM-KUSUM Component C has lagged the target, partly because site selection and grid readiness are assessed by hand.",
      "Solar generation is variable, and forecasting errors at state load despatch centres push up balancing costs and curtailment.",
      "Households lack trusted, local-language guidance on system size, vendors, loans and after-sales service.",
    ],
  },
  policyAlignment: [
    {
      name: "500 GW non-fossil capacity by 2030",
      ministry: "Ministry of New & Renewable Energy and Ministry of Power",
      note: "Surya AI helps utilities absorb more solar with better forecasting and reduced curtailment, so new capacity turns into delivered energy.",
    },
    {
      name: "PM Surya Ghar: Muft Bijli Yojana",
      ministry: "Ministry of New & Renewable Energy",
      note: "Launched in February 2024 to solarise 1 crore homes. Our household assistant and AI inspection speed up the path from application to subsidy.",
    },
    {
      name: "PM-KUSUM (and the proposed PM-KUSUM 2.0)",
      ministry: "Ministry of New & Renewable Energy",
      note: "Extended to March 2027, with a successor scheme including a 10 GW agri-PV component under preparation. Feeder Planner ranks feeders and sites for solarisation using grid, land and load data.",
    },
    {
      name: "Revamped Distribution Sector Scheme (RDSS)",
      ministry: "Ministry of Power",
      note: "Smart meter data is the foundation for rooftop monitoring, fault detection and demand response. Surya AI turns meter readings into actions for DISCOMs.",
    },
    {
      name: "National Green Hydrogen Mission",
      ministry: "Ministry of New & Renewable Energy",
      note: "With ₹19,744 crore and a 5 MMT per year target by 2030, green hydrogen needs about 125 GW of associated renewables. Our forecasting tools support round-the-clock renewable scheduling for electrolysers.",
    },
    {
      name: "IndiaAI Mission and Bhashini",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Forecasting and vision models are trained on IndiaAI compute; the citizen assistant speaks Indian languages through Bhashini.",
    },
  ],
  solutions: [
    {
      name: "Surya Sahayak",
      description:
        "A WhatsApp and voice assistant that helps a household size its rooftop system, compare registered vendors, apply on the national portal, find a collateral-free loan and track subsidy status, in 22 languages.",
      impact: "Application-to-commissioning time cut by 30% in pilot DISCOMs.",
    },
    {
      name: "Rooftop Verifier",
      description:
        "AI checks installation photos, panel serial numbers and smart-meter output to confirm a rooftop system is installed and generating, so inspection and subsidy release are near-instant for clean cases.",
      impact: "80% of rooftop inspections cleared without a site visit.",
    },
    {
      name: "Sun Forecast",
      description:
        "Day-ahead and intraday solar generation forecasts at plant, feeder and state level, built on satellite cloud imagery, weather models and live generation data, for state load despatch centres.",
      impact: "Forecast error reduced by 25% against current state baselines.",
    },
    {
      name: "Curtailment Navigator",
      description:
        "Predicts transmission congestion and recommends storage dispatch, scheduling shifts and demand response to absorb more solar. It gives grid operators a clear view of where clean power is about to be lost.",
      impact: "Measurable reduction in curtailed solar energy in the pilot region.",
    },
    {
      name: "Feeder Planner",
      description:
        "Ranks agricultural feeders and nearby land for solarisation under PM-KUSUM, using feeder load, pump density, land records and substation capacity, so states can tender the best sites first.",
      impact: "Site-selection time for feeder solarisation tenders cut from months to weeks.",
    },
    {
      name: "Panel Doctor",
      description:
        "Detects underperforming rooftop systems and solar pumps from smart-meter and inverter data, and alerts the owner and vendor by voice to clean, repair or claim warranty.",
      impact: "Underperforming systems detected and fixed within 30 days.",
    },
  ],
  centralSystem: {
    name: "Surya AI Command Centre",
    description:
      "One national AI platform for solar and clean energy that MNRE, the Ministry of Power, state nodal agencies, DISCOMs and load despatch centres can all plug into. It links the rooftop portal, smart meters and grid data so every actor sees the same picture.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "WhatsApp, IVR and web assistant in 22 languages via Bhashini",
          "Vendor and DISCOM inspector mobile app",
          "SLDC and DISCOM control-room dashboards",
          "State nodal agency and MNRE dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Solar generation and demand forecasting",
          "Curtailment prediction and dispatch recommendations",
          "Installation verification and fault detection",
          "Site ranking for feeder and agri-PV solarisation",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Rooftop portal and subsidy records",
          "Smart meter and inverter data streams",
          "SCADA and SLDC schedules",
          "Weather, satellite and land data pipelines",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "Hosting on MeghRaj / NIC cloud within India",
          "Critical-infrastructure cyber security aligned to CERT-In and CEA guidelines",
          "IndiaAI compute for model training",
          "Government ownership of code, data and models",
        ],
      },
    ],
    dataSources: [
      "PM Surya Ghar national portal",
      "PM-KUSUM implementation data",
      "RDSS smart meter data (consumer, DT and feeder)",
      "SLDC and Grid-India schedules and generation data",
      "IMD forecasts and satellite cloud imagery",
      "Land records and substation capacity data",
      "Vendor registry and inverter telemetry",
    ],
    integrations: [
      "PM Surya Ghar national portal",
      "DISCOM billing and smart meter head-end systems",
      "Grid-India and state load despatch centres",
      "Aadhaar e-KYC, DigiLocker and Jan Samarth for loans",
      "Bhashini language APIs",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Launch with 2 DISCOMs and 1 state load despatch centre",
        "Surya Sahayak and Rooftop Verifier live in 3 languages",
        "Sun Forecast in shadow mode alongside existing forecasts",
        "Baseline of approval times, forecast error and curtailment set",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All DISCOMs in 2 partner states onboarded",
        "Sun Forecast and Curtailment Navigator used in live scheduling",
        "Feeder Planner used for PM-KUSUM tenders",
        "Panel Doctor monitoring rooftop and pump systems",
      ],
    },
    {
      phase: "Phase 3 — National platform",
      duration: "Months 19–36",
      milestones: [
        "Offered to all states and DISCOMs as a shared service",
        "Integration with Grid-India for regional forecasting",
        "Open forecasting models published on AIKosh",
        "Independent impact evaluation published",
      ],
    },
  ],
  budget: {
    total: "₹210 crore over 3 years",
    items: [
      { head: "Platform build and portal, meter and SCADA integration", amount: "₹55 crore" },
      { head: "Forecasting, vision and grid AI models, IndiaAI compute", amount: "₹45 crore" },
      { head: "Weather and satellite data, sensors at pilot sites", amount: "₹25 crore" },
      { head: "DISCOM and SLDC rollout and training", amount: "₹30 crore" },
      { head: "Cloud, cyber security and DPDP compliance", amount: "₹30 crore" },
      { head: "PMU, monitoring and third-party evaluation", amount: "₹25 crore" },
    ],
    note: "Indicative estimate. Can converge with RDSS, PM Surya Ghar administrative funds and IndiaAI Mission support; refined after the pilot.",
  },
  kpis: [
    { metric: "Rooftop application-to-commissioning time", target: "30% faster than baseline" },
    { metric: "Rooftop inspections cleared without a site visit", target: "80%" },
    { metric: "Day-ahead solar forecast error at pilot SLDC", target: "25% lower than baseline" },
    {
      metric: "Curtailed solar energy in pilot region",
      target: "Measurable year-on-year reduction",
    },
    { metric: "Underperforming systems fixed", target: "Within 30 days of detection" },
    { metric: "Households served by Surya Sahayak", target: "10 lakh" },
  ],
  risks: [
    {
      risk: "Household consumption data is personal data under the DPDP Act 2023.",
      mitigation:
        "Consent-based access to meter data, aggregation wherever possible, data hosted in India, and a Data Protection Impact Assessment before go-live.",
    },
    {
      risk: "Cyber attack on grid-connected systems.",
      mitigation:
        "Read-only links to SCADA in the pilot, CERT-In and CEA cyber security compliance, network segmentation and regular audits.",
    },
    {
      risk: "Forecast errors cause grid instability.",
      mitigation:
        "Shadow-mode testing for a full season, human dispatchers keep final authority, and continuous accuracy monitoring.",
    },
    {
      risk: "DISCOM staff resist new workflows.",
      mitigation:
        "Tools that remove manual inspections first, training through state nodal agencies, and DISCOM performance incentives under RDSS.",
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
      addressee: "Secretary, Ministry of New & Renewable Energy",
      headline: "From capacity added to clean energy delivered.",
      ask: "Approve a pilot of the Surya AI Command Centre with 2 DISCOMs and 1 state load despatch centre, nominate a Joint Secretary as nodal officer, and authorise API access to the PM Surya Ghar portal and PM-KUSUM data in coordination with the Ministry of Power.",
      keyPoints: [
        "Uses existing systems: PM Surya Ghar portal, RDSS smart meters and SLDC data. No new registry.",
        "Speeds rooftop approvals and reduces curtailment, the two main bottlenecks today.",
        "Read-only grid integration in the pilot, with human dispatchers in control.",
        "Pilot cost of about ₹30 crore within a ₹210 crore three-year envelope.",
        "Government owns all code, data and models.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "Surya AI is an intelligence layer over existing energy systems. It reads applications from the PM Surya Ghar portal, meter data from RDSS head-end systems and schedules from load despatch centres, and returns verifications, forecasts and recommendations.",
          bullets: [
            "API links to the national rooftop portal and DISCOM systems",
            "Read-only SCADA and SLDC integration in the pilot",
            "Satellite and IMD weather pipelines for forecasting",
            "Bhashini for every citizen interaction",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We recommend a QCBS RFP on GeM for the system integrator, with pilot funding from PM Surya Ghar administrative components and RDSS, in convergence with state nodal agencies. Compute comes from the IndiaAI Mission.",
          bullets: [
            "QCBS tender on GeM with open-source and exit clauses",
            "Convergence with RDSS and PM Surya Ghar funds",
            "IndiaAI Mission compute and application support",
            "Milestone payments tied to measured outcomes",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Secretary, MNRE, with the Ministry of Power, CEA, Grid-India and partner states, sets direction. A PMU at a designated MNRE agency runs delivery.",
          bullets: [
            "Quarterly Steering Committee; monthly PMU reviews",
            "Nodal officers at each partner DISCOM and SLDC",
            "Technical committee with CEA, Grid-India and IMD",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "The platform follows the DPDP Act 2023 and DPDP Rules 2025, CEA cyber security guidelines for the power sector, and the India AI Governance Guidelines. All data is hosted in India on MeghRaj / NIC cloud.",
          bullets: [
            "Consent for household meter data; aggregation by default",
            "CERT-In and CEA aligned security audits",
            "Data Protection Impact Assessment before go-live",
            "Public register of models and their purpose",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "A live dashboard tracks approval times, inspections, forecast error and curtailment. An independent evaluator compares pilot DISCOMs with comparison DISCOMs.",
          bullets: [
            "MNRE, state and DISCOM dashboards",
            "Monthly forecast accuracy reports",
            "Third-party evaluation of time, cost and energy outcomes",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officer and select 2 DISCOMs and 1 SLDC.",
        "Week 3–6: Sign data-sharing MoUs with partner states, DISCOMs and the Ministry of Power.",
        "Week 7–10: Issue QCBS RFP on GeM and set up the PMU.",
        "Month 4: Surya Sahayak and Rooftop Verifier live with the first DISCOM.",
        "Month 6: Steering Committee review and scale-up decision.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of New & Renewable Energy",
      headline: "Every rooftop faster. Every unit used.",
      ask: "Announce Surya AI as the digital backbone of PM Surya Ghar and PM-KUSUM, with a two-state pilot and a commitment to cut rooftop approval times and solar curtailment nationwide by 2029.",
      keyPoints: [
        "175 GW of solar is built. Surya AI makes sure it is used.",
        "Rooftop solar from application to switch-on, 30% faster.",
        "Most inspections cleared by AI, without waiting for a visit.",
        "Sharper solar forecasts for a steadier grid.",
        "Farm feeders solarised where they deliver the most.",
      ],
      sections: [
        {
          heading: "A day with Surya Sahayak",
          body: "The Sharma family in Jaipur ask Surya Sahayak, in Hindi, whether solar makes sense for them. It reads their bill, recommends a 3 kW system, lists registered vendors nearby and explains the subsidy and loan. After installation, they upload two photos. AI verifies the system, and the subsidy is on its way within days. Months later, Panel Doctor notices output has dropped and reminds them to clean the panels.",
          bullets: [
            "One conversation from interest to zero bill",
            "No waiting weeks for an inspector",
            "Systems that keep performing for years",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "Energy independence is central to a developed India. Surya AI helps the country reach 500 GW of non-fossil capacity by 2030 and use every unit of it, while bringing the benefits of solar to every home and farm.",
          bullets: [
            "Supports PM Surya Ghar's goal of 1 crore solar homes",
            "Stronger grid for green hydrogen and electric mobility",
            "Built on sovereign AI under the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Visible results with two DISCOMs within the first 100 days.",
          bullets: [
            "Day 30: Surya Sahayak WhatsApp number launched",
            "Day 60: First rooftop subsidies released after AI verification",
            "Day 90: Sun Forecast running alongside the state load despatch centre",
            "Day 100: Results shared publicly at a national renewable energy event",
          ],
        },
        {
          heading: "Value for money",
          body: "About ₹210 crore over three years, shared across every state that joins. Even a small cut in curtailment and inspection costs repays the investment, while more households and farmers benefit sooner.",
          bullets: [
            "One platform reused nationwide",
            "Outcome-linked payments",
            "All code and data owned by government",
          ],
        },
      ],
      nextSteps: [
        "Approve the pilot and announce Surya AI at the next national renewable energy event.",
        "Invite two high-solar states to co-lead the pilot.",
        "Review 100-day results and announce national scale-up.",
      ],
    },
  ],
};
