import Link from "next/link";
import { Terminal } from "lucide-react";

const footerLinks = [
  {
    title: "Project",
    links: [
      { href: "/about", label: "About" },
      { href: "/journey", label: "Journey" },
      { href: "/vision", label: "Vision & Goals" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/contributors", label: "Contributors" },
      { href: "/contact", label: "Contact" },
      { href: "https://github.com/siyarix/siyarix/discussions", label: "Discussions" },
      { href: "https://github.com/siyarix/siyarix/issues", label: "Issues" },
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
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
              <Terminal className="h-5 w-5 text-siyarix-400" />
              <span>Siyarix</span>
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
