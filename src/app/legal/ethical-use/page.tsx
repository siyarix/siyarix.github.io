import { Fingerprint, ExternalLink } from "lucide-react";
import Link from "next/link";

const keyPoints = [
  "Use Siyarix only for authorized security testing and research",
  "Do not use Siyarix for any illegal or unethical activities",
  "Respect the privacy and data of all individuals and organizations",
  "Always obtain proper permission before testing any system",
];

export default function EthicalUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400">
          <Fingerprint className="h-3.5 w-3.5" />
          Ethics
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Ethical Use Policy</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          Siyarix is a powerful cybersecurity tool that must be used
          responsibly. We are committed to ensuring it is used only for
          ethical and authorized purposes.
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
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{point}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Document Link */}
      <div className="mt-12 text-center">
        <Link
          href="https://github.com/siyarix/siyarix/blob/main/ETHICAL_USE.md"
          className="inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
        >
          <Fingerprint className="h-4 w-4" />
          View Full Ethical Use Policy
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
