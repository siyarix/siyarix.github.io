import { Shield, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "Report vulnerabilities privately — do not disclose publicly",
  "Email to maintainers is the preferred reporting method",
  "Critical issues receive an initial response within 48 hours",
  "High-severity issues receive an initial response within 72 hours",
  "Medium-severity issues receive an initial response within 7 days",
];

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
          <Shield className="h-3.5 w-3.5" />
          Security
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Security Policy</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          We take the security of Siyarix seriously. If you discover a
          vulnerability, please report it responsibly.
        </p>
      </div>

      {/* Key Points */}
      <div className="mt-12 grid gap-4">
        {keyPoints.map((point, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{point}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Link */}
      <div className="mt-12 text-center">
        <Link
          href="https://github.com/mufthakherul/siyarix/blob/main/SECURITY.md"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <Shield className="h-4 w-4" />
          View Full Security Policy
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
