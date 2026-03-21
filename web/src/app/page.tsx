import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero.tsx";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";


export default function Home() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <Hero />
      {/* Unified gradient wrapper — all sections share a continuous background */}
      <div className="bg-gradient-to-b from-purple-50 via-fuchsia-50/40 to-white">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
