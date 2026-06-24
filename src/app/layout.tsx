import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
