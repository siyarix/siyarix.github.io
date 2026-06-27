import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, Globe, Lock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Goals",
};

const pillars = [
  {
    icon: Target,
    title: "Universal Security Automation",
    progress: 51,
    description:
      "Make every security tool accessible through simple, natural language intents.",
    status:
      "Completed: 110+ parsers, offline registry, hybrid execution modes. In Progress: Extending coverage for cloud SAST frameworks.",
    color: "bg-siyarix-600",
  },
  {
    icon: Lock,
    title: "Air-Gapped & Offline Autonomy",
    progress: 45,
    description:
      "Ensure the orchestrator runs safely in offline environments without external LLM API dependencies.",
    status:
      "Completed: Ollama and llama.cpp auto-starters, GGUF caching, and 725+ local tools database. In Progress: Offline vector-based RAG search.",
    color: "bg-siyarix-500",
  },
  {
    icon: Shield,
    title: "Zero-Trust AI Architecture",
    progress: 40,
    description:
      "Build execution systems that are safe, sandboxed, and privacy-respecting by default.",
    status:
      "Completed: Two-stage permission gate, AES-256-GCM credentials encryption, and target-masking DLP engine. In Progress: Containerized sandbox runtimes.",
    color: "bg-siyarix-500",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning & Intent Mapping",
    progress: 45,
    description:
      "Enable the orchestrator to dynamically memorize successful workflows and build custom execution skills.",
    status:
      "Completed: Jaccard similarity confidence scoring engine and learning_system.py hooks. In Progress: Cross-session memory sync.",
    color: "bg-siyarix-400",
  },
  {
    icon: Heart,
    title: "Community-Driven Development",
    progress: 40,
    description:
      "Foster an open, collaborative ecosystem of security plugins, parsers, and custom model templates.",
    status:
      "Completed: Static website, live contributors board, public repository release. In Progress: Launching community parser hub.",
    color: "bg-siyarix-400",
  },
  {
    icon: Globe,
    title: "Cross-Platform Portability",
    progress: 55,
    description:
      "Run reliably across Linux, macOS, and Windows environments.",
    status:
      "Completed: Linux/macOS installers, Windows command compatibility layers, and Ruff lint validations. In Progress: PWA distribution packaging.",
    color: "bg-siyarix-500",
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
              Our Open-Eyed Dream
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Vision & <span className="gradient-text">Goals</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Siyarix began as a personal exploration to bridge the gap between human intent and machine execution in security. Our mission is to make intelligent security orchestration accessible to everyone, helping researchers, developers, and security practitioners run automated workflows transparently, safely, and collaboratively.
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
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                <p>
                  Our vision is built on a simple conviction: security tooling should support practitioners, not exhaust them. We believe that advanced security orchestration shouldn&apos;t be a privilege reserved only for large enterprises, nor should it require managing dozens of disconnected commands and API integrations manually.
                </p>
                <p>
                  We envision a collaborative, open-source future where anyone—from a solo security researcher to an independent developer—can describe their security objectives in clear natural language, and have them translated into precise, sandboxed multi-tool workflows.
                </p>
                <p>
                  Siyarix acts as a humble coordinator, bridging the gap between what you want to achieve and how the underlying tools perform the task, ensuring that safety, privacy, and user consent remain at the core of every operation.
                </p>
              </div>
              <div className="mt-6 border-l-2 border-accent pl-4">
                <p className="text-sm italic text-slate-400">
                  &ldquo;We aim to reduce the complexity of security tooling so that practitioners can focus on understanding and resolving threats, rather than struggling with configuration syntax.&rdquo;
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
