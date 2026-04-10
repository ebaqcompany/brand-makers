"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const BLUE = "#00A1E1";
const DARK = "#323E48";

const SERVICES = [
  { label: "Search for Merch",      href: "https://catalog.brandmakers.com/", icon: "/icons/icons_bm-01.svg" },
  { label: "Company Stores",        href: "/company-stores",                  icon: "/icons/icons_bm-02.svg" },
  { label: "Kitting & Fulfillment", href: "/kitting-and-fulfillment",         icon: "/icons/icons_bm-03.svg" },
  { label: "Custom Headwear",       href: "/custom-headwear",                 icon: "/icons/icons_bm-04.svg" },
  { label: "Custom Merch",          href: "/custom-products",                 icon: "/icons/icons_bm-05.svg" },
  { label: "On-Site Experiences",   href: "/on-site-experiences",             icon: "/icons/icons_bm-06.svg" },
  { label: "Retail Brand Partners", href: "/about#retail-brand-partners",     icon: "/icons/icons_bm-07.svg" },
  { label: "Our Responsibility",    href: "/about#our-responsibility",        icon: "/icons/icons_bm-08.svg" },
];

const ICON_STAGGER = 0.08;
const ANIM_DURATION = 0.6;

export function ServicesGridCustom() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-[80px]"
      style={{ backgroundColor: DARK }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[2px]"
          style={{ color: BLUE }}
        >
          Our Services
        </p>

        {/* Headline */}
        <h2
          className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
          style={{ color: "#FFFFFF" }}
        >
          How We Do It
        </h2>

        {/* 4 × 2 grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SERVICES.map(({ label, href, icon }, i) => {
            const isExternal = href.startsWith("http");
            const delay = i * ICON_STAGGER;

            const content = (
              <>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 128,
                    height: 128,
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
                    transition: `opacity ${ANIM_DURATION}s ease ${delay}s, transform ${ANIM_DURATION}s ease ${delay}s`,
                    filter: "invert(1) brightness(2)",
                  }}
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-full h-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <span
                  className="text-sm font-medium leading-snug md:text-base"
                  style={{
                    color: "#FFFFFF",
                    opacity: revealed ? 1 : 0,
                    transition: `opacity ${ANIM_DURATION}s ease ${(delay + 0.15)}s`,
                  }}
                >
                  {label}
                </span>
              </>
            );

            const className = "group flex flex-col items-center gap-4 rounded-xl p-6 text-center transition-colors duration-200 hover:bg-[#00A1E1]";

            if (isExternal) {
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={label} href={href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
