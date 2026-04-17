import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1><a href="#">SANJIV PRASAD</a></h1>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <button>Resume</button>

        </nav>
    )
}

export default Navbar