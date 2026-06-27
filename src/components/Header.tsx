"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/vision", label: "Vision" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "https://mufthakherul.github.io/siyarix/", label: "Docs" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/85 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold text-white group">
          <div className="relative overflow-hidden rounded-lg bg-white/5 p-1 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-siyarix-500/10">
            <Image src="/assets/logo.png" alt="Siyarix Logo" width={24} height={24} className="object-contain" />
          </div>
          <span className="font-bold tracking-wide transition-colors group-hover:text-siyarix-400">Siyarix</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white hover:shadow-sm",
                link.href.startsWith("http") && "text-siyarix-400 hover:text-siyarix-300 font-medium"
              )}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/mufthakherul/siyarix"
            className="ml-3 rounded-lg bg-siyarix-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-siyarix-500 hover:shadow-lg hover:shadow-siyarix-600/20 active:scale-95"
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
          "border-t border-white/5 bg-surface px-4 pb-4 pt-2 md:hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "block" : "hidden"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white",
              link.href.startsWith("http") && "text-siyarix-400 font-medium"
            )}
            onClick={() => setMobileOpen(false)}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://github.com/mufthakherul/siyarix"
          className="mt-2 block rounded-lg bg-siyarix-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-siyarix-500"
          onClick={() => setMobileOpen(false)}
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}
