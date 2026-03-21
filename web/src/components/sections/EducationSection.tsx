import HoverCard from "@/components/ui/HoverCard";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Arizona State University",
      years: "2024 - 2026",
      details: "Focus on ML, data systems, and applied analytics.",
      gpa: "3.8/4.0",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Savitribai Phule Pune University",
      years: "2020 - 2024",
      details: "Core CS + data structures, algorithms, systems.",
      gpa: "8.5/10.0",
    },
  ];

  const certs = [
    { title: "Complete SQL Bootcamp", org: "Udemy", year: "2026" },
    { title: "Design Thinking", org: "Udemy", year: "2026" },
    { title: "AI Model Development", org: "ASU", year: "2025" },
    { title: "Python", org: "Guvi", year: "2021" },
    { title: "Introduction to Cloud", org: "AWS", year: "2022" },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <div className="underline" />
        </div>

        <h3 className="mt-12 text-slate-900">Academic Background</h3>

        {/* IMPORTANT: items-stretch makes both cards the same height in the row */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 items-stretch">
          {education.map((e) => (
            <div
              key={e.degree}
              className="h-full p-5 md:p-8 text-white bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="rounded-xl bg-white/15 p-2 md:p-3 shrink-0">
                    <GraduationCap className="h-5 w-5 md:h-7 md:w-7" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-base md:text-2xl font-extrabold leading-tight line-clamp-2 min-h-[2.5rem] md:min-h-[3.6rem]">
                      {e.degree}
                    </h4>
                    <p className="mt-1 text-yellow-300 font-semibold text-sm md:text-base">{e.school}</p>
                    <p className="mt-1 md:mt-3 text-white/90 text-sm">{e.years}</p>
                  </div>
                </div>

                <p className="mt-4 md:mt-6 text-white/90 text-sm">{e.details}</p>

                <div className="mt-auto pt-5 md:pt-8">
                  <div className="inline-flex rounded-lg bg-white/15 px-3 md:px-4 py-1.5 md:py-2 text-sm font-semibold">
                    GPA: {e.gpa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-slate-900">Certifications</h3>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {certs.map((c) => (
            <HoverCard key={c.title} className="p-7">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 p-4 text-white">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{c.title}</h4>
                  <p className="mt-1 font-semibold text-fuchsia-600">{c.org}</p>
                  <p className="mt-1 text-gray-500">{c.year}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}