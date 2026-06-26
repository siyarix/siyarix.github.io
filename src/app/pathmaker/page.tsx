import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass, Terminal, Sparkles, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "The PathMaker",
  description: "Meet MD Mufthakherul Islam Miraz, the PathMaker behind Siyarix.",
};

export default function PathMakerPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          
          <Link href="/about" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to About
          </Link>

          <div className="mx-auto max-w-3xl text-center mt-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-300">
              <Compass className="h-3.5 w-3.5" />
              The PathMaker
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              MD Mufthakherul Islam <span className="gradient-text">Miraz</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              I don&apos;t just write code; I forge paths. Siyarix started as a personal journey to simplify cybersecurity, and as the PathMaker, I&apos;m dedicated to shaping its open-source future alongside the community.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Why &quot;PathMaker&quot;?
              </h2>
              <div className="mt-6 space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  In traditional software development, titles like &quot;Founder&quot; or &quot;Lead Developer&quot; imply a rigid hierarchy. But open source is an expedition. It requires someone to break the initial trail, clear the obstacles, and draw the map for others to follow.
                </p>
                <p>
                  As the PathMaker, my role isn&apos;t just about leading from the top down. It&apos;s about ensuring the underlying architecture is robust enough for contributors to explore safely, innovating new ways to orchestrate AI with security tooling, and ensuring the project remains accessible to everyone.
                </p>
                <p>
                  Siyarix is growing fast, but at its heart, it remains a passionate endeavor to push the boundaries of what is possible in cybersecurity orchestration.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow">
                <Code2 className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Architect</h3>
                <p className="mt-2 text-sm text-slate-400">Designing the core foundations, from the 110+ tool parsers to the zero-trust execution modes.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow">
                <Sparkles className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Visionary</h3>
                <p className="mt-2 text-sm text-slate-400">Charting the course for AI-native orchestration in an open, community-driven ecosystem.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow sm:col-span-2">
                <Terminal className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Developer</h3>
                <p className="mt-2 text-sm text-slate-400">Actively building, testing, and refining the Siyarix CLI and integration plugins every day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
