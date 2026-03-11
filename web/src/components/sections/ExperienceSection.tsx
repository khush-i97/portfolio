"use client";

import Reveal from "@/components/Reveal";

type Exp = {
  role: string;
  company: string;
  date: string;
  bullets: string[];
};

const experience: Exp[] = [
  {
    role: "Data Engineer Intern",
    company: "Sigmoid Analytics",
    date: "2025 – Present",
    bullets: [
      "Built/optimized data pipelines and analytics workflows.",
      "Worked with cloud + warehouse patterns and production data hygiene.",
      "Collaborated with stakeholders to deliver measurable improvements.",
    ],
  },
  {
    role: "Graduate Student",
    company: "Arizona State University",
    date: "2023 – 2025",
    bullets: [
      "Projects in data processing at scale, graph processing, ML systems.",
      "Hands-on work with Kafka, Neo4j, Docker/K8s patterns.",
    ],
  },
  {
    role: "Projects (Selected)",
    company: "OpenMonitor / WeatherNova / CityPulse",
    date: "2024 – 2025",
    bullets: [
      "Computer vision monitoring + alerts, weather analysis with satellite data.",
      "Smart-city analytics + predictive pipelines.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <div className="underline" />
        </div>

        <Reveal className="mt-14 relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-300 via-purple-200 to-transparent md:block" />

          <div className="space-y-10 md:space-y-14">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0; // start LEFT
              return (
                <div key={i} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* Dot */}
                  <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
                    <div className="h-4 w-4 rounded-full bg-white ring-4 ring-fuchsia-300" />
                  </div>

                  {/* Left column */}
                  <div className={isLeft ? "md:pr-10" : "md:pr-10 md:opacity-0 md:pointer-events-none"}>
                    {isLeft && <ExperienceCard item={item} align="right" />}
                  </div>

                  {/* Right column */}
                  <div className={!isLeft ? "md:pl-10" : "md:pl-10 md:opacity-0 md:pointer-events-none"}>
                    {!isLeft && <ExperienceCard item={item} align="left" />}
                  </div>

                  {/* Mobile (stack) */}
                  <div className="md:hidden">
                    <ExperienceCard item={item} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  align,
}: {
  item: Exp;
  align: "left" | "right";
}) {
  return (
    <div className={`card hover-lift p-6 md:p-7 ${align === "right" ? "md:text-right" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className={align === "right" ? "md:ml-auto" : ""}>
          <p className="text-xs font-semibold text-fuchsia-700">{item.company}</p>
          <h3 className="mt-1 text-slate-900">{item.role}</h3>
          <p className="mt-1 text-xs text-slate-500">{item.date}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {item.bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}