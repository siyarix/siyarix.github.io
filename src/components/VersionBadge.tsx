"use client";

import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

export default function VersionBadge() {
  const [version, setVersion] = useState("v1.0.0");

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch("https://api.github.com/repos/mufthakherul/siyarix/releases/latest");
        if (res.ok) {
          const data = await res.json();
          if (data.tag_name) {
            setVersion(data.tag_name);
            return;
          }
        }
        const tagsRes = await fetch("https://api.github.com/repos/mufthakherul/siyarix/tags");
        if (tagsRes.ok) {
          const tags = await tagsRes.json();
          if (tags && tags.length > 0 && tags[0].name) {
            setVersion(tags[0].name);
          }
        }
      } catch (e) {
        // Graceful fallback to static v1.0.0
      }
    }
    fetchVersion();
  }, []);

  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-siyarix-500/20 bg-siyarix-500/10 px-4 py-1.5 text-sm text-siyarix-300">
      <Cpu className="h-3.5 w-3.5" />
      {version} — Stable Release
    </div>
  );
}
