import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const RESUME_URL = `${import.meta.env.BASE_URL}Sanjiv-Resume.pdf`;

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const handleScroll = () => {
            const scrollY = window.scrollY;
            sections.forEach((section) => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 120;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">
                <a href="#home">SANJIV PRASAD</a>
            </h1>

            <button
                className="mobile-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle navigation"
            >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`navbar-links ${isMobileOpen ? 'active' : ''}`}>
                <li>
                    <a
                        href="#home"
                        className={activeSection === 'home' ? 'active-link' : ''}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        className={activeSection === 'skills' ? 'active-link' : ''}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={activeSection === 'projects' ? 'active-link' : ''}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#journey"
                        className={activeSection === 'journey' ? 'active-link' : ''}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Journey
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeSection === 'contact' ? 'active-link' : ''}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <a className="navbar-button" href={RESUME_URL} target="_blank" rel="noreferrer">
                Resume
            </a>
        </nav>
    );
}

export default Navbar;
