"use client";

import { useState, useEffect } from "react";

type TOCItem = {
  id: string;
  text: string;
};

export default function BlogTableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="space-y-1">
      <p className="font-[family-name:var(--font-hanken)] font-bold text-xs uppercase tracking-[2px] text-navy-mid mb-4">
        Table of Contents
      </p>
      {items.map((item, i) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-start gap-3 py-2 px-3 rounded-lg text-sm font-[family-name:var(--font-manrope)] transition-colors ${
              isActive
                ? "bg-zircon text-dodger font-semibold"
                : "text-waikawa hover:text-navy-mid hover:bg-zircon/50"
            }`}
          >
            <span
              className={`shrink-0 text-xs font-bold mt-0.5 ${
                isActive ? "text-dodger" : "text-bali"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-snug">{item.text}</span>
          </a>
        );
      })}
    </nav>
  );
}
