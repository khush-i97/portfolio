"use client";

import Reveal from "@/components/Reveal";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const USERNAME = "khush-i97";
const FEATURE_LIMIT = 6;

function langAccent(language: string | null) {
  const l = (language || "").toLowerCase();
  if (l.includes("python")) return "from-amber-200 to-orange-100";
  if (l.includes("typescript")) return "from-indigo-200 to-sky-100";
  if (l.includes("javascript")) return "from-yellow-200 to-amber-100";
  if (l.includes("java")) return "from-red-200 to-rose-100";
  if (l.includes("c++") || l.includes("c#")) return "from-slate-200 to-zinc-100";
  return "from-fuchsia-200 to-purple-100";
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      // starred repos (public)
      const res = await fetch(`https://api.github.com/users/${USERNAME}/starred?per_page=100`);
      const data = (await res.json()) as Repo[];
      if (!mounted) return;

      // You can change sorting if you want
      const sorted = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(sorted.slice(0, FEATURE_LIMIT));
    }

    load().catch(() => setRepos([]));
    return () => {
      mounted = false;
    };
  }, []);

  const isLoading = repos === null;

  const viewAllUrl = useMemo(() => `https://github.com/${USERNAME}?tab=stars`, []);

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <div className="underline" />
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading &&
              Array.from({ length: FEATURE_LIMIT }).map((_, i) => <ProjectSkeleton key={i} />)}

            {!isLoading &&
              (repos ?? []).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group card hover-lift overflow-hidden"
                >
                  {/* top accent (varies by language) */}
                  <div className={`h-12 w-full bg-gradient-to-r ${langAccent(repo.language)}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-slate-900 group-hover:text-fuchsia-700 transition">
                        {repo.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-fuchsia-700 transition" />
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      {repo.description || "No description yet."}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {repo.language && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {repo.language}
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={viewAllUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-fuchsia-200 px-5 py-2 text-sm font-semibold text-fuchsia-700 hover:bg-fuchsia-50 transition"
            >
              View all on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectSkeleton() {
  return (
    <div className="card overflow-hidden">
      <div className="h-12 w-full bg-slate-100 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-4 w-2/3 bg-slate-100 rounded animate-pulse" />
        <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
        <div className="h-3 w-5/6 bg-slate-100 rounded animate-pulse" />
        <div className="mt-2 flex gap-2">
          <div className="h-7 w-20 bg-slate-100 rounded-full animate-pulse" />
          <div className="h-7 w-16 bg-slate-100 rounded-full animate-pulse" />
          <div className="h-7 w-16 bg-slate-100 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}