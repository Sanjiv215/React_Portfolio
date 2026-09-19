import React, { useState } from 'react';
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup } from "react-icons/fa";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
    {
        id: "smartbuyai",
        title: "SmartBuyAI",
        category: "AI & Web Apps",
        description:
            "Comprehensive price comparison platform that uses AI and scraping agents to analyze prices across multiple e-commerce websites in real time.",
        fullDescription:
            "SmartBuyAI empowers online shoppers by automatically fetching, comparing, and tracking real-time product prices across major e-commerce platforms. Built with React for a dynamic frontend, Firebase for authentication & store management, and FastAPI backends for high-speed data fetching.",
        tech: ["React", "FastAPI", "Firebase", "Tailwind CSS", "Python"],
        features: [
            "Real-time multi-store price lookup",
            "Firebase Auth & Saved Wishlists",
            "FastAPI backend scraping service",
            "Responsive Glassmorphic UI"
        ],
        image: assetUrl("images/smartbuyai.png"),
        live: "https://smart-buy-bmqt.vercel.app/",
        code: "https://github.com/Sanjiv215/SmartBuy-AI",
    },
    {
        id: "codek",
        title: "Codek",
        category: "Frontend / UI",
        description:
            "High-performance interactive developer platform featuring custom design systems and optimized asset loading.",
        fullDescription:
            "Codek is a developer-focused platform designed with custom HTML5, CSS3, and JavaScript systems. It includes integrated Firebase databases and SQL queries for efficient data handling.",
        tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "SQL"],
        features: [
            "Custom lightweight UI design system",
            "Real-time database connectivity",
            "Optimized 60 FPS animations"
        ],
        image: assetUrl("images/codek.png"),
        live: "https://codekdeployed.vercel.app",
        code: "https://github.com/Sanjiv215/Codek",
    }
];

const CATEGORIES = ["All", "AI & Web Apps", "Frontend / UI"];

function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-header">
                <span className="section-kicker"><FaLayerGroup style={{ marginRight: '6px' }} /> Portfolio Showcase</span>
                <h2 className="projects-title">Featured Work</h2>
                <p className="projects-subtitle">
                    Hand-crafted web applications engineered for performance, aesthetic appeal, and scalable functionality.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="projects-tabs">
                {CATEGORIES.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-wrap" onClick={() => setSelectedProject(project)}>
                            <img src={project.image} alt={project.title} onError={(e) => { e.target.style.display = 'none'; }} />
                            <div className="project-overlay">
                                <span>Click for details</span>
                            </div>
                        </div>

                        <div className="project-content">
                            <span className="project-category-badge">{project.category}</span>
                            <h3 onClick={() => setSelectedProject(project)} className="clickable-title">
                                {project.title}
                            </h3>

                            <p>{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.live} target="_blank" rel="noreferrer" className="btn-link live">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>

                                <a href={project.code} target="_blank" rel="noreferrer" className="btn-link code">
                                    <FaGithub /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            <FaTimes />
                        </button>
                        <span className="project-category-badge">{selectedProject.category}</span>
                        <h2>{selectedProject.title}</h2>
                        <p className="modal-description">{selectedProject.fullDescription}</p>

                        <h4>Key Features</h4>
                        <ul className="modal-features">
                            {selectedProject.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                            ))}
                        </ul>

                        <h4>Technologies Used</h4>
                        <div className="project-tech modal-tech">
                            {selectedProject.tech.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>

                        <div className="modal-actions">
                            <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn-primary">
                                <FaExternalLinkAlt style={{ marginRight: '6px' }} /> Visit Live Site
                            </a>
                            <a href={selectedProject.code} target="_blank" rel="noreferrer" className="btn-outline">
                                <FaGithub style={{ marginRight: '6px' }} /> View Repository
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
