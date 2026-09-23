import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VigiloShowcase from '../components/VigiloShowcase';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import InteractiveTerminal from '../components/InteractiveTerminal';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-cyan-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Ambient Canvas & Mesh Aura */}
        <BackgroundCanvas />
        
        {/* Floating Capsule Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="pt-20 sm:pt-24 space-y-16 sm:space-y-28 pb-16">
          <HeroSection />
          <AboutSection />
          <VigiloShowcase />
          <ProjectsSection />
          <SkillsSection />
          <InteractiveTerminal />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Studio Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
