import Link from "next/link";
import { FileText, Shield, Scale, BookOpen, Fingerprint, Copyright } from "lucide-react";

const documents = [
  {
    icon: Scale,
    title: "License (AGPL-3.0-or-later)",
    description: "Siyarix is released under the GNU Affero General Public License v3.0 or later.",
    href: "/legal/license",
  },
  {
    icon: FileText,
    title: "Contributing Guide",
    description: "Guidelines for contributing code, documentation, and bug reports.",
    href: "/legal/contributing",
  },
  {
    icon: BookOpen,
    title: "Code of Conduct",
    description: "Our commitment to fostering an inclusive and respectful community.",
    href: "/legal/code-of-conduct",
  },
  {
    icon: Shield,
    title: "Security Policy",
    description: "Responsible disclosure process and security-related information.",
    href: "/legal/security",
  },
  {
    icon: Fingerprint,
    title: "Ethical Use Policy",
    description: "Guidelines for authorized and responsible use of Siyarix.",
    href: "/legal/ethical-use",
  },
  {
    icon: Copyright,
    title: "Trademark Policy",
    description: "Guidelines for using the Siyarix name, logo, and branding.",
    href: "/legal/trademark",
  },
];

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="gradient-text">Legal</span>
        </h1>
        <p className="mt-4 text-slate-400">
          Licensing, policies, and legal information for the Siyarix project.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-siyarix-500/10">
              <doc.icon className="h-5 w-5 text-siyarix-400" />
            </div>
            <h2 className="mt-4 font-semibold text-white group-hover:text-siyarix-300">
              {doc.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
