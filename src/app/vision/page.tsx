import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, BarChart3, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Goals",
};

const pillars = [
  {
    icon: Target,
    title: "Universal Security Automation",
    progress: 75,
    description:
      "Make every security tool accessible through natural language",
    status:
      "Majority of core tools integrated — CLI and registry modes stable.",
    color: "bg-siyarix-600",
  },
  {
    icon: Shield,
    title: "Zero-Trust AI Architecture",
    progress: 60,
    description:
      "Build AI systems that are safe, auditable, and privacy-respecting by default",
    status:
      "Two-stage permission gate and audit log shipping; full attestation in progress.",
    color: "bg-siyarix-500",
  },
  {
    icon: Heart,
    title: "Community-Driven Development",
    progress: 80,
    description:
      "Foster an open ecosystem of plugins, parsers, and providers",
    status:
      "Plugin discovery and provider adapters live; community contributions growing.",
    color: "bg-siyarix-400",
  },
  {
    icon: BarChart3,
    title: "Enterprise Readiness",
    progress: 55,
    description:
      "Achieve production-grade reliability, compliance, and support",
    status:
      "Compliance frameworks mapped; SSO, RBAC, and SLAs under active development.",
    color: "bg-siyarix-500",
  },
  {
    icon: Globe,
    title: "Cross-Platform Ubiquity",
    progress: 70,
    description:
      "Run anywhere — Linux, macOS, Windows, mobile, air-gapped",
    status:
      "Linux and macOS stable; Windows build and container images available.",
    color: "bg-siyarix-400",
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Eye className="h-3.5 w-3.5" />
              Our North Star
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vision & <span className="gradient-text">Goals</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Siyarix is on a mission to transform security operations from
              fragmented, tool-specific workflows into a unified,
              intelligence-driven discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 sm:p-12">
              <Eye className="mb-4 h-8 w-8 text-siyarix-400" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Our Vision
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                We envision a world where security professionals can describe
                their objectives in natural language and have them executed
                across any tool, any cloud, and any environment — autonomously,
                safely, and at scale. Siyarix bridges the gap between human
                intent and machine execution, making expert-level security
                operations accessible to every organization, regardless of team
                size or budget.
              </p>
              <div className="mt-6 border-l-2 border-accent pl-4">
                <p className="text-sm italic text-slate-400">
                  &ldquo;Security operations should be defined by strategy, not
                  by the friction of tooling.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Pillars */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Goal Pillars
            </h2>
            <p className="mt-4 text-slate-400">
              Every pillar represents a strategic commitment that guides our
              roadmap, architecture, and community engagement.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-siyarix-500/10">
                    <pillar.icon className="h-6 w-6 text-siyarix-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <span className="text-sm font-medium text-siyarix-400">
                        {pillar.progress}%
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full ${pillar.color} transition-all duration-700`}
                          style={{ width: `${pillar.progress}%` }}
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {pillar.description}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {pillar.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
