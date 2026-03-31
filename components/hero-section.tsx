"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { BmButton } from "@/components/bm-button";

export function HeroSection() {
  // Measure the sticky navbar height so the hero fills exactly one viewport
  const [navH, setNavH] = useState(72);

  useEffect(() => {
    const nav = document.querySelector("nav") ?? document.querySelector("[data-navbar]");
    if (nav) setNavH(nav.getBoundingClientRect().height);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: `calc(100svh - ${navH}px)`,
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6 flex flex-col justify-between"
        style={{
          minHeight: `calc(100svh - ${navH}px)`,
          paddingTop: "clamp(32px, 5vw, 64px)",
          paddingBottom: "clamp(32px, 5vw, 64px)",
        }}
      >
        {/* ── top spacer pushes content to lower-left ── */}
        <div aria-hidden="true" />

        {/* ── Headline + CTA ── */}
        <div className="flex flex-col items-start" style={{ gap: "clamp(24px, 4vw, 40px)" }}>
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 8vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "clamp(-2px, -0.06em, -6px)",
              color: "#323E48",
              maxWidth: "620px",
              margin: 0,
            }}
          >
            We Make Your Brand Look Good
          </h1>

          <BmButton href="#services" variant="dark" size="md">
            See How
          </BmButton>
        </div>

        {/* ── Animated scroll arrow (bottom-left) ── */}
        <div
          aria-label="Scroll down"
          className="animate-bounce"
          style={{ color: "#323E48", opacity: 0.55 }}
        >
          <ArrowDown
            strokeWidth={1.5}
            style={{ width: "clamp(24px, 3vw, 36px)", height: "clamp(24px, 3vw, 36px)" }}
          />
        </div>
      </div>
    </section>
  );
}
