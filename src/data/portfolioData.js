export const portfolioData = {
  personal: {
    name: "Sanjiv Prasad",
    handle: "Sanjiv215",
    roleTitle: "Fullstack Developer Intern",
    tagline: "Fullstack Developer Intern • Python • FastAPI • React • AI & DevTools",
    avatar: "/images/profile.jpg",
    phone: "+91 9561552194",
    email: "Sanjivprasad360@gmail.com",
    github: "https://github.com/Sanjiv215",
    linkedin: "https://www.linkedin.com/in/prasadsanjiv",
    resumeUrl: "/Sanjiv-Resume.pdf",
    location: "Bengaluru, Karnataka, India",
    availability: "Open to Full-Stack, AI & DevTools Internship Opportunities",
    roles: [
      "Fullstack Developer Intern",
      "Python & FastAPI Developer",
      "React & Frontend Engineer",
      "Creator of Vigilo & SmartBuy-AI"
    ],
    bio: "B.Tech CSE (AI/ML) student and Full-Stack Developer focused on building real-world, production-oriented applications with Python, FastAPI, React, and modern databases. Experienced in full-stack development through an IIT Patna internship, client projects, and open-source development, including Vigilo, a Python static security scanner.",
    story: "Passionate about backend architecture, AI applications, cybersecurity, and developer tools, with a strong focus on learning by building and solving real-world problems. Experienced across full-stack web applications, RESTful APIs, databases, authentication, and deployment workflows.",
    heroCodeSnippet: `// macOS System Configuration @Sanjiv215
const engineer = {
  name: "Sanjiv Prasad",
  role: "Fullstack Developer Intern",
  education: "B.Tech CSE (AI/ML) @ SVYASA University",
  flagshipProjects: ["SmartBuy-AI", "Vigilo (pip install vigilo)", "ERP Portal"],
  internships: ["IIT Patna (2026)", "Code Alpha (2025)"],
  coreStack: ["Python", "FastAPI", "React", "NodeJS", "ExpressJS", "MongoDB", "MySQL"],
  motto: "Learn by building. Solve real-world problems.",
  status: "🟢 Open to Internship Opportunities"
};`
  },
  stats: [
    { label: "Core Projects", value: 5, suffix: " Systems" },
    { label: "PyPI Package Stars", value: 4, suffix: "★" },
    { label: "Public Repositories", value: 16, suffix: "+" },
    { label: "Client Deliverables", value: 2, suffix: " Delivered" }
  ],
  values: [
    {
      title: "Real-World Engineering",
      description: "Building production-oriented applications, static analyzers, and agentic platforms rather than passive tutorials.",
      icon: "Layers"
    },
    {
      title: "Security & Tooling First",
      description: "Developing static security scanners (Vigilo), AST diagnostics engines, and automated developer tools that make codebases resilient.",
      icon: "Shield"
    },
    {
      title: "Rapid Learning & Leadership",
      description: "Fast skill acquisition, proactive leadership, cross-functional collaboration, and disciplined problem-solving.",
      icon: "Zap"
    }
  ],
  skillCategories: [
    "All",
    "Languages",
    "Frameworks & Web",
    "Databases & Cloud",
    "AI & Data Science",
    "Core Competencies"
  ],
  skills: [
    // Languages
    { name: "Python", category: "Languages", level: 95, icon: "Cpu", langColor: "#3572A5", desc: "FastAPI, AST analysis, Automation, Scripting" },
    { name: "Typescript", category: "Languages", level: 90, icon: "FileCode", langColor: "#3178c6", desc: "Strict typing, Interfaces, Modern ESNext" },
    { name: "Javascript", category: "Languages", level: 94, icon: "FileCode", langColor: "#f7df1e", desc: "ES6+, Async/Await, Event Loop, DOM APIs" },
    { name: "HTML", category: "Languages", level: 96, icon: "Palette", langColor: "#e34c26", desc: "Semantic HTML5, Accessibility, Web Standards" },
    { name: "CSS", category: "Languages", level: 92, icon: "Palette", langColor: "#264de4", desc: "Modern CSS, Tailwind CSS, Responsive Layouts" },
    { name: "JQuery", category: "Languages", level: 85, icon: "Code2", langColor: "#0769ad", desc: "DOM manipulation, Event handling, Ajax" },

    // Frameworks & Web
    { name: "React", category: "Frameworks & Web", level: 95, icon: "Code2", langColor: "#61dafb", desc: "React 19, Custom Hooks, State Management, SPAs" },
    { name: "Vite", category: "Frameworks & Web", level: 94, icon: "Box", langColor: "#646cff", desc: "Modern frontend bundling, HMR, Optimized builds" },
    { name: "FastAPI", category: "Frameworks & Web", level: 92, icon: "Server", langColor: "#05998b", desc: "Asynchronous REST endpoints, Pydantic, OpenAPI" },
    { name: "ExpressJS", category: "Frameworks & Web", level: 90, icon: "Server", langColor: "#339933", desc: "RESTful routing, Middleware, JWT auth, Error handling" },
    { name: "NodeJS", category: "Frameworks & Web", level: 90, icon: "Server", langColor: "#339933", desc: "Backend runtime, Event-driven architecture, NPM" },

    // Databases & Cloud
    { name: "MongoDB", category: "Databases & Cloud", level: 90, icon: "Database", langColor: "#47a248", desc: "Document modeling, Aggregation pipelines, Mongoose" },
    { name: "MySQL", category: "Databases & Cloud", level: 88, icon: "Database", langColor: "#336791", desc: "Relational schemas, SQL queries, Indexing, Constraints" },
    { name: "Deployment", category: "Databases & Cloud", level: 88, icon: "Box", langColor: "#2496ed", desc: "Vercel, Render, CI/CD workflows, Cloud hosting" },

    // AI & Data Science
    { name: "AI Tools", category: "AI & Data Science", level: 92, icon: "Cpu", langColor: "#10b981", desc: "AI agents, LLM integrations, Prompt engineering" },
    { name: "Numpy", category: "AI & Data Science", level: 86, icon: "Cpu", langColor: "#4dabcf", desc: "Multi-dimensional arrays, Numerical computation" },
    { name: "Pandas", category: "AI & Data Science", level: 85, icon: "Cpu", langColor: "#150458", desc: "Data manipulation, Dataframe processing, Analysis" },

    // Core Competencies
    { name: "Leadership", category: "Core Competencies", level: 92, icon: "Shield", langColor: "#f59e0b", desc: "Project coordination, Mentorship, Initiative taking" },
    { name: "Rapid Learning", category: "Core Competencies", level: 96, icon: "Zap", langColor: "#ec4899", desc: "Fast technology adoption, Autonomous problem-solving" },
    { name: "Collaboration", category: "Core Competencies", level: 94, icon: "GitBranch", langColor: "#8b5cf6", desc: "Cross-functional teamwork, Code reviews, Git workflows" }
  ],
  projectCategories: [
    "All",
    "AI & Agents",
    "DevTools & Security",
    "Full-Stack"
  ],
  projects: [
    {
      id: "smartbuy-ai",
      title: "SmartBuy-AI — Agentic Browser for Price Comparison",
      repoName: "Sanjiv215/SmartBuy-AI",
      category: "AI & Agents",
      primaryLanguage: "Python",
      languageColor: "#3572A5",
      shortDescription: "An Intelligent Application for Real-Time Product Price Comparison and an Interactive Browser.",
      fullDescription: "SmartBuy-AI is an intelligent agentic browser and automated web scraping engine engineered for real-time product price comparison across major e-commerce platforms. Features autonomous browser automation, product data extraction, interactive user filtering, and intelligent price analysis.",
      image: "/images/smartbuyai.png",
      tech: ["AI Agents", "Python", "FastAPI", "React", "Browser Automation", "Web Scraping"],
      features: [
        "Autonomous agentic browser for multi-platform price extraction",
        "Real-time product price comparison & deal discovery",
        "Interactive browser UI with responsive search and dynamic filtering",
        "FastAPI backend architecture with asynchronous task processing",
        "Intelligent web scraping heuristics and product data normalization"
      ],
      liveUrl: "https://github.com/Sanjiv215/SmartBuy-AI",
      githubUrl: "https://github.com/Sanjiv215/SmartBuy-AI",
      badge: "AI Agentic Browser",
      license: "MIT License"
    },
    {
      id: "vigilo",
      title: "VIGILO — Python Static Security Scanner",
      repoName: "Sanjiv215/VIGILO-Python-Package",
      category: "DevTools & Security",
      primaryLanguage: "Python",
      languageColor: "#3572A5",
      shortDescription: "An Automated Python-Based Security Scanner for Detecting Vulnerabilities and Code Security Issues.",
      fullDescription: "Vigilo is a high-speed Python static analysis and security scanning tool published on PyPI. It performs AST-based security analysis to detect CWE vulnerabilities (such as eval injection, SQL injection, insecure commands, and hardcoded credentials), repository scanning, caching, CI/release automation, and standalone executables.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python 3.12", "AST Engine", "CWE Scanner", "PyPI", "CLI Tooling", "CI/CD"],
      features: [
        "Published on PyPI: pip install vigilo",
        "CWE-based vulnerability detection rules (eval, SQLi, secrets, commands)",
        "AST code correctness diagnostics & linter",
        "High-performance caching & standalone executables",
        "CI/CD workflow integration for automated repository scanning"
      ],
      liveUrl: "https://pypi.org/project/vigilo/",
      githubUrl: "https://github.com/Sanjiv215/VIGILO-Python-Package",
      badge: "PyPI Package • 4★",
      license: "MIT License"
    },
    {
      id: "erp-portal",
      title: "ERP - Portal — Enterprise Resource Planning",
      repoName: "Sanjiv215/ERP_PORTAL",
      category: "Full-Stack",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "An Integrated Enterprise Resource Planning (ERP) Portal for Streamlined Business Operations and Centralized Management.",
      fullDescription: "An integrated ERP Portal engineered during Full-Stack internship at IIT Patna. Designed for streamlined business operations, centralized management, role-based access control (RBAC), multi-tenant collaborative task boards, automated alerts, and high-throughput REST APIs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "JavaScript", "NodeJS", "ExpressJS", "MongoDB", "RESTful APIs"],
      features: [
        "Role-based access control (RBAC) & secure session management",
        "Enterprise task assignment & progress tracking dashboards",
        "Centralized business operations and database management",
        "Engineered during IIT Patna Fullstack Developer Internship"
      ],
      liveUrl: "https://github.com/Sanjiv215/ERP_PORTAL",
      githubUrl: "https://github.com/Sanjiv215/ERP_PORTAL",
      badge: "IIT Patna Internship",
      license: "Proprietary / Client"
    },
    {
      id: "pysentra",
      title: "PySentra — Python Code Analysis & Security Monitoring",
      repoName: "Sanjiv215/PySentra",
      category: "DevTools & Security",
      primaryLanguage: "Python",
      languageColor: "#3572A5",
      shortDescription: "An Intelligent Python-Based Platform for Automated Code Analysis and Security Monitoring.",
      fullDescription: "PySentra is an intelligent Python-based platform for automated code analysis, abstract syntax tree inspection, and security monitoring that flags anti-patterns, dead code, and security smells before production deployment.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "AST Analyzer", "Code Security", "CLI Tooling", "Apache 2.0"],
      features: [
        "Fast abstract syntax tree inspection & code hygiene checks",
        "Configurable diagnostic rule definitions & security monitoring",
        "Lightweight command-line interface for developer workflows",
        "Open-source Apache 2.0 license"
      ],
      liveUrl: "https://github.com/Sanjiv215/PySentra",
      githubUrl: "https://github.com/Sanjiv215/PySentra",
      badge: "Apache 2.0 Open Source",
      license: "Apache License 2.0"
    },
    {
      id: "my-portfolio",
      title: "My Portfolio — Vite & React Web Experience",
      repoName: "Sanjiv215/my_portfolio",
      category: "Full-Stack",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "Interactive macOS-inspired portfolio created using Vite, React, modern CSS, and API connections.",
      fullDescription: "Personal portfolio website built with the latest Vite and React 19 architecture. Features a macOS Tahoe desktop design language, interactive terminal CLI, live AST security scanner simulator, and EmailJS communication workflows.",
      image: "/images/codek.png",
      tech: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
      features: [
        "macOS Tahoe desktop interface with dynamic menu bar and animated dock",
        "Interactive developer terminal CLI with custom command execution",
        "Live AST static security scanner simulation tool",
        "Fully responsive layout optimized for mobile, tablet, and desktop"
      ],
      liveUrl: "https://github.com/Sanjiv215/my_portfolio",
      githubUrl: "https://github.com/Sanjiv215/my_portfolio",
      badge: "Deployed Portfolio",
      license: "MIT License"
    }
  ],
  freelanceProjects: [
    {
      id: "jishnu-portfolio",
      title: "Jishnu — Client Portfolio Website",
      repoName: "Sanjiv215/jishnu_portfolio",
      client: "Jishnu",
      role: "Freelance Frontend Architect",
      category: "Freelance Client Work",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "Custom bespoke portfolio website engineered for client Jishnu featuring rich motion graphics, responsive layouts, and interactive project showcases.",
      fullDescription: "Engineered and delivered an end-to-end bespoke personal portfolio for client Jishnu. Built with modern React, Tailwind CSS, and Framer Motion, featuring smooth section transitions, responsive glassmorphic cards, optimized Lighthouse performance, and custom branding.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
      features: [
        "Bespoke UI/UX design tailored for client brand",
        "Interactive motion animations with Framer Motion",
        "Mobile-first responsive architecture",
        "Optimized 100/100 Lighthouse performance metrics"
      ],
      liveUrl: "https://github.com/Sanjiv215/jishnu_portfolio",
      githubUrl: "https://github.com/Sanjiv215/jishnu_portfolio",
      badge: "Client Project",
      license: "Client Proprietary"
    },
    {
      id: "devendra-portfolio",
      title: "Devendra — Client Portfolio Website",
      repoName: "Sanjiv215/devendra_portfolio",
      client: "Devendra",
      role: "Freelance Frontend Architect",
      category: "Freelance Client Work",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "Interactive modern portfolio designed and developed for client Devendra with clean visual hierarchy, dynamic showcase, and glassmorphism styling.",
      fullDescription: "Designed and implemented a full portfolio web experience for client Devendra. Highlights include dynamic experience timelines, skill profilers, project showcase modaling, and sleek frosted glass aesthetics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Tailwind CSS", "Lucide Icons", "Vite", "Glassmorphism"],
      features: [
        "Sleek frosted glass UI/UX layout",
        "Interactive skill rating and project gallery",
        "Smooth scroll navigation and touch optimized controls",
        "Direct contact routing and social integrations"
      ],
      liveUrl: "https://github.com/Sanjiv215/devendra_portfolio",
      githubUrl: "https://github.com/Sanjiv215/devendra_portfolio",
      badge: "Client Project",
      license: "Client Proprietary"
    }
  ],
  experiences: [
    {
      role: "Fullstack developer intern",
      company: "IIT PATNA",
      period: "2026 - 2026",
      type: "Internship",
      description: "Developed scalable full-stack web applications, integrating responsive frontends, RESTful APIs, databases, authentication, and deployment workflows.",
      skills: ["React", "JavaScript", "NodeJS", "ExpressJS", "Databases", "Authentication", "REST APIs", "Deployment"]
    },
    {
      role: "Frontend developer intern",
      company: "Code Alpha",
      period: "2025 - 2025",
      type: "Internship",
      description: "Developed responsive user interfaces using HTML, CSS, and JavaScript. Focused on clean design, usability, and cross-browser compatibility.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"]
    },
    {
      role: "Bachelor of technology (B-Tech)",
      company: "SVYASA University",
      period: "Present",
      type: "Education",
      description: "Developing strong fundamentals in programming, data structures, and software development. Working on academic projects with hands-on experience in Python and web technologies.",
      skills: ["Data Structures & Algorithms", "Python", "Web Technologies", "AI & ML", "Software Development"]
    },
    {
      role: "Higher Secondary Education (HSC)",
      company: "GS Vidya Mandir",
      period: "2023 - 2025",
      type: "Education",
      description: "Completed higher secondary studies with a focus on mathematics and science fundamentals. Developed analytical thinking, problem-solving skills, and academic discipline.",
      skills: ["Mathematics", "Science Fundamentals", "Problem-Solving", "Analytical Thinking"]
    }
  ]
};
