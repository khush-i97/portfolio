"use client";

import SectionReveal from "@/components/SectionReveal";

type Exp = {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
};

const experience: Exp[] = [
  {
    role: "Data Engineer Intern",
    company: "Sigmoid Analytics",
    location: "Remote",
    date: "June 2025 — August 2025",
    bullets: [
      "Engineered scalable data processing microservices and refined SQL-driven workflows to enhance visibility into enterprise KPIs.",
      "Established data lineage documentation and standardized validation procedures to ensure high data integrity across client accounts.",
      "Automated reporting templates and scenario-based forecasting models, reducing manual reporting workload by 50%.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Pharmarack Technologies",
    location: "India",
    date: "December 2022 — April 2023",
    bullets: [
      "Optimized backend data pipelines for a healthcare supply chain platform, improving data retrieval speeds by 15%.",
      "Engineered predictive analytics modules processing sensitive transaction data with strict data governance compliance.",
      "Collaborated cross-functionally to resolve bottlenecks, reducing decision latency for resource allocation.",
    ],
  },
  {
    role: "CTO & Co-Founder",
    company: "LazyStuff",
    location: "India",
    date: "December 2021 — November 2022",
    bullets: [
      "Led budgeting and strategic planning for a B2C brand using Excel + surveys across 2,000+ students, improving repeat purchases by 15%.",
      "Built Excel dashboards to track revenue/expenses/inventory, reducing manual monthly planning effort by 40%.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <SectionReveal>
            <h2>Experience</h2>
            <div className="underline" />
          </SectionReveal>
        </div>

        <div className="mt-12 relative">
          {/* Center line (desktop), left line (mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500/60 via-purple-500/25 to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {experience.map((item, idx) => {
              const isLeft = idx % 2 === 0; // start LEFT

              return (
                <SectionReveal key={idx} delay={idx * 0.04}>
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute left-[7px] md:left-1/2 -translate-x-1/2 top-7 h-3 w-3 rounded-full bg-white ring-4 ring-fuchsia-500/30" />

                    <div className="md:grid md:grid-cols-2 md:gap-10">
                      {/* LEFT (desktop only) */}
                      <div className="hidden md:block">
                        {isLeft ? (
                          <div className="pr-10 flex justify-end">
                            <ExperienceCard item={item} />
                          </div>
                        ) : null}
                      </div>

                      {/* RIGHT (desktop only) */}
                      <div className="hidden md:block">
                        {!isLeft ? (
                          <div className="pl-10 flex justify-start">
                            <ExperienceCard item={item} />
                          </div>
                        ) : null}
                      </div>

                      {/* MOBILE (always stacked) */}
                      <div className="pl-10 md:hidden">
                        <ExperienceCard item={item} />
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item }: { item: Exp }) {
  return (
    <div
      className="
        card hover-lift
        w-full md:w-[440px] 
        p-6 md:p-6
      "
    >
      <p className="text-xs font-semibold text-fuchsia-700">
        {item.company} • {item.location}
      </p>

      <h3 className="mt-1 text-base md:text-lg font-bold text-slate-900">
        {item.role}
      </h3>

      <p className="mt-1 text-xs text-slate-500">{item.date}</p>

      {/* IMPORTANT: keep bullets LEFT-aligned always */}
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-500 shrink-0" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}