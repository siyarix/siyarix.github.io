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
  quarter: string;
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const milestones: Milestone[] = [
  {
    quarter: "Q1",
    year: "2024",
    title: "Initial Concept & Prototype",
    description:
      "Bare-metal prototype with basic nmap parsing proved the core thesis: natural language can orchestrate security tooling. The first 500 lines of Python became the foundation of everything that followed.",
    icon: History,
  },
  {
    quarter: "Q2",
    year: "2024",
    title: "Open-Source Release",
    description:
      "Siyarix went public on GitHub. The community began forming around the shared vision of AI-driven security automation. Early contributors shaped the parser architecture and CLI design.",
    icon: GitBranch,
  },
  {
    quarter: "Q3",
    year: "2024",
    title: "10+ AI Providers & Autonomous Mode",
    description:
      "Integrated providers across OpenAI, Anthropic, Google, and open-source models. Introduced autonomous mode — the platform's first self-directed execution engine capable of goal-driven security workflows.",
    icon: Rocket,
  },
  {
    quarter: "Q4",
    year: "2024",
    title: "50+ Tool Parsers & Compliance Engine",
    description:
      "Crossed 50 structured parsers for nmap, nuclei, masscan, gobuster, and dozens more. Launched the compliance assessment engine covering PCI-DSS, HIPAA, ISO 27001, and SOC 2. First enterprise adopters came onboard.",
    icon: Star,
  },
  {
    quarter: "Q1",
    year: "2025",
    title: "v2.0 — Swarm Multi-Agent Orchestration",
    description:
      "Architected a swarm-based multi-agent system enabling parallel intelligence across specialized agents. Surpassed 80 tool parsers. The orchestration layer became fully recursive and adaptive.",
    icon: Globe,
  },
  {
    quarter: "Q2",
    year: "2025",
    title: "Offline Mode & Deep Scan Engine",
    description:
      "Delivered fully air-gapped operation with the Registry execution mode. The deep scan engine brought multi-layered reconnaissance and a continuous learning system that improves results over time.",
    icon: Shield,
  },
  {
    quarter: "Q3",
    year: "2025",
    title: "REST API & Mobile Installers",
    description:
      "Previewed the REST API for headless integration. Shipped iOS and Android installers, extending Siyarix to mobile security workflows and on-the-go operations.",
    icon: Code,
  },
  {
    quarter: "Q4",
    year: "2025",
    title: "25+ AI Providers, 47 CI/CD Workflows",
    description:
      "Expanded to 25+ AI providers with automatic failover and ensemble voting. 47 CI/CD workflows hardened the delivery pipeline. Surpassed 110 test files with comprehensive coverage.",
    icon: Users,
  },
  {
    quarter: "H1",
    year: "2026",
    title: "v1.0.0 — Stable Release",
    description:
      "Moved to the siyarix organization. v1.0.0 marked the first stable release — four execution modes, 80+ parsers, enterprise compliance, and a thriving open-source community. The platform is production-ready.",
    icon: Shield,
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
              From a bold prototype to a production-grade AI cybersecurity platform
              — every milestone that shaped Siyarix.
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
                  key={`${milestone.year}-${milestone.quarter}`}
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
                      {milestone.quarter} {milestone.year}
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
