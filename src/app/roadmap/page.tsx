import type { Metadata } from "next";
import RoadmapClient from "./RoadmapClient";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Explore the development roadmap of Siyarix. Track the active milestones, upcoming features, and future vision for the AI security orchestrator.",
  openGraph: {
    title: "Siyarix — Product Roadmap",
    description: "Explore the development roadmap of Siyarix. Track active milestones and future features.",
  },
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
