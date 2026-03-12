"use client";

import SectionReveal from "@/components/SectionReveal";

const skills = [
  {
    title: "Programming Languages",
    items: ["SQL", "Python", "Scala", "Go", "Java (basic)"],
    accent: "from-indigo-500 to-sky-500",
  },
  {
    title: "Data Engineering",
    items: [
      "Spark",
      "Hadoop",
      "Kafka",
      "Airflow",
      "Databricks",
      "Snowflake",
      "ETL",
      "Docker",
      "Kubernetes",
    ],
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Analytics & Visualization",
    items: [
      "Statistical Modeling",
      "Hypothesis Testing",
      "Tableau",
      "Power BI",
      "Excel",
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Tools & Databases",
    items: [
      "AWS",
      "Git",
      "REST API",
      "NoSQL",
      "MySQL",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Qlik",
      "MS Access",
    ],
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "AI / ML",
    items: [
      "Time-Series Forecasting",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "MLFlow",
      "Computer Vision",
      "NLP",
    ],
    accent: "from-rose-500 to-pink-600",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <SectionReveal>
            <h2>Skills</h2>
            <div className="underline" />
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <SectionReveal key={group.title} delay={idx * 0.04}>
              <div className="card hover-lift overflow-hidden">
                <div className={`h-12 bg-gradient-to-r ${group.accent}`} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}