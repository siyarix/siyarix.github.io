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
  Lock,
  Boxes,
  Zap,
  UserCheck,
  Eye,
  Settings,
  ShieldAlert,
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
    title: "Structured Parser Normalization",
    description: "Re-architecting the 114+ security tool parsers under a strict, type-safe schema validation layer. Ensures all findings (severity, CVE, target) are validated prior to ingestion, eliminating raw, unvalidated dict mappings.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Boxes,
  },
  {
    title: "Offline NLP & Semantic Parsing",
    description: "Integrating tiny, local ONNX-based semantic embedding models to enhance zero-dependency intent mapping and complex parameter extraction without requiring network connectivity.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Cpu,
  },
  {
    title: "Adaptive Stealth Intelligence",
    description: "Overhauling stealth controls to dynamically throttle scan rates, randomize intervals, rotate User-Agents, and change network signatures automatically when target IDS/IPS alerts are suspected.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Eye,
  },

  // --- NEXT ---
  {
    title: "Sandbox Containment & Secure Runtimes",
    description: "Activating sandboxing (Bubblewrap/bwrap on Linux, NTFS ACL hardening on Windows) by default. Implementing a 'fail-closed' strategy to block host execution unless explicit sandboxing is successful.",
    status: "next",
    statusLabel: "Up Next",
    icon: Lock,
  },
  {
    title: "Transactional Session Branching",
    description: "Upgrading the session branching mechanism to use append-only transaction logs or SQLite backing instead of file-overwriting JSONLs, eliminating write collisions during parallel agent execution.",
    status: "next",
    statusLabel: "Up Next",
    icon: Database,
  },
  {
    title: "DAG-Aware Autonomous Executor",
    description: "Refactoring the autonomous script runner to use topological sorting on command steps. Replaces naive concurrent execution with dependency-aware step orchestration to prevent step-sequence failures.",
    status: "next",
    statusLabel: "Up Next",
    icon: Workflow,
  },
  {
    title: "Non-Blocking Async Threat Intel",
    description: "Refactoring the threat intelligence subsystem to use asynchronous HTTP clients and executing DNS lookups inside thread pools. Adds a local SQLite TTL cache to prevent NVD and OTX rate-limiting blocks.",
    status: "next",
    statusLabel: "Up Next",
    icon: Zap,
  },
  {
    title: "EPSS Threat Prioritization",
    description: "Extending the local CVSS scorer with live EPSS (Exploit Prediction Scoring System) feeds to score and prioritize vulnerabilities based on actual real-world exploitation probability.",
    status: "next",
    statusLabel: "Up Next",
    icon: ShieldAlert,
  },
  {
    title: "Hardened Auto-Installer",
    description: "Upgrading the automatic tool downloader with checksum validations, GPG key signature checks, and isolated virtual environments (venvs) to prevent supply chain attacks during runtimes.",
    status: "next",
    statusLabel: "Up Next",
    icon: Terminal,
  },

  // --- LATER ---
  {
    title: "Attack Path Graph Modeling",
    description: "Extending the knowledge graph with automated lateral movement edges and subnet routing scopes. Enables bidirectional traversals to calculate blast-radius and trace security paths.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Shield,
  },
  {
    title: "Multi-Agent Workspace Isolation",
    description: "Creating virtual filesystem and context containment areas per subagent run, partitioning credentials, temporary folders, and execution logs in isolated workspaces.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Building2,
  },
  {
    title: "Interactive Web Onboarding (GUI)",
    description: "Replacing the CLI onboarding script with a browser-based setup wizard. Visually test API keys, configure AI providers, verify tool dependencies, and manage master secrets.",
    status: "later",
    statusLabel: "Future Vision",
    icon: UserCheck,
  },
  {
    title: "Remote Gateway Integrations (ChatOps)",
    description: "Introducing Slack, Discord, and Telegram chatbot integrations to remotely execute scans, approve workflow steps, and receive real-time alerts via secure webhook gateways.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Bot,
  },
  {
    title: "Enterprise SIEM Exports & Reporting",
    description: "Fixing core finding categorization within the report builder. Adding native renderers for CEF, LEEF, STIX, and Splunk HTTP Event Collector (HEC) logs to stream findings to external SIEMs.",
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
            <h3 className="font-semibold text-white group-hover:text-siyarix-300 transition-colors text-sm">
              {item.title}
            </h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-medium shrink-0",
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
