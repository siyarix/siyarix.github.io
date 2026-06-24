import { GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "Pull requests are welcome from all contributors",
  "All contributions require a DCO (Developer Certificate of Origin) sign-off",
  "Follow established code standards and project conventions",
  "Test coverage must meet a minimum threshold of 75%",
];

export default function ContributingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-400">
          <GitFork className="h-3.5 w-3.5" />
          Community
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Contributing Guide</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          We welcome contributions from everyone. Whether you&apos;re fixing a
          bug, improving documentation, or adding a feature — help us make
          Siyarix better.
        </p>
      </div>

      {/* Key Points */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {keyPoints.map((point, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-siyarix-500/20">
                <div className="h-2 w-2 rounded-full bg-siyarix-400" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{point}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Link */}
      <div className="mt-12 text-center">
        <Link
          href="https://github.com/siyarix/siyarix/blob/main/CONTRIBUTING.md"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <GitFork className="h-4 w-4" />
          View Full Contributing Guide
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
