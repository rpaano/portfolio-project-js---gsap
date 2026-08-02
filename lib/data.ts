export const profile = {
  name: "Romel Nino Paano",
  title: "Tools and Automation Senior Associate",
  subtitle: "Full Stack Web Developer",
  location: "Taguig City, Philippines",
  email: "rpaano02@gmail.com",
  phone: "+63 998 946 0098",
  linkedin: "https://www.linkedin.com/in/romelpaano",
  github: "https://github.com/romelpaano",
  overview:
    "Full Stack Web Developer with over 6 years of experience building robust, maintainable, and performant web applications, now extending into cloud and machine learning engineering on Google Cloud Platform and Vertex AI. Proficient in Python, Laravel, Vue.js, React, and Angular, with a strong record of delivering high-quality projects. Known for problem-solving, resourcefulness, and collaboration.",
};

export const skillGroups = [
  {
    label: "Languages & Backend",
    items: ["Python", "PHP", "Laravel", "Golang", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["Vue 3", "React", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Cloud & AI",
    items: ["Google Cloud (GCP)", "Vertex AI", "Machine Learning", "AWS"],
  },
  {
    label: "Tools",
    items: ["GitHub"],
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
      "Full Stack Developer and automation engineer delivering scalable web, scraper, and cloud applications with Python, Angular, TypeScript, and Go, plus machine learning and generative AI solutions on Google Cloud Platform and Vertex AI.",
    highlights: [
      "Spearheaded development of efficient, scalable applications, managing communication with product owners to streamline processes, minimize waste, and ensure rapid, successful deployment and UAT.",
      "Significantly increased agent productivity by developing applications that reduced file audit times for Google's Operations.",
      "Integrated AI functionality into applications to deliver faster, more accurate results.",
      "Built and deployed services on Google Cloud Platform using Cloud Run, Cloud Functions, Pub/Sub, and BigQuery for scalable, cost-efficient solutions.",
      "Trained and deployed machine learning and generative AI models on Vertex AI, automating classification and data extraction in production applications.",
      "Boosted application performance by 50% through efficient cleanup processes, comprehensive query optimization, and elimination of unused database data and redundant functions.",
      "Enhanced system efficiency through strategic AI integrations for repetitive tasks, drastically reducing agent processing time.",
    ],
  },
  {
    company: "Evo Tech Software Solutions Inc.",
    role: "Full Stack Web Developer",
    period: "2024 — 2025",
    location: "Cebu, Philippines",
    summary:
      "Developed and maintained web and scraper applications end-to-end, specializing in both front-end and back-end technologies. Skilled in Laravel, Vue.js, and Python for building user-friendly interfaces and scalable server-side solutions. Advanced from junior to software developer through continuous growth.",
    highlights: [
      "Enhanced web scraping systems to minimize dependency on user agents and reduce CAPTCHA occurrences, refining system architecture for more robust, seamless automation.",
      "Improved application performance by up to 2x by designing an asynchronous system that divides large tasks into smaller, manageable chunks.",
      "Reviewed pull requests to ensure the codebase adhered to code styling and standards.",
      "Created and maintained a CI/CD pipeline, enhancing workflow efficiency and ensuring consistent code quality.",
      "Reduced downtime by 10% through efficient cleanup processes and query optimization, including removing unused database data.",
      "Boosted performance with efficient algorithms, caching strategies, and database query improvements, leading to faster load times and higher user satisfaction.",
    ],
  },
  {
    company: "Cody Web Development Inc.",
    role: "Software Engineer",
    period: "2022 — 2024",
    summary:
      "Specialized in projects for international clients, particularly from Japan, using a range of modern web technologies — PHP, JavaScript, Laravel, Vue.js, React, Angular, and WordPress. Proven ability to adapt quickly, manage multiple projects simultaneously, and excel under pressure.",
    highlights: [
      "Successfully developed and delivered projects for Japanese clients using PHP, JavaScript, Laravel, Vue.js, React, Angular, and WordPress.",
      "Quickly adopted and implemented new technologies to meet the specific needs of diverse projects and client requirements.",
      "Efficiently managed multiple projects at the same time, ensuring on-time delivery and meeting client expectations.",
      "Consistently delivered high-quality results even in high-pressure situations, demonstrating reliability and resilience.",
      "Worked effectively both independently and as part of small to large teams, contributing through strong technical skills and teamwork.",
      "Actively assisted colleagues in their tasks, providing guidance and sharing expertise to help improve overall team performance.",
    ],
  },
  {
    company: "Next65 Solutions Inc.",
    role: "Junior Backend Developer",
    period: "2019 — 2021",
    summary:
      "Built web applications from scratch with a strong focus on efficiency and quick turnaround times, using Laravel and React. Adapted quickly to new versions of PHP and Laravel, optimizing existing codebases and implementing innovative solutions, including cryptocurrency-based systems for client investments and payouts.",
    highlights: [
      "Successfully developed a fully functional application from scratch within tight deadlines using Laravel and React.",
      "Quickly adapted to new versions of PHP and Laravel, leveraging the latest features to improve performance and maintain code quality.",
      "Enhanced existing codebases to achieve maximum efficiency, resulting in faster load times and reduced resource consumption.",
      "Designed and implemented a system that utilizes cryptocurrency for investments and payouts, ensuring secure and efficient transactions.",
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
  repoUrl?: string;
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
    slug: "seller-investigators",
    title: "Seller Investigators by Carbon6",
    description:
      "An Amazon FBA reimbursement audit platform that automatically investigates lost, damaged, and overcharged inventory claims, then tracks every case through a transparent, itemized dashboard — 95.9% success rate across all claim types, $100M+ recovered.",
    category: "web",
    stack: ["Dashboard / SaaS", "Case Management", "Claims Automation"],
    image: "/images/projects/seller-investigators.png",
    demoUrl: "https://www.carbon6.io/seller-investigators",
  },
  {
    slug: "cody-inc",
    title: "Cody Inc. Corporate Website",
    description:
      "A WordPress marketing site for Cody Web Development Inc., a Cebu-based web design and development company serving clients worldwide.",
    category: "web",
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/images/projects/cody-inc.png",
    demoUrl: "https://cody.inc/",
  },
  {
    slug: "lig-inc",
    title: "LIG Inc.",
    description:
      "A WordPress site built for LIG Inc., a Japanese systems development, web production, and marketing support company — part of the international client work delivered from the Cody Web Development team.",
    category: "web",
    stack: ["WordPress", "PHP", "JavaScript"],
    image: "/images/projects/liginc.png",
    demoUrl: "https://liginc.co.jp/",
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
