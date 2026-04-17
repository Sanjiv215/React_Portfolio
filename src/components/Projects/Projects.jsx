import React from 'react'
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "SmartBuyAI",
        description:
            "SmartBuyAI is a comprehensive browsing platform built with React and Firebase. It features a modern user interface, to compare prices on multiple e-commerce websites.",
        tech: ["React", "Firebase", "FastAPI"],
        image: "/images/smartbuyai.png",
        live: "https://smart-buy-bmqt.vercel.app/",
        code: "https://github.com/Sanjiv215/SmartBuy-AI",
    },
    {
        title: "Codek",
        description:
            "High-performance portfolio featuring custom design systems and optimized asset loading.",
        tech: ["HTML", "CSS", "Javasccript", "Firebase", "SQL"],
        image: "/images/codek.png",
        live: "https://codekdeployed.vercel.app",
        code: "https://github.com/Sanjiv215/Codek",
    }

];

function Projects() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtitle">
                Selected works that showcase technical expertise and design sensibility
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.live} target="_blank">
                                    <FaExternalLinkAlt /> Live
                                </a>

                                <a href={project.code} target="_blank">
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;