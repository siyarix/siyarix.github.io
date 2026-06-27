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
  ShieldAlert,
  Unplug,
  Bug,
  Wifi,
  Signal,
  Plug,
  Layers,
  ListChecks,
  Settings2,
  Timer,
  CloudOff,
  HardDrive,
  AlertTriangle,
  Activity,
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
  {
    title: "Local Provider Connectivity & Reliability",
    description: "Improving connection handling, health checks, and error recovery for Ollama, llama.cpp, LM Studio, vLLM, and LocalAI providers. Adding post-launch verification, configurable timeouts, and graceful degradation when local services are unavailable or starting up.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Wifi,
  },
  {
    title: "Provider Profile Configuration Audit",
    description: "Correcting misconfigured provider capability flags (supports_streaming, supports_tools) across local provider profiles. Adding dynamic model discovery, fallback default models, and proper vision model detection for vLLM and LocalAI.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Settings2,
  },
  {
    title: "Subprocess Safety & Credential Hardening",
    description: "Replacing 41 direct subprocess calls with the safe subprocess_utils wrapper. Eliminating plaintext sudo password caching in module globals, hardening path traversal detection against unicode and symlink attacks, and ensuring consistent subprocess timeout propagation.",
    status: "now",
    statusLabel: "In Active Development",
    icon: Shield,
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
  {
    title: "Credential Store Thread Safety & Encryption Audit",
    description: "Adding thread-locks to all credential store operations to prevent dictionary corruption under concurrent access. Ensuring AES-256-GCM is consistently used for all new credentials, not only after explicit migration. Addressing Windows key file protection limitations.",
    status: "next",
    statusLabel: "Up Next",
    icon: Lock,
  },
  {
    title: "Audit Log Deadlock Fix & Chain Integrity",
    description: "Resolving a critical reentrant-lock deadlock in audit log cleanup by migrating to threading.RLock. Restoring full 64-character SHA-256 hash chain integrity, fixing counter race conditions outside lock scope, and adding on-disk chain verification beyond the last 1000 entries.",
    status: "next",
    statusLabel: "Up Next",
    icon: ListChecks,
  },
  {
    title: "Executor Race Conditions & Error Recovery",
    description: "Fixing a data race on shared CommandResult.lines between parallel execution tasks and live display updates. Adding return_exceptions=True to all asyncio.gather calls to prevent total plan failure from a single step error. Improving error handling across autonomous and registry executors.",
    status: "next",
    statusLabel: "Up Next",
    icon: Bug,
  },
  {
    title: "NLP Tokenization & Stopword Consolidation",
    description: "Eliminating duplicated stopword lists and tokenization logic duplicated across nlp_engine.py and learning_system.py. Centralizing synonym dictionaries (300+ hardcoded entries) into external configuration files for easier maintenance.",
    status: "next",
    statusLabel: "Up Next",
    icon: Layers,
  },
  {
    title: "Provider Endpoint Consolidation",
    description: "Centralizing duplicated provider endpoint definitions currently scattered across health.py, provider_utils.py, and connectivity.py into a single source of truth. Adding dynamic provider discovery from ProviderManager to replace hardcoded provider lists.",
    status: "next",
    statusLabel: "Up Next",
    icon: Plug,
  },
  {
    title: "Stealth Engine Proxy Rotation Fix",
    description: "Correcting a logic bug in the stealth proxy rotation system where the proxy index increments on every call instead of only during rotation intervals, causing premature proxy exhaustion and degraded operational security.",
    status: "next",
    statusLabel: "Up Next",
    icon: Activity,
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
  {
    title: "Monolithic Module Refactoring Initiative",
    description: "Breaking down oversized files that have grown beyond maintainable size: planner_registry.py (2100+ lines), onboarding.py (2900 lines), cli/__init__.py (1800 lines), and tool_handlers.py (800 lines) into focused, single-responsibility modules with clear interfaces.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Layers,
  },
  {
    title: "Parser Test Coverage Initiative",
    description: "Adding dedicated unit tests for each of the 113 security tool parsers. Currently only 11 test files cover the entire parser ecosystem, leaving 90% of parsers untested individually. Establishing a standardized parser test harness and fixture framework.",
    status: "later",
    statusLabel: "Future Vision",
    icon: ListChecks,
  },
  {
    title: "Mobile & Low-Power Optimization",
    description: "Reducing PBKDF2 iterations for credential store operations on mobile and Raspberry Pi-class devices. Adding adaptive performance profiles that detect available resources and adjust caching, thread pool sizes, and background task aggressiveness accordingly.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Signal,
  },
  {
    title: "Event Loop & Async Architecture Review",
    description: "Auditing all asynchronous code for proper error handling patterns, timeout propagation, and event loop compatibility across Windows (ProactorEventLoop), Linux, and macOS. Standardizing on create_task over ensure_future and eliminating synchronous HTTP calls in async contexts.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Timer,
  },
  {
    title: "Webhook & Notification Consolidation",
    description: "Merging the separate webhooks.py and notifications.py modules into a unified dispatch system with automatic retry logic, rate limiting, and support for multiple output formats (Slack, Discord, generic webhook, email). Replacing synchronous urllib calls with async httpx throughout.",
    status: "later",
    statusLabel: "Future Vision",
    icon: CloudOff,
  },
  {
    title: "CI/CD Pipeline Consolidation",
    description: "Deduplicating overlapping workflow definitions (stale, changelog, codeql, security workflows) and aligning coverage thresholds across pyproject.toml (70%), Makefile (50%), and CI configuration (40%) to a consistent, enforced standard.",
    status: "later",
    statusLabel: "Future Vision",
    icon: HardDrive,
  },
  {
    title: "Memory System Reentrancy & Persistence Fixes",
    description: "Replacing non-reentrant threading.Lock with RLock across MemoryStore to prevent deadlocks in nested operations. Adding proper database connection lifecycle management and ensuring persistence failures are surfaced to the caller rather than silently skipped.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Database,
  },
  {
    title: "Unified Timeout & Configuration Framework",
    description: "Consolidating all hardcoded timeouts (currently ranging from 0.5s to 600s across 20+ modules) into a single configuration layer. Making executor limits, cache TTLs, guardrail thresholds, stealth intervals, and health check timeouts centrally configurable via environment variables and config files.",
    status: "later",
    statusLabel: "Future Vision",
    icon: Settings2,
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

export default function RoadmapClient() {
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
