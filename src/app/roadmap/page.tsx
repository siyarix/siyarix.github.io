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
  {
    title: "Cloud Scanner",
    description: "Multi-cloud posture scanning for AWS, Azure, GCP",
    status: "later",
    statusLabel: "Future",
    icon: Building2,
  },
  {
    title: "Mobile Scanner",
    description: "APK analysis, iOS binary inspection",
    status: "now",
    statusLabel: "In Development",
    icon: Route,
  },
  {
    title: "IoT Scanner",
    description: "Firmware analysis, serial protocol scanning",
    status: "now",
    statusLabel: "In Development",
    icon: FlaskConical,
  },
  {
    title: "REST API",
    description: "Full REST API with JWT authentication for headless operation",
    status: "next",
    statusLabel: "Up Next",
    icon: ArrowRight,
  },
  {
    title: "Multi-Model Ensemble UI",
    description: "Visual interface for ensemble voting configuration",
    status: "next",
    statusLabel: "Up Next",
    icon: Sparkles,
  },
  {
    title: "SIEM Integration",
    description: "Real-time forwarding to Splunk, ELK, and Azure Sentinel",
    status: "next",
    statusLabel: "Up Next",
    icon: Workflow,
  },
  {
    title: "Import Pipeline",
    description: "Nessus, Burp, Metasploit, STIX/OpenIOC import support",
    status: "next",
    statusLabel: "Up Next",
    icon: Clock,
  },
  {
    title: "Canary Token Management",
    description: "Deploy and monitor honeytokens across infrastructure",
    status: "later",
    statusLabel: "Future",
    icon: Route,
  },
  {
    title: "Team Collaboration",
    description: "Multi-user shared sessions with role-based access",
    status: "later",
    statusLabel: "Future",
    icon: Building2,
  },
  {
    title: "Web Dashboard",
    description: "Browser-based dashboard for visual workflow management",
    status: "later",
    statusLabel: "Future",
    icon: Sparkles,
  },
  {
    title: "AI Playground",
    description: "Interactive environment for testing and tuning AI configurations",
    status: "later",
    statusLabel: "Future",
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
          A look at what we&apos;re building now and what&apos;s on the horizon for the Siyarix
          platform.
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
              <h3 className="mb-4 text-lg font-semibold text-white capitalize">
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
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                statusBadgeStyles[item.status]
              )}
            >
              {item.statusLabel}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
