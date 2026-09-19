import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VigiloShowcase from '../components/VigiloShowcase';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import InteractiveTerminal from '../components/InteractiveTerminal';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-950 text-gray-100 selection:bg-cyan-500 selection:text-slate-950">
        <BackgroundCanvas />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <VigiloShowcase />
          <SkillsSection />
          <ProjectsSection />
          <InteractiveTerminal />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
