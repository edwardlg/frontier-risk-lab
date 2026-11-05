/* =========================================================
   Frontier Risk Lab — editable content
   Edit the lists below to update People, Projects, News and
   Publications across the whole site. No build step needed.
   Pillar keys: "esg", "cyber", "ai"
   ========================================================= */

window.LAB = {
  // "Get Involved" interest form (Microsoft Forms, GMU account; responses in Forms/Excel)
  formUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=VXKFnlffR0ygwAVGRgOAyzgsFoLkaI1Jh-lxQh8kFFpUMVRYMDhEMUpSTEJVUTY5NUVZNTQzMkQwUC4u",

  pillars: {
    esg:   { name: "ESG, Sustainability & Health", url: "research.html#esg" },
    cyber: { name: "Cyber & Digital Risk",         url: "research.html#cyber" },
    ai:    { name: "AI & Quantum for Finance",     url: "research.html#ai" }
  },

  /* ---------------- People ---------------- */
  people: {
    // Lab leadership. The first entry's email is the lab's contact address.
    directors: [
      {
        name: "Lei Gao",
        initials: "LG",
        role: "Director",
        affiliation: "Associate Professor of Finance, Costello College of Business, George Mason University",
        bio: "Lei Gao is an Associate Professor of Finance at George Mason University's Costello College of Business. Lei's research spans market structure, investments, lending, corporate finance, and FinTech, with work published in the Journal of Financial Economics, the Journal of Financial and Quantitative Analysis, and the Proceedings of the National Academy of Sciences, among others. A PNAS study on fair lending was ranked among the Financial Times' top 100 business school research papers with social impact. Lei previously served as a financial economist at the U.S. Securities and Exchange Commission and holds a Ph.D. in Finance from the University of Georgia.",
        email: "lgao9@gmu.edu",
        links: [
          { label: "Personal website", url: "https://sites.google.com/view/lei-gao/home" },
          { label: "CV", url: "https://sites.google.com/view/lei-gao/cv" }
        ]
      },
      {
        name: "Kuo Tian",
        initials: "KT",
        role: "Co-Director",
        affiliation: "Associate Professor, Department of Civil, Infrastructure, and Environmental Engineering, George Mason University",
        bio: "Kuo Tian is an Associate Professor of Geotechnical and Geoenvironmental Engineering at George Mason University, where he also co-directs the SGI Research Group. He holds a Ph.D. in Civil and Environmental Engineering from the University of Wisconsin–Madison. Before joining Mason, he was a postdoctoral researcher at the University of Virginia.",
        email: "ktian@gmu.edu",
        links: [
          { label: "SGI Research Group", url: "https://geotrans.vse.gmu.edu/node/197" }
        ]
      }
    ],

    faculty: [],

    // program and focus are optional, e.g. program: "MS Finance '27", focus: "Cyber incident disclosure"
    students: [
      { name: "Ivy", initials: "I", role: "Research Assistant", program: "", focus: "" },
      { name: "An", initials: "A", role: "Research Assistant", program: "", focus: "" },
      { name: "Jieming", initials: "J", role: "Research Assistant", program: "", focus: "" }
    ]
  },

  /* ---------------- Projects ---------------- */
  projects: [
    {
      title: "Cyber Attacks on Healthcare: Market Reactions, Disclosure, and Systemic Spillovers",
      summary: "How do ransomware and data breaches at hospitals, insurers, and health-payment processors propagate to markets, suppliers, and patients, and do disclosures help investors price them?",
      pillars: ["esg", "cyber", "ai"],
      status: "Planned",
      featured: true
    },
    {
      title: "Pricing Climate and Physical Risk in Asset Markets",
      summary: "Measuring firms' exposure to heat, floods, and transition policy, and testing whether stock, bond, and real-estate prices reflect it.",
      pillars: ["esg"],
      status: "Planned"
    },
    {
      title: "Battery Supply Chain Risk",
      summary: "Concentrated critical-mineral suppliers, geopolitical exposure, and recycling: how battery supply chain disruptions affect firms in electric vehicles, energy storage, and electronics.",
      pillars: ["esg"],
      status: "Planned"
    },
    {
      title: "PFAS Contamination and Corporate Liability",
      summary: "Measuring firms' exposure to \"forever chemicals\" through regulation, litigation, and remediation costs, and testing whether markets price that liability.",
      pillars: ["esg"],
      status: "Planned"
    },
    {
      title: "Methane Emissions: Measurement, Disclosure, and Value",
      summary: "Combining satellite and facility-level data on methane from energy, agriculture, and landfills to study how emissions, regulation, and disclosure affect firms.",
      pillars: ["esg", "ai"],
      status: "Planned"
    },
    {
      title: "Detecting Greenwashing with Large Language Models",
      summary: "Using LLMs to compare what firms say about sustainability with what they do, across filings, reports, and earnings calls.",
      pillars: ["esg", "ai"],
      status: "Planned"
    },
    {
      title: "Health Shocks as Market Shocks",
      summary: "Pandemic and public-health risk, workforce health, and firm resilience: who is exposed, and how markets price it.",
      pillars: ["esg"],
      status: "Planned"
    },
    {
      title: "Cyber Incident Disclosure and Firm Value",
      summary: "What happens when firms must disclose material cyber incidents quickly? Evidence on market reactions, governance, and disclosure quality.",
      pillars: ["cyber"],
      status: "Planned"
    },
    {
      title: "Post-Quantum Readiness of the Financial Sector",
      summary: "Tracking how banks, exchanges, and payment firms prepare for quantum threats to today's encryption, and whether markets reward preparedness.",
      pillars: ["cyber", "ai"],
      status: "Planned"
    },
    {
      title: "AI as Threat and Defense in Cyber Risk",
      summary: "How generative AI changes the frequency and cost of cyber attacks, and the value of AI-based defenses for firms.",
      pillars: ["cyber", "ai"],
      status: "Planned"
    },
    {
      title: "Quantum Algorithms for Portfolio and Risk Optimization",
      summary: "Benchmarking quantum and quantum-inspired methods against classical approaches on realistic portfolio and risk problems.",
      pillars: ["ai"],
      status: "Planned"
    }
  ],

  /* ---------------- News & Events ----------------
     date: "YYYY-MM" or "YYYY-MM-DD"; type: "News" | "Event" | "Seminar" */
  news: [
    {
      date: "2026-11",
      type: "News",
      title: "Frontier Risk Lab website launches",
      text: "The lab's new website introduces our three research pillars and planned projects."
    },
    {
      date: "TBA",
      type: "Event",
      title: "Kick-off workshop on emerging risks in finance",
      text: "A launch workshop bringing together faculty, students, and partners. Details to be announced."
    },
    {
      date: "TBA",
      type: "Seminar",
      title: "Frontier Risk seminar series",
      text: "A recurring seminar on climate, health, cyber, and technology risk. Speaker schedule coming soon."
    }
  ],

  /* ---------------- Publications ----------------
     Example:
     { title: "Paper title", authors: "A. Author, B. Author", venue: "Journal / Working paper",
       year: 2026, pillars: ["esg"], url: "https://..." } */
  publications: []
};
