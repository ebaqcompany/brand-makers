"use client";

import { useEffect, useState } from "react";

const BLUE = "#00A1E1";

const NAV_ITEMS = [
  { label: "Customizable Areas", id: "customizable-areas" },
  { label: "Cap Styles", id: "cap-styles" },
  { label: "Closure Styles", id: "closure-styles" },
  { label: "Decoration Options", id: "decoration-options" },
  { label: "Accent Options", id: "accent-options" },
  { label: "Fabric Colors", id: "fabric-color" },
  { label: "Mesh Colors", id: "mesh-color" },
  { label: "Logo Placements", id: "logo-placement" },
  { label: "Size Chart", id: "size-chart" },
];

export function HeadwearSidebar() {
  const [activeId, setActiveId] = useState("customizable-areas");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="hidden lg:block sticky top-24 self-start shrink-0 w-[220px] py-20 md:py-[80px]">
      <div className="rounded-2xl p-6" style={{ backgroundColor: "#F0F0F0" }}>
      <p
        className="mb-5 text-xs font-medium uppercase tracking-[2px]"
        style={{ color: BLUE }}
      >
        Custom Headwear
      </p>
      <ul className="flex flex-col gap-2.5">
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block text-[15px] leading-relaxed transition-colors"
              style={{
                color: activeId === id ? BLUE : "#323E48",
                fontWeight: activeId === id ? 600 : 400,
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}
