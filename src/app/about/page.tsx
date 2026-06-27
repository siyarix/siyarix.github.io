import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, GitFork, Terminal, Users } from "lucide-react";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Siyarix — a growing personal project turning into an open-source cybersecurity orchestration platform.",
};

const philosophy = [
  {
    icon: Terminal,
    title: "CLI-First",
    description:
      "Every feature is built for the terminal first. Siyarix embraces the Unix philosophy of composable, scriptable, and pipeable tools that integrate seamlessly into existing workflows.",
  },
  {
    icon: Shield,
    title: "Privacy-Respecting",
    description:
      "Your data stays yours. Siyarix can run fully offline with local AI models, and no telemetry is collected without explicit consent. We believe security tools should respect your boundaries.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Roadmap priorities, plugin contributions, and design decisions are shaped by the community. We build in public, with regular RFCs and transparent development cycles.",
  },
  {
    icon: GitFork,
    title: "Open Source",
    description:
      "The project is entirely open-source. Built initially as a personal endeavor, it is now evolving into a community-driven platform accessible to everyone.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="gradient-text">Siyarix</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Siyarix started as a personal project to solve a complex problem:
              orchestrating security tools using natural language. It is now growing
              into an open-source cybersecurity platform, built with the conviction
              that advanced security operations shouldn&apos;t require a dozen disconnected
              tools and a PhD to operate them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent-light">
              <Heart className="h-3.5 w-3.5" />
              Our Mission
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Democratizing Security Operations
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              I believe that AI-native security orchestration shouldn&apos;t be a
              privilege reserved for well-funded teams. My mission is to make
              intelligent, automated security workflows accessible to every
              practitioner — empowering solo researchers, developers, and
              penetration testers alike.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              By combining the power of large language models with a rich
              ecosystem of tool parsers, execution modes, and plugin
              architecture, Siyarix bridges the gap between human intent and
              machine execution — without sacrificing control, transparency,
              or privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Philosophy
            </h2>
            <p className="mt-4 text-slate-400">
              Four principles guide every decision we make.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-siyarix-500/10">
                  <item.icon className="h-5 w-5 text-siyarix-400" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The Team
            </h2>
            <p className="mt-4 text-slate-400">
              Built by practitioners, for practitioners.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-lg">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-siyarix-500 to-accent p-[2px] shadow-[0_0_12px_rgba(99,102,241,0.15)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://avatars.githubusercontent.com/u/130831166?v=4"
                  alt="MD Mufthakherul Islam Miraz"
                  className="h-full w-full rounded-full object-cover bg-black"
                />
              </div>
              <Link href="/pathmaker/" className="group/link block">
                <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover/link:text-siyarix-400">
                  MD Mufthakherul Islam Miraz
                </h3>
              </Link>
              <p className="text-sm text-siyarix-400">
                PathMaker
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Building Siyarix from a personal vision into a collaborative open-source platform.
                <br />
                <Link href="/pathmaker/" className="mt-2 inline-block text-siyarix-400 hover:underline">
                  Read the PathMaker&apos;s story &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-400">
              Siyarix is shaped by a growing community of contributors.
            </p>
            <Link
              href="https://github.com/siyarix/siyarix"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
            >
              <GitFork className="h-4 w-4" />
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
