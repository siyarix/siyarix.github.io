"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/vision", label: "Vision" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <Terminal className="h-5 w-5 text-siyarix-400" />
          <span>Siyarix</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/siyarix/siyarix"
            className="ml-3 rounded-lg bg-siyarix-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-siyarix-500"
          >
            GitHub
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/5 bg-surface px-4 pb-4 pt-2 md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://github.com/siyarix/siyarix"
          className="mt-2 block rounded-lg bg-siyarix-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-siyarix-500"
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}
