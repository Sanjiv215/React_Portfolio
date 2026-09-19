import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import BackgroundCanvas from '../components/BackgroundCanvas';
import MenuBar from '../components/MacOS/MenuBar';
import Dock from '../components/MacOS/Dock';
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
      <div className="relative min-h-screen bg-[#08090a] text-zinc-100 selection:bg-white selection:text-black font-sans pb-24">
        {/* Subtle Canvas Particles */}
        <BackgroundCanvas />
        
        {/* macOS Top Menu Bar */}
        <MenuBar />

        {/* Desktop Main Content Canvas */}
        <main className="pt-8">
          <HeroSection />
          <AboutSection />
          <VigiloShowcase />
          <ProjectsSection />
          <SkillsSection />
          <InteractiveTerminal />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* macOS Bottom Dock */}
        <Dock />

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
