import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

function Section({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="min-h-[70vh] px-6 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-gray-600">
          Placeholder content. We’ll design this section next.
        </p>
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

      <Section id="about" title="About" />
      <Section id="education" title="Education" />
      <Section id="skills" title="Skills" />
      <Section id="experience" title="Experience" />
      <Section id="projects" title="Projects" />
      <Section id="contact" title="Contact" />
    </>
  );
}