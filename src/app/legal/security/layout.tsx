import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "Responsible disclosure process and security-related information for the Siyarix project.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
