import { Scale, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "You may freely use, modify, and distribute Siyarix",
  "Modified source code must be disclosed when distributed",
  "Network interaction with the software counts as distribution",
  "A plugin exception allows proprietary plugins under certain conditions",
];

export default function LicensePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-400">
          <Scale className="h-3.5 w-3.5" />
          Legal
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">License</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Siyarix is released under the{" "}
          <span className="font-semibold text-white">
            GNU Affero General Public License v3.0 or later
          </span>
          .
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
          href="https://github.com/mufthakherul/siyarix/blob/main/LICENSE"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <Scale className="h-4 w-4" />
          View Full License
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
