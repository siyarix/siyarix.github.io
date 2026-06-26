import type { Metadata } from "next";
import { Terminal, Monitor, Smartphone, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Install Siyarix",
  description: "Download and install Siyarix, the open-source AI security orchestrator.",
};

export default function InstallPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-400">
              <Download className="h-3.5 w-3.5" />
              Installation
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Started with <span className="gradient-text">Siyarix</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Install the open-source CLI locally to orchestrate your security tools via natural language.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="space-y-16">
            
            {/* Universal Unix */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-6 w-6 text-siyarix-400" />
                <h2 className="text-2xl font-bold text-white">Linux, macOS, iOS, ChromeOS & BSD</h2>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-slate-300 mb-4">Run the following command in your terminal to download and execute the universal install script:</p>
                <div className="flex bg-black/50 border border-white/10 rounded-lg p-4 relative group">
                  <code className="text-siyarix-300 text-sm font-mono flex-1 overflow-x-auto">
                    curl -fsSL https://siyarix.github.io/install.sh | bash
                  </code>
                </div>
              </div>
            </div>

            {/* Windows */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Windows (PowerShell)</h2>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-slate-300 mb-4">Open PowerShell as Administrator and run the following command:</p>
                <div className="flex bg-black/50 border border-white/10 rounded-lg p-4 relative group">
                  <code className="text-siyarix-300 text-sm font-mono flex-1 overflow-x-auto">
                    irm https://siyarix.github.io/install.ps1 | iex
                  </code>
                </div>
              </div>
            </div>

            {/* Android Termux */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-6 w-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Android (Termux)</h2>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <p className="text-slate-300 mb-4">Install Siyarix directly on your Android device using the specialized Termux script:</p>
                <div className="flex bg-black/50 border border-white/10 rounded-lg p-4 relative group">
                  <code className="text-siyarix-300 text-sm font-mono flex-1 overflow-x-auto">
                    curl -fsSL https://siyarix.github.io/install-termux.sh | bash
                  </code>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Alternative Installation */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Manual Installation via pip</h2>
            <p className="mt-4 text-slate-400">If you prefer to install Siyarix manually using Python&apos;s package manager, you can do so directly from PyPI.</p>
            <div className="mt-8 inline-block bg-black/50 border border-white/10 rounded-lg p-4">
              <code className="text-white text-sm font-mono">
                pip install siyarix
              </code>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
