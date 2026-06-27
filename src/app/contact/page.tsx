import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Bug,
  Shield,
  Mail,
  GitFork,
  ExternalLink,
  Heart,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Community support",
  description: "Get in touch with the Siyarix team and community. Report vulnerabilities, suggest features, discuss pentesting automation, and join our channels.",
  openGraph: {
    title: "Siyarix — Contact & Support",
    description: "Get in touch with Siyarix security teams and community channels.",
  },
};

const contactCards = [
  {
    icon: MessageCircle,
    title: "GitHub Discussions",
    description:
      "Ask questions, share ideas, and connect with the community. Best for general help and feature discussions.",
    href: "https://github.com/siyarix/siyarix/discussions",
    label: "Join the Conversation",
  },
  {
    icon: Bug,
    title: "GitHub Issues",
    description:
      "Report bugs, request features, or track ongoing work. Include reproduction steps when reporting issues.",
    href: "https://github.com/siyarix/siyarix/issues",
    label: "Open an Issue",
  },
  {
    icon: Shield,
    title: "Security Reports",
    description:
      "Disclose vulnerabilities responsibly. We follow industry-standard disclosure coordination and aim to respond within 24 hours.",
    href: "https://github.com/siyarix/siyarix/blob/main/SECURITY.md",
    label: "View Security Policy",
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "For private inquiries, partnership opportunities, or sensitive communications. Expect a response within 48 hours.",
    href: "mailto:security@siyarix.dev",
    label: "security@siyarix.dev",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              We&apos;d love to hear from you. Whether you have a question, a
              feature request, a security concern, or just want to say hello
              &mdash; there&apos;s a channel for that.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isExternal =
                card.href.startsWith("http") || card.href.startsWith("mailto");
              const Comp = isExternal ? "a" : Link;
              const props = isExternal
                ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: card.href };

              return (
                <div
                  key={card.title}
                  className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-siyarix-500/10">
                    <Icon className="h-5 w-5 text-siyarix-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                  <Comp
                    {...props}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-siyarix-400 transition-colors hover:text-siyarix-300"
                  >
                    {card.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Comp>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent-light">
              <Heart className="h-3.5 w-3.5" />
              Community
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join the Community
            </h2>
            <p className="mt-4 text-slate-400">
              Siyarix is built by practitioners, for practitioners. Whether
              you&apos;re a seasoned security engineer or just getting started,
              there&apos;s a place for you here.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-siyarix-500/10">
                <GitFork className="h-6 w-6 text-siyarix-400" />
              </div>
              <h3 className="mt-4 font-semibold text-white">Contribute Code</h3>
              <p className="mt-2 text-sm text-slate-400">
                Submit pull requests, write parsers, build plugins, and help
                shape the core platform.
              </p>
              <a
                href="https://github.com/siyarix/siyarix"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-siyarix-400 transition-colors hover:text-siyarix-300"
              >
                Fork on GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-siyarix-500/10">
                <MessageCircle className="h-6 w-6 text-siyarix-400" />
              </div>
              <h3 className="mt-4 font-semibold text-white">Join Discussions</h3>
              <p className="mt-2 text-sm text-slate-400">
                Share ideas, ask questions, and connect with other users and
                contributors in the community.
              </p>
              <a
                href="https://github.com/siyarix/siyarix/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-siyarix-400 transition-colors hover:text-siyarix-300"
              >
                Start a Discussion
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-siyarix-500/10">
                <Heart className="h-6 w-6 text-siyarix-400" />
              </div>
              <h3 className="mt-4 font-semibold text-white">Spread the Word</h3>
              <p className="mt-2 text-sm text-slate-400">
                Star the repository, write about your experience, or recommend
                Siyarix to your team.
              </p>
              <a
                href="https://github.com/siyarix/siyarix"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-siyarix-400 transition-colors hover:text-siyarix-300"
              >
                Star on GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Support &amp; Response Times
            </h2>
            <p className="mt-4 text-slate-400">
              We take every query seriously. Response times vary by channel and
              severity, but we strive to acknowledge every message within one
              business day.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div>
                <h3 className="font-semibold text-white">
                  Security Vulnerabilities
                </h3>
                <p className="text-sm text-slate-400">
                  Responsible disclosure via SECURITY.md
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                &lt; 24 hours
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div>
                <h3 className="font-semibold text-white">Bug Reports</h3>
                <p className="text-sm text-slate-400">
                  GitHub Issues with reproduction steps
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                1 &ndash; 3 days
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div>
                <h3 className="font-semibold text-white">
                  Feature Requests &amp; Questions
                </h3>
                <p className="text-sm text-slate-400">
                  Discussions, email, or community channels
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-3 py-1 text-xs font-medium text-siyarix-400">
                3 &ndash; 7 days
              </span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              For critical infrastructure or enterprise support inquiries, reach
              out directly via email with &ldquo;Urgent&rdquo; in the subject
              line.
            </p>
            <a
              href="https://github.com/siyarix/siyarix/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-siyarix-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-siyarix-600/25 transition-all hover:bg-siyarix-500"
            >
              Visit Community Forums
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
