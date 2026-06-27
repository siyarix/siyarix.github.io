import Link from "next/link";
import Image from "next/image";
import { Terminal } from "lucide-react";

const footerLinks = [
  {
    title: "Project",
    links: [
      { href: "/about", label: "About" },
      { href: "/journey", label: "Journey" },
      { href: "/vision", label: "Vision & Goals" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "https://mufthakherul.github.io/siyarix/", label: "Documentation" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/contributors", label: "Contributors" },
      { href: "/contact", label: "Contact" },
      { href: "https://github.com/mufthakherul/siyarix/discussions", label: "Discussions" },
      { href: "https://github.com/mufthakherul/siyarix/issues", label: "Issues" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/license", label: "License" },
      { href: "/legal/contributing", label: "Contributing" },
      { href: "/legal/code-of-conduct", label: "Code of Conduct" },
      { href: "/legal/security", label: "Security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold text-white group">
              <div className="relative overflow-hidden rounded-lg bg-white/5 p-1 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">
                <Image src="/assets/logo.png" alt="Siyarix Logo" width={24} height={24} className="object-contain" />
              </div>
              <span className="font-bold tracking-wide transition-colors group-hover:text-siyarix-400">Siyarix</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              AI-native cybersecurity operations platform. Translate natural language into precise,
              multi-tool security workflows.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold text-slate-200">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Siyarix. Released under the AGPL-3.0-or-later license.
        </div>
      </div>
    </footer>
  );
}
