/* =========================================================
   PROJECTS — edit this list to add, remove, or reorder work.
   logo:      file in assets/logos/ — flattened to one tone on the card, so
              brand colours never clash with the palette.
   logoAlt:   company name (accessible label for the mark)
   chipText:  optional words beside the mark, e.g. "× UAE startup"
   cats:      used by the filter chips (ai | strategy | blockchain | analytics)
   cover:     green | clay | ink | sage | sand
   ========================================================= */
window.PROJECTS = [
  {
    id: "seatsense",
    logo: "self.svg",
    chipText: "Self-initiated build",
    title: "SeatSense AI",
    subtitle: "Dynamic ticket pricing with responsible-AI guardrails",
    org: "Self-initiated build",
    year: "AI product",
    cats: ["ai", "analytics"],
    cover: "green",
    metric: "20.5K",
    metricLabel: "observations · 410 games · 5 seasons",
    tags: ["Machine Learning", "Responsible AI", "Human-in-the-loop", "Python"],
    summary:
      "An explainable pricing platform for live events that balances revenue with fan access — with a human approving every price change.",
    context:
      "Dynamic pricing can maximize revenue, but left unchecked it prices fans out and erodes trust. The goal was a pricing tool a venue could actually defend.",
    did: [
      "Built a two-stage ML pipeline: K-Means demand-persona segmentation feeding a Gradient Boosting price regressor, trained on 20,500 simulated observations across 410 games and 5 seasons.",
      "Directed AI-assisted development of an explainable pricing interface with human-approval gating.",
      "Designed responsible-AI guardrails: price floors and ceilings, protected-class exclusion, and an Affordability Score KPI.",
    ],
    outcome:
      "A working end-to-end prototype that shows every recommendation's reasoning and keeps a person in the loop before anything ships.",
    links: [{ label: "View on GitHub", href: "https://github.com/kpdade/seatsense" }],
  },
  {
    id: "forensic",
    logo: "ey.png",
    logoAlt: "EY",
    chipText: "Case Competition",
    title: "Forensic Analytics for Financial Crime",
    subtitle: "Best Data Scientist Award",
    org: "EY Case Competition",
    year: "2026",
    award: "Best Data Scientist Award",
    cats: ["analytics", "ai"],
    cover: "clay",
    metric: "$2.86M",
    metricLabel: "in operationally impossible sales exposed",
    tags: ["Streamlit", "Python", "Statistical Testing", "Data Design"],
    summary:
      "Designed a realistic fraud dataset from scratch, then built a forensic platform that caught what was hidden inside it.",
    context:
      "A two-stage competition: first fabricate a statistically believable set of financial records for a fictional Argentine winery, then build the tooling to detect fraud within it.",
    did: [
      "Stage 1 — Designed a statistically realistic dataset across 5 relational tables.",
      "Stage 2 — Built a Streamlit forensic analytics platform applying structural, chronological, and statistical tests.",
    ],
    outcome:
      "Flagged 45.2% of invoices for pre-hire employee violations and $2.86M in pre-release wine sales as operationally impossible. Won the Best Data Scientist Award.",
    links: [],
  },
  {
    id: "carbon",
    logo: "facilio.png",
    logoAlt: "Facilio",
    chipText: "× UAE startup",
    title: "Carbon Credit Tokenization Pilot",
    subtitle: "Market research & GTM for an emerging-tech pilot",
    org: "Facilio × UAE startup",
    year: "2023–25",
    cats: ["blockchain", "strategy"],
    cover: "ink",
    metric: "Fortune 500",
    metricLabel: "UK climate & utilities clients engaged",
    tags: ["Blockchain", "Tokenization", "Market Research", "GTM"],
    summary:
      "Led market research and go-to-market strategy for tokenizing green-energy carbon credits on blockchain.",
    context:
      "A pilot with a UAE-based startup to bring blockchain-based carbon credit tokenization to enterprise buyers.",
    did: [
      "Led market research and go-to-market strategy for the pilot.",
      "Extended tokenization efforts across the Middle East.",
      "Engaged Fortune 500 clients in the UK's privatized climate and utilities sector.",
    ],
    outcome:
      "Took an emerging-tech concept from idea to active conversations with major enterprise buyers across two regions.",
    links: [],
  },
  {
    id: "layered",
    logo: "facilio.png",
    logoAlt: "Facilio",
    title: "Private-to-Public Blockchain Architecture",
    subtitle: "Requirements and system design for a layered ledger",
    org: "Facilio",
    year: "2023–25",
    cats: ["blockchain"],
    cover: "sage",
    metric: "5–6",
    metricLabel: "enterprise clients from pilot workshops",
    tags: ["System Design", "DLT", "Requirements", "Workshops"],
    summary:
      "Directed requirements gathering and architecture research for a layered (private-to-public) blockchain system.",
    context:
      "Enterprises wanted blockchain's transparency without exposing sensitive operational data. A layered design bridged the two.",
    did: [
      "Directed requirements gathering and architecture research for the layered system design.",
      "Led pilot workshops with prospective enterprise clients.",
    ],
    outcome: "Workshops brought in 5–6 enterprise clients for the initial engagement.",
    links: [],
  },
  {
    id: "gtm",
    logo: "facilio.png",
    logoAlt: "Facilio",
    title: "Go-to-Market Turnaround",
    subtitle: "Reviving a stagnant product line with the CPO",
    org: "Facilio",
    year: "2023–25",
    cats: ["strategy"],
    cover: "sand",
    metric: "+12%",
    metricLabel: "inbound pipeline in two quarters",
    tags: ["Competitive Analysis", "GTM Strategy", "Positioning"],
    summary:
      "Partnered with the Chief Product Officer to diagnose why a product line had stalled — and wrote the playbook to fix it.",
    context: "An underperforming product line had stopped growing and no one had a clear diagnosis.",
    did: [
      "Partnered with the Chief Product Officer to diagnose the stagnation.",
      "Benchmarked 8 competitors across positioning, pricing, and capabilities.",
      "Co-authored a go-to-market playbook for the product line.",
    ],
    outcome: "12% inbound and 5% outbound pipeline growth within two quarters.",
    links: [],
  },
  {
    id: "stagegate",
    logo: "facilio.png",
    logoAlt: "Facilio",
    title: "RFP-to-POC Stage-Gate Redesign",
    subtitle: "Halving the enterprise evaluation cycle",
    org: "Facilio",
    year: "2023–25",
    cats: ["strategy"],
    cover: "green",
    metric: "4 → 2 wks",
    metricLabel: "client evaluation cycle time",
    tags: ["Process Design", "Presales", "Enterprise Sales"],
    summary:
      "Redesigned how prospects move from RFP to proof-of-concept, with clear stage-gate criteria at each step.",
    context:
      "Long, open-ended evaluations were slowing deals and consuming presales capacity across global accounts.",
    did: [
      "Mapped the end-to-end RFP-to-POC evaluation process.",
      "Introduced stage-gate criteria so both sides knew what 'done' meant at each step.",
    ],
    outcome:
      "Cut client evaluation cycle time from 4 weeks to 2 and improved win-rate efficiency by 15% across global accounts.",
    links: [],
  },
  {
    id: "roadmaps",
    logo: "facilio.png",
    logoAlt: "Facilio",
    title: "Enterprise IoT & CAFM Roadmaps",
    subtitle: "Customer discovery at portfolio scale",
    org: "Facilio",
    year: "2023–25",
    cats: ["strategy"],
    cover: "clay",
    metric: "5M+",
    metricLabel: "assets across 1,000+ buildings",
    tags: ["Customer Discovery", "Roadmapping", "IoT", "Stakeholder Mgmt"],
    summary:
      "Turned stakeholder needs at 12+ enterprise facilities-management clients into phased product roadmaps.",
    context:
      "Enterprise FM clients in the Middle East and UK each ran large, complex building portfolios with very different priorities.",
    did: [
      "Led customer discovery across 12+ enterprise FM clients in the Middle East and UK.",
      "Translated stakeholder needs into phased IoT/CAFM product roadmaps.",
    ],
    outcome: "Roadmaps spanning 5M+ assets and 1,000+ buildings.",
    links: [],
  },
  {
    id: "poc",
    logo: "facilio.png",
    logoAlt: "Facilio",
    title: "Enterprise POCs → Signed Contracts",
    subtitle: "Multi-phase proofs of concept that closed",
    org: "Facilio",
    year: "2023–25",
    cats: ["strategy", "analytics"],
    cover: "ink",
    metric: "$1.2M",
    metricLabel: "regional ARR, up from $1M",
    tags: ["POCs", "Analytics Dashboards", "Executive Presentations"],
    summary:
      "Ran enterprise POCs end-to-end — from discovery to board-level findings — and converted them into contracts.",
    context: "Enterprise buyers needed proof on their own data before committing.",
    did: [
      "Led requirements discovery for multi-phase POC engagements.",
      "Built custom analytics dashboards on client data.",
      "Presented findings to client boards and leadership.",
    ],
    outcome: "Converted evaluations into signed contracts, growing regional ARR from $1M to $1.2M.",
    links: [],
  },
];
