import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "education",
  sector: "Education",
  category: "social",
  title: "A tutor for every child.",
  tagline:
    "AI that helps every teacher teach, and every child learn, in the language they think in.",
  summary:
    "India enrols 24.72 crore children in school, yet learning falls away as they move up: average maths scores drop from 60% in Class 3 to 37% in Class 9. We propose a Shiksha AI Command Centre that gives teachers an assistant, children a reading tutor and administrators an early-warning system. It runs on DIKSHA, UDISE+, APAAR and Bhashini, in every scheduled language.",
  heroStat: {
    value: "24.72 crore",
    label: "students enrolled across 14.67 lakh schools",
    source: "UDISE+ 2025-26, Ministry of Education",
  },
  context: {
    stats: [
      {
        value: "60% → 37%",
        label: "average maths score, Class 3 to Class 9",
        source: "PARAKH Rashtriya Sarvekshan 2024, NCERT",
      },
      {
        value: "23.4%",
        label: "of Class 3 children in rural government schools can read a Class 2 text",
        source: "ASER 2024 (Rural)",
      },
      {
        value: "1,00,843",
        label: "single-teacher schools",
        source: "UDISE+ 2025-26",
      },
      {
        value: "67.4%",
        label: "of schools have internet access — one in three still do not",
        source: "UDISE+ 2025-26",
      },
    ],
    challenges: [
      "Learning gaps compound. Children who fall behind in Class 3 rarely catch up by Class 9.",
      "One teacher often handles several grades at once, with little time to give each child attention.",
      "Most quality digital content exists in a few languages. Many children think and speak in another.",
      "Dropout signals sit across attendance, marks and household data, but are rarely joined up in time to act.",
      "A third of schools still lack internet, so tools must work offline and on basic phones.",
    ],
  },
  policyAlignment: [
    {
      name: "National Education Policy 2020 & NIPUN Bharat",
      ministry: "Ministry of Education",
      note: "Padhai Mitra targets the foundational literacy and numeracy goals at the heart of NEP 2020 and NIPUN Bharat.",
    },
    {
      name: "Centre of Excellence in AI for Education (Union Budget 2025-26)",
      ministry: "Ministry of Education",
      note: "The ₹500 crore CoE announced in Budget 2025-26 is the natural research and validation partner for every model we deploy.",
    },
    {
      name: "DIKSHA & PM eVidya",
      ministry: "Ministry of Education (NCERT / CIET)",
      note: "Guru Saathi and Gyan Setu publish into DIKSHA, which already serves 575 crore+ learning sessions in 135 languages.",
    },
    {
      name: "APAAR ID & UDISE+",
      ministry: "Ministry of Education",
      note: "Dropout Radar reads APAAR-linked progression and UDISE+ data to flag at-risk children early, with consent and strict access controls.",
    },
    {
      name: "Samagra Shiksha & Vidya Samiksha Kendras",
      ministry: "Department of School Education & Literacy",
      note: "Dashboards plug into state Vidya Samiksha Kendras; ICT and teacher-training components fund roll-out.",
    },
    {
      name: "IndiaAI Mission & Bhashini",
      ministry: "Ministry of Electronics & Information Technology",
      note: "Bhashini provides speech and translation in 22 languages; IndiaAI compute keeps model training affordable and in India.",
    },
  ],
  solutions: [
    {
      name: "Guru Saathi",
      description:
        "An AI teaching assistant for teachers on WhatsApp and the DIKSHA app. It drafts NCERT/SCERT-aligned lesson plans, worksheets and multi-grade activities in the teacher's language, by voice or text.",
      impact: "Target: 5 hours of planning time saved per teacher per week.",
    },
    {
      name: "Padhai Mitra",
      description:
        "A voice-based reading and maths tutor. Children read aloud on a shared phone or tablet; Bhashini speech AI measures oral reading fluency and adapts the next exercise. Works offline.",
      impact:
        "Target: 20-point rise in Class 3 grade-level reading in pilot schools within 2 years.",
    },
    {
      name: "Gyan Setu",
      description:
        "A content engine that translates and voices DIKSHA textbooks and videos into all 22 scheduled languages and major tribal languages, with SCERT teachers reviewing before publication.",
      impact: "Target: 100% of Class 1–8 core content available in every state language.",
    },
    {
      name: "Dropout Radar",
      description:
        "Predictive models that combine attendance, assessment and APAAR progression data to flag children at risk of dropping out, then alert the teacher and School Management Committee with a suggested action.",
      impact: "Target: 30% reduction in secondary-stage dropout in pilot districts.",
    },
    {
      name: "Parakh Lens",
      description:
        "AI scoring of handwritten and oral answers in state assessments, producing competency-level reports for each child, class and block within days instead of months.",
      impact: "Target: assessment results returned to schools within 7 days.",
    },
    {
      name: "Disha Career Compass",
      description:
        "A conversational career and skilling guide for Class 9–12 students on WhatsApp and IVR, linking interests and marks to courses, apprenticeships and scholarships.",
      impact: "Target: 1 crore secondary students receive personalised guidance by Month 30.",
    },
  ],
  centralSystem: {
    name: "Shiksha AI Command Centre",
    description:
      "A single national AI platform for school education. Any state, SCERT or school board can plug in through open APIs, reuse validated models and keep full control of its own data.",
    layers: [
      {
        name: "Citizen & field interfaces",
        items: [
          "Guru Saathi on WhatsApp and the DIKSHA app",
          "Padhai Mitra offline tutor on shared school devices",
          "IVR and WhatsApp for parents and students",
          "Vidya Samiksha Kendra dashboards for officials",
        ],
      },
      {
        name: "AI services",
        items: [
          "Curriculum-aligned content generation and translation",
          "Speech AI for oral reading fluency",
          "Handwriting and answer-script evaluation",
          "Dropout risk prediction",
          "Career guidance conversation engine",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "Learning record store linked to APAAR (with consent)",
          "UDISE+ and state student database connectors",
          "Content repository synced with DIKSHA",
          "Model registry with bias and accuracy reports",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "MeghRaj / NIC cloud with data stored in India",
          "IndiaAI compute portal for model training",
          "Edge devices that sync when connectivity returns",
          "Child data protection board and pedagogy review panel",
        ],
      },
    ],
    dataSources: [
      "UDISE+ school and enrolment data",
      "APAAR ID and Academic Bank of Credits records",
      "State student attendance systems",
      "PARAKH and state assessment results",
      "DIKSHA content and usage analytics",
      "NCERT and SCERT curricula and textbooks",
    ],
    integrations: [
      "DIKSHA",
      "UDISE+",
      "APAAR via DigiLocker",
      "Bhashini",
      "State Vidya Samiksha Kendras",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 0 — Foundations",
      duration: "Months 0–3",
      milestones: [
        "MoU with state school education department and SCERT",
        "Pedagogy review panel and child data protection board set up",
        "Baseline reading and maths assessment in pilot schools",
        "Data sharing agreements for UDISE+ and attendance data",
      ],
    },
    {
      phase: "Phase 1 — Pilot in 6 districts",
      duration: "Months 4–12",
      milestones: [
        "Guru Saathi live for 20,000 teachers",
        "Padhai Mitra in 2,000 primary schools, offline-first",
        "Dropout Radar alerts active in all pilot secondary schools",
        "Independent mid-line learning assessment",
      ],
    },
    {
      phase: "Phase 2 — State scale",
      duration: "Months 13–24",
      milestones: [
        "All government schools in the state onboarded",
        "Gyan Setu publishes full Class 1–8 content in the state language",
        "Parakh Lens used for the state learning assessment",
        "Disha Career Compass live for Classes 9–12",
      ],
    },
    {
      phase: "Phase 3 — Multi-state platform",
      duration: "Months 25–36",
      milestones: [
        "Shared service offered to 5+ states through the AI CoE for Education",
        "All 22 scheduled languages supported",
        "Open models and evaluation reports published",
        "Endline learning-outcome evaluation",
      ],
    },
  ],
  budget: {
    total: "₹340 crore over 3 years",
    items: [
      {
        head: "AI models, content translation & pedagogy review",
        amount: "₹80 crore",
        note: "Including SCERT reviewer honoraria",
      },
      {
        head: "Platform, integration & cloud hosting",
        amount: "₹75 crore",
        note: "DIKSHA, UDISE+, APAAR integration",
      },
      {
        head: "School devices & offline edge kits",
        amount: "₹70 crore",
        note: "Shared tablets for primary schools without devices",
      },
      {
        head: "Teacher training & change management",
        amount: "₹50 crore",
        note: "Cascade through DIETs and BRCs",
      },
      { head: "Programme management unit", amount: "₹35 crore", note: "State and national PMU" },
      {
        head: "Independent learning evaluation & audits",
        amount: "₹30 crore",
        note: "Third-party assessment, security audits",
      },
    ],
    note: "Indicative estimate for a one-state pilot scaling to a multi-state shared service. To be refined after Phase 1 and converged with Samagra Shiksha ICT components and the AI CoE for Education.",
  },
  kpis: [
    {
      metric: "Class 3 children reading at grade level (pilot schools)",
      target: "+20 percentage points in 2 years",
    },
    {
      metric: "Teachers actively using Guru Saathi each week",
      target: "70% of teachers in pilot districts",
    },
    { metric: "Secondary-stage dropout rate", target: "30% reduction in pilot districts" },
    {
      metric: "Core content available in the state language",
      target: "100% of Class 1–8 by Month 24",
    },
    { metric: "Assessment turnaround time", target: "Under 7 days" },
    { metric: "Students receiving career guidance", target: "1 crore by Month 30" },
  ],
  risks: [
    {
      risk: "Children's data privacy under the DPDP Act 2023.",
      mitigation:
        "Verifiable parental consent as required by Section 9, using only the limited exemptions the DPDP Rules 2025 allow educational institutions. No profiling for advertising, data stored in India, minimal retention.",
    },
    {
      risk: "Model bias and weak performance in some languages and dialects.",
      mitigation:
        "Accuracy reported by language, gender and social group. Speech models tuned on local child-speech data. No high-stakes decision is made by AI alone.",
    },
    {
      risk: "Teacher resistance or tool fatigue.",
      mitigation:
        "Tools replace existing paperwork rather than add to it. Teachers co-design features. Training runs through DIETs in the local language.",
    },
    {
      risk: "Connectivity gaps in a third of schools.",
      mitigation:
        "Offline-first apps, IVR for basic phones, and sync when connectivity returns. Aligns with BharatNet school broadband roll-out.",
    },
    {
      risk: "Vendor lock-in.",
      mitigation:
        "Open standards, government ownership of content, data and model weights, and source code escrow in every contract.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary, Department of School Education & Literacy, Ministry of Education",
      headline: "Make DIKSHA, UDISE+ and APAAR work harder for every child.",
      ask: "Approve a 6-district pilot of the Shiksha AI Command Centre under the Samagra Shiksha ICT component, in partnership with the Centre of Excellence in AI for Education, and nominate a Joint Secretary-level nodal officer.",
      keyPoints: [
        "Built on DIKSHA, UDISE+, APAAR and Bhashini. No new student database.",
        "Six AI tools covering teachers, children, parents and administrators.",
        "Indicative ₹340 crore over three years; pilot first, scale on evidence.",
        "Offline-first design for the one in three schools without internet.",
        "Child data handled under DPDP Act Section 9 and DPDP Rules 2025.",
      ],
      sections: [
        {
          heading: "Implementation architecture",
          body: "The platform sits on top of existing national systems. Content flows to and from DIKSHA. Student signals come from UDISE+, state attendance systems and APAAR. Dashboards appear in state Vidya Samiksha Kendras.",
          bullets: [
            "Open APIs for states and SCERTs",
            "Bhashini speech and translation in 22 languages",
            "Offline edge kits for low-connectivity schools",
            "Single model registry with audit trail",
          ],
        },
        {
          heading: "Procurement & funding route",
          body: "A QCBS RFP selects the platform integrator. Devices and cloud are procured on GeM. Funding converges Samagra Shiksha ICT and teacher-training heads with the AI CoE for Education and IndiaAI compute.",
          bullets: [
            "QCBS selection under GFR 2017",
            "GeM for devices, cloud and licences",
            "Samagra Shiksha ICT and teacher-training components",
            "AI CoE for Education as research and validation partner",
          ],
        },
        {
          heading: "Governance",
          body: "A steering committee chaired by the Secretary sets priorities. A PMU delivers. A pedagogy review panel led by NCERT and SCERT signs off content and models.",
          bullets: [
            "National steering committee, quarterly",
            "State Project Director, Samagra Shiksha as state nodal officer",
            "District nodal officers via DIETs",
            "Pedagogy and child-safety review panel",
          ],
        },
        {
          heading: "Data protection & compliance",
          body: "Children's data needs the highest standard of care. The platform is designed for the DPDP Act 2023 and DPDP Rules 2025 from day one.",
          bullets: [
            "Verifiable parental consent; no behavioural advertising",
            "Data localisation on MeghRaj / NIC cloud",
            "Role-based access; teachers see only their own class",
            "Annual third-party security and privacy audits",
          ],
        },
        {
          heading: "Monitoring & evaluation",
          body: "Learning outcomes, not app downloads, are the measure of success. An independent agency runs baseline, mid-line and endline assessments.",
          bullets: [
            "Live KPI dashboard in Vidya Samiksha Kendras",
            "Model accuracy reported by language and group",
            "Third-party learning assessments at Months 0, 12 and 36",
          ],
        },
      ],
      nextSteps: [
        "Week 2: Nominate nodal officer and NCERT / CIET technical lead.",
        "Week 4: Select pilot state and 6 districts with the State Project Director.",
        "Week 8: Sign MoU and issue QCBS RFP.",
        "Week 12: Baseline assessment in pilot schools.",
        "Month 4: Go live with Guru Saathi and Padhai Mitra.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Union Minister of Education",
      headline: "Every child, a personal tutor. Every teacher, an assistant.",
      ask: "Announce the Shiksha AI Command Centre as the flagship delivery platform of the Centre of Excellence in AI for Education, with a pilot launch in 100 days.",
      keyPoints: [
        "24.72 crore students. One AI platform that speaks their languages.",
        "A reading tutor that listens to every child read aloud, even offline.",
        "An assistant that saves every teacher hours each week.",
        "Early warnings that keep children in school.",
        "Built in India, on India's own digital public infrastructure.",
      ],
      sections: [
        {
          heading: "A day in the life",
          body: "Ravi is in Class 3 at a single-teacher school in a tribal block. His teacher, Sunita, teaches three grades in one room. While she works with Class 5, Ravi reads a story aloud to Padhai Mitra in his own language. It notices where he stumbles and gives him the right next exercise. That evening Sunita asks Guru Saathi, by voice, for tomorrow's multi-grade lesson plan. It is ready in a minute.",
          bullets: [
            "Personal attention for every child, even in one-teacher schools",
            "Lessons and stories in the language the child speaks at home",
            "Teachers spend time teaching, not filling forms",
          ],
        },
        {
          heading: "Aligned with Viksit Bharat @2047",
          body: "A developed India will be built by today's schoolchildren. This programme delivers on NEP 2020's promise of foundational learning and mother-tongue education, and on the Budget's commitment to AI in education.",
          bullets: [
            "Delivers NIPUN Bharat foundational learning goals",
            "Activates the AI CoE for Education announced in Budget 2025-26",
            "Uses Bhashini and the IndiaAI Mission",
            "Prepares secondary students for jobs and enterprise",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "Three announceable milestones that parents and teachers will notice.",
          bullets: [
            "Day 30: Launch of the Shiksha AI Command Centre and pilot state",
            "Day 60: Guru Saathi available to every teacher in pilot districts",
            "Day 100: Padhai Mitra in the first 2,000 primary schools",
          ],
        },
        {
          heading: "Value for money",
          body: "An indicative ₹340 crore over three years is a small share of school education spending. It makes existing investments in DIKSHA, teachers and schools deliver more learning per rupee.",
          bullets: [
            "One shared platform, not a separate app in every state",
            "Measured by learning outcomes, independently verified",
            "Open models reusable across states and boards",
          ],
        },
      ],
      nextSteps: [
        "Approve the programme in principle.",
        "Announce the pilot state alongside the AI CoE for Education.",
        "Review learning results publicly at 100 days and at one year.",
      ],
    },
  ],
};
