import React from 'react'
import './Navbar.css'

const RESUME_URL = "/Sanjiv-Resume.pdf";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand"><a href="#home">SANJIV PRASAD</a></h1>
            <ul className="navbar-links">
                <li><a href="#home">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a className="navbar-button" href={RESUME_URL} target="_blank" rel="noreferrer">
                Resume
            </a>

        </nav>
    )
}

export default Navbar
