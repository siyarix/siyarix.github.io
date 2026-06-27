import { Heart, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "Be respectful and considerate in all interactions",
  "Foster an inclusive environment for people of all backgrounds",
  "Harassment of any kind will not be tolerated",
  "Project maintainers have the authority to enforce these rules",
];

export default function CodeOfConductPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-sm text-rose-400">
          <Heart className="h-3.5 w-3.5" />
          Community
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Code of Conduct</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          We are committed to providing a welcoming, inclusive, and
          harassment-free experience for everyone in the Siyarix community.
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
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{point}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Link */}
      <div className="mt-12 text-center">
        <Link
          href="https://github.com/mufthakherul/siyarix/blob/main/CODE_OF_CONDUCT.md"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <Heart className="h-4 w-4" />
          View Full Code of Conduct
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
