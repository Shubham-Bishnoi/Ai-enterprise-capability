import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "women-child-nutrition",
  sector: "Women, Child & Nutrition",
  category: "social",
  title: "Every child, measured. Every mother, supported.",
  tagline:
    "AI that turns Poshan Tracker data into timely action for every child, every mother and every Anganwadi worker.",
  summary:
    "India has cut child stunting from 35.5% to 29.3% in five years, and Poshan Tracker now monitors about 14 lakh Anganwadi Centres in real time. The next gain comes from acting on that data faster. We propose a Poshan AI Command Centre that flags at-risk children early, lightens the Anganwadi worker's load and guides mothers by voice, in their own language.",
  heroStat: {
    value: "29.3%",
    label: "of children under five are still stunted, down from 35.5% in NFHS-5",
    source: "NFHS-6 (2023-24), MoHFW, 2026",
  },
  context: {
    stats: [
      {
        value: "14 lakh",
        label: "Anganwadi Centres and about 9 crore beneficiaries monitored on Poshan Tracker",
        source: "Ministry of Women & Child Development, 2026",
      },
      {
        value: "31.8%",
        label: "of children under five are underweight",
        source: "NFHS-6 (2023-24)",
      },
      {
        value: "57%",
        label: "of women aged 15–49 anaemic at the last national measurement",
        source: "NFHS-5 (2019-21)",
      },
      {
        value: "4.26 crore",
        label: "women paid maternity benefits under PMMVY since 2017",
        source: "Ministry of Women & Child Development, January 2026",
      },
    ],
    challenges: [
      "Growth data is captured every month, but at-risk children are often identified too late for early intervention.",
      "Anganwadi workers juggle registers, home visits, pre-school and nutrition on a single smartphone, often in a second language.",
      "Measurement errors in height and weight make district-level malnutrition maps less reliable than they should be.",
      "Face authentication for Take Home Ration must protect integrity without excluding genuine beneficiaries.",
      "Women in distress do not always know where to turn, or cannot describe their situation in the helpline's language.",
    ],
  },
  policyAlignment: [
    {
      name: "Mission Saksham Anganwadi & Poshan 2.0",
      ministry: "Ministry of Women & Child Development",
      note: "Every AI service runs on Poshan Tracker data and appears inside the existing Anganwadi worker app. Budget 2026-27 allocates ₹23,100 crore to the mission.",
    },
    {
      name: "Poshan Tracker & Facial Recognition System",
      ministry: "Ministry of Women & Child Development",
      note: "AI quality checks on growth data and FRS exception analytics make the tracker more accurate and more inclusive.",
    },
    {
      name: "Pradhan Mantri Matru Vandana Yojana (Mission Shakti — Samarthya)",
      ministry: "Ministry of Women & Child Development",
      note: "Matru Saathi helps eligible women apply, track payments and follow nutrition guidance during pregnancy.",
    },
    {
      name: "Mission Shakti — One Stop Centres & Women Helpline 181",
      ministry: "Ministry of Women & Child Development",
      note: "Shakti Setu adds multilingual AI triage and case routing to the 926 One Stop Centres and the 181 helpline.",
    },
    {
      name: "Poshan Bhi Padhai Bhi (ECCE)",
      ministry: "Ministry of Women & Child Development",
      note: "Bal Vikas Coach generates play-based early learning activities for Saksham Anganwadi LED screens and worker phones.",
    },
    {
      name: "IndiaAI Mission & Bhashini",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Bhashini voice in 22 languages and IndiaAI compute keep the platform multilingual, affordable and sovereign.",
    },
  ],
  solutions: [
    {
      name: "Poshan Drishti",
      description:
        "AI that checks every height and weight entry on Poshan Tracker for errors, predicts which children are sliding towards wasting or stunting, and alerts the worker and supervisor with a suggested action.",
      impact: "Target: at-risk children flagged 2–3 months earlier than today.",
    },
    {
      name: "Anganwadi Sahayika",
      description:
        "A voice assistant for Anganwadi workers in their own language. She speaks; it fills the register, schedules home visits and offers counselling scripts on feeding, hygiene and anaemia.",
      impact: "Target: 1.5 hours of paperwork saved per worker per day.",
    },
    {
      name: "Matru Saathi",
      description:
        "A WhatsApp and IVR companion for pregnant and lactating women. It sends trimester-specific nutrition advice, ANC and immunisation reminders, and helps with PMMVY applications, in 22 languages.",
      impact: "Target: 90% of registered pregnant women complete 4+ ANC visits in pilot districts.",
    },
    {
      name: "Ration Route",
      description:
        "Demand forecasting for Take Home Ration and hot-cooked meals by Anganwadi Centre, plus analytics on face-authentication failures so that genuine beneficiaries are never turned away.",
      impact: "Target: 40% fewer ration stock-outs and zero exclusion from authentication failure.",
    },
    {
      name: "Shakti Setu",
      description:
        "Multilingual AI triage for the 181 helpline and One Stop Centres. It understands a caller's language, assesses urgency and routes her to police, medical, legal or shelter support, with a human counsellor always in the loop.",
      impact: "Target: time-to-first-response under 5 minutes for high-risk calls.",
    },
    {
      name: "Bal Vikas Coach",
      description:
        "Play-based early childhood activities, stories and songs generated for each child's age and language, delivered on Saksham Anganwadi LED screens and the worker's phone.",
      impact: "Target: 80% of 3–6 year olds in pilot centres meet age-appropriate ECCE milestones.",
    },
  ],
  centralSystem: {
    name: "Poshan AI Command Centre",
    description:
      "One national AI platform for nutrition and women's welfare. States, districts and ICDS projects plug in through Poshan Tracker APIs, share validated models and see one picture of every child and mother.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Anganwadi Sahayika inside the Poshan Tracker app",
          "Matru Saathi on WhatsApp and IVR",
          "Shakti Setu for 181 and One Stop Centres",
          "Supervisor, CDPO and district dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Growth-data quality checks and malnutrition risk prediction",
          "Bhashini speech-to-form in 22 languages",
          "Ration demand forecasting",
          "Distress call triage and routing",
          "Personalised ECCE content generation",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Poshan Tracker API connectors",
          "Consent-based link to RCH, U-WIN and ABHA records",
          "De-identified analytics store for model training",
          "Model registry with bias and accuracy reports",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud with data stored in India",
          "IndiaAI compute for model training",
          "Ethics and child-safety board",
          "DPDP-compliant consent and retention controls",
        ],
      },
    ],
    dataSources: [
      "Poshan Tracker growth, attendance and ration data",
      "PMMVY beneficiary and payment data",
      "RCH portal and U-WIN immunisation records",
      "NFHS district fact sheets",
      "One Stop Centre and 181 case records (anonymised)",
      "Supply chain data for Take Home Ration",
    ],
    integrations: [
      "Poshan Tracker",
      "PMMVY portal and PFMS for DBT",
      "ABDM and U-WIN (with consent)",
      "Aadhaar e-KYC and face authentication",
      "Bhashini",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 0 — Foundations",
      duration: "Months 0–3",
      milestones: [
        "MoU with state WCD department",
        "Ethics and child-safety board constituted",
        "Data sharing agreement for Poshan Tracker and RCH data",
        "Baseline in 6 pilot districts",
      ],
    },
    {
      phase: "Phase 1 — Pilot in 6 districts",
      duration: "Months 4–9",
      milestones: [
        "Poshan Drishti alerts live for 8,000 Anganwadi Centres",
        "Anganwadi Sahayika in 2 languages",
        "Matru Saathi enrolling pregnant women in pilot blocks",
        "Independent mid-line evaluation",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 10–21",
      milestones: [
        "All Anganwadi Centres in the state onboarded",
        "Ration Route forecasting statewide",
        "Shakti Setu integrated with the state 181 helpline and all OSCs",
        "Bal Vikas Coach on every Saksham Anganwadi screen",
      ],
    },
    {
      phase: "Phase 3 — Multi-state platform",
      duration: "Months 22–36",
      milestones: [
        "Shared service offered to 5+ states",
        "All 22 scheduled languages live",
        "Integration with national Poshan Tracker release",
        "Endline evaluation of nutrition outcomes",
      ],
    },
  ],
  budget: {
    total: "₹260 crore over 3 years",
    items: [
      {
        head: "AI model development & validation",
        amount: "₹55 crore",
        note: "With an AI CoE and public health institute",
      },
      {
        head: "Platform, integration & cloud hosting",
        amount: "₹65 crore",
        note: "Poshan Tracker, PMMVY, 181 integration",
      },
      {
        head: "Growth-monitoring device top-up",
        amount: "₹40 crore",
        note: "Stadiometers, infantometers, weighing scales",
      },
      {
        head: "Worker training & change management",
        amount: "₹45 crore",
        note: "AWWs, supervisors, CDPOs, OSC staff",
      },
      { head: "Programme management unit", amount: "₹30 crore", note: "State and national PMU" },
      {
        head: "Independent evaluation & audits",
        amount: "₹25 crore",
        note: "Third-party evaluation, privacy and security audits",
      },
    ],
    note: "Indicative estimate for a one-state pilot scaling to a multi-state shared service. To be refined after Phase 1 and converged with Poshan 2.0 ICT and Mission Shakti administrative funds.",
  },
  kpis: [
    {
      metric: "At-risk children identified before severe wasting",
      target: "80% in pilot districts",
    },
    { metric: "Growth-data error rate on Poshan Tracker", target: "Below 2%" },
    { metric: "Anganwadi worker time saved on records", target: "1.5 hours per day" },
    { metric: "Pregnant women completing 4+ ANC visits", target: "90% in pilot districts" },
    { metric: "Beneficiaries denied ration due to authentication failure", target: "Zero" },
    { metric: "High-risk 181 calls answered and routed", target: "Under 5 minutes" },
  ],
  risks: [
    {
      risk: "Privacy of women's and children's data under the DPDP Act 2023.",
      mitigation:
        "Consent-based processing, verifiable guardian consent for children, data stored in India on MeghRaj / NIC cloud, anonymised distress records, and readiness for DPDP Rules 2025 before May 2027.",
    },
    {
      risk: "Exclusion from face authentication or AI error.",
      mitigation:
        "AI never denies a benefit. Every failure has an OTP or supervisor fallback, and exclusion is tracked as a zero-tolerance KPI.",
    },
    {
      risk: "Model bias and weak dialect coverage.",
      mitigation:
        "Accuracy reported by language, district and social group. Bhashini models tuned with local speech data. Tribal languages added with community review.",
    },
    {
      risk: "Low adoption by overburdened Anganwadi workers.",
      mitigation:
        "Voice-first tools that remove paperwork. Workers co-design features. Training by supervisors in the local language.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Open standards, government ownership of data and model weights, and source code escrow in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary, Ministry of Women & Child Development, Government of India",
      headline: "From tracking every child to acting for every child.",
      ask: "Approve a 6-district pilot of the Poshan AI Command Centre under the Poshan 2.0 ICT component, with Poshan Tracker API access, and nominate a Joint Secretary-level nodal officer.",
      keyPoints: [
        "Runs on Poshan Tracker. No new app for the Anganwadi worker.",
        "Six AI tools across nutrition, maternity benefits, ECCE and women's safety.",
        "Indicative ₹260 crore over three years, piloted before any scale-up.",
        "Zero-exclusion design for face authentication.",
        "DPDP-ready, hosted in India on MeghRaj / NIC cloud.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "AI services sit behind Poshan Tracker and existing helplines. Workers see new features inside the app they already use. Officials see alerts on existing dashboards.",
          bullets: [
            "Poshan Tracker APIs for growth, attendance and ration data",
            "Bhashini for voice in 22 languages",
            "Offline-first design for low-connectivity centres",
            "Single model registry with audit logs",
          ],
        },
        {
          heading: "Procurement & funding route",
          body: "A QCBS RFP selects the platform integrator. Devices and cloud are bought on GeM. Funding converges Poshan 2.0 ICT, Mission Shakti and IndiaAI compute support.",
          bullets: [
            "QCBS selection under GFR 2017",
            "GeM for growth-monitoring devices and cloud",
            "Poshan 2.0 ICT and Mission Shakti administrative heads",
            "IndiaAI compute portal for training",
          ],
        },
        {
          heading: "Governance",
          body: "A steering committee chaired by the Secretary sets direction. A PMU delivers. An ethics and child-safety board approves every model before it reaches the field.",
          bullets: [
            "National steering committee, quarterly",
            "State Director, ICDS as state nodal officer",
            "District Programme Officers in each pilot district",
            "Ethics and child-safety board with public health experts",
          ],
        },
        {
          heading: "Data protection & compliance",
          body: "This programme handles some of the most sensitive data in government. It is designed for the DPDP Act 2023 and DPDP Rules 2025 from the first day.",
          bullets: [
            "Purpose-limited, consent-based processing",
            "Data localisation on MeghRaj / NIC cloud",
            "Distress-case data anonymised and access-logged",
            "Annual privacy and CERT-In security audits",
          ],
        },
        {
          heading: "Monitoring & evaluation",
          body: "Success is measured in children's growth and women's outcomes. An independent agency evaluates against a baseline.",
          bullets: [
            "Live KPI dashboard for Ministry and states",
            "Exclusion and error rates reported monthly",
            "Third-party evaluation at Months 9 and 36",
          ],
        },
      ],
      nextSteps: [
        "Week 2: Nominate nodal officer and Poshan Tracker technical lead.",
        "Week 4: Select pilot state and 6 districts with the State ICDS Director.",
        "Week 8: Sign MoU and issue QCBS RFP.",
        "Week 10: Constitute ethics and child-safety board.",
        "Month 4: Go live in pilot districts.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Women & Child Development",
      headline: "No child left unseen. No mother left unheard.",
      ask: "Announce the Poshan AI Command Centre as the next chapter of Mission Poshan 2.0, with a pilot launch in 100 days.",
      keyPoints: [
        "Stunting has fallen from 35.5% to 29.3%. AI can help finish the job.",
        "Earlier warning for every child at risk of malnutrition.",
        "A voice assistant for every Anganwadi worker, in her own language.",
        "A companion for every expecting mother on WhatsApp or a simple call.",
        "Faster help for every woman who calls 181.",
      ],
      sections: [
        {
          heading: "A day in the life",
          body: "Meena is an Anganwadi worker in a hill district. This morning her phone tells her that two-year-old Arjun's weight has stalled for two months. She visits his home that afternoon, using a counselling script in her own language. His mother, Pooja, is pregnant again and already gets voice reminders from Matru Saathi about her next check-up and her PMMVY instalment. Arjun gets extra support before he becomes wasted, not after.",
          bullets: [
            "Problems caught in weeks, not months",
            "Less paperwork, more time with families",
            "Mothers guided through pregnancy in their own language",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "A developed India starts with well-nourished children and empowered women. This programme builds on Poshan 2.0, Mission Shakti and India's own AI and language infrastructure.",
          bullets: [
            "Accelerates Suposhit Bharat goals under Poshan 2.0",
            "Strengthens Mission Shakti for women's safety",
            "Uses Bhashini and the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Three announceable moments in the first 100 days.",
          bullets: [
            "Day 30: Launch of the Poshan AI Command Centre and pilot state",
            "Day 60: Matru Saathi live for pregnant women in pilot districts",
            "Day 100: Poshan Drishti alerts active in 8,000 Anganwadi Centres",
          ],
        },
        {
          heading: "Value for money",
          body: "An indicative ₹260 crore over three years is about 1% of a single year's Saksham Anganwadi and Poshan 2.0 allocation. It helps every rupee of nutrition spending reach the right child at the right time.",
          bullets: [
            "One platform for every state",
            "Better targeting of rations and support",
            "Outcomes independently measured",
          ],
        },
      ],
      nextSteps: [
        "Approve the programme in principle.",
        "Announce the pilot during Poshan Maah.",
        "Review results publicly at 100 days.",
      ],
    },
  ],
};
