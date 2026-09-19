export const portfolioData = {
  personal: {
    name: "Sanjiv Prasad",
    handle: "Sanjiv215",
    roleTitle: "Full Stack Intern",
    tagline: "Full Stack Intern • Python • AI • DevTools — Building Vigilo",
    avatar: "/images/profile.jpg",
    roles: [
      "Full Stack Intern",
      "Python & DevTools Builder",
      "Creator of Vigilo (PyPI)",
      "React & Node.js Developer"
    ],
    bio: "Full Stack Intern specializing in Python, AI systems, modern React web architectures, and developer tooling. Transitioned from fitness training into software engineering—bringing discipline, consistency, and a problem-solving mindset to scalable systems and static analyzers.",
    story: "Before transitioning into software development, I worked as a fitness trainer, where I developed discipline, consistency, problem-solving skills, and a results-driven mindset. I now bring the same approach to technology: learn, build, improve, repeat.",
    location: "Bangalore, Karnataka, India",
    availability: "Open to Internship & Freelance opportunities only",
    email: "prasad.sanjiv@outlook.com",
    github: "https://github.com/Sanjiv215",
    linkedin: "https://www.linkedin.com/in/prasadsanjiv",
    resumeUrl: "/Sanjiv-Resume.pdf",
    heroCodeSnippet: `// macOS System Configuration @Sanjiv215
const engineer = {
  name: "Sanjiv Prasad",
  role: "Full Stack Intern",
  flagshipTool: "vigilo (pip install vigilo)",
  education: "B.Tech CSE (AI & ML) @ UIT",
  internships: ["IIT Patna", "Code Alpha"],
  motto: "Build. Break. Fix. Repeat.",
  status: "🟢 Open to Internship & Freelance opportunities only"
};`
  },
  stats: [
    { label: "PyPI Package Stars", value: 4, suffix: "★" },
    { label: "Public Repositories", value: 16, suffix: "+" },
    { label: "Client Freelance Portfolios", value: 2, suffix: " Delivered" },
    { label: "Open Source Mindset", value: 100, suffix: "%" }
  ],
  values: [
    {
      title: "Real-World Engineering",
      description: "Learning and mastering software by building production-grade tools, static analyzers, and distributed web applications rather than passive tutorials.",
      icon: "Layers"
    },
    {
      title: "Discipline & Consistency",
      description: "Bringing the relentless consistency of fitness training into software architecture, clean codebases, and continuous refinement cycles.",
      icon: "Zap"
    },
    {
      title: "Security & Tooling First",
      description: "Building static security analyzers, CWE vulnerability detection engines, and developer tools that make codebases resilient and maintainable.",
      icon: "Shield"
    }
  ],
  skillCategories: [
    "All",
    "Languages",
    "Frameworks & Web",
    "Security & Tooling",
    "AI & ML",
    "Databases & Cloud"
  ],
  skills: [
    { name: "Python 3.12", category: "Languages", level: 95, icon: "Cpu", langColor: "#3572A5", desc: "FastAPI, PyPI, AST parsing, Automation scripts" },
    { name: "TypeScript & JavaScript", category: "Languages", level: 94, icon: "FileCode", langColor: "#3178c6", desc: "ES6+, Async, Type systems, DOM APIs" },
    { name: "C / C++", category: "Languages", level: 82, icon: "Terminal", langColor: "#f34b7d", desc: "Data structures, Memory management, Algorithms" },
    { name: "HTML5 & Modern CSS", category: "Languages", level: 96, icon: "Palette", langColor: "#e34c26", desc: "Tailwind CSS v4, Glassmorphism, Responsive UI" },
    
    { name: "React 19 & Vite", category: "Frameworks & Web", level: 95, icon: "Code2", langColor: "#61dafb", desc: "Hooks, Virtual DOM, State management, 60fps UX" },
    { name: "FastAPI", category: "Frameworks & Web", level: 92, icon: "Cpu", langColor: "#05998b", desc: "Asynchronous REST endpoints, Pydantic, Swagger" },
    { name: "Node.js & Express", category: "Frameworks & Web", level: 90, icon: "Server", langColor: "#339933", desc: "RESTful APIs, Middleware, JWT / OTP auth, RBAC" },
    { name: "Next.js", category: "Frameworks & Web", level: 85, icon: "Layout", langColor: "#ffffff", desc: "Server components, Routing, SSR / SSG" },

    { name: "AST Static Analysis", category: "Security & Tooling", level: 92, icon: "Terminal", langColor: "#3572A5", desc: "Abstract syntax tree traversal, Code diagnostics" },
    { name: "CWE Vulnerability Detection", category: "Security & Tooling", level: 88, icon: "Shield", langColor: "#e34c26", desc: "Eval injection, SQLi, Hardcoded secrets, Cmd injection" },
    { name: "PyPI Package Release", category: "Security & Tooling", level: 90, icon: "Box", langColor: "#3775a9", desc: "Wheel building, setup.py / pyproject.toml, CI publishing" },
    { name: "CLI Tooling Architecture", category: "Security & Tooling", level: 94, icon: "Terminal", langColor: "#a855f7", desc: "Argparse, Rich terminal outputs, Caching engines" },

    { name: "AI Agents & LLM Pipelines", category: "AI & ML", level: 88, icon: "Cpu", langColor: "#10b981", desc: "Context chaining, Multi-modal prompting, Generative AI" },
    { name: "Computer Vision & ML", category: "AI & ML", level: 82, icon: "Shield", langColor: "#f59e0b", desc: "OpenCV, Object detection heuristics, Image feeds" },

    { name: "PostgreSQL & SQL", category: "Databases & Cloud", level: 88, icon: "Database", langColor: "#336791", desc: "Relational schemas, Prepared queries, Indexing" },
    { name: "MongoDB", category: "Databases & Cloud", level: 90, icon: "Database", langColor: "#47a248", desc: "Document modeling, Aggregation pipelines, Mongoose" },
    { name: "Docker & Containers", category: "Databases & Cloud", level: 84, icon: "Box", langColor: "#2496ed", desc: "Dockerfile, Compose, Container isolation" },
    { name: "Git & GitHub Actions", category: "Databases & Cloud", level: 95, icon: "GitBranch", langColor: "#f05032", desc: "CI/CD pipelines, Version control, Automation" }
  ],
  projectCategories: [
    "All",
    "DevTools & Security",
    "Full-Stack"
  ],
  projects: [
    {
      id: "vigilo",
      title: "Vigilo — Python Static Security Scanner",
      repoName: "Sanjiv215/VIGILO-Python-Package",
      category: "DevTools & Security",
      primaryLanguage: "Python",
      languageColor: "#3572A5",
      shortDescription: "A Python static security scanner focused on detecting CWE security vulnerabilities and code correctness issues.",
      fullDescription: "Vigilo is a high-speed Python static analysis and security scanning tool published on PyPI. It performs AST-based security analysis to detect CWE vulnerabilities (such as eval injection, SQL injection, insecure commands, and hardcoded credentials), repository scanning, caching, CI/release automation, and standalone executables.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python 3.12", "AST Engine", "CWE Scanner", "PyPI", "CLI Tooling", "CI/CD"],
      features: [
        "Published on PyPI: pip install vigilo",
        "CWE-based vulnerability detection rules",
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
      id: "pysentra",
      title: "PySentra — Python Diagnostic Engine",
      repoName: "Sanjiv215/PySentra",
      category: "DevTools & Security",
      primaryLanguage: "Python",
      languageColor: "#3572A5",
      shortDescription: "Lightweight Python static code analyzer and AST diagnostic utility under Apache 2.0.",
      fullDescription: "PySentra is an open-source static analysis utility for Python codebases that inspects abstract syntax trees to detect ambiguities, dead code paths, anti-patterns, and bad practices prior to runtime deployment.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "AST Analyzer", "CLI Tooling", "Apache 2.0"],
      features: [
        "Fast abstract syntax tree inspection",
        "Configurable diagnostic rule definitions",
        "Lightweight command-line interface",
        "Open-source Apache 2.0 license"
      ],
      liveUrl: "https://github.com/Sanjiv215/PySentra",
      githubUrl: "https://github.com/Sanjiv215/PySentra",
      badge: "Apache 2.0 Open Source",
      license: "Apache License 2.0"
    },
    {
      id: "iit-patna-erp",
      title: "IIT Patna Client ERP & Task Manager",
      repoName: "Sanjiv215/ERP_PORTAL",
      category: "Full-Stack",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "Enterprise Resource Planning (ERP) Portal and collaborative task management system engineered during IIT Patna internship.",
      fullDescription: "Engineered an ERP Portal for enterprise client workflows during Full-Stack internship at IIT Patna. Features role-based access control (RBAC), multi-user task management, automated notifications, and scalable REST API endpoints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tech: ["React 19", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
      features: [
        "Role-based access control (RBAC) authentication",
        "Enterprise task assignment & progress tracking boards",
        "Client database management and reporting tools",
        "Developed during IIT Patna Full-Stack Internship"
      ],
      liveUrl: "https://github.com/Sanjiv215/ERP_PORTAL",
      githubUrl: "https://github.com/Sanjiv215/ERP_PORTAL",
      badge: "IIT Patna Internship",
      license: "Proprietary / Client"
    },
    {
      id: "thewoodwise",
      title: "The WoodWise — Full-Stack E-Commerce",
      repoName: "Sanjiv215/TheWoodWise",
      category: "Full-Stack",
      primaryLanguage: "JavaScript",
      languageColor: "#f1e05a",
      shortDescription: "Full-stack furniture e-commerce platform with OTP authentication, cart/wishlist management, and checkout.",
      fullDescription: "The WoodWise is a full-stack furniture e-commerce web application built with React, Node.js, Express, and MongoDB. Features secure email OTP verification, session-token auth, product listing/filters/sorting, wishlist, and cart state.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Nodemailer", "Axios"],
      features: [
        "User signup and password recovery with Email OTP verification",
        "Product catalog with dynamic search, filters, and pagination",
        "Persistent cart and wishlist state management",
        "Secure REST API backend with session-token authentication"
      ],
      liveUrl: "https://github.com/Sanjiv215/TheWoodWise",
      githubUrl: "https://github.com/Sanjiv215/TheWoodWise",
      badge: "Full-Stack Platform",
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
      role: "Full-Stack Development Intern",
      company: "IIT Patna",
      period: "2026 – 2026",
      type: "Internship",
      description: "Worked on an ERP Portal for an enterprise client, contributing to both frontend and backend development. Architected role-based access control (RBAC), collaborative task manager boards, and high-throughput REST API endpoints.",
      skills: ["React", "JavaScript", "Node.js", "Express", "REST APIs", "ERP Systems"]
    },
    {
      role: "Frontend & Python Developer Intern",
      company: "Code Alpha",
      period: "2026 – 2026",
      type: "Internship",
      description: "Engineered responsive React web interfaces, implemented automated Python scripting pipelines for data processing, and optimized state management for web tools.",
      skills: ["React", "Python", "Automation Scripts", "Tailwind CSS", "State Management"]
    },
    {
      role: "B.Tech in Computer Science (AI & ML)",
      company: "University Institute of Technology",
      period: "2025 – 2029",
      type: "Education",
      description: "Specializing in Artificial Intelligence, Machine Learning algorithms, Static Code Analysis, Data Structures, and Scalable Software Systems.",
      skills: ["Data Structures & Algorithms", "Machine Learning", "Python", "C++", "System Design"]
    },
    {
      role: "Higher Secondary Certificate (HSC)",
      company: "Maharashtra State Board",
      period: "2023 – 2025",
      type: "Education",
      description: "Completed secondary education with distinction in Physics, Chemistry, and Mathematics.",
      skills: ["Mathematics", "Physics", "Computer Science Basics"]
    }
  ]
};
