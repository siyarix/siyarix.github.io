"use client";

import { Users, Heart, Star, Globe, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Contributor {
  name: string;
  username: string;
  role: string;
  color: string;
  featured?: boolean;
}

const contributors: Contributor[] = [
  {
    name: "MD Mufthakherul Islam Miraz",
    username: "mufthakherul",
    role: "Founder & Lead Developer",
    color: "from-siyarix-500 to-accent",
    featured: true,
  },
  {
    name: "Siyarix Bot",
    username: "siyarix-bot",
    role: "Core Infrastructure",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Alex Rivera",
    username: "security-contributor-1",
    role: "Security Research",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Jamie Chen",
    username: "parser-enthusiast",
    role: "Parser Specialist",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Sam Taylor",
    username: "docs-writer-42",
    role: "Documentation",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Priya Sharma",
    username: "ai-integrator",
    role: "Provider Integration",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Chris Miller",
    username: "test-automator",
    role: "Testing & QA",
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Morgan Lee",
    username: "code-reviewer-7",
    role: "Core Developer",
    color: "from-lime-500 to-green-600",
  },
  {
    name: "Taylor Kim",
    username: "plugin-dev",
    role: "Plugin Architecture",
    color: "from-red-500 to-pink-600",
  },
  {
    name: "Jordan Blake",
    username: "ui-designer-xyz",
    role: "Frontend & Design",
    color: "from-sky-500 to-cyan-600",
  },
  {
    name: "Casey Nguyen",
    username: "security-auditor",
    role: "Security Audit",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Riley Patel",
    username: "perf-optimizer",
    role: "Performance",
    color: "from-teal-400 to-emerald-600",
  },
  {
    name: "Avery Thompson",
    username: "community-mgr",
    role: "Community",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Drew Martinez",
    username: "release-eng",
    role: "Release Engineering",
    color: "from-blue-400 to-indigo-600",
  },
  {
    name: "Quinn Johnson",
    username: "database-expert",
    role: "Database Systems",
    color: "from-green-400 to-lime-600",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function ContributorsPage() {
  const featured = contributors.find((c) => c.featured);
  const rest = contributors.filter((c) => !c.featured);

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
              Siyarix is built by a global community of security researchers,
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
              { icon: Users, label: "Total Contributors", value: "15+" },
              { icon: Globe, label: "Countries", value: "5+" },
              { icon: Star, label: "First Commit", value: "2024" },
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
                    "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br",
                    featured.color
                  )}
                >
                  <span className="text-3xl font-bold text-white">
                    {getInitials(featured.name)}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {featured.name}
                </h3>
                <p className="text-siyarix-400">{featured.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Architecting the future of AI-native cybersecurity
                  orchestration. Building Siyarix with a vision to make
                  intelligent security operations accessible to everyone.
                </p>
                <Link
                  href={`https://github.com/${featured.username}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-siyarix-400"
                >
                  <GitFork className="h-4 w-4" />
                  @{featured.username}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contributor Grid */}
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
            {rest.map((contributor) => (
              <div
                key={contributor.username}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br",
                      contributor.color
                    )}
                  >
                    <span className="text-sm font-bold text-white">
                      {getInitials(contributor.name)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-white">
                      {contributor.name}
                    </h3>
                    <p className="text-sm text-siyarix-400">
                      {contributor.role}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <GitFork className="h-3.5 w-3.5" />
                  <Link
                    href={`https://github.com/${contributor.username}`}
                    className="truncate text-slate-400 transition-colors hover:text-siyarix-400"
                  >
                    @{contributor.username}
                  </Link>
                  <ExternalLink className="h-3 w-3 shrink-0 text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                href="https://github.com/siyarix/siyarix/blob/main/CONTRIBUTING.md"
                className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
              >
                <Heart className="h-4 w-4" />
                Contribution Guide
              </Link>
              <Link
                href="https://github.com/siyarix/siyarix"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
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
