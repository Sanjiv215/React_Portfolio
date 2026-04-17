import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Journey from "../components/Journey/Journey"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Journey />
        </div>
    )
}

export default Home;