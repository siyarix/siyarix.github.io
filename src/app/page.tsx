import Link from "next/link";
import {
  Shield,
  Cpu,
  Wrench,
  Brain,
  ArrowRight,
  GitFork,
  Terminal,
  Puzzle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "AI-Native Orchestration",
    description:
      "Translate natural language into precise, multi-tool security workflows. Supports 25+ AI providers with automatic failover, circuit breaker, and ensemble voting.",
  },
  {
    icon: Wrench,
    title: "110+ Tool Parsers",
    description:
      "Structured output extraction from nmap, nuclei, masscan, gobuster, metasploit, trivy, semgrep, and 100+ more security tools — all plug-and-play.",
  },
  {
    icon: Terminal,
    title: "4 Execution Modes",
    description:
      "Registry (offline-safe), Autonomous (goal-driven), Hybrid (AI-guided with human approval), and Interactive (full REPL with 54+ slash commands).",
  },
  {
    icon: Shield,
    title: "Robust Security Built-in",
    description:
      "Two-stage permission gate, AES-256-GCM credential store, SHA-256 chained audit log, DLP engine, stealth mode, and OPSEC controls.",
  },
  {
    icon: Puzzle,
    title: "Extensible Plugin System",
    description:
      "Dynamic plugin discovery, custom parser development, provider adapters, and a rich tool handler registry. Built for the community to extend.",
  },
];

const stats = [
  { label: "AI Providers", value: "25+" },
  { label: "Tool Parsers", value: "110+" },
  { label: "CLI Commands", value: "50+" },
  { label: "Test Files", value: "110+" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-300">
              <Cpu className="h-3.5 w-3.5" />
              v1.0.0 — Stable Release
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              An Open-Source AI{" "}
              <span className="gradient-text">Security</span> Orchestrator
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              A growing open-source project translating natural language security objectives into precise, multi-tool workflows.
              Describe what you want to accomplish — Siyarix handles the how.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://github.com/siyarix/siyarix"
                className="flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/20 transition-all duration-300 hover:bg-siyarix-500 hover:-translate-y-0.5 active:scale-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork className="h-4 w-4" />
                View on GitHub
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/install"
                className="gradient-border rounded-xl bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-98"
              >
                Install Now
              </Link>
              <Link
                href="https://mufthakherul.github.io/siyarix/"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:border-siyarix-500/30 hover:text-siyarix-300 hover:-translate-y-0.5 active:scale-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Full Documentation
              </Link>
            </div>
          </div>
          <div className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 glow">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3 text-xs text-slate-500">
              <Terminal className="h-3.5 w-3.5" />
              Quick Start
            </div>
            <pre className="mt-4 overflow-x-auto text-sm text-slate-300">
              <code>{`$ curl -fsSL https://siyarix.github.io/install.sh | bash
$ siyarix                          # Launch the onboarding wizard
$ siyarix scan quick example.com   # Run a quick port scan
$ siyarix run "enumerate services" # Natural language command
$ siyarix --mode offline run "scan target"  # Offline mode`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Built for the security community
            </h2>
            <p className="mt-4 text-slate-400">
              From reconnaissance to reporting — Siyarix unifies your security toolchain under a
              single, intelligent, open-source interface.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-siyarix-500/10">
                  <feature.icon className="h-5 w-5 text-siyarix-400" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-siyarix-900/30 via-surface to-accent/5 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to join the open-source security movement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Join the growing community of security professionals and researchers exploring AI-native orchestration.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://github.com/siyarix/siyarix"
                className="flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all duration-300 hover:bg-siyarix-500 hover:-translate-y-0.5 active:scale-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork className="h-4 w-4" />
                Get Started on GitHub
              </Link>
              <Link
                href="https://mufthakherul.github.io/siyarix/"
                className="rounded-xl border border-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-siyarix-300 hover:-translate-y-0.5 active:scale-98"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Documentation
              </Link>
              <Link
                href="/contributors"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-98"
              >
                Meet the Contributors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
