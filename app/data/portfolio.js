export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export const SKILL_FILTERS = [
  {
    id: "all",
    label: "All Systems",
    flow: "Full-Stack Architecture: Next.js 15 Client ➔ Node.js / Express & FastAPI Services ➔ Prisma ORM & PostgreSQL",
  },
  {
    id: "resumeai",
    label: "ResumeAI SaaS",
    flow: "Next.js 15 UI ➔ Express Session API ➔ FastAPI Worker (SpaCy + Sentence Transformers + LangGraph) ➔ PostgreSQL & Serverless Chromium PDF",
  },
  {
    id: "invenzo",
    label: "Invenzo ERP",
    flow: "Next.js 15 + Redux Toolkit ➔ Node.js REST API (Zod Validation + JWT RBAC) ➔ Prisma ORM ➔ Multi-Tenant PostgreSQL",
  },
  {
    id: "royal-aseel",
    label: "Royal Aseel Marketplace",
    flow: "Next.js Storefront & Seller Dashboards ➔ Prisma ORM + PostgreSQL ➔ Automated WhatsApp & Email Checkout Pipeline",
  },
];

export const SKILLS = [
  {
    id: "frontend",
    category: "Frontend & UI Architecture",
    iconKey: "layout",
    color: "#38bdf8",
    span: "lg:col-span-2",
    summary:
      "Component-driven interfaces, server/client state synchronization, and responsive layouts built with React 19 and Next.js App Router.",
    items: [
      {
        name: "Next.js 15 (App Router)",
        detail: "SSR, route handlers & nested layouts",
        projects: ["resumeai", "invenzo", "royal-aseel", "3p-solar", "calmify"],
      },
      {
        name: "React.js",
        detail: "Custom hooks, stateful views & modal systems",
        projects: ["resumeai", "invenzo", "royal-aseel", "3p-solar", "calmify"],
      },
      {
        name: "TypeScript",
        detail: "Strict API contracts & end-to-end type safety",
        projects: ["resumeai", "invenzo"],
      },
      {
        name: "Tailwind CSS",
        detail: "Responsive design tokens & dark-mode systems",
        projects: ["resumeai", "invenzo", "royal-aseel", "3p-solar", "calmify"],
      },
      {
        name: "Redux Toolkit",
        detail: "Normalized client state (30% fewer re-renders in Invenzo)",
        projects: ["invenzo"],
      },
      {
        name: "Framer Motion",
        detail: "Physics-based layout transitions & carousels",
        projects: ["calmify", "3p-solar"],
      },
      {
        name: "HTML5 / CSS3",
        detail: "Semantic markup, accessibility & fluid grids",
        projects: ["resumeai", "invenzo", "royal-aseel", "3p-solar", "calmify"],
      },
    ],
  },
  {
    id: "ai",
    category: "AI, NLP & Agent Workflows",
    iconKey: "cpu",
    color: "#fb923c",
    span: "lg:col-span-1",
    summary:
      "Production Python microservices for document parsing, vector similarity matching, and stateful LLM orchestration.",
    items: [
      {
        name: "Python",
        detail: "Async AI workers, scraping & data pipelines",
        projects: ["resumeai"],
      },
      {
        name: "LangChain & LangGraph",
        detail: "Multi-step agent workflows for resume rewriting",
        projects: ["resumeai"],
      },
      {
        name: "SpaCy (NLP)",
        detail: "Named-entity extraction at 90%+ parse accuracy",
        projects: ["resumeai"],
      },
      {
        name: "Sentence Transformers",
        detail: "95% cosine-similarity semantic skill matching",
        projects: ["resumeai"],
      },
      {
        name: "PyTorch & TensorFlow",
        detail: "Deep learning inference & embedding pipelines",
        projects: ["resumeai"],
      },
      {
        name: "Scikit-learn",
        detail: "TF-IDF scoring, classification & evaluation metrics",
        projects: ["resumeai"],
      },
      {
        name: "LLM APIs",
        detail: "Structured JSON outputs & prompt guardrails",
        projects: ["resumeai"],
      },
    ],
  },
  {
    id: "backend",
    category: "Backend & API Services",
    iconKey: "server",
    color: "#a78bfa",
    span: "lg:col-span-1",
    summary:
      "Polyglot API layer combining Node.js/Express for core web transactions and FastAPI for compute-heavy Python tasks.",
    items: [
      {
        name: "Node.js & Express.js",
        detail: "REST controllers, rate limiting & session routing",
        projects: ["resumeai", "invenzo"],
      },
      {
        name: "FastAPI",
        detail: "High-throughput async Python microservice endpoints",
        projects: ["resumeai"],
      },
      {
        name: "JWT & OAuth",
        detail: "Stateless auth & scoped moderator permissions",
        projects: ["resumeai", "invenzo", "royal-aseel"],
      },
      {
        name: "Zod Schema Validation",
        detail: "Request payload validation (25% fewer API errors)",
        projects: ["invenzo"],
      },
      {
        name: "Puppeteer & Chromium",
        detail: "Headless PDF generation via @sparticuz/chromium",
        projects: ["resumeai"],
      },
      {
        name: "REST API Design",
        detail: "Versioned endpoints, pagination & webhook flows",
        projects: ["resumeai", "invenzo", "royal-aseel"],
      },
    ],
  },
  {
    id: "databases",
    category: "Databases & Data Modeling",
    iconKey: "database",
    color: "#34d399",
    span: "lg:col-span-1",
    summary:
      "Relational schema design, multi-tenant access isolation, and type-safe ORM migrations.",
    items: [
      {
        name: "PostgreSQL",
        detail: "Primary relational store for SaaS & ERP workloads",
        projects: ["resumeai", "invenzo", "royal-aseel"],
      },
      {
        name: "Prisma ORM",
        detail: "Declarative schemas, relations & automated migrations",
        projects: ["resumeai", "invenzo", "royal-aseel"],
      },
      {
        name: "MySQL",
        detail: "Relational indexing & transactional queries",
        projects: ["invenzo"],
      },
      {
        name: "MongoDB",
        detail: "Document storage for flexible JSON payloads",
        projects: ["resumeai"],
      },
    ],
  },
  {
    id: "devops",
    category: "DevOps, Tooling & Systems",
    iconKey: "terminal",
    color: "#f472b6",
    span: "lg:col-span-1",
    summary:
      "Deployment pipelines, version control discipline across 330+ commit repositories, and low-level C++ fundamentals.",
    items: [
      {
        name: "Git & GitHub",
        detail: "Feature branching, PR reviews & release tagging",
        projects: [
          "resumeai",
          "invenzo",
          "royal-aseel",
          "3p-solar",
          "calmify",
          "snake-game",
        ],
      },
      {
        name: "Vercel & CI/CD",
        detail: "Zero-downtime preview & production deployments",
        projects: ["invenzo", "royal-aseel", "3p-solar"],
      },
      {
        name: "Docker",
        detail: "Containerized Python & PostgreSQL dev environments",
        projects: ["resumeai"],
      },
      {
        name: "Postman",
        detail: "Automated API collection testing & debugging",
        projects: ["resumeai", "invenzo", "royal-aseel"],
      },
      {
        name: "C++ (Systems & DSA)",
        detail: "Manual state loops, file I/O & custom console rendering",
        projects: ["snake-game"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: "resumeai",
    num: "01",
    name: "ResumeAI",
    badge: "Final Year Project",
    tagline: "Multi-service AI resume parser, ATS scorer, and career platform",
    desc: "Full-stack career platform that pairs a Next.js 15 and Express.js web application with a dedicated FastAPI Python microservice. Parses PDF and DOCX resumes with SpaCy, measures semantic skill gaps against job descriptions using Sentence Transformers, and runs a LangGraph agent workflow to rewrite bullet points with explainable ATS scoring.",
    highlights: [
      "Engineered a FastAPI + SpaCy extraction pipeline achieving 90%+ field parse accuracy across single and bulk resume uploads",
      "Implemented semantic skill-gap analysis using Sentence Transformers with 95% cosine similarity matching against target job roles",
      "Built a transparent, rule-based ATS scoring engine that breaks down formatting, keyword, and section-level deductions",
      "Orchestrated a stateful LangGraph agent workflow for side-by-side LLM resume optimization and diff comparison",
      "Integrated multi-platform job aggregation and serverless PDF export using Puppeteer and @sparticuz/chromium",
    ],
    tech: [
      "Next.js 15",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma ORM",
      "Python",
      "SpaCy",
      "LangGraph",
      "Sentence Transformers",
      "Puppeteer",
      "JWT",
    ],
    github: "https://github.com/AbdulSaboor-git",
    live: null,
    featured: true,
    images: [
      "screenshots/resumeai/home-page.png",
      "screenshots/resumeai/builder.png",
      "screenshots/resumeai/parser.png",
      "screenshots/resumeai/bulk-parser.png",
      "screenshots/resumeai/editor.png",
      "screenshots/resumeai/optimizer.png",
      "screenshots/resumeai/optimizer-comparison.png",
      "screenshots/resumeai/ATS.png",
      "screenshots/resumeai/skill-gap-analyzer.png",
      "screenshots/resumeai/job-search.png",
      "screenshots/resumeai/session-manager.png",
    ],
  },
  {
    id: "invenzo",
    num: "02",
    name: "Invenzo",
    badge: "Live Production",
    tagline: "Multi-tenant inventory management system with role-based access",
    desc: "Collaborative inventory and stock analytics platform built for teams managing multiple warehouses or product catalogs. Supports granular owner and moderator permissions, real-time low-stock threshold alerts, and interactive financial and stock movement reporting.",
    highlights: [
      "Designed multi-user workspaces with scoped owner and moderator role-based access control (RBAC)",
      "Reduced malformed API requests by 25% by enforcing shared Zod validation schemas across client forms and Node.js controllers",
      "Improved dashboard state transitions by 30% using normalized Redux Toolkit slices for inventory tables and filters",
      "Built real-time stock tracking with configurable reorder alerts and visual reporting charts",
    ],
    tech: [
      "Next.js 15",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Redux",
      "Zod",
      "JWT Auth",
    ],
    github: "https://github.com/AbdulSaboor-git/Invenzo",
    live: "https://invenzo.vercel.app",
    featured: true,
    images: [],
  },
  {
    id: "royal-aseel",
    num: "03",
    name: "Royal Aseel Farms",
    badge: "330+ Commits",
    tagline: "Multi-vendor agricultural marketplace and admin suite",
    desc: "End-to-end e-commerce marketplace developed over 330+ commits for a specialized poultry business. Connects independent sellers with buyers through a searchable catalog, dedicated vendor and admin control panels, and direct order routing via WhatsApp and email.",
    highlights: [
      "Architected a multi-seller marketplace schema in PostgreSQL and Prisma with isolated vendor inventory and order views",
      "Built dynamic catalog search, multi-attribute filtering, and persistent user favorites",
      "Implemented a dual-channel checkout pipeline that formats and dispatches verified orders via WhatsApp and email",
      "Created a full platform administration suite for seller verification, listing moderation, and user management",
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/AbdulSaboor-git/royal-aseel-farms",
    live: "https://royal-aseel-farms.vercel.app",
    featured: false,
    images: ["screenshots/royal-aseel-farms/raf.png"],
  },
  {
    id: "3p-solar",
    num: "04",
    name: "3P Solar Solutions",
    tagline: "Commercial web platform and lead-capture pipeline for solar EPC",
    desc: "Responsive commercial web presence engineered for a solar energy provider to showcase residential, commercial, and industrial installation packages and capture qualified customer consultation requests.",
    highlights: [
      "Structured dedicated service breakdown pages for residential, commercial, and industrial solar offerings",
      "Engineered fast-loading responsive layouts with clear lead-generation call-to-action funnels",
      "Configured automated CI/CD preview and production deployments on Vercel",
    ],
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/AbdulSaboor-git/3p-solar-solutions",
    live: "https://solarva.vercel.app",
    featured: false,
    images: [
      "screenshots/3p-solar/home.png",
      "screenshots/3p-solar/services.png",
    ],
  },
  {
    id: "calmify",
    num: "05",
    name: "Calmify",
    tagline: "Guided mindfulness and breathing web application",
    desc: "Frontend-focused wellness web application built with Next.js App Router and Framer Motion. Uses choreographed transitions, low-glare color tokens, and distraction-free navigation for guided breathing and mindfulness sessions.",
    highlights: [
      "Built smooth, distraction-free view transitions and breathing timers using Framer Motion",
      "Designed a low-contrast, eye-friendly color system tailored for evening and low-light usage",
      "Implemented responsive mobile-first layouts using Next.js App Router and Tailwind CSS",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: "https://github.com/AbdulSaboor-git/calmify",
    live: null,
    featured: false,
    images: [
      "screenshots/calmify/1.png",
      "screenshots/calmify/2.png",
      "screenshots/calmify/3.png",
    ],
  },
  {
    id: "snake-game",
    num: "06",
    name: "Snake Game (C++)",
    tagline: "Zero-dependency C++ console game with custom frame buffer",
    desc: "Complete arcade Snake implementation written in standard C++ without external graphics engines. Features a custom console frame renderer, interactive settings menu, variable tick-rate difficulty scaling, and file-backed high-score persistence.",
    highlights: [
      "Wrote a custom double-buffered console renderer from scratch to eliminate screen flicker",
      "Implemented a state-driven menu system with configurable game speed and difficulty tiers",
      "Built file-system serialization for persistent local high-score leaderboards",
      "Engineered body-segment collision and growth logic using pure C++ data structures",
    ],
    tech: ["C++", "Console Rendering", "File I/O", "Data Structures"],
    github: "https://github.com/AbdulSaboor-git/Snake-Game",
    live: null,
    featured: false,
    images: ["screenshots/snake-game/snake-game.png"],
  },
];

export const ABOUT_INFO = [
  { key: "Education", value: "BSCS (Hons.) Graduate" },
  { key: "Location", value: "Lahore, Pakistan" },
  { key: "Core Stack", value: "Next.js · Node · FastAPI · PostgreSQL" },
  { key: "Availability", value: "Full-Time & Select Freelance", green: true },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "abdulsaboorcontact@gmail.com",
    href: "mailto:abdulsaboorcontact@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/AbdulSaboor-git",
    href: "https://github.com/AbdulSaboor-git",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdulsaboor-in",
    href: "https://linkedin.com/in/abdulsaboor-in",
  },
];
