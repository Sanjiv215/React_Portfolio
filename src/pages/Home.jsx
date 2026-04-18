import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Skills from "../components/Skills/Skills.jsx"
import Projects from "../components/Projects/Projects.jsx"
import Journey from "../components/Journey/Journey.jsx"
import Activity from "../components/Activity/Activity.jsx"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Journey />
            <Activity />
        </div>
    )
}

export default Home;
