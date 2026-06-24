import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License",
  description: "Siyarix is released under the GNU Affero General Public License v3.0 or later.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
