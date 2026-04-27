import React from 'react'
import "./Hero.css";

const RESUME_URL = "/Sanjiv-Resume.pdf";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-inner">

                <h2 className="hero-title">
                    Architecting Digital Experiences
                </h2>

                <h1 className="hero-name">
                    Sanjiv Prasad
                </h1>

                <p className="hero-subtitle">
                    Frontend Developer | BTech Student | React
                </p>

                <div className="hero-actions">
                    <a className="btn-primary" href="#projects">
                        View Projects →
                    </a>

                    <a className="btn-outline" href={RESUME_URL} download="Sanjiv-Resume.pdf">
                        Download Resume
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero
