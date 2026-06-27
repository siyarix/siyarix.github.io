import type { Metadata } from "next";
import {
  History,
  GitBranch,
  Rocket,
  Star,
  Globe,
  Shield,
  Code,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Trace the evolution of Siyarix from initial concept to a v1.0.0 stable release — a timeline of milestones that shaped the AI-native cybersecurity orchestration platform.",
};

interface Milestone {
  date: string;
  phase: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const milestones: Milestone[] = [
  {
    date: "Pre-May 2026",
    phase: "Conception",
    title: "The Personal Project Origin",
    description:
      "Siyarix began as a personal, private endeavor by the PathMaker. The primary goal was to explore how natural language planners and LLM reasoning loops could streamline tool executions for local security automation.",
    icon: Code,
  },
  {
    date: "May 10–15",
    phase: "Genesis",
    title: "Core Import & Private Setup",
    description:
      "The codebase was migrated from the PathMaker's personal project workspace into a dedicated Siyarix repository. The first formal commit was recorded, starting Siyarix as a structured open-source architecture project, though kept in a private repository for security testing and initial feedback.",
    icon: GitBranch,
  },
  {
    date: "May 15 – June 23",
    phase: "Development",
    title: "Core Engine, Parsers, & Security Hardening",
    description:
      "An intensive active development sprint. We designed Siyarix's modular plugin architecture, implemented over 110 structured parsers, developed the target masking DLP engine, and constructed both the offline Registry and Hybrid execution engines.",
    icon: Rocket,
  },
  {
    date: "June 24–26",
    phase: "Hardening",
    title: "SQLite Migration & Stabilization",
    description:
      "Sprints focused on system stabilization and multi-platform support. We migrated runtime state to a persistent SQLite DB, integrated the Deep Scan model, resolved Windows permission edge-cases, and synchronized our CLI test suite.",
    icon: Star,
  },
  {
    date: "June 27 (Today)",
    phase: "v1.0.0 Launch",
    title: "Stable Public Release",
    description:
      "Siyarix officially goes public! We published our GitHub repository to the open-source community alongside our first stable v1.0.0 stable release, enabling developers and researchers worldwide to collaborate on AI-native orchestration.",
    icon: Shield,
  },
  {
    date: "Present",
    phase: "Future",
    title: "Sustainable Open Source",
    description:
      "Siyarix is now an actively growing public platform. The journey continues as we refine AI context engines, invite global contributions, and expand out modular security plugins (forensics, compliance, cloud SAST).",
    icon: Globe,
  },
];

function TimelineDot({ position }: { position: "left" | "right" }) {
  return (
    <div
      className={cn(
        "absolute top-8 z-10 flex h-5 w-5 items-center justify-center",
        position === "left"
          ? "right-0 translate-x-1/2"
          : "left-0 -translate-x-1/2",
      )}
    >
      <div className="h-5 w-5 rounded-full bg-siyarix-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
      <div className="absolute h-2.5 w-2.5 rounded-full bg-siyarix-400" />
    </div>
  );
}

export default function JourneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-300">
              <History className="h-3.5 w-3.5" />
              Project Evolution
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our <span className="gradient-text">Journey</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              From an initial idea to a highly capable AI cybersecurity orchestrator
              — a rapid sprint of intense development that shaped Siyarix.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-siyarix-500/60 via-siyarix-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <div
                  key={`${milestone.phase}-${milestone.date}`}
                  className={cn(
                    "relative mb-12 pl-10 sm:mb-16 sm:w-1/2 sm:pl-0 lg:mb-20",
                    isLeft
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12",
                  )}
                >
                  {/* Dot — mobile (always left) */}
                  <div className="absolute left-2.5 top-7 z-10 flex h-3 w-3 items-center justify-center sm:hidden">
                    <div className="h-3 w-3 rounded-full bg-siyarix-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  </div>

                  {/* Dot — desktop alternating */}
                  <div
                    className={cn(
                      "absolute top-7 z-10 hidden h-4 w-4 sm:flex",
                      isLeft
                        ? "right-0 translate-x-1/2"
                        : "left-0 -translate-x-1/2",
                    )}
                  >
                    <div className="h-4 w-4 rounded-full bg-siyarix-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    <div className="absolute h-2 w-2 rounded-full bg-siyarix-400" />
                  </div>

                  {/* Year badge */}
                  <div
                    className={cn(
                      "mb-3 flex items-center gap-2",
                      isLeft
                        ? "sm:justify-end"
                        : "sm:justify-start",
                    )}
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-3 py-1 text-xs font-medium text-siyarix-300">
                      {milestone.date}, {milestone.phase}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04] sm:p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "hidden shrink-0 sm:flex",
                          isLeft ? "order-1" : "",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-lg bg-siyarix-500/10",
                          )}
                        >
                          <Icon className="h-5 w-5 text-siyarix-400" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white sm:text-lg">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-siyarix-900/30 via-surface to-accent/5 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Be Part of What&rsquo;s Next
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              The journey doesn&rsquo;t stop here. Join the community and help
              shape the future of AI-native cybersecurity orchestration.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/siyarix/siyarix"
                className="flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
              >
                <Users className="h-4 w-4" />
                Join on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
