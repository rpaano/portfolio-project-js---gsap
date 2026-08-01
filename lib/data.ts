export const profile = {
  name: "Romel Nino Paano",
  title: "Full Stack Web Developer",
  subtitle: "Python & JavaScript Ecosystems",
  location: "Taguig City, Philippines",
  email: "rpaano02@gmail.com",
  phone: "+63 998 946 0098",
  linkedin: "https://www.linkedin.com/in/romelpaano",
  github: "https://github.com/romelpaano",
  overview:
    "Full Stack Web Developer with 6+ years of experience building robust, performant web applications across the Python and JavaScript ecosystems. Backend experience spans Django, FastAPI, PostgreSQL, SQLAlchemy, and Alembic, alongside Laravel and Go; frontend experience spans Vue.js, React, Next.js, Angular, Alpine.js/HTMX, and Tailwind CSS. Docker has been part of the deployment workflow on every project across my career. I regularly use GitHub Copilot and integrate AI (Gemini, ChatGPT, Claude, Vertex AI) directly into applications to speed up delivery and improve accuracy.",
};

export const skillGroups = [
  {
    label: "Languages & Backend",
    items: ["Python", "Django", "FastAPI", "Go", "Laravel", "TypeScript", "JavaScript"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLAlchemy", "Alembic"],
  },
  {
    label: "Frontend",
    items: ["Vue 3", "React", "Next.js", "Angular", "Alpine.js / HTMX", "HTML", "CSS / Tailwind CSS"],
  },
  {
    label: "AI & Tooling",
    items: ["GitHub Copilot & AI Integration", "GCP / Vertex AI", "Gemini", "ChatGPT", "Claude", "Docker"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Google Operations Center Inc.",
    role: "Tools and Automation Senior Associate",
    period: "2025 — Present",
    summary:
      "Full Stack Web Developer building both front-end and back-end web and scraper applications for internal automation tooling. Works daily in Python, Angular, TypeScript, and Go, using GitHub Copilot and AI integration to accelerate delivery.",
    highlights: [
      "Spearheaded development of efficient, scalable applications, coordinating closely with product owners for rapid, successful deployment and UAT.",
      "Integrated AI functionality (Gemini, ChatGPT, Claude, Vertex AI) into applications and used GitHub Copilot day-to-day to speed up development.",
      "Significantly increased agent productivity by developing Python and TypeScript applications that reduced file audit times.",
      "Boosted application performance by 50% through cleanup processes, query optimization, and elimination of redundant functions.",
    ],
  },
  {
    company: "Evo Tech Software Solutions Inc.",
    role: "Full Stack Web Developer",
    period: "2024 — 2025",
    location: "Cebu, Philippines",
    summary:
      "Developed and maintained web and scraper applications end-to-end. Built and containerized Python services with FastAPI, used Alpine.js for lightweight interactivity, and relied on GitHub Copilot throughout the development workflow.",
    highlights: [
      "Built and maintained FastAPI services alongside Laravel applications, Dockerized for consistent, repeatable deployment.",
      "Enhanced web scraping systems to minimize dependency on user agents and reduce CAPTCHA occurrences.",
      "Improved application performance up to 2x by designing an asynchronous system that chunks large tasks.",
      "Created and maintained a CI/CD pipeline running in Docker, ensuring consistent code quality.",
    ],
  },
  {
    company: "Cody Web Development Inc.",
    role: "Software Engineer",
    period: "2022 — 2024",
    summary:
      "Specialized in projects for international clients, particularly from Japan, across Python and PHP/JavaScript ecosystems. Built backend services with Django and FastAPI on PostgreSQL, managed migrations with Alembic.",
    highlights: [
      "Developed backend services using Django and FastAPI with PostgreSQL as the primary datastore.",
      "Delivered projects for Japanese clients using PHP, TypeScript, Next.js, Laravel, Vue.js, React, Angular, and WordPress.",
      "Used Alpine.js and HTMX to build fast, server-rendered UIs with minimal JavaScript overhead.",
      "Managed multiple projects simultaneously while mentoring colleagues and sharing expertise.",
    ],
  },
  {
    company: "Next65 Solutions Inc.",
    role: "Junior Backend Developer",
    period: "2019 — 2021",
    summary:
      "Built web applications from scratch with a focus on efficiency and quick turnaround, using Laravel, React, Next.js, and PostgreSQL, containerized with Docker from early in my career.",
    highlights: [
      "Developed a fully functional application from scratch within tight deadlines, deployed via Docker.",
      "Quickly adapted to new versions of PHP and Laravel to improve performance and maintain code quality.",
      "Enhanced existing codebases for faster load times and reduced resource consumption.",
      "Designed and implemented a cryptocurrency-based system for client investments and payouts.",
    ],
  },
];

export const education = {
  school: "Xavier University — Ateneo de Cagayan",
  degree: "Bachelor of Science in Computer Science",
  period: "2015 — 2019",
};

export type Category = "web" | "ai" | "both";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: Category;
  stack: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Storefront Commerce Platform",
    description:
      "A full-featured e-commerce platform with Next.js storefront, Django/FastAPI backend, PostgreSQL, and Dockerized deployment.",
    category: "web",
    stack: ["Next.js", "Django", "PostgreSQL", "Docker"],
    image: "/images/projects/ecommerce.svg",
    demoUrl: "https://demo.example.com/storefront",
    repoUrl: "https://github.com/romelpaano/storefront-demo",
  },
  {
    slug: "saas-admin-dashboard",
    title: "SaaS Admin Dashboard",
    description:
      "A multi-tenant admin dashboard with role-based access, built with Vue 3, FastAPI, and SQLAlchemy migrations via Alembic.",
    category: "web",
    stack: ["Vue 3", "FastAPI", "SQLAlchemy", "Tailwind CSS"],
    image: "/images/projects/dashboard.svg",
    demoUrl: "https://demo.example.com/saas-dashboard",
    repoUrl: "https://github.com/romelpaano/saas-dashboard-demo",
  },
  {
    slug: "internal-tools-portal",
    title: "Internal Automation Portal",
    description:
      "An Angular + Go internal tooling portal for automating repetitive operations workflows, inspired by production automation work.",
    category: "web",
    stack: ["Angular", "Go", "TypeScript", "Docker"],
    image: "/images/projects/portal.svg",
    demoUrl: "https://demo.example.com/automation-portal",
    repoUrl: "https://github.com/romelpaano/automation-portal-demo",
  },
  {
    slug: "ai-document-analyzer",
    title: "AI Document Analyzer",
    description:
      "Upload documents and get structured summaries, key-point extraction, and Q&A powered by Gemini and Vertex AI, wrapped in a FastAPI service.",
    category: "ai",
    stack: ["FastAPI", "Vertex AI", "Gemini", "React"],
    image: "/images/projects/ai-docs.svg",
    demoUrl: "https://demo.example.com/ai-document-analyzer",
    repoUrl: "https://github.com/romelpaano/ai-document-analyzer-demo",
  },
  {
    slug: "ai-chat-assistant",
    title: "Embeddable AI Chat Assistant",
    description:
      "A lightweight, embeddable chat widget backed by Claude and ChatGPT with streaming responses, built with Alpine.js/HTMX for minimal overhead.",
    category: "ai",
    stack: ["Alpine.js", "HTMX", "Claude API", "Python"],
    image: "/images/projects/ai-chat.svg",
    demoUrl: "https://demo.example.com/ai-chat-widget",
    repoUrl: "https://github.com/romelpaano/ai-chat-widget-demo",
  },
  {
    slug: "smart-scraper-pipeline",
    title: "Smart Scraper & Insights Pipeline",
    description:
      "An async web scraping pipeline that chunks large crawl jobs, minimizes CAPTCHA friction, and layers AI-based data classification on top — combining Web and AI work end-to-end.",
    category: "both",
    stack: ["Python", "FastAPI", "PostgreSQL", "Gemini"],
    image: "/images/projects/scraper.svg",
    demoUrl: "https://demo.example.com/scraper-pipeline",
    repoUrl: "https://github.com/romelpaano/scraper-pipeline-demo",
  },
];
