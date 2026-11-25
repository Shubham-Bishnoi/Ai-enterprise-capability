import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "transport-logistics",
  sector: "Transport & Logistics",
  category: "infrastructure",
  title: "Safer roads. Smarter freight.",
  tagline:
    "AI on top of Gati Shakti, ULIP and eDAR that saves lives on the road and cuts the cost of moving every tonne.",
  summary:
    "India lost 1,77,175 lives on its roads in 2024, even as it built world-class highways, FASTag and a unified logistics data platform. We propose a Gati AI Command Centre that turns crash, traffic and freight data into action — fixing black spots, getting victims to care in the golden hour, filling empty trucks and spotting road defects early — through one platform every state and agency can use.",
  heroStat: {
    value: "1,77,175",
    label: "people killed in road crashes in India in 2024 — about 20 every hour",
    source: "MoRTH, Road Accidents in India 2024",
  },
  context: {
    stats: [
      {
        value: "7.97%",
        label: "India's logistics cost as a share of GDP, about ₹24.01 lakh crore in 2023-24",
        source: "NCAER study for DPIIT, September 2025",
      },
      {
        value: "225 crore+",
        label: "API transactions on the Unified Logistics Interface Platform (ULIP)",
        source: "DPIIT, December 2025",
      },
      {
        value: "98%",
        label: "of National Highway user fees collected through FASTag",
        source: "MoRTH, 2025-26",
      },
      {
        value: "3,103 route km",
        label:
          "of rail network covered by Kavach automatic train protection, with work under way on 24,427 route km more",
        source: "Ministry of Railways, March 2026",
      },
    ],
    challenges: [
      "Road deaths keep rising. Over-speeding accounted for 68.1% of road deaths in 2023, and every fifth person killed in 2024 was a pedestrian.",
      "Crash data is now recorded digitally in eDAR, but it is rarely turned into engineering fixes at black spots quickly enough.",
      "Victims lose the golden hour to slow alerts, unclear locations and confusion over which hospital can treat them.",
      "Freight data is scattered across dozens of public and private systems. Small transporters and MSMEs still run empty return trips and wait at terminals.",
      "Bridges and road surfaces are inspected manually and infrequently, so defects are found late and fixed at higher cost.",
    ],
  },
  policyAlignment: [
    {
      name: "PM Gati Shakti National Master Plan",
      ministry:
        "Department for Promotion of Industry & Internal Trade, Ministry of Commerce & Industry",
      note: "Corridor Twin runs on Gati Shakti's 1,700+ GIS data layers, adding live movement data to planning-grade maps.",
    },
    {
      name: "National Logistics Policy 2022 and ULIP",
      ministry: "Logistics Division, DPIIT",
      note: "Freight Match uses ULIP's APIs across 11 ministries, helping states improve their LEADS performance.",
    },
    {
      name: "Road safety: eDAR and the Cashless Treatment of Road Accident Victims Scheme, 2025",
      ministry: "Ministry of Road Transport & Highways",
      note: "Black Spot Radar learns from eDAR crash records; Golden Hour Router links victims to hospitals covered under the scheme's ₹1.5 lakh, seven-day cashless treatment.",
    },
    {
      name: "Vahan, Sarathi and FASTag (NETC)",
      ministry: "Ministry of Road Transport & Highways, with NHAI and NIC",
      note: "Anonymised traffic and vehicle data help estimate speed, flow and risk on every corridor, without tracking individuals.",
    },
    {
      name: "Kavach and railway safety",
      ministry: "Ministry of Railways",
      note: "Rail freight and level-crossing risk data feed the same command centre for multi-modal planning.",
    },
    {
      name: "Sagarmala",
      ministry: "Ministry of Ports, Shipping & Waterways",
      note: "Port and coastal cargo flows are added to Corridor Twin to cut dwell time at ports and inland container depots.",
    },
  ],
  solutions: [
    {
      name: "Black Spot Radar",
      description:
        "Combines eDAR crash records, FASTag speed data and road geometry to rank the most dangerous stretches every month and suggest proven engineering fixes for engineers to approve.",
      impact: "Deaths at treated black spots down 40% within two years.",
    },
    {
      name: "Golden Hour Router",
      description:
        "When a crash is reported through 112, a highway helpline or eDAR, AI finds the nearest ambulance and the nearest capable hospital under the cashless scheme, and alerts both in seconds.",
      impact: "Median crash-to-hospital time under 60 minutes on pilot corridors.",
    },
    {
      name: "Freight Match",
      description:
        "Uses ULIP data to forecast demand on each lane and match empty trucks with loads, offered to small transporters and MSMEs on WhatsApp in Hindi and regional languages.",
      impact: "Empty return trips on pilot corridors down 20%.",
    },
    {
      name: "Corridor Twin",
      description:
        "A digital twin of key freight corridors built on Gati Shakti layers, predicting congestion at ports, terminals and inland depots and testing infrastructure options before money is spent.",
      impact: "Average terminal dwell time down 15% on pilot corridors.",
    },
    {
      name: "Road Health Scan",
      description:
        "Reads video from survey vehicles, buses and drones to detect potholes, cracks, missing signs and bridge defects, and creates repair tickets for road-owning agencies.",
      impact:
        "Every pilot National and State Highway scanned each quarter; defects fixed 50% faster.",
    },
    {
      name: "Driver Saathi",
      description:
        "A voice-first learning and test-prep assistant for licence applicants in 22 languages, linked to Sarathi, plus opt-in fatigue alerts for commercial fleet drivers.",
      impact:
        "First-attempt pass rates up and fatigue-related incidents down in participating fleets.",
    },
  ],
  centralSystem: {
    name: "Gati AI Command Centre",
    description:
      "One national AI platform for road safety and logistics. MoRTH, NHAI, state transport and police departments, and logistics agencies plug in through standard APIs, sharing data and models while keeping their own operations.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Freight Match and Driver Saathi on WhatsApp and IVR",
          "Ambulance and hospital alert consoles",
          "Engineer apps for black spots and road defects",
          "State and national control-room dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Crash risk scoring and black spot ranking",
          "Ambulance and hospital routing",
          "Freight demand forecasting and load matching",
          "Computer vision for road and bridge defects",
          "Corridor congestion simulation",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "eDAR crash and trauma data",
          "ULIP logistics APIs",
          "Anonymised FASTag and traffic flows",
          "PM Gati Shakti GIS layers",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud hosting in India",
          "IndiaAI compute for training",
          "Data anonymisation and audit logs",
          "Model validation with IIT and road safety partners",
        ],
      },
    ],
    dataSources: [
      "eDAR crash and injury records",
      "FASTag / NETC toll transactions (anonymised)",
      "Vahan and Sarathi registries",
      "ULIP logistics data",
      "PM Gati Shakti GIS layers",
      "112 and highway helpline call data",
      "Road survey video and drone imagery",
    ],
    integrations: [
      "eDAR",
      "ULIP",
      "PM Gati Shakti National Master Plan",
      "Vahan and Sarathi (Parivahan)",
      "ERSS 112",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Black Spot Radar and Golden Hour Router on 2 high-fatality corridors in 2 states",
        "Freight Match live with transporters in 6 industrial districts",
        "Road Health Scan on 1,000 km of pilot highways",
        "Baseline on deaths, response times and empty running",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All National and State Highways in 2 pilot states covered",
        "Corridor Twin for one major freight corridor and its port",
        "Driver Saathi linked to Sarathi in pilot states",
        "Independent evaluation of road safety outcomes",
      ],
    },
    {
      phase: "Phase 3 — National",
      duration: "Months 19–36",
      milestones: [
        "10+ states onboarded, prioritising highest-fatality states",
        "Golden Hour Router on all pilot-state National Highways",
        "Freight Match integrated as a ULIP service",
        "Platform operated by MoRTH and DPIIT with open APIs",
      ],
    },
  ],
  budget: {
    total: "₹280 crore over 3 years",
    items: [
      {
        head: "Road safety AI",
        amount: "₹70 crore",
        note: "Black Spot Radar and Golden Hour Router",
      },
      {
        head: "Logistics AI and ULIP integration",
        amount: "₹55 crore",
        note: "Freight Match and Corridor Twin",
      },
      {
        head: "Road and bridge scanning",
        amount: "₹45 crore",
        note: "Survey video, drones and vision models",
      },
      {
        head: "Compute and secure cloud",
        amount: "₹40 crore",
        note: "IndiaAI GPUs and MeghRaj hosting",
      },
      {
        head: "State rollout and training",
        amount: "₹30 crore",
        note: "Engineers, transport staff and ambulance crews",
      },
      {
        head: "PMU, evaluation and audits",
        amount: "₹40 crore",
        note: "Including independent road safety evaluation",
      },
    ],
    note: "Indicative estimate, to be refined after the pilot. Designed to converge with MoRTH road safety funds, NHAI maintenance budgets, DPIIT logistics programmes and state transport budgets.",
  },
  kpis: [
    { metric: "Road deaths on pilot corridors", target: "Down 25% in three years" },
    { metric: "Deaths at treated black spots", target: "Down 40%" },
    { metric: "Median crash-to-hospital time on pilot corridors", target: "Under 60 minutes" },
    { metric: "Empty return trips for participating transporters", target: "Down 20%" },
    { metric: "Terminal dwell time on pilot corridors", target: "Down 15%" },
    { metric: "Time to repair detected road defects", target: "50% faster" },
  ],
  risks: [
    {
      risk: "Vehicle and travel data are used to track individuals.",
      mitigation:
        "Only anonymised, aggregated FASTag and traffic data are used, under the DPDP Act 2023 and DPDP Rules 2025, with hosting in India and audited access.",
    },
    {
      risk: "Models miss risk on rural roads with poor data.",
      mitigation:
        "Road Health Scan and eDAR coverage extended to State and rural roads, with accuracy reported separately for each road class.",
    },
    {
      risk: "Engineers and field staff do not act on AI findings.",
      mitigation:
        "Findings come as ready repair tickets with costs, tracked on dashboards reviewed by the Secretary and state Chief Engineers.",
    },
    {
      risk: "Small transporters do not adopt Freight Match.",
      mitigation:
        "WhatsApp-first design in local languages, no fees in the pilot, and onboarding through transport associations.",
    },
    {
      risk: "Lock-in to one vendor or proprietary map data.",
      mitigation:
        "Gati Shakti and open map layers as the base, government-owned models and data, open APIs and exit clauses.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary, Ministry of Road Transport & Highways",
      headline: "Turn eDAR, FASTag and ULIP data into lives saved and costs cut.",
      ask: "Approve a 6-month pilot on two high-fatality corridors in two states, funded from MoRTH road safety and NHAI budgets in convergence with DPIIT's Logistics Division, and nominate the Joint Secretary in charge of Road Safety as nodal officer.",
      keyPoints: [
        "Builds on eDAR, FASTag, Vahan, Sarathi, ULIP and Gati Shakti. No parallel database.",
        "Targets a 25% cut in deaths on pilot corridors.",
        "Pilot cost about ₹30 crore within a ₹280 crore three-year envelope.",
        "Links crash response to the cashless treatment scheme.",
        "Anonymised data, hosted in India, fully audited.",
      ],
      sections: [
        {
          heading: "Implementation architecture and integration",
          body: "AI services sit on top of existing MoRTH and DPIIT systems and are called through APIs. Findings are delivered as tickets and alerts inside the tools engineers, ambulance services and transporters already use.",
          bullets: [
            "eDAR integration for crash and trauma data",
            "Anonymised FASTag / NETC feeds through NHAI",
            "ULIP and PM Gati Shakti APIs through DPIIT",
            "ERSS 112 and highway helpline links for crash alerts",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "Funding converges with MoRTH road safety and research budgets, NHAI maintenance funds, DPIIT logistics programmes and state transport budgets. Procurement uses a QCBS RFP, with survey vehicles and drones on GeM, and compute from the IndiaAI Mission.",
          bullets: [
            "MoRTH road safety and NHAI budgets",
            "DPIIT Logistics Division for ULIP and Gati Shakti components",
            "IndiaAI compute portal for GPUs",
            "QCBS RFP for the integrator; GeM for hardware and survey services",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Secretary, MoRTH, with DPIIT, NHAI, Railways, MoHFW and pilot-state Transport Secretaries, sets direction. A PMU at MoRTH runs delivery, and each state names nodal officers in transport, police and health.",
          bullets: [
            "Steering Committee meeting quarterly",
            "PMU at MoRTH with DPIIT logistics support",
            "State nodal officers in transport, police and health",
            "Technical advisory group with IITs and road safety experts",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "Processing follows the DPDP Act 2023 and the DPDP Rules 2025, and MeitY's India AI Governance Guidelines. Vehicle and travel data are anonymised before analysis, stored only on MeghRaj or NIC cloud, and every access is logged.",
          bullets: [
            "Anonymisation and aggregation of FASTag and Vahan data",
            "Consent for Freight Match and Driver Saathi users",
            "Hosting in India with role-based access",
            "Annual security and algorithmic audit",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "Dashboards track deaths, response times, black spot fixes, empty running and dwell times on pilot and comparison corridors. An independent institution evaluates outcomes each year.",
          bullets: [
            "Pilot versus comparison-corridor design",
            "Monthly review in the Steering Committee",
            "Annual independent road safety evaluation",
            "Results shared with all states and in LEADS reporting",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate the Joint Secretary in charge of Road Safety as nodal officer and agree DPIIT participation.",
        "Week 3–4: Select two pilot states and corridors; sign data-sharing MoUs.",
        "Month 2: Issue the QCBS RFP and secure IndiaAI compute.",
        "Month 3: Complete the data protection assessment and baseline.",
        "Month 4: Go live on pilot corridors.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Road Transport & Highways",
      headline: "Fewer funerals. Fuller trucks.",
      ask: "Announce the Gati AI initiative as part of India's road safety mission, with two pilot corridors live within 100 days.",
      keyPoints: [
        "A 25% cut in road deaths on pilot corridors.",
        "Crash victims in hospital within the golden hour.",
        "Black spots found and fixed in months, not years.",
        "20% fewer empty truck trips for small transporters.",
        "Built on FASTag, eDAR, ULIP and Gati Shakti — India's own platforms.",
      ],
      sections: [
        {
          heading: "A citizen's story",
          body: "Arjun, a 24-year-old delivery rider, is hit on a highway outside Jaipur at night. A passer-by calls 112. Within seconds, AI pinpoints the location, alerts the nearest ambulance and a trauma hospital covered by the cashless scheme. He is in surgery within the hour, and the family pays nothing up front. A month later, the same junction is redesigned after the system flags it as a black spot.",
          bullets: [
            "Faster ambulance and the right hospital",
            "Cashless treatment from the first hour",
            "The road fixed so the next crash does not happen",
          ],
        },
        {
          heading: "Viksit Bharat @2047 and national priorities",
          body: "World-class roads must also be the world's safest, and lower logistics costs make Indian goods more competitive. This initiative serves both goals, building on PM Gati Shakti and the National Logistics Policy.",
          bullets: [
            "Advances India's commitment to halve road deaths",
            "Lowers logistics costs for MSMEs and exporters",
            "Showcases Indian AI on Indian infrastructure",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "With two partner states, the first corridors can go live within 100 days.",
          bullets: [
            "Day 30: Pilot corridors and states announced",
            "Day 75: Golden Hour Router live on the first corridor",
            "Day 100: First list of AI-identified black spots handed to engineers",
          ],
        },
        {
          heading: "Value for money",
          body: "At about ₹280 crore over three years, the programme is modest next to the human and economic cost of road crashes and the ₹24 lakh crore India spends on logistics each year.",
          bullets: [
            "Reuses FASTag, eDAR, ULIP and Gati Shakti",
            "Subsidised compute under the IndiaAI Mission",
            "Every rupee tied to measured outcomes",
          ],
        },
      ],
      nextSteps: [
        "Approve the concept and direct MoRTH to prepare the pilot with DPIIT.",
        "Announce the initiative during Road Safety Month or a national highways event.",
        "Invite two high-fatality states to partner in the first phase.",
      ],
    },
  ],
};
