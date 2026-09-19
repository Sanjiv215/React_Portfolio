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
    bio: "B.Tech Computer Science (AI & ML) student & developer passionate about architecting scalable full-stack applications, static code analysis tooling, and AI-powered agents. Transitioned from fitness training into software development—bringing discipline, consistency, and a problem-solving mindset to every line of code.",
    story: "Before diving into software engineering, I worked as a fitness trainer where I developed intense discipline, consistency, and a results-oriented mindset. I now channel that exact drive into building real-world software, experimenting with AI systems, and creating open-source developer tools.",
    location: "Bangalore, Karnataka, India",
    availability: "Available for Software Engineering & Full-Stack Roles",
    email: "prasad.sanjiv@outlook.com",
    github: "https://github.com/Sanjiv215",
    linkedin: "https://linkedin.com/in/sanjiv-prasad",
    resumeUrl: "/Sanjiv-Resume.pdf",
    heroCodeSnippet: `// Developer Profile Configuration
const engineer = {
  name: "Sanjiv Prasad",
  focus: ["Full-Stack", "Python Security Tooling", "AI Agents"],
  flagshipPackage: "vigilo (pip install vigilo)",
  education: "B.Tech CSE (AI & ML) @ UIT",
  internships: ["IIT Patna", "Code Alpha"],
  mindset: "Build. Break. Fix. Repeat.",
  status: "🟢 Open for High-Impact Roles"
};`
  },
  stats: [
    { label: "Public Repositories", value: 16, suffix: "+" },
    { label: "PyPI Package Stars", value: 4, suffix: "★" },
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
    { name: "CWE Vulnerability Detection", category: "DevTools & Security", level: 88, icon: "Box" },
    { name: "React 19 & Next.js", category: "Frontend", level: 94, icon: "Code2" },
    { name: "Modern JavaScript (ES6+)", category: "Frontend", level: 95, icon: "FileCode" },
    { name: "Tailwind CSS v4", category: "Frontend", level: 96, icon: "Palette" },
    { name: "Node.js & Express", category: "Backend & Database", level: 90, icon: "Server" },
    { name: "PostgreSQL & MongoDB", category: "Backend & Database", level: 88, icon: "Database" },
    { name: "AI Agents & LLMs", category: "Python & AI/ML", level: 86, icon: "Cpu" },
    { name: "Docker & Containerization", category: "Cloud & DevOps", level: 84, icon: "Box" },
    { name: "Git & GitHub CI Automation", category: "Cloud & DevOps", level: 95, icon: "GitBranch" },
    { name: "RESTful Architecture", category: "Backend & Database", level: 94, icon: "Network" }
  ],
  projectCategories: [
    "All",
    "DevTools & Security",
    "AI & ML",
    "Full-Stack",
    "Frontend"
  ],
  projects: [
    {
      id: "vigilo",
      title: "Vigilo — Python Static Security Scanner",
      category: "DevTools & Security",
      shortDescription: "PyPI-published Python static security scanner detecting CWE vulnerabilities and code correctness issues.",
      fullDescription: "Vigilo is a high-speed Python static analysis and security scanning tool published on PyPI. It performs AST-based security analysis to detect CWE vulnerabilities (such as command injection, insecure deserialization, weak hashing, and hardcoded credentials), repository scanning, caching, and CI release automation.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "AST Parsing", "CWE Security Engine", "CLI Tooling", "PyPI", "CI/CD Automation"],
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
      id: "advait",
      title: "Advait — AI Agent for Yoga & Vision",
      category: "AI & ML",
      shortDescription: "Autonomous AI Agent for conversational Yoga posture guidance and generative image synthesis.",
      fullDescription: "Advait is an intelligent multi-modal AI agent built with Python, designed for real-time wellness conversations, yoga posture analysis, and automated generative image creation based on natural language prompts.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "AI Agents", "LLMs", "Image Generation", "FastAPI"],
      features: [
        "Conversational AI agent tailored for yoga and mindfulness",
        "Generative AI image synthesis pipelines",
        "Prompt engineering with context memory",
        "Asynchronous FastAPI microservice backend"
      ],
      liveUrl: "https://github.com/Sanjiv215/Advait",
      githubUrl: "https://github.com/Sanjiv215/Advait",
      badge: "AI Agent"
    },
    {
      id: "smartbuyai",
      title: "SmartBuyAI",
      category: "Full-Stack",
      shortDescription: "AI-powered real-time e-commerce price tracker and web analytics platform.",
      fullDescription: "SmartBuyAI empowers online shoppers by automatically scraping, comparing, and tracking product pricing across e-commerce platforms in real time. Features a glassmorphic interface, user wishlists, and asynchronous FastAPI backends.",
      image: "/images/smartbuyai.png",
      tech: ["React 19", "FastAPI", "Firebase", "Python", "Tailwind CSS"],
      features: [
        "Multi-vendor price scraping agent",
        "Firebase Auth & real-time wishlist state",
        "FastAPI high-speed REST endpoints",
        "Glassmorphic analytics dashboard"
      ],
      liveUrl: "https://smart-buy-bmqt.vercel.app/",
      githubUrl: "https://github.com/Sanjiv215/SmartBuy-AI",
      badge: "Live Web App"
    },
    {
      id: "iit-patna-erp",
      title: "IIT Patna Client ERP & Task Manager",
      category: "Full-Stack",
      shortDescription: "Enterprise ERP Portal and collaborative task management system engineered during IIT Patna internship.",
      fullDescription: "Engineered an ERP Portal for enterprise client workflows at IIT Patna. Features role-based access control (RBAC), multi-user task management, automated notifications, and scalable REST API endpoints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
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
      id: "pysentra",
      title: "PySentra — Python Code Diagnostic Engine",
      category: "DevTools & Security",
      shortDescription: "Lightweight Python static code analyzer and diagnostic tool under Apache 2.0.",
      fullDescription: "PySentra is a static analysis utility for Python codebases that quickly detects syntax ambiguities, dead code paths, and bad practices before runtime deployment.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "AST Analyzer", "CLI", "Apache 2.0"],
      features: [
        "Fast syntax tree inspection",
        "Custom rule definitions",
        "Open-source Apache 2.0 license"
      ],
      liveUrl: "https://github.com/Sanjiv215/PySentra",
      githubUrl: "https://github.com/Sanjiv215/PySentra",
      badge: "Apache 2.0 Open Source"
    },
    {
      id: "pothole-detector",
      title: "PotHole-Detector — Computer Vision ML",
      category: "AI & ML",
      shortDescription: "Computer vision and deep learning system for automated road hazard and pothole detection.",
      fullDescription: "Machine learning application utilizing computer vision algorithms to detect road surface irregularities and potholes from camera feeds, promoting road safety and municipal maintenance awareness.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
      tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      features: [
        "Image and video feed processing pipeline",
        "Real-time object classification and bounding boxes",
        "Surface damage severity heuristics"
      ],
      liveUrl: "https://github.com/Sanjiv215/PotHole-Detector",
      githubUrl: "https://github.com/Sanjiv215/PotHole-Detector",
      badge: "Computer Vision"
    },
    {
      id: "codek",
      title: "Codek Developer Platform",
      category: "Frontend",
      shortDescription: "High-performance developer portal with custom glassmorphism design systems.",
      fullDescription: "Codek is a lightweight, responsive developer portal designed for instant asset loading, code snippet organization, and real-time database queries.",
      image: "/images/codek.png",
      tech: ["JavaScript", "HTML5", "CSS3", "Firebase", "SQL"],
      features: [
        "Custom glassmorphism component system",
        "60fps smooth animations and transitions",
        "Real-time database synchronization"
      ],
      liveUrl: "https://codekdeployed.vercel.app",
      githubUrl: "https://github.com/Sanjiv215/Codek",
      badge: "Live Web App"
    },
    {
      id: "evently",
      title: "Evently — Modern Event Management",
      category: "Full-Stack",
      shortDescription: "Full-stack event organization, ticketing, and scheduling platform built with TypeScript.",
      fullDescription: "Evently provides event creators with seamless ticket booking, organizer dashboards, stripe checkout integrations, and categorized event exploration.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "MongoDB"],
      features: [
        "Interactive event search and filtering",
        "Secure checkout and user registration",
        "Event creation and ticketing dashboard"
      ],
      liveUrl: "https://github.com/Sanjiv215/Evently",
      githubUrl: "https://github.com/Sanjiv215/Evently",
      badge: "TypeScript"
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
