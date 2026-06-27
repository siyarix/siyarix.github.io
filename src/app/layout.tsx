import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://siyarix.github.io"),
  title: {
    default: "Siyarix — Open-Source AI Security Orchestrator",
    template: "%s | Siyarix",
  },
  description:
    "Siyarix is an open-source, AI-native security orchestration platform. Translate natural language queries into precise, multi-tool security workflows with built-in permission gates.",
  keywords: [
    "cybersecurity",
    "AI security agent",
    "security orchestration",
    "open-source pentest tool",
    "SOAR",
    "security workflows",
    "nmap parser",
    "automated penetration testing",
    "AI cyber agent",
    "AI cybersecurity platform",
    "cognitive security agent",
    "autonomous hacking assistant",
    "AI red teaming",
    "automated vulnerability scanning",
    "SecOps AI",
    "DevSecOps automation",
    "cyber security orchestrator",
    "autonomous agent hacking",
    "interactive security chat",
    "natural language pentest",
    "nmap automation",
    "nuclei vulnerability scanner",
    "subfinder subdomain discovery",
    "sqlmap automated sql injection",
    "gobuster directory bruteforce",
    "nikto web server scanner",
    "hydra network logins cracker",
    "masscan port scanner",
    "amass subdomain enumeration",
    "semgrep static application security testing",
    "bandit python code scanner",
    "trivy container image scanner",
    "john the ripper password cracker",
    "hashcat gpu password recovery",
    "wpscan wordpress security scanner",
    "metasploit orchestration",
    "burp suite integrations",
    "gitleaks secret detection",
    "continuous learning security system",
    "threat intelligence correlation",
    "target masking data loss prevention",
    "operational security OPSEC controls",
    "offline security registry",
    "two-stage permission gate",
    "lateral movement attack path"
  ],
  authors: [{ name: "Siyarix Contributors" }],
  creator: "Siyarix Contributors",
  publisher: "Siyarix",
  category: "technology",
  classification: "Cybersecurity Automation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Siyarix — Open-Source AI Security Orchestrator",
    description:
      "Translate natural language objectives into precise, multi-tool security workflows natively. Free, open-source, and privacy-focused.",
    url: "https://siyarix.github.io",
    siteName: "Siyarix",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "Siyarix Security Platform Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siyarix — Open-Source AI Security Orchestrator",
    description:
      "Translate natural language objectives into precise, multi-tool security workflows natively.",
    images: ["/assets/logo.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://api.github.com https://avatars.githubusercontent.com; connect-src 'self' https://api.github.com;"
        />
      </head>
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
