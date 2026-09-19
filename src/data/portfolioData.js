export const portfolioData = {
  personal: {
    name: "Sanjiv Prasad",
    roleTitle: "Full-Stack Engineer & DevTools Builder",
    roles: [
      "Python & DevTools Builder",
      "Full-Stack Software Engineer",
      "Creator of Vigilo (PyPI)",
      "AI Systems & Security Researcher"
    ],
    bio: "B.Tech Computer Science (AI & ML) student & software developer building high-performance full-stack applications, static code analysis tooling, and scalable systems. Transitioned from fitness training into software engineering—bringing relentless discipline, consistency, and precision to every architecture.",
    story: "Before diving into software engineering, I worked as a fitness trainer where I developed intense discipline, consistency, and a results-oriented mindset. I now channel that exact drive into building real-world software, experimenting with AI systems, and creating open-source developer tools.",
    location: "Bangalore, Karnataka, India",
    availability: "Available for Software Engineering Roles",
    email: "prasad.sanjiv@outlook.com",
    github: "https://github.com/Sanjiv215",
    linkedin: "https://linkedin.com/in/sanjiv-prasad",
    resumeUrl: "/Sanjiv-Resume.pdf",
    heroCodeSnippet: `// Engineer Profile
const developer = {
  name: "Sanjiv Prasad",
  focus: ["DevTools & Security", "Full-Stack Web", "AI Systems"],
  flagshipPackage: "vigilo (pip install vigilo)",
  education: "B.Tech CSE (AI & ML) @ UIT",
  internships: ["IIT Patna", "Code Alpha"],
  mindset: "Build. Break. Fix. Repeat.",
  status: "🟢 Open for High-Impact Roles"
};`
  },
  stats: [
    { label: "PyPI Package Stars", value: 4, suffix: "★" },
    { label: "Public Repositories", value: 16, suffix: "+" },
    { label: "Industry Internships", value: 2, suffix: " Roles" },
    { label: "Open Source Mindset", value: 100, suffix: "%" }
  ],
  values: [
    {
      title: "Real-World Engineering",
      description: "Learning and mastering software by building production-grade tools, static analyzers, and distributed web portals rather than passive tutorials.",
      icon: "Layers"
    },
    {
      title: "Discipline & Consistency",
      description: "Carrying forward the relentless discipline of fitness training into rigorous architecture, clean codebases, and continuous improvement cycles.",
      icon: "Zap"
    },
    {
      title: "Security & Tooling First",
      description: "Creating developer tools, CWE vulnerability scanners, and automated linting pipelines to make software safer and development faster.",
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
    { name: "Python 3 & FastAPI", category: "Python & AI/ML", level: 95, icon: "Cpu" },
    { name: "Static Analysis & AST", category: "DevTools & Security", level: 92, icon: "Terminal" },
    { name: "CWE Vulnerability Detection", category: "DevTools & Security", level: 88, icon: "Shield" },
    { name: "React 19 & Vite", category: "Frontend", level: 94, icon: "Code2" },
    { name: "Modern JavaScript (ES6+)", category: "Frontend", level: 95, icon: "FileCode" },
    { name: "Tailwind CSS v4", category: "Frontend", level: 96, icon: "Palette" },
    { name: "Node.js & Express", category: "Backend & Database", level: 90, icon: "Server" },
    { name: "MongoDB & PostgreSQL", category: "Backend & Database", level: 88, icon: "Database" },
    { name: "AI Agents & LLMs", category: "Python & AI/ML", level: 86, icon: "Cpu" },
    { name: "Docker & Containers", category: "Cloud & DevOps", level: 84, icon: "Box" },
    { name: "Git & GitHub Actions", category: "Cloud & DevOps", level: 95, icon: "GitBranch" },
    { name: "RESTful Architecture", category: "Backend & Database", level: 94, icon: "Network" }
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
      category: "DevTools & Security",
      shortDescription: "PyPI-published Python static security scanner detecting CWE vulnerabilities and code correctness issues.",
      fullDescription: "Vigilo is a high-speed Python static analysis and security scanning tool published on PyPI. It performs AST-based security analysis to detect CWE vulnerabilities (such as command injection, insecure deserialization, weak hashing, and hardcoded credentials), repository scanning, caching, and CI release automation.",
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
      badge: "PyPI Package • 4★"
    },
    {
      id: "pysentra",
      title: "PySentra — Python Code Diagnostic Engine",
      category: "DevTools & Security",
      shortDescription: "Lightweight Python static code analyzer and diagnostic tool under Apache 2.0.",
      fullDescription: "PySentra is an open-source static analysis utility for Python codebases that inspects syntax trees to detect ambiguities, dead code paths, anti-patterns, and bad practices prior to deployment.",
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
      badge: "Apache 2.0 Open Source"
    },
    {
      id: "iit-patna-erp",
      title: "IIT Patna Client ERP & Task Manager",
      category: "Full-Stack",
      shortDescription: "Enterprise ERP Portal and collaborative task management system engineered during IIT Patna internship.",
      fullDescription: "Engineered an ERP Portal for enterprise client workflows at IIT Patna. Features role-based access control (RBAC), multi-user task management, automated notifications, and scalable REST API endpoints.",
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
      badge: "IIT Patna Internship"
    },
    {
      id: "thewoodwise",
      title: "The WoodWise — Full-Stack E-Commerce",
      category: "Full-Stack",
      shortDescription: "Full-stack furniture e-commerce platform with OTP authentication, cart/wishlist management, and checkout.",
      fullDescription: "The WoodWise is a modern full-stack web application built with React, Node.js, Express, and MongoDB. Features secure email OTP verification, session-token auth, comprehensive product search/filtering, wishlist and cart state, and order history.",
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
      badge: "Full-Stack Platform"
    }
  ],
  experiences: [
    {
      role: "Full-Stack Development Intern",
      company: "IIT Patna",
      period: "2025 – 2026",
      type: "Internship",
      description: "Engineered an Enterprise Resource Planning (ERP) Portal and collaborative task manager for enterprise clients. Architected frontend React interfaces and backend REST API services, implementing role-based access control (RBAC) and high-throughput database queries.",
      skills: ["React", "JavaScript", "Node.js", "Express", "REST APIs", "ERP Systems"]
    },
    {
      role: "Frontend & Python Developer Intern",
      company: "Code Alpha",
      period: "2025 – 2025",
      type: "Internship",
      description: "Developed responsive React web interfaces, implemented automated Python scripting pipelines for data processing, and optimized state management for web tools.",
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
