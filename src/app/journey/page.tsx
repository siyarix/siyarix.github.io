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
  Terminal,
  Wrench,
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
      "Siyarix began as a private command-line experiment by the PathMaker. The initial focus was exploring whether natural language instructions could be parsed into deterministic command sequences, laying the groundwork for the core intent routing model.",
    icon: Code,
  },
  {
    date: "May 10–15",
    phase: "Genesis",
    title: "Core Repository Migration & First Commit",
    description:
      "The project was formalised and migrated from local workspaces into a dedicated private GitHub repository. On May 15, the first commit (abec71d) was recorded, establishing Siyarix as a package and setting up the CLI onboarding scaffolding.",
    icon: GitBranch,
  },
  {
    date: "May 16–20",
    phase: "Foundation",
    title: "Offline Interpreter & Parser Scaffolding",
    description:
      "An explosive sprint of 430+ commits. We designed the modular parser architecture, implemented initial threat routing logic, created indexable CLI templates, and registered the first core threat intelligence parsers (Amass, Subfinder, Shodan).",
    icon: Users,
  },
  {
    date: "May 21–31",
    phase: "Expansion",
    title: "Multi-Turn AgentLoop & SDK Integration",
    description:
      "We introduced the multi-turn AgentLoop module to allow direct LLM tool calling, added support for the OpenRouter adapter, and migrated the core LLM engines to the new google.genai SDK. Security enhancements included replacing default XML libraries with defusedxml to block XXE vulnerabilities.",
    icon: Rocket,
  },
  {
    date: "June 1–15",
    phase: "Local Autonomy",
    title: "Local LLM Orchestration & Llama.cpp",
    description:
      "Over 280 commits focused on local, offline autonomy. We added native llama.cpp and Ollama installation hooks, handled dynamic GGUF cache extractions, and compiled a comprehensive database containing 725 cybersecurity tools to expand offline discovery.",
    icon: Terminal,
  },
  {
    date: "June 16–23",
    phase: "Hardening",
    title: "Continuous Learning Memory & OpSec Guards",
    description:
      "Added the Jaccard-based dynamic learning memory module (learning_system.py) to auto-generate custom execution skills. Enhanced subprocess safety by disabling stdin streams, implemented thread-safe locks on the audit log chain, and introduced Tokyo Night, Sunset, and Forest console themes.",
    icon: Shield,
  },
  {
    date: "June 24–26",
    phase: "Stabilization",
    title: "SQLite Migration & Platform Portability",
    description:
      "Sprints focused on cross-platform portability. Stored settings and execution states were migrated from flat files to a persistent SQLite DB. Windows NT chmod no-ops were patched, and integration tests were synchronized with the new step-level execution outputs.",
    icon: Wrench,
  },
  {
    date: "June 27 (Today)",
    phase: "v1.0.0 Release",
    title: "Siyarix Goes Public!",
    description:
      "The Siyarix GitHub repository was officially transitioned from private to public! Siyarix launches its first stable v1.0.0 stable release, featuring over 1,200 commits of development history, and opens its doors to the global security community.",
    icon: Star,
  },
  {
    date: "Present",
    phase: "Future",
    title: "Sustainable Open Source",
    description:
      "Siyarix is now an actively growing public platform. The journey continues as we refine AI context engines, invite global contributions, and expand our modular security plugins (forensics, compliance, cloud SAST).",
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
