"use client";

import SectionReveal from "@/components/SectionReveal";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
};

const USERNAME = "khush-i97";
const LIMIT = 6;

function langAccent(language: string | null) {
  const l = (language || "").toLowerCase();
  if (l.includes("python")) return "from-emerald-500 to-cyan-500";
  if (l.includes("typescript")) return "from-sky-500 to-indigo-500";
  if (l.includes("javascript")) return "from-yellow-400 to-orange-500";
  if (l.includes("java")) return "from-orange-500 to-rose-500";
  if (l.includes("go")) return "from-cyan-500 to-sky-500";
  if (l.includes("scala")) return "from-red-500 to-orange-500";
  if (l.includes("jupyter")) return "from-fuchsia-500 to-purple-600";
  return "from-fuchsia-500 to-purple-600";
}

function langDot(language: string | null) {
  const l = (language || "").toLowerCase();
  if (l.includes("python")) return "bg-emerald-500";
  if (l.includes("typescript")) return "bg-sky-500";
  if (l.includes("javascript")) return "bg-yellow-400";
  if (l.includes("java")) return "bg-orange-500";
  if (l.includes("go")) return "bg-cyan-500";
  if (l.includes("scala")) return "bg-red-500";
  if (l.includes("jupyter")) return "bg-fuchsia-500";
  return "bg-fuchsia-500";
}

type ApiResponse =
  | { ok: true; repos: Repo[] }
  | { ok: false; error: string };

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      const res = await fetch("/api/projects");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = (await res.json()) as any;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }

      if (mounted) setRepos((data as ApiResponse & { ok: true }).repos);
    }

    load().catch((e) => {
      if (!mounted) return;
      setRepos([]);
      setError(e instanceof Error ? e.message : "Failed to load projects.");
    });

    return () => {
      mounted = false;
    };
  }, []);

  const isLoading = repos === null;

  const viewAllUrl = useMemo(() => `https://github.com/${USERNAME}?tab=repositories`, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <SectionReveal>
            <h2>Featured Projects</h2>
            <div className="underline" />
          </SectionReveal>
        </div>

        <SectionReveal>
          {error ? (
            <p className="mt-6 text-sm text-red-600">{error}</p>
          ) : null}

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {isLoading &&
              Array.from({ length: LIMIT }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))}

            {!isLoading &&
              (repos ?? []).map((r, idx) => (
                <SectionReveal key={r.id} delay={idx * 0.03}>
                  <a
                    href={`${r.html_url}#readme`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col h-full card hover-lift overflow-hidden"
                    aria-label={`Open ${r.name} on GitHub`}
                  >
                    <div className={`h-20 shrink-0 bg-gradient-to-br ${langAccent(r.language)}`} />

                    <div className="flex flex-col flex-1 p-4 md:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-fuchsia-700 transition">
                          {r.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-fuchsia-700 transition" />
                      </div>

                      <p className="mt-2 text-sm text-slate-600 flex-1">
                        {r.description ?? "No description yet."}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                          <span className={`h-2 w-2 rounded-full ${langDot(r.language)}`} />
                          {r.language ?? "Other"}
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                          <Star className="h-3.5 w-3.5" /> {r.stargazers_count ?? 0}
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                          <GitFork className="h-3.5 w-3.5" /> {r.forks_count ?? 0}
                        </span>
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </div>
                    </div>
                  </a>
                </SectionReveal>
              ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={viewAllUrl}
              target="_blank"
              rel="noreferrer"
              className="hover-lift inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white px-6 py-3 text-sm font-semibold text-fuchsia-700"
            >
              <Github className="h-5 w-5" />
              View all on GitHub
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function ProjectSkeleton() {
  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="h-20 w-full bg-slate-100 animate-pulse shrink-0" />
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <div className="h-4 w-2/3 bg-slate-100 rounded animate-pulse" />
        <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
        <div className="h-3 w-5/6 bg-slate-100 rounded animate-pulse flex-1" />
        <div className="mt-2 flex gap-2">
          <div className="h-7 w-24 bg-slate-100 rounded-full animate-pulse" />
          <div className="h-7 w-16 bg-slate-100 rounded-full animate-pulse" />
          <div className="h-7 w-16 bg-slate-100 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
