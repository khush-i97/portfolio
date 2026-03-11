import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

function Placeholder({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="min-h-[60vh] bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-gray-600">Next section coming next.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div id="top" />
      <Navbar />
      <Hero />

      <AboutSection />
      <EducationSection />
      <Placeholder id="skills" title="Skills" />
      <Placeholder id="experience" title="Experience" />
      <ProjectsSection />
      <Placeholder id="contact" title="Contact" />
    </>
  );
}