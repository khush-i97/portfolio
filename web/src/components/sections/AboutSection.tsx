"use client";

import SectionReveal from "@/components/SectionReveal";
import { Brain, BarChart3, Sparkles, Zap, Globe, Coffee } from "lucide-react";

const highlights = [
  {
    title: "Machine Learning",
    desc: "Building predictive models — from time-series forecasting to computer vision — that turn raw data into decisions.",
    icon: Brain,
    tint: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Data Engineering",
    desc: "Designing scalable pipelines with Spark, Kafka, and Airflow that move data fast and reliably at scale.",
    icon: Zap,
    tint: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Analytics & Insights",
    desc: "Translating complex datasets into clear, compelling stories through Tableau, Power BI, and statistical modeling.",
    icon: BarChart3,
    tint: "from-amber-500 to-orange-500",
  },
];

const stats = [
  { value: "3.8", label: "GPA at ASU", sub: "MS Data Science" },
  { value: "3+", label: "Years Building", sub: "Data systems" },
  { value: "10+", label: "Projects", sub: "End-to-end" },
  { value: "5+", label: "Certifications", sub: "& counting" },
];

const currently = [
  { icon: Globe, text: "MS Data Science @ Arizona State University" },
  { icon: Coffee, text: "Building data pipelines & ML systems" },
  { icon: Sparkles, text: "Open to Data Engineering & ML Engineer roles" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <SectionReveal>
            <h2>About Me</h2>
            <div className="underline" />
          </SectionReveal>
        </div>

        {/* Hero bio */}
        <SectionReveal>
          <div className="mt-10 mx-auto max-w-3xl text-center">
            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              I&apos;m{" "}
              <span className="font-semibold text-fuchsia-700">Khushi Gangrade</span>
              {" "}— a Data Engineer & ML practitioner who loves the full journey from raw bytes to boardroom insights.
              I&apos;ve shipped pipelines processing millions of rows, trained models predicting real outcomes,
              and built dashboards that actually get used.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
              Whether it&apos;s wrangling messy data in Spark, orchestrating workflows in Airflow, or
              experimenting with PyTorch — I bring{" "}
              <span className="font-semibold text-slate-800">curiosity, rigor, and a bias for impact</span>{" "}
              to every problem.
            </p>
          </div>
        </SectionReveal>

        {/* Stats row */}
        <SectionReveal delay={0.05}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card p-3 md:p-5 text-center hover-lift"
              >
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm font-semibold text-slate-800">{s.label}</div>
                <div className="text-xs text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* What I do */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          {highlights.map((c, idx) => {
            const Icon = c.icon;
            return (
              <SectionReveal key={c.title} delay={idx * 0.06}>
                <div className="card hover-lift overflow-hidden flex flex-col h-full">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${c.tint}`}
                  />
                  <div className="p-4 md:p-7 flex flex-col flex-1">
                    <div
                      className={`h-9 w-9 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${c.tint} flex items-center justify-center shadow-sm`}
                    >
                      <Icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="mt-3 md:mt-5 text-base md:text-lg font-bold text-slate-900">{c.title}</h3>
                    <p className="mt-1 md:mt-2 text-xs md:text-sm text-slate-600 flex-1">{c.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Currently section */}
        <SectionReveal delay={0.1}>
          <div className="mt-12 card p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-600 mb-4">
              Currently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {currently.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-50">
                    <Icon className="h-4 w-4 text-fuchsia-600" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
