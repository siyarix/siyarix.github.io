import type { Metadata } from "next";
import ContributorsClient from "./ContributorsClient";

export const metadata: Metadata = {
  title: "Contributors",
  description: "Meet the open-source community contributors driving Siyarix forward. View core developers, git commits, and community profiles.",
  openGraph: {
    title: "Siyarix — Community Contributors",
    description: "Meet the developers and community members contributing to Siyarix.",
  },
};

export default function ContributorsPage() {
  return <ContributorsClient />;
}
