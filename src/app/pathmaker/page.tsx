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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32 relative z-10">
          
          <Link href="/about/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to About
          </Link>

          <div className="mx-auto max-w-3xl text-center mt-8">
            <div className="mb-6 flex justify-center">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-siyarix-500 to-accent p-[3px] shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://avatars.githubusercontent.com/u/130831166?v=4"
                  alt="MD Mufthakherul Islam Miraz"
                  className="h-full w-full rounded-full object-cover bg-black"
                />
              </div>
            </div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-300">
              <Compass className="h-3.5 w-3.5" />
              The PathMaker
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              MD Mufthakherul Islam <span className="gradient-text">Miraz</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Siyarix started as a personal journey to explore AI-native security automation. As the PathMaker, my focus is on helping clear the initial path, establish the core foundations, and build a collaborative space where developers and security researchers can explore together.
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
                  Open-source projects thrive on collaboration rather than rigid hierarchies. Siyarix was initially created to solve my own day-to-day challenges in cybersecurity. The title &quot;PathMaker&quot; simply represents the role of setting up the first milestone, clearing initial design blockers, and organizing a clear architecture for others to build upon.
                </p>
                <p>
                  Rather than directing from the top down, the PathMaker&apos;s focus is to support the community: keeping the core engines secure, adding the first set of tool parsers, and ensuring that the project remains open, accessible, and safe for everyone to build upon.
                </p>
                <p>
                  Siyarix is a small, growing project. At its heart, it is a collective effort to explore what is possible when modern AI is paired with classic security tooling. I am incredibly grateful to everyone who is joining this journey.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow">
                <Code2 className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Architect</h3>
                <p className="mt-2 text-sm text-slate-400">Co-designing the open foundations alongside contributors, ensuring modularity in parsers and sandboxed executions.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow">
                <Sparkles className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Visionary</h3>
                <p className="mt-2 text-sm text-slate-400">Helping shape the collaborative roadmap for Siyarix, aligning AI orchestration goals with real-world security needs.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 glow sm:col-span-2">
                <Terminal className="h-6 w-6 text-siyarix-400 mb-4" />
                <h3 className="font-semibold text-white">Developer</h3>
                <p className="mt-2 text-sm text-slate-400">Writing code, refactoring tests, and addressing bugs to keep the platform reliable for users and developers alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
