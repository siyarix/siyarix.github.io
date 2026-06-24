import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Siyarix licensing, contributing guidelines, code of conduct, and legal policies.",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
