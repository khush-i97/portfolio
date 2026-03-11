import HoverCard from "@/components/ui/HoverCard";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Arizona State University",
      years: "2023 - 2025",
      details: "Focus on ML, data systems, and applied analytics.",
      gpa: "GPA: —",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "—",
      years: "—",
      details: "Core CS + data structures, algorithms, systems.",
      gpa: "GPA: —",
    },
  ];

  const certs = [
    { title: "AWS Certified Machine Learning - Specialty", org: "AWS", year: "2023" },
    { title: "TensorFlow Developer Certificate", org: "Google", year: "2022" },
    { title: "Professional Data Scientist", org: "DataCamp", year: "2021" },
    { title: "Deep Learning Specialization", org: "Coursera - Andrew Ng", year: "2020" },
  ];

  return (
    <section id="education" className="bg-gradient-to-b from-fuchsia-50 to-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">
          Education
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        <h3 className="mt-12 text-3xl font-extrabold text-gray-900">
          Academic Background
        </h3>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {education.map((e) => (
            <HoverCard
              key={e.degree}
              className="p-8 text-white bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white/15 p-3">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold">{e.degree}</h4>
                  <p className="mt-1 text-yellow-300 font-semibold">{e.school}</p>
                  <p className="mt-3 text-white/90">{e.years}</p>
                  <p className="mt-6 text-white/90">{e.details}</p>
                  <div className="mt-6 inline-flex rounded-xl bg-white/15 px-4 py-2 font-semibold">
                    {e.gpa}
                  </div>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>

        <h3 className="mt-16 text-4xl font-extrabold text-gray-900">
          Certifications
        </h3>

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