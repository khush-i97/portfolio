"use client";

import SectionReveal from "@/components/SectionReveal";
import { Code2, Database, BarChart3, Wrench, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  title: string;
  items: string[];
  accent: string;
  icon: LucideIcon;
};

const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["SQL", "Python", "Scala", "Go", "Java (basic)"],
    accent: "from-indigo-500 to-sky-500",
    icon: Code2,
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
    icon: Database,
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
    icon: BarChart3,
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
    icon: Wrench,
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
    icon: Brain,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <SectionReveal>
            <h2>Skills</h2>
            <div className="underline" />
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {skills.map((group, idx) => {
            const Icon = group.icon;
            return (
              <SectionReveal key={group.title} delay={idx * 0.04}>
                <div className="card hover-lift overflow-hidden flex flex-col h-full">
                  {/* Colored header with icon */}
                  <div
                    className={`relative h-14 md:h-20 shrink-0 bg-gradient-to-r ${group.accent} flex items-center px-4 md:px-6 gap-3`}
                  >
                    <div className="flex items-center justify-center h-7 w-7 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm md:text-base leading-tight drop-shadow">
                      {group.title}
                    </span>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
