import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the community of security researchers, developers, and contributors building the future of AI-native cybersecurity orchestration.",
};

export default function ContributorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
