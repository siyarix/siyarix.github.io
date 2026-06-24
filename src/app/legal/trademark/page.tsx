import { Copyright, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "You may use the Siyarix name to refer to the project",
  "You may not imply endorsement or affiliation with the project",
  "Logo usage must follow the provided brand guidelines",
  "Trademark rights belong to the Siyarix project maintainers",
];

export default function TrademarkPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
          <Copyright className="h-3.5 w-3.5" />
          Brand
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Trademark Policy</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          The Siyarix name and logo are valuable assets of the project. This
          policy outlines how they may be used by the community.
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
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                <div className="h-2 w-2 rounded-full bg-amber-400" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{point}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Link */}
      <div className="mt-12 text-center">
        <Link
          href="https://github.com/siyarix/siyarix/blob/main/TRADEMARK_POLICY.md"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <Copyright className="h-4 w-4" />
          View Full Trademark Policy
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
