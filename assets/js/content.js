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
    director: {
      name: "Lei Gao",
      initials: "LG",
      role: "Lab Director",
      affiliation: "Costello College of Business, George Mason University",
      bio: "Lei Gao leads the Frontier Risk Lab, which studies how climate, health, cyber, and technology risks are measured, priced, and managed in financial markets. [Add a short bio: research interests, background, selected recognitions.]",
      email: "lgao9@gmu.edu",
      links: [
        // { label: "Google Scholar", url: "https://scholar.google.com/..." },
        // { label: "SSRN", url: "https://papers.ssrn.com/..." }
      ]
    },

    faculty: [
      {
        name: "Tian Kuo",
        initials: "TK",
        role: "Affiliated Faculty",
        affiliation: "George Mason University",
        bio: "[Add title, department, and research interests.]",
        links: []
      }
    ],

    students: [
      // Replace the placeholders with your research assistants.
      { name: "[RA Name]", initials: "RA", role: "Research Assistant", program: "[Program, e.g. MS Finance]", focus: "[Research focus]" },
      { name: "[RA Name]", initials: "RA", role: "Research Assistant", program: "[Program]", focus: "[Research focus]" },
      { name: "[RA Name]", initials: "RA", role: "Research Assistant", program: "[Program]", focus: "[Research focus]" }
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
