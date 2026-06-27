import type { Metadata } from "next";
import { Users, Heart, Star, Globe, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Meet the open-source community contributors driving Siyarix forward. View core developers, git commits, and community profiles.",
  openGraph: {
    title: "Siyarix — Community Contributors",
    description: "Meet the developers and community members contributing to Siyarix.",
  },
};

interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const colors = [
  "from-siyarix-500 to-accent",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
];

export default async function ContributorsPage() {
  let contributors: GitHubContributor[] = [];
  
  try {
    const res = await fetch("https://api.github.com/repos/mufthakherul/siyarix/contributors", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      contributors = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
  }

  // Ensure there's a fallback if the API fails or returns empty
  if (!contributors || contributors.length === 0) {
    contributors = [
      {
        login: "mufthakherul",
        id: 1,
        avatar_url: "https://github.com/mufthakherul.png",
        html_url: "https://github.com/mufthakherul",
        contributions: 1,
      }
    ];
  }

  // Separate the top contributor (founder/featured) from the rest
  const featured = contributors[0];
  const rest = contributors.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-400">
              <Users className="h-3.5 w-3.5" />
              Open Source Community
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our <span className="gradient-text">Contributors</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Siyarix is built by a growing community of security researchers,
              developers, and cybersecurity practitioners. Every contribution —
              whether code, documentation, or ideas — helps make AI-native
              security operations accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Users, label: "Total Contributors", value: `${contributors.length}+` },
              { icon: Globe, label: "Reach", value: "Global" },
              { icon: Star, label: "First Commit", value: "2026" },
              { icon: GitFork, label: "Latest Release", value: "v1.0.0" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <stat.icon className="mx-auto h-5 w-5 text-siyarix-400" />
                <p className="mt-2 text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributor */}
      {featured && (
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-lg">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
                <div
                  className={cn(
                    "mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-siyarix-500 to-accent p-[3px]"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.avatar_url} alt={featured.login} className="h-full w-full rounded-full object-cover bg-black" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {featured.login}
                </h3>
                <p className="text-siyarix-400">PathMaker</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Architecting the future of AI-native cybersecurity
                  orchestration. Building Siyarix with a vision to make
                  intelligent security operations accessible to everyone.
                </p>
                <div className="mt-5 flex items-center justify-center gap-4 text-sm text-slate-400">
                  <span>{featured.contributions} contributions</span>
                  <span className="text-white/20">&bull;</span>
                  <Link
                    href={featured.html_url}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-siyarix-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitFork className="h-4 w-4" />
                    @{featured.login}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contributor Grid */}
      {rest.length > 0 && (
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Community Contributors
              </h2>
              <p className="mt-4 text-slate-400">
                Every contributor who has helped shape the Siyarix platform.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((contributor, index) => {
                const colorClass = colors[index % colors.length];
                return (
                  <div
                    key={contributor.login}
                    className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br p-[2px]",
                          colorClass
                        )}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={contributor.avatar_url} alt={contributor.login} className="h-full w-full rounded-full object-cover bg-black" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-semibold text-white">
                          {contributor.login}
                        </h3>
                        <p className="text-sm text-siyarix-400">
                          {contributor.contributions} contributions
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <GitFork className="h-3.5 w-3.5" />
                      <Link
                        href={contributor.html_url}
                        className="truncate text-slate-400 transition-colors hover:text-siyarix-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{contributor.login}
                      </Link>
                      <ExternalLink className="h-3 w-3 shrink-0 text-slate-600" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm text-red-400">
              <Heart className="h-3.5 w-3.5" />
              Join the Mission
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Become a Contributor
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Siyarix is open-source and community-driven. Whether you&apos;re a
              security researcher, developer, writer, or enthusiast — there&apos;s a
              place for you in this community.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://github.com/mufthakherul/siyarix/blob/main/CONTRIBUTING.md"
                className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="h-4 w-4" />
                Contribution Guide
              </Link>
              <Link
                href="https://github.com/mufthakherul/siyarix"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork className="h-4 w-4" />
                GitHub Repository
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
