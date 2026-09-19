export const portfolioData = {
  personal: {
    name: "Sanjiv Prasad",
    handle: "Sanjiv215",
    roleTitle: "Python • AI • Full Stack • DevTools",
    tagline: "Python • AI • Full Stack • DevTools — Building Vigilo",
    roles: [
      "Python & DevTools Builder",
      "Full-Stack Software Engineer",
      "Creator of Vigilo (PyPI)",
      "AI Systems & Security Researcher"
    ],
    bio: "Python • AI • Full Stack • DevTools. Building Vigilo. Transitioned from fitness training into software development—bringing discipline, consistency, and a problem-solving mindset to every line of code.",
    story: "Before transitioning into software development, I worked as a fitness trainer, where I developed discipline, consistency, problem-solving skills, and a results-driven mindset. I now bring the same approach to technology: learn, build, improve, repeat.",
    location: "Bangalore, Karnataka, India",
    availability: "Available for Software Engineering Roles",
    email: "prasad.sanjiv@outlook.com",
    github: "https://github.com/Sanjiv215",
    linkedin: "https://www.linkedin.com/in/prasadsanjiv",
    resumeUrl: "/Sanjiv-Resume.pdf",
    heroCodeSnippet: `// Developer Profile @Sanjiv215
const engineer = {
  name: "Sanjiv Prasad",
  bio: "Python • AI • Full Stack • DevTools",
  building: "Vigilo (pip install vigilo)",
  education: "B.Tech CSE (AI & ML) @ UIT",
  internships: ["IIT Patna", "Code Alpha"],
  motto: "Build. Break. Fix. Repeat.",
  status: "🟢 Open for Opportunities"
};`
  },
  stats: [
    { label: "PyPI Package Stars", value: 4, suffix: "★" },
    { label: "Public Repositories", value: 16, suffix: "+" },
    { label: "Industry Internships", value: 2, suffix: " Roles" },
    { label: "Commitment", value: 100, suffix: "%" }
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
    "DevTools & Security",
    "Python & AI/ML",
    "Frontend",
    "Backend & Database",
    "Cloud & DevOps"
  ],
  skills: [
    { name: "Python 3 & FastAPI", category: "Python & AI/ML", level: 95, icon: "Cpu", langColor: "#3572A5" },
    { name: "Static Analysis & AST", category: "DevTools & Security", level: 92, icon: "Terminal", langColor: "#3572A5" },
    { name: "CWE Vulnerability Detection", category: "DevTools & Security", level: 88, icon: "Shield", langColor: "#e34c26" },
    { name: "React 19 & Vite", category: "Frontend", level: 94, icon: "Code2", langColor: "#61dafb" },
    { name: "Modern JavaScript (ES6+)", category: "Frontend", level: 95, icon: "FileCode", langColor: "#f1e05a" },
    { name: "Tailwind CSS v4", category: "Frontend", level: 96, icon: "Palette", langColor: "#38bdf8" },
    { name: "Node.js & Express", category: "Backend & Database", level: 90, icon: "Server", langColor: "#339933" },
    { name: "MongoDB & PostgreSQL", category: "Backend & Database", level: 88, icon: "Database", langColor: "#336791" },
    { name: "AI Agents & LLMs", category: "Python & AI/ML", level: 86, icon: "Cpu", langColor: "#3572A5" },
    { name: "Docker & Containers", category: "Cloud & DevOps", level: 84, icon: "Box", langColor: "#2496ed" },
    { name: "Git & GitHub CI Automation", category: "Cloud & DevOps", level: 95, icon: "GitBranch", langColor: "#f05032" },
    { name: "RESTful Architecture", category: "Backend & Database", level: 94, icon: "Network", langColor: "#6366f1" }
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
      tech: ["Python", "AST Parsing", "CWE Security Engine", "CLI Tooling", "PyPI", "CI/CD"],
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
      tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
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
  experiences: [
    {
      role: "Full-Stack Development Intern",
      company: "IIT Patna",
      period: "2025 – 2026",
      type: "Internship",
      description: "Worked on an ERP Portal for a client, contributing to both frontend and backend development. Architected role-based access control (RBAC), collaborative task manager boards, and high-throughput REST API endpoints.",
      skills: ["React", "JavaScript", "Node.js", "Express", "REST APIs", "ERP Systems"]
    },
    {
      role: "Frontend & Python Developer Intern",
      company: "Code Alpha",
      period: "2025 – 2025",
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
