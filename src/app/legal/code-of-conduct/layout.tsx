import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Our commitment to fostering an inclusive and respectful community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
