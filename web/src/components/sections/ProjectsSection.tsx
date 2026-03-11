import HoverCard from "@/components/ui/HoverCard";
import { ExternalLink, Github } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
  language: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const GH_USER = "khush-i97";
const MAX = 9;

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
    {
      // updates at most every 1 hour on Vercel
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return [];

  const repos = (await res.json()) as Repo[];

  return repos
    .filter((r) => !r.fork && !r.archived)
    .slice(0, MAX);
}

export default async function ProjectsSection() {
  const repos = await getRepos();

  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">
          Featured Projects
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {repos.map((r) => (
            <a
              key={r.id}
              href={`${r.html_url}#readme`}
              target="_blank"
              rel="noreferrer"
              className="block"
              aria-label={`Open ${r.name} README on GitHub`}
            >
              <HoverCard className="h-full overflow-hidden">
                <div className="h-28 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {r.description ?? "No description yet."}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                    {r.language && (
                      <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-fuchsia-700">
                        {r.language}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-5 text-sm font-semibold text-fuchsia-700">
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" /> Code
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Readme
                    </span>
                  </div>
                </div>
              </HoverCard>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 px-5 py-2 font-semibold text-fuchsia-700 hover:bg-fuchsia-50 transition"
          >
            <Github className="h-4 w-4" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}