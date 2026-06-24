import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributing Guide",
  description: "Guidelines for contributing code, documentation, and bug reports to the Siyarix project.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
