"use client";

export default function SkillsSection() {
  const skills = [
    { name: "Python", level: 95, color: "from-blue-500 to-blue-700" },
    { name: "SQL", level: 92, color: "from-purple-500 to-purple-700" },
    { name: "Spark / Big Data", level: 88, color: "from-red-500 to-red-600" },
    { name: "Kafka & Streaming", level: 85, color: "from-orange-400 to-orange-600" },
    { name: "Machine Learning", level: 90, color: "from-pink-500 to-fuchsia-600" },
  ];

  const tools = [
    "Airflow",
    "Databricks",
    "Snowflake",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
    "MLFlow",
    "TensorFlow",
    "PyTorch",
    "Grafana",
    "Prometheus",
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-fuchsia-50 to-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">
          Skills & Technologies
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        <div className="mt-12 space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-xl bg-white p-6 shadow-md">
              <div className="flex justify-between font-semibold">
                <span>{skill.name}</span>
                <span className="text-fuchsia-600">{skill.level}%</span>
              </div>
              <div className="mt-3 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-3xl font-bold text-gray-900">
          Tools & Frameworks
        </h3>

        <div className="mt-8 flex flex-wrap gap-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:scale-105 transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}