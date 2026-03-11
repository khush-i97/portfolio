"use client";

import { useEffect, useState } from "react";
import HoverCard from "@/components/ui/HoverCard";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  archived?: boolean;
  fork?: boolean;
};

const GH_USER = "khush-i97"; // <- your username
const MAX = 9;

async function fetchStarredViaGitHub(): Promise<Repo[]> {
  // direct client fetch (no auth): ok for dev & small scale
  const res = await fetch(`https://api.github.com/users/${GH_USER}/starred?per_page=100`);
  if (!res.ok) throw new Error(`GitHub error: ${res.status}`);
  return (await res.json()) as Repo[];
}

async function fetchStarredViaApi(): Promise<Repo[]> {
  // optional server proxy (safer for using token) - see server API code below
  const res = await fetch(`/api/starred?per_page=100`);
  if (!res.ok) throw new Error(`Proxy error: ${res.status}`);
  return (await res.json()) as Repo[];
}

export default function ProjectsSection({
  useProxy = false,
}: {
  useProxy?: boolean; // set true if you create the server proxy (recommended)
}) {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setError(null);
    setRepos(null);

    const loader = async () => {
      try {
        const data = useProxy ? await fetchStarredViaApi() : await fetchStarredViaGitHub();
        if (!mounted) return;
        const filtered = data.filter((r) => !r.fork && !r.archived).slice(0, MAX);
        setRepos(filtered);
      } catch (err: any) {
        console.error(err);
        if (!mounted) return;
        setError(err.message ?? "Failed to load projects");
        // try fallback to direct fetch if proxy fails and proxy was requested
        if (useProxy) {
          try {
            const fallback = await fetchStarredViaGitHub();
            if (!mounted) return;
            setRepos(fallback.filter((r) => !r.fork && !r.archived).slice(0, MAX));
            setError(null);
          } catch (e) {
            console.error("fallback failed", e);
          }
        }
      }
    };

    loader();
    return () => {
      mounted = false;
    };
  }, [useProxy]);

  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-fuchsia-600">Featured Projects</h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-fuchsia-600" />

        {/* Error */}
        {error && (
          <div className="mt-8 text-center text-sm text-red-600">
            Failed to load GitHub starred repos. {error}
          </div>
        )}

        {/* Skeleton while loading */}
        {repos === null && (
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-28 rounded-t-2xl bg-gray-200" />
                <div className="rounded-b-2xl bg-white p-6 shadow-md">
                  <div className="h-6 w-3/5 bg-gray-200 rounded" />
                  <div className="mt-4 h-4 w-full bg-gray-200 rounded" />
                  <div className="mt-6 flex gap-3">
                    <div className="h-8 w-16 bg-gray-200 rounded" />
                    <div className="h-8 w-16 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No starred repos */}
        {repos && repos.length === 0 && (
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-4">No starred projects found. Star repos on GitHub to feature them here.</p>
            <a
              href={`https://github.com/${GH_USER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 px-5 py-2 font-semibold text-fuchsia-700 hover:bg-fuchsia-50 transition"
            >
              <Github className="h-4 w-4" /> View profile on GitHub
            </a>
          </div>
        )}

        {/* Repos grid */}
        {repos && repos.length > 0 && (
          <>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {repos.map((r) => (
                <a
                  key={r.id}
                  href={`${r.html_url}#readme`}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <HoverCard className="h-full overflow-hidden relative">

  {/* Featured Ribbon */}
  {r.topics?.includes("portfolio-featured") && (
    <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
      Featured
    </div>
  )}

  <div className="h-28 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600" />

  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>

    <p className="mt-3 text-gray-600 line-clamp-3">
      {r.description ?? "No description yet."}
    </p>

    <div className="mt-4 flex items-center gap-4 text-sm text-gray-700">
      {/* Language Dot */}
      {r.language && (
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-fuchsia-500" />
          {r.language}
        </span>
      )}

      <span className="flex items-center gap-1">
        ⭐ {r.stargazers_count ?? 0}
      </span>

      <span className="flex items-center gap-1">
        🍴 {r.forks_count ?? 0}
      </span>
    </div>

    <div className="mt-5 flex items-center gap-5 text-sm font-semibold text-fuchsia-700">
      <span className="inline-flex items-center gap-2">
        Code
      </span>
      <span className="inline-flex items-center gap-2">
        Readme
      </span>
    </div>
  </div>
</HoverCard>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={`https://github.com/${GH_USER}?tab=stars`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 px-5 py-2 font-semibold text-fuchsia-700 hover:bg-fuchsia-50 transition"
              >
                <Github className="h-4 w-4" /> View starred on GitHub
              </a>
              <div className="mt-3 text-sm text-gray-500">
                Or <a className="underline" href={`https://github.com/${GH_USER}`} target="_blank" rel="noreferrer">view all repos</a>.
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}