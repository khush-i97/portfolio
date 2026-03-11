import HoverCard from "@/components/ui/HoverCard";
import { Brain, Target, Sparkles } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      title: "Machine Learning",
      desc: "Building predictive models and AI solutions",
      icon: Brain,
      tint: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Data Analysis",
      desc: "Extracting insights from complex datasets",
      icon: Target,
      tint: "from-pink-500 to-rose-500",
    },
    {
      title: "Visualization",
      desc: "Creating compelling data stories",
      icon: Sparkles,
      tint: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">
          About Me
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-600">
          I’m passionate about transforming data into actionable insights—building
          systems, models, and dashboards that drive real decisions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <HoverCard key={c.title} className="p-8">
                <div
                  className={[
                    "h-16 w-16 rounded-2xl bg-gradient-to-br text-white",
                    "flex items-center justify-center shadow-sm",
                    c.tint,
                  ].join(" ")}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-gray-600">{c.desc}</p>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}