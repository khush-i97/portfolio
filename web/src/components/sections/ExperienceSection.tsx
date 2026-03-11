export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Sigmoid Analytics",
      period: "June 2025 — August 2025",
      bullets: [
        "Engineered scalable data processing microservices for enterprise KPIs.",
        "Automated reporting workflows reducing manual work by 50%.",
        "Standardized validation procedures to ensure data integrity.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Pharmarack Technologies",
      period: "Dec 2022 — April 2023",
      bullets: [
        "Optimized backend data pipelines improving retrieval speed by 15%.",
        "Built predictive analytics modules with strict governance compliance.",
        "Reduced operational latency via performance optimization.",
      ],
    },
    {
      title: "CTO & Co-Founder",
      company: "LazyStuff",
      period: "Dec 2021 — Nov 2022",
      bullets: [
        "Led budgeting strategy using analytics from 2,000+ users.",
        "Built dashboards reducing planning effort by 40%.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">
          Experience
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        <div className="mt-16 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-10 border-l-4 border-fuchsia-600">
              <div className="absolute -left-3 top-2 h-6 w-6 rounded-full bg-fuchsia-600" />
              <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-fuchsia-600 font-semibold">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>

              <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}