import type { Proposal } from "../types";

export const proposal: Proposal = {
  id: "justice-ecourts",
  sector: "Justice & eCourts",
  category: "governance",
  title: "Justice, without the wait.",
  tagline:
    "AI that gives every judge more time to judge, and every litigant a clear view of their case, in their own language.",
  summary:
    "India's courts carry more than 5.6 crore pending cases, and eCourts Phase III has laid the digital foundation to tackle them. We propose a Nyaya AI Command Centre that sits on top of eCourts, NJDG and ICJS, taking routine work off judges and registry staff — scheduling, translation, record digitisation and case summaries — while every judicial decision stays with the judge.",
  heroStat: {
    value: "5.64 crore",
    label: "cases pending across Indian courts",
    source: "NJDG, cited by Ministry of Law & Justice in Rajya Sabha, July 2026",
  },
  context: {
    stats: [
      {
        value: "4.76 crore",
        label: "cases pending in district and subordinate courts, as on 31 December 2025",
        source: "NJDG, Ministry of Law & Justice reply in Lok Sabha, February 2026",
      },
      {
        value: "₹7,210 crore",
        label: "outlay of eCourts Phase III, a Central Sector Scheme from 2023",
        source: "Union Cabinet, September 2023",
      },
      {
        value: "8.96 crore",
        label: "traffic challans handled by virtual courts, with ₹895.59 crore in fines collected",
        source: "Ministry of Law & Justice, 2025",
      },
      {
        value: "79,000+",
        label:
          "Supreme Court judgments translated into Hindi and 17 regional languages using AI tools",
        source: "Ministry of Law & Justice, 2025",
      },
    ],
    challenges: [
      "Pendency keeps growing in many districts, and nearly 5,000 sanctioned judicial officer posts remain vacant.",
      "eCourts Phase III must digitise 3,108 crore pages of legacy records. Scanned pages are not yet searchable, structured knowledge.",
      "Judges and registry staff lose hours to listing, adjournments, defective filings and manual summaries.",
      "Most litigants cannot read orders and judgments written in English, and do not know what happens at the next hearing.",
      "The new criminal laws set strict timelines, but summons, evidence and records still move slowly between police, prosecution, courts and prisons.",
    ],
  },
  policyAlignment: [
    {
      name: "eCourts Mission Mode Project, Phase III",
      ministry:
        "Department of Justice, Ministry of Law & Justice, with the eCommittee of the Supreme Court",
      note: "Our AI services build on Phase III's digitisation, cloud and future-technology components, and are deployed only with eCommittee and High Court approval.",
    },
    {
      name: "National Judicial Data Grid (NJDG)",
      ministry: "eCommittee, Supreme Court of India",
      note: "Case Compass reads NJDG and CIS data to forecast bottlenecks and help High Courts target arrears committees on the oldest cases.",
    },
    {
      name: "Interoperable Criminal Justice System (ICJS 2.0)",
      ministry: "Ministry of Home Affairs (NCRB)",
      note: "Summons, charge sheets and e-Sakshya evidence arrive through ICJS, and AI checks completeness before listing.",
    },
    {
      name: "BNS, BNSS and BSA (in force from 1 July 2024)",
      ministry: "Ministry of Home Affairs and Ministry of Law & Justice",
      note: "Deadline tracking and electronic summons workflows help courts meet the time limits the new laws set.",
    },
    {
      name: "DISHA 2.0 (Tele-Law and Nyaya Bandhu)",
      ministry: "Department of Justice, Ministry of Law & Justice",
      note: "Nyaya Sahayak extends DISHA 2.0's ₹255 crore, 2026–31 access-to-justice push with multilingual case guidance for citizens.",
    },
    {
      name: "Digital India BHASHINI and SUVAS",
      ministry: "Ministry of Electronics & IT and the Supreme Court of India",
      note: "Translation combines BHASHINI language models with the judiciary's SUVAS workflows, with human legal vetting before publication.",
    },
  ],
  solutions: [
    {
      name: "Case Compass",
      description:
        "Analyses CIS and NJDG data to suggest balanced cause lists, flag cases at risk of repeated adjournment, and surface the oldest matters ready for final hearing. The judge decides the list.",
      impact: "Adjournments per disposed case down 25% in pilot courts.",
    },
    {
      name: "Nyaya Anuvaad",
      description:
        "Translates orders, judgments and key pleadings between English and 22 Indian languages using BHASHINI and SUVAS, with a vetting queue for court translators.",
      impact:
        "Every final order in pilot districts available in the litigant's language within 7 days.",
    },
    {
      name: "Record Lens",
      description:
        "Reads digitised legacy case files with OCR built for Indian scripts and handwriting, extracts parties, dates, sections and stages, and makes them searchable.",
      impact: "Structured metadata for 100% of digitised records in pilot courts.",
    },
    {
      name: "Filing Assist",
      description:
        "Checks e-filings for missing documents, court fees, formatting and limitation before submission, and explains defects to advocates and party-in-person litigants in plain language.",
      impact: "Defective filings cut by half; registry scrutiny time down 40%.",
    },
    {
      name: "Nyaya Sahayak",
      description:
        "A WhatsApp and IVR assistant that tells litigants their next date, explains what will happen and connects them to Tele-Law or legal aid, in their language.",
      impact: "10 lakh litigants served a year; fewer wasted trips to court.",
    },
    {
      name: "Bench Brief",
      description:
        "Prepares a neutral summary of the case file, chronology and cited precedents from eSCR for the judge, with every statement linked to its source page. It never recommends an outcome.",
      impact: "Judges save 30–45 minutes of preparation per complex matter.",
    },
  ],
  centralSystem: {
    name: "Nyaya AI Command Centre",
    description:
      "A shared AI platform for the judiciary, hosted on the eCourts cloud. Any High Court or district judiciary can switch on the services it needs, while data, control and every judicial decision stay with the court.",
    layers: [
      {
        name: "Litigant, advocate & court interfaces",
        items: [
          "Nyaya Sahayak on WhatsApp and IVR",
          "eFiling portal with Filing Assist",
          "Judge and registry workbench inside CIS",
          "High Court and NJDG analytics dashboards",
        ],
      },
      {
        name: "AI services",
        items: [
          "Cause-list optimisation and adjournment risk",
          "Legal translation via BHASHINI and SUVAS",
          "OCR and metadata extraction for legacy records",
          "Source-linked case summaries for judges",
          "Filing defect detection",
        ],
      },
      {
        name: "Data & integration layer",
        items: [
          "CIS and NJDG case data",
          "ICJS 2.0 feeds from police, prosecution, prisons and forensics",
          "eSCR and High Court judgment repositories",
          "Consent and access controls set by each court",
        ],
      },
      {
        name: "Infrastructure & governance",
        items: [
          "eCourts cloud and NIC data centres in India",
          "IndiaAI compute for model training",
          "Judicial AI ethics committee and audit logs",
          "Human-in-the-loop rules for every output",
        ],
      },
    ],
    dataSources: [
      "Case Information System (CIS) and NJDG",
      "Digitised legacy case records",
      "eSCR and High Court judgment databases",
      "ICJS 2.0 summons, charge-sheet and evidence feeds",
      "eFiling submissions and defect history",
      "Tele-Law and legal aid service records",
    ],
    integrations: [
      "eCourts Services and eFiling",
      "NJDG",
      "ICJS 2.0 and e-Sakshya",
      "Digital India BHASHINI",
      "Tele-Law (DISHA 2.0)",
      "IndiaAI compute portal",
    ],
  },
  roadmap: [
    {
      phase: "Phase 1 — Pilot",
      duration: "Months 0–9",
      milestones: [
        "eCommittee and two High Courts approve the pilot framework",
        "Filing Assist, Nyaya Anuvaad and Nyaya Sahayak live in 6 district judiciaries",
        "Record Lens processes legacy records in 2 pilot districts",
        "Baseline on adjournments, defects and translation turnaround",
      ],
    },
    {
      phase: "Phase 2 — High Court scale",
      duration: "Months 10–20",
      milestones: [
        "All districts under the two pilot High Courts onboarded",
        "Case Compass used for cause lists in 100+ courts",
        "Bench Brief offered to judges on an opt-in basis",
        "Independent evaluation and judicial ethics review published",
      ],
    },
    {
      phase: "Phase 3 — National",
      duration: "Months 21–36",
      milestones: [
        "Services available to all 25 High Courts through the eCourts cloud",
        "Translation in all 22 scheduled languages",
        "ICJS-linked deadline tracking for BNSS timelines",
        "Platform ownership transferred to the eCommittee",
      ],
    },
  ],
  budget: {
    total: "₹240 crore over 3 years",
    items: [
      {
        head: "AI products and model development",
        amount: "₹60 crore",
        note: "Case Compass, Filing Assist, Bench Brief",
      },
      {
        head: "Legacy record extraction pipeline",
        amount: "₹55 crore",
        note: "OCR and metadata for digitised records",
      },
      {
        head: "Translation and language services",
        amount: "₹30 crore",
        note: "BHASHINI, SUVAS and vetting workflows",
      },
      {
        head: "Compute and judicial cloud",
        amount: "₹35 crore",
        note: "IndiaAI GPUs and eCourts cloud",
      },
      {
        head: "Training and change management",
        amount: "₹25 crore",
        note: "Judges, registry staff and advocates",
      },
      {
        head: "PMU, evaluation and security audits",
        amount: "₹35 crore",
        note: "Including judicial ethics review",
      },
    ],
    note: "Indicative estimate. Designed to converge with eCourts Phase III components and to be refined after the pilot, subject to eCommittee approval.",
  },
  kpis: [
    { metric: "Adjournments per disposed case, pilot courts", target: "Down 25%" },
    { metric: "Defective e-filings", target: "Down 50%" },
    { metric: "Final orders available in the litigant's language", target: "100% within 7 days" },
    {
      metric: "Legacy records with searchable metadata",
      target: "100% of digitised files in pilot courts",
    },
    { metric: "Litigants served by Nyaya Sahayak", target: "10 lakh a year" },
    {
      metric: "Case clearance rate in pilot districts",
      target: "Above 100% for two consecutive years",
    },
  ],
  risks: [
    {
      risk: "AI is seen as influencing judicial decisions.",
      mitigation:
        "AI never predicts or recommends outcomes. Every output is advisory, source-linked and approved by a judge or officer, under a framework set by the eCommittee.",
    },
    {
      risk: "Litigant and witness data is exposed.",
      mitigation:
        "Processing follows the DPDP Act 2023 and DPDP Rules 2025 and court privacy rules, with hosting on eCourts or NIC cloud, masking of sensitive cases and full audit logs.",
    },
    {
      risk: "Translation errors change legal meaning.",
      mitigation:
        "Mandatory human vetting before publication, a disclaimer that the English text prevails, and accuracy tracked per language.",
    },
    {
      risk: "Low adoption by judges, staff and the Bar.",
      mitigation:
        "Opt-in tools, training through judicial academies, and features chosen with practising judges and Bar associations.",
    },
    {
      risk: "Vendor lock-in on core judicial infrastructure.",
      mitigation:
        "Open standards, government ownership of models and data, source-code escrow, and integration only through documented eCourts APIs.",
    },
  ],
  briefs: [
    {
      audience: "bureaucrat",
      label: "Bureaucrat edition",
      addressee: "Secretary (Justice), Department of Justice, Ministry of Law & Justice",
      headline: "Turn eCourts Phase III's digital foundation into time saved in every courtroom.",
      ask: "Approve a 9-month pilot in 6 district judiciaries under two High Courts, funded from eCourts Phase III's future-technology and digitisation components, subject to eCommittee concurrence, and nominate a Joint Secretary as nodal officer.",
      keyPoints: [
        "Builds on CIS, NJDG, eFiling and ICJS. No parallel system.",
        "Courts control deployment; AI never touches the decision.",
        "Pilot cost about ₹30 crore within a ₹240 crore three-year envelope.",
        "Directly supports BNSS timelines and the arrears committees in all 25 High Courts.",
        "DPDP-compliant and hosted on the eCourts cloud in India.",
      ],
      sections: [
        {
          heading: "Implementation architecture and integration",
          body: "Each AI service is a module called from CIS, eFiling or the eCourts app. Data stays on the eCourts cloud, and High Court Computer Committees decide which modules to switch on in which courts.",
          bullets: [
            "Integration with CIS, NJDG and eFiling through NIC-documented APIs",
            "ICJS 2.0 feeds for summons, charge sheets and e-Sakshya evidence",
            "BHASHINI and SUVAS for translation",
            "Single sign-on for judges and registry staff",
          ],
        },
        {
          heading: "Procurement and funding route",
          body: "Funding converges with eCourts Phase III heads for digitisation, cloud and future technologies, with compute drawn from the IndiaAI Mission. Procurement runs through a QCBS RFP, with commodity services on GeM.",
          bullets: [
            "eCourts Phase III components; ₹1,200 crore provided for eCourts in Budget 2026-27",
            "IndiaAI compute portal for subsidised GPUs",
            "QCBS RFP for the integrator; GeM for cloud and scanning services",
            "Outcome-linked payment milestones",
          ],
        },
        {
          heading: "Governance",
          body: "The eCommittee of the Supreme Court sets policy, a Joint Steering Committee of the Department of Justice and pilot High Courts oversees delivery, and a PMU runs operations. Each pilot district names a judicial officer and a system officer as nodal points.",
          bullets: [
            "eCommittee approval of the AI use framework",
            "Joint Steering Committee meeting quarterly",
            "PMU housed with the Department of Justice eCourts team",
            "Nodal judicial and system officers in each district",
          ],
        },
        {
          heading: "Data protection and compliance",
          body: "Processing follows the DPDP Act 2023 and the DPDP Rules 2025, court rules on sensitive matters, and MeitY's India AI Governance Guidelines. No data leaves Indian government cloud, and every AI output carries an audit trail.",
          bullets: [
            "Masking of identities in sensitive and juvenile matters",
            "Hosting on the eCourts cloud and NIC data centres",
            "Explainable, source-linked outputs only",
            "Annual algorithmic and security audit",
          ],
        },
        {
          heading: "Monitoring and evaluation",
          body: "NJDG-linked dashboards track adjournments, defects, translation turnaround and clearance rates for pilot and comparison courts. A national law university or independent agency evaluates outcomes.",
          bullets: [
            "Pilot versus comparison-court design",
            "Monthly dashboard to the Joint Steering Committee",
            "Mid-term and end-line independent evaluation",
            "Findings shared with all High Courts",
          ],
        },
      ],
      nextSteps: [
        "Week 1–2: Nominate a nodal Joint Secretary and brief the eCommittee.",
        "Week 3–6: Secure concurrence of two High Courts and select 6 pilot districts.",
        "Month 2: Issue the QCBS RFP and request IndiaAI compute allocation.",
        "Month 3: Complete the data protection assessment and baseline study.",
        "Month 4: First modules live in pilot districts.",
      ],
    },
    {
      audience: "minister",
      label: "Minister edition",
      addressee: "Hon'ble Minister of State (Independent Charge), Ministry of Law & Justice",
      headline: "Every litigant informed. Every judge supported. Every case moving.",
      ask: "Announce a national Nyaya AI initiative under eCourts Phase III, with a pilot in two High Courts launched within 100 days.",
      keyPoints: [
        "Every final order available in the litigant's own language within 7 days.",
        "Case updates on WhatsApp and phone for 10 lakh litigants a year.",
        "A quarter fewer adjournments in pilot courts.",
        "Half as many defective filings clogging registries.",
        "Judges keep every decision; AI takes the paperwork.",
      ],
      sections: [
        {
          heading: "A litigant's story",
          body: "Ramesh, a farmer in Vidarbha, has a land dispute that has crossed three years. He does not read English and has travelled to court a dozen times only to see the matter adjourned. With Nyaya AI, he gets a voice message in Marathi before each date telling him what will happen, the order arrives in Marathi, and fewer hearings are wasted because filings are complete and lists are balanced.",
          bullets: [
            "No wasted trips to court",
            "Orders he can read and understand",
            "A faster path to a final decision",
          ],
        },
        {
          heading: "Viksit Bharat @2047 and national priorities",
          body: "Timely justice underpins investment, ease of living and trust in institutions. This initiative builds on eCourts Phase III, the new criminal laws and DISHA 2.0 to make justice faster and more accessible.",
          bullets: [
            "Supports ease of living and ease of doing business",
            "Helps meet the timelines set by BNSS",
            "Puts Indian languages at the centre of justice delivery",
          ],
        },
        {
          heading: "The 100-day plan",
          body: "With eCommittee support, the first services can reach litigants within 100 days.",
          bullets: [
            "Day 30: Pilot High Courts and districts announced",
            "Day 75: Nyaya Sahayak live for litigants in pilot districts",
            "Day 100: First orders published in regional languages through the platform",
          ],
        },
        {
          heading: "Value for money",
          body: "At about ₹240 crore over three years, the programme adds an intelligence layer to a ₹7,210 crore investment the nation has already made, multiplying its return.",
          bullets: [
            "Reuses eCourts, NJDG, ICJS and BHASHINI",
            "Subsidised compute under the IndiaAI Mission",
            "Every rupee tied to measured outcomes",
          ],
        },
      ],
      nextSteps: [
        "Approve the concept and direct the Department of Justice to work with the eCommittee.",
        "Announce the initiative on a national platform such as Constitution Day or a Law Ministry event.",
        "Invite two High Courts to lead the pilot.",
      ],
    },
  ],
};
