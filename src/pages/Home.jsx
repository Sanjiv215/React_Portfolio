import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Journey from "../components/Journey/Journey.jsx"
import Contact from "../components/Contact/Contact.jsx"



const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Journey />
            <Contact />

        </div>
    )
}

export default Home;
