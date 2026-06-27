import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Siyarix — AI Cybersecurity Orchestration Platform",
    template: "%s | Siyarix",
  },
  description:
    "Siyarix is an AI-native cybersecurity operations platform that translates natural language into deterministic security workflows. 25+ AI providers, 80+ tool parsers, 4 execution modes.",
  openGraph: {
    title: "Siyarix — AI Cybersecurity Orchestration Platform",
    description:
      "CLI-native, multi-provider AI orchestration for modern security operations.",
    siteName: "Siyarix",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-surface antialiased`}>
        <div className="flex min-h-screen flex-col relative overflow-hidden">
          {/* Animated Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none animate-grid" />
          <CursorGlow />
          <Header />
          <main className="flex-1 z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
