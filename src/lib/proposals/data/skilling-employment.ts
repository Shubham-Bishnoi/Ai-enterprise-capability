import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "skilling-employment",
  sector: "Skilling & Employment",
  category: "livelihoods",
  title: "The right skill. The right job. Right now.",
  tagline:
    "An AI career companion that connects every young Indian to the skill, the internship and the job that fits them, in their own language.",
  summary:
    "India has built large digital platforms for skilling and jobs: Skill India Digital Hub, the National Career Service and e-Shram. Yet youth unemployment in cities remains high and many offers go untaken. Kaushal AI connects these platforms with one intelligent layer that counsels, trains and matches every jobseeker, and tells every district which skills its employers actually need.",
  heroStat: {
    value: "19%",
    label: "unemployment rate among urban youth aged 15–29, rising to 26.6% for young women",
    source: "MoSPI, PLFS monthly bulletin, Sep 2026",
  },
  context: {
    stats: [
      {
        value: "1.5 crore+",
        label: "registered learners on the Skill India Digital Hub",
        source: "MSDE, 2026",
      },
      {
        value: "31.89 crore",
        label: "unorganised workers registered on e-Shram",
        source: "Ministry of Labour & Employment, Aug 2026",
      },
      {
        value: "3.43 crore",
        label:
          "vacancies mobilised on the National Career Service portal in FY 2025-26 (to January)",
        source: "Ministry of Labour & Employment, 2026",
      },
      {
        value: "1.27 lakh",
        label:
          "internships offered in round one of the PM Internship Scheme pilot, of which about 8,700 were joined",
        source: "Ministry of Corporate Affairs data, 2026",
      },
    ],
    challenges: [
      "Jobs and jobseekers miss each other. Vacancies sit on portals while candidates do not hear of them, or find them too far, too unfamiliar or poorly matched.",
      "Most young people choose a course without career guidance, so training often does not match local employer demand.",
      "Skill, job and welfare platforms hold separate records, so a candidate's history does not follow them from course to certificate to job.",
      "ITIs and training partners lack real-time signals on which trades employers want and how graduates fare after placement.",
      "Informal workers on e-Shram rarely receive upskilling or job offers suited to their trade and location.",
    ],
  },
  policyAlignment: [
    {
      name: "Skill India Digital Hub (SIDH)",
      ministry: "Ministry of Skill Development & Entrepreneurship",
      note: "SIDH already serves over 1.5 crore users in 23 languages. Kaushal AI adds personal counselling, adaptive learning paths and verified-skill matching on top of SIDH records.",
    },
    {
      name: "PM Internship Scheme",
      ministry: "Ministry of Corporate Affairs",
      note: "The pilot saw low conversion from offer to joining. Our matching engine weighs distance, stipend, interest and family constraints, and nudges candidates through to joining.",
    },
    {
      name: "PM Viksit Bharat Rozgar Yojana",
      ministry: "Ministry of Labour & Employment",
      note: "With ₹99,446 crore to incentivise over 3.5 crore jobs between August 2025 and July 2027, the scheme needs fast, accurate matching of first-time workers to employers. Kaushal AI provides it.",
    },
    {
      name: "National Scheme for ITI Upgradation",
      ministry: "Ministry of Skill Development & Entrepreneurship",
      note: "A ₹60,000 crore scheme to upgrade 1,000 government ITIs in a hub-and-spoke model. Our demand radar tells each hub which trades to add, and our AI tutor supports trainees.",
    },
    {
      name: "National Career Service and e-Shram",
      ministry: "Ministry of Labour & Employment",
      note: "NCS vacancies and e-Shram worker profiles feed the matching engine, with worker consent, so informal workers see suitable jobs and courses.",
    },
    {
      name: "Education to Employment and Enterprise Standing Committee (Union Budget 2026-27)",
      ministry: "Ministry of Finance with MSDE and Ministry of Education",
      note: "The Committee will assess the impact of AI on jobs. Our anonymised, district-level skills demand data can inform its work.",
    },
  ],
  solutions: [
    {
      name: "Kaushal Copilot",
      description:
        "A career counsellor on WhatsApp and voice, in 22 languages through Bhashini. It asks about interests, education and location, then suggests a course, an internship or a job, with honest pay and distance information.",
      impact: "50 lakh young people counselled in three years.",
    },
    {
      name: "Skill Demand Radar",
      description:
        "Reads NCS vacancies, apprenticeship demand and public job postings to forecast which skills each district will need over the next 12 months. Training partners and ITIs see where to add seats.",
      impact: "Course mix in pilot ITIs aligned to local demand within one admission cycle.",
    },
    {
      name: "Match Engine",
      description:
        "Matches candidates to internships, apprenticeships and jobs using skills, distance, stipend and preferences, not just keywords. It follows up by voice to help the candidate actually join.",
      impact: "Offer-to-joining conversion doubled against the PM Internship pilot baseline.",
    },
    {
      name: "ITI Tutor",
      description:
        "An AI tutor and practice assessor for ITI trades, with video, voice and diagrams in the trainee's language. It flags trainees at risk of dropping out so instructors can step in.",
      impact: "Trade test pass rates up 15 points in pilot ITIs.",
    },
    {
      name: "Skill Passport",
      description:
        "A verifiable record of courses, certificates and work history in DigiLocker that employers can check in seconds. AI extracts skills from certificates and past work to build the profile.",
      impact: "Employer verification time cut from days to minutes.",
    },
    {
      name: "Shram Setu",
      description:
        "An IVR and missed-call service for e-Shram workers that offers nearby jobs, short upskilling courses and welfare scheme eligibility, by voice.",
      impact: "10 lakh informal workers connected to at least one job or course.",
    },
  ],
  centralSystem: {
    name: "Kaushal AI Exchange",
    description:
      "A national skills and jobs intelligence platform that MSDE, the Ministry of Labour & Employment, MCA and every state skill mission can plug into. It links SIDH, NCS and e-Shram through consented APIs and serves both the candidate and the planner.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "WhatsApp, IVR and web counselling in 22 languages",
          "Mobile app for ITI trainees and instructors",
          "Employer portal for verified hiring",
          "District and state skill mission dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Career counselling assistant grounded in national occupation standards",
          "Skills demand forecasting by district and sector",
          "Candidate-job matching and joining nudges",
          "Adaptive tutoring, assessment and dropout prediction",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Unified, consented learner profile across SIDH, NCS and e-Shram",
          "Skills taxonomy mapped to the National Skills Qualification Framework",
          "Verifiable credentials through DigiLocker",
          "Audit trail and consent logs",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "Hosting on MeghRaj / NIC cloud within India",
          "IndiaAI compute for model training",
          "Bias testing by gender, caste, region and disability",
          "Government ownership of code, data and models",
        ],
      },
    ],
    dataSources: [
      "Skill India Digital Hub learner and course records",
      "National Career Service vacancies and jobseekers",
      "e-Shram worker registry (with consent)",
      "PM Internship Scheme portal",
      "NAPS apprenticeship data",
      "PLFS labour market statistics",
      "EPFO new-subscriber data (aggregate)",
    ],
    integrations: [
      "Skill India Digital Hub",
      "National Career Service portal",
      "e-Shram and PM Internship portal",
      "DigiLocker and Aadhaar e-KYC",
      "Bhashini language APIs",
      "IndiaAI compute portal and AIKosh",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–6",
      milestones: [
        "Launch in 8 districts across 2 states, including 20 government ITIs",
        "Kaushal Copilot and Match Engine live in 4 languages",
        "SIDH, NCS and PM Internship integrations certified",
        "Baseline cohort of 1 lakh candidates set for evaluation",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 7–18",
      milestones: [
        "All districts and ITIs in partner states onboarded",
        "Skill Demand Radar used in the next ITI admission cycle",
        "Skill Passport issued through DigiLocker",
        "10 lakh active candidates on the platform",
      ],
    },
    {
      phase: "Phase 3 — National platform",
      duration: "Months 19–36",
      milestones: [
        "Offered to all state skill missions as a shared service",
        "Integrated with ITI upgradation hubs nationwide",
        "Anonymised demand data shared with the Education to Employment and Enterprise Standing Committee",
        "Independent impact evaluation published",
      ],
    },
  ],
  budget: {
    total: "₹240 crore over 3 years",
    items: [
      { head: "Platform build and SIDH, NCS and e-Shram integration", amount: "₹55 crore" },
      { head: "AI models, tutoring content and IndiaAI compute", amount: "₹45 crore" },
      { head: "Voice, WhatsApp and IVR operations", amount: "₹35 crore" },
      { head: "ITI and district rollout, instructor training", amount: "₹45 crore" },
      { head: "Cloud, security and DPDP compliance", amount: "₹25 crore" },
      {
        head: "PMU, monitoring and third-party evaluation",
        amount: "₹35 crore",
        note: "Including tracer studies of placed candidates",
      },
    ],
    note: "Indicative estimate. Can converge with the ITI upgradation scheme, PMKVY 4.0 and IndiaAI Mission support; refined after the pilot.",
  },
  kpis: [
    { metric: "Young people counselled", target: "50 lakh by month 36" },
    { metric: "Offer-to-joining conversion for internships and jobs", target: "2x pilot baseline" },
    { metric: "Placed candidates still employed after 6 months", target: "70%" },
    { metric: "ITI trade test pass rate in pilot institutes", target: "+15 percentage points" },
    { metric: "Women among placed candidates", target: "At least 40%" },
    { metric: "e-Shram workers linked to a job or course", target: "10 lakh" },
  ],
  risks: [
    {
      risk: "Sensitive personal and employment data, and DPDP Act 2023 obligations.",
      mitigation:
        "Consent-first profiles, purpose limitation, data hosted in India, special safeguards for minors, and a Data Protection Impact Assessment before launch.",
    },
    {
      risk: "Matching models reinforce gender, caste or regional bias.",
      mitigation:
        "Fairness audits each quarter, protected attributes excluded from ranking, and published outcome data by group.",
    },
    {
      risk: "Low trust or low digital access among rural youth.",
      mitigation:
        "Voice and IVR first, counselling camps in ITIs and colleges, and Skill India centres as assisted access points.",
    },
    {
      risk: "Instructors and placement officers do not adopt the tools.",
      mitigation:
        "Tools that cut their reporting load, training through state skill missions, and recognition for top-performing ITIs.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Government owns code, data and model weights; open APIs and exit clauses in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary, Ministry of Skill Development & Entrepreneurship",
      headline: "One AI layer that makes SIDH, NCS and e-Shram work as one.",
      ask: "Approve an 8-district, 20-ITI pilot of the Kaushal AI Exchange on the Skill India Digital Hub, nominate a Joint Secretary as nodal officer, and initiate data-sharing agreements with the Ministry of Labour & Employment and MCA.",
      keyPoints: [
        "Uses existing platforms: SIDH, NCS, e-Shram and the PM Internship portal. No new registration for candidates.",
        "Six AI services on one platform, one consent model and one security standard.",
        "Directly supports PM-VBRY job targets and ITI upgradation outcomes.",
        "Pilot cost of about ₹35 crore within a ₹240 crore three-year envelope.",
        "Government owns all code, data and models.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "Kaushal AI Exchange is an intelligence layer on top of SIDH. It reads course, vacancy and worker data from SIDH, NCS and e-Shram through consented APIs, and writes credentials to DigiLocker.",
          bullets: [
            "Unified learner profile with candidate consent",
            "Skills taxonomy aligned to NSQF and national occupation standards",
            "DigiLocker for verifiable certificates",
            "Bhashini for every voice and language interaction",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "We propose a QCBS RFP on GeM for the system integrator, funded from SIDH and PMKVY 4.0 IT components, with ITI rollout through the National Scheme for ITI Upgradation. Compute comes from the IndiaAI Mission.",
          bullets: [
            "QCBS tender on GeM with open-source and data-ownership clauses",
            "Convergence with ITI upgradation and state skill mission budgets",
            "IndiaAI Mission compute and application development support",
            "Milestone payments tied to placements, not log-ins",
          ],
        },
        {
          heading: "Governance",
          body: "A Steering Committee chaired by the Secretary, MSDE, with the Ministry of Labour & Employment, MCA, NSDC and DGT, sets direction. A PMU at NSDC or DGT runs delivery.",
          bullets: [
            "Quarterly Steering Committee; monthly PMU reviews",
            "District skill committee nodal officers in each pilot district",
            "Industry advisory group for demand signals",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "The platform follows the DPDP Act 2023 and DPDP Rules 2025, including verifiable parental consent for minors, and the India AI Governance Guidelines. All data is hosted on MeghRaj / NIC cloud.",
          bullets: [
            "Consent and purpose limitation for every data flow",
            "Additional safeguards for candidates under 18",
            "Data Protection Impact Assessment and CERT-In aligned audits",
            "Public model register and grievance channel",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "A live dashboard tracks counselling, enrolment, joining and six-month retention. A third-party evaluator runs tracer studies against comparison districts.",
          bullets: [
            "District and state dashboards for skill missions",
            "Quarterly fairness and accuracy audits",
            "Independent tracer study of placed candidates",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate nodal officer and select 8 districts and 20 ITIs.",
        "Week 3–6: Sign data-sharing agreements with MoLE (NCS, e-Shram) and MCA (PM Internship).",
        "Week 7–10: Issue QCBS RFP on GeM and constitute the PMU.",
        "Month 4: Kaushal Copilot live in the first district.",
        "Month 6: Steering Committee review and scale-up decision.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee:
        "Hon'ble Minister of State (Independent Charge), Ministry of Skill Development & Entrepreneurship",
      headline: "A career counsellor in every young Indian's pocket.",
      ask: "Announce Kaushal AI as the national AI career companion on the Skill India Digital Hub, with a pilot in 8 districts and a goal of counselling 50 lakh young people by 2029.",
      keyPoints: [
        "Free career guidance, by voice, in 22 Indian languages.",
        "Courses matched to the jobs that actually exist in each district.",
        "Twice as many internship and job offers converted to joining.",
        "Verified skills in DigiLocker that employers trust.",
        "Informal workers reached by a simple phone call.",
      ],
      sections: [
        {
          heading: "A day with Kaushal Copilot",
          body: "Arjun finished Class 12 in Bareilly and does not know what to do next. He sends a voice note in Hindi. Kaushal Copilot asks him three questions, shows him that electricians and solar technicians are in demand nearby, and enrols him in the right ITI course. Ten months later it alerts him to an apprenticeship 12 km from home, and calls to remind him of his joining date.",
          bullets: [
            "Guidance that used to need a city counsellor, now free",
            "Honest information on pay, distance and demand",
            "Support all the way to the first day at work",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "India's young workforce is its greatest asset. Kaushal AI helps convert the investment in ITIs, SIDH and the PM Internship Scheme into real jobs, and supports the PM Viksit Bharat Rozgar Yojana goal of 3.5 crore new jobs.",
          bullets: [
            "Skill India and Digital India working as one",
            "More women and rural youth in formal work",
            "Built on sovereign AI under the IndiaAI Mission",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Visible results in eight districts within the first 100 days.",
          bullets: [
            "Day 30: Kaushal Copilot WhatsApp number launched",
            "Day 60: 20 pilot ITIs using the AI tutor",
            "Day 90: First apprenticeships filled through the Match Engine",
            "Day 100: 2 lakh young people counselled, results shared publicly",
          ],
        },
        {
          heading: "Value for money",
          body: "About ₹240 crore over three years, a small share of national skilling spend, to make every rupee of training count. Payments are tied to placements and retention.",
          bullets: [
            "One platform reused by every state skill mission",
            "Outcome-linked payments",
            "All code and data owned by government",
          ],
        },
      ],
      nextSteps: [
        "Approve the pilot and announce it on World Youth Skills Day or a national skilling event.",
        "Invite two states to co-lead the first districts.",
        "Review 100-day results and announce national scale-up.",
      ],
    },
  ],
};
