"use client";

import { useState } from "react";
import {
  Route,
  ArrowRight,
  Clock,
  Sparkles,
  FlaskConical,
  Building2,
  Workflow,
  Shield,
  Cpu,
  Bot,
  Database,
  Terminal,
  FileText,
  EyeOff,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Filter = "all" | "now" | "next" | "later";

interface RoadmapItem {
  title: string;
  description: string;
  status: Filter;
  statusLabel: string;
  icon: typeof Route;
}

const items: RoadmapItem[] = [
  // --- NOW ---
  {
    title: "Target Masking System (Privacy Shield)",
    description: "Intercepts and redacts sensitive target information (IPs, subdomains, internal hosts) before queries are sent to external LLMs, dynamically de-masking them for local execution to ensure absolute compliance and data privacy.",
    status: "now",
    statusLabel: "In Active Development",
    icon: EyeOff,
  },
  {
    title: "Advanced Plugin & Domain Architecture",
    description: "Re-architecting plugins as self-contained security domains (SAST, Forensics, Cloud, Compliance) with isolated intent triggers, execution phases, and custom tool handlers, allowing modular and extensible development.",
    status: "now",
    statusLabel: "In Active Development",
    icon: SlidersHorizontal,
  },
  {
    title: "Offline NLP & Semantic Parsing",
    description: "Integrating tiny, local ONNX-based semantic embedding models to enhance zero-dependency intent mapping and complex parameter extraction without requiring network connectivity.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Cpu,
  },
  {
    title: "Self-Healing Parser Upgrades",
    description: "Upgrading the core parser registry to support dynamic tool output adapters, automatically resolving structural changes and command-line drift in upstream security tools.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Terminal,
  },
  // --- NEXT ---
  {
    title: "Remote Access Interfaces",
    description: "Introducing Slack, Discord, and Telegram chatbot integrations to remotely execute scans, approve workflow steps, and receive real-time alerts via secure webhook gateways.",
    status: "next",
    statusLabel: "Up Next",
    icon: Bot,
  },
  {
    title: "Continuous Learning System (CLS) v2",
    description: "Upgrading the skill library with sqlite-vss vector search, interactive reinforcement learning, and advanced generalization of variables beyond simple target placeholders.",
    status: "next",
    statusLabel: "Up Next",
    icon: Database,
  },
  {
    title: "Parallel Tool Execution Pool",
    description: "Orchestrating concurrent security operations via an advanced worker pool with customized timeout gates, syntax auto-repair, and graceful interruption handling.",
    status: "next",
    statusLabel: "Up Next",
    icon: Workflow,
  },
  {
    title: "Offline Vulnerability Correlator",
    description: "Developing local heuristics to cross-reference scanning results, reduce duplicates, and automatically calculate contextual CVSS threat levels.",
    status: "next",
    statusLabel: "Up Next",
    icon: Shield,
  },
  // --- LATER ---
  {
    title: "Advanced Report Generation",
    description: "Generating highly detailed interactive HTML, PDF, and Markdown reports offline, with native formats ready for direct ingestion into SIEM platforms like Splunk or ELK.",
    status: "later",
    statusLabel: "Future Vision",
    icon: FileText,
  },
  {
    title: "AI Playground & Sandbox",
    description: "An isolated, web-based simulation environment for safe, real-time testing and debugging of autonomous planner scripts and plugin policies.",
    status: "later",
    statusLabel: "Future Vision",
    icon: FlaskConical,
  },
  {
    title: "Autonomic Registry Healing",
    description: "Automatically detecting local version upgrades of system-installed security tools and auto-adjusting Siyarix parsing regex to avoid extraction failures.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Sparkles,
  },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "now", label: "Now" },
  { key: "next", label: "Next" },
  { key: "later", label: "Later" },
];

const statusBadgeStyles: Record<Filter, string> = {
  all: "bg-siyarix-500/10 text-siyarix-300 border-siyarix-500/20",
  now: "bg-accent/10 text-accent border-accent/20",
  next: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  later: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function RoadmapPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.status === activeFilter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Product <span className="gradient-text">Roadmap</span>
        </h1>
        <p className="mt-4 text-slate-400">
          A look at the gaps we are addressing and the features on our horizon as we scale Siyarix.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-xl border border-white/5 bg-white/[0.02] p-1">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                activeFilter === filter.key
                  ? "bg-siyarix-600 text-white shadow-lg shadow-siyarix-600/25"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {activeFilter === "all" ? (
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {(["now", "next", "later"] as const).map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-lg font-semibold text-white capitalize border-b border-white/5 pb-2">
                {category === "now"
                  ? "Now — In Progress"
                  : category === "next"
                    ? "Next — Up Next"
                    : "Later — Future"}
              </h3>
              <div className="space-y-3">
                {items
                  .filter((item) => item.status === category)
                  .map((item) => (
                    <RoadmapCard key={item.title} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {filteredItems.map((item) => (
            <RoadmapCard key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function RoadmapCard({ item }: { item: RoadmapItem }) {
  const Icon = item.icon;
  return (
    <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-siyarix-500/10">
          <Icon className="h-5 w-5 text-siyarix-400" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-between">
            <h3 className="font-semibold text-white group-hover:text-siyarix-300 transition-colors">
              {item.title}
            </h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium shrink-0",
                statusBadgeStyles[item.status]
              )}
            >
              {item.statusLabel}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
