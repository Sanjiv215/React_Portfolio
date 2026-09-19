import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { FaGithub, FaEnvelope, FaFileDownload, FaArrowRight } from "react-icons/fa";

const RESUME_URL = `${import.meta.env.BASE_URL}Sanjiv-Resume.pdf`;

const ROLES = [
    "Full-Stack Developer",
    "React & UI Architect",
    "Python & FastAPI Developer",
    "Creative Problem Solver"
];

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fadeState, setFadeState] = useState("fade-in");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState("fade-out");
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
                setFadeState("fade-in");
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-background-grid" />
            <div className="hero-inner">
                <div className="hero-badge">
                    <span className="pulse-dot"></span> Available for Software Engineering Opportunities
                </div>

                <h2 className="hero-title">
                    Architecting Digital Experiences
                </h2>

                <h1 className="hero-name">
                    Sanjiv Prasad
                </h1>

                <p className="hero-subtitle">
                    Aspiring Software Engineer &amp; BTech Student specializing in{" "}
                    <span className={`hero-role-text ${fadeState}`}>
                        {ROLES[roleIndex]}
                    </span>
                </p>

                <div className="hero-actions">
                    <a className="btn-primary" href="#projects">
                        Explore Projects <FaArrowRight style={{ marginLeft: '8px' }} />
                    </a>

                    <a className="btn-outline" href={RESUME_URL} download="Sanjiv-Resume.pdf">
                        <FaFileDownload style={{ marginRight: '8px' }} /> Download Resume
                    </a>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com/Sanjiv215" target="_blank" rel="noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                    <a href="#contact" title="Email Contact">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
