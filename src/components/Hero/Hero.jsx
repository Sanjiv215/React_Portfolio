import React from 'react'
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
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
                    <button className="btn-primary">
                        View Projects →
                    </button>

                    <button className="btn-outline">
                        Download Resume
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero