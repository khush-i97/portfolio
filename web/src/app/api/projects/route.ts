import { NextResponse } from "next/server";
import { requireEnv } from "@/lib/env";

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

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const username = requireEnv("GITHUB_USERNAME");
    const token = process.env.GITHUB_TOKEN; // optional

    const res = await fetch(
      `https://api.github.com/users/${username}/starred?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          "X-GitHub-Api-Version": "2026-03-10",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `GitHub error ${res.status}` },
        { status: 502 }
      );
    }

    const data = (await res.json()) as Repo[];

    const filtered = data
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6);

    return NextResponse.json({ ok: true, repos: filtered });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error fetching repos." },
      { status: 500 }
    );
  }
}