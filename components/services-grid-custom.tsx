"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

const BLUE = "#00A1E1";
const DARK = "#323E48";

const TOTAL_ANIM_TIME = 1.2; // all icons finish in this many seconds

const SERVICES = [
  { label: "Search for Merch",      href: "https://catalog.brandmakers.com/", icon: "bm_icons-searchforswag" },
  { label: "Company Stores",        href: "/company-stores",                  icon: "bm_icons-companystores" },
  { label: "Kitting & Fulfillment", href: "/kitting-and-fulfillment",         icon: "bm_icons-kitting" },
  { label: "Custom Headwear",       href: "/custom-headwear",                 icon: "bm_icons-headwear" },
  { label: "Custom Merch",          href: "/custom-products",                 icon: "bm_icons-customproducts" },
  { label: "On-Site Experiences",   href: "/on-site-experiences",             icon: "bm_icons-retailpartner_onsite" },
  { label: "Retail Brand Partners", href: "/about#retail-brand-partners",     icon: "bm_icons-retailpartner" },
  { label: "Our Responsibility",    href: "/about#our-responsibility",        icon: "bm_icons-responsibility" },
];

function AnimatedIcon({ src, revealed, iconIndex }: { src: string; revealed: boolean; iconIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const animatePaths = useCallback((container: HTMLDivElement, reveal: boolean) => {
    const paths = container.querySelectorAll("path");
    const pathCount = paths.length;
    // Calculate per-path duration so all icons finish at the same time
    const pathDuration = pathCount > 1 ? TOTAL_ANIM_TIME / pathCount : TOTAL_ANIM_TIME;

    paths.forEach((path, i) => {
      path.setAttribute("stroke", "#FFFFFF");
      path.setAttribute("stroke-width", "1.25");
      path.removeAttribute("stroke-opacity");

      let len: number;
      try {
        len = path.getTotalLength();
      } catch {
        len = 1000;
      }

      path.style.strokeDasharray = String(len);

      if (reveal) {
        path.style.strokeDashoffset = String(len);
        path.getBoundingClientRect();
        const pathDelay = i * pathDuration * 0.3;
        path.style.transition = `stroke-dashoffset ${pathDuration}s cubic-bezier(0.4,0,0.2,1) ${pathDelay.toFixed(3)}s`;
        path.style.strokeDashoffset = "0";
      } else {
        path.style.transition = "none";
        path.style.strokeDashoffset = String(len);
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    fetch(`/icons/layered/${src}.svg`)
      .then((r) => r.text())
      .then((svgText) => {
        container.innerHTML = svgText;

        // Style the SVG element
        const svg = container.querySelector("svg");
        if (svg) {
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "100%");
          svg.style.display = "block";
        }

        setLoaded(true);
      });
  }, [src]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !loaded) return;
    animatePaths(container, revealed);
  }, [revealed, loaded, animatePaths]);

  return (
    <div
      ref={containerRef}
      style={{ width: 192, height: 192 }}
    />
  );
}

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
      { threshold: 0.15 }
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
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[2px]"
          style={{ color: BLUE }}
        >
          Our Services
        </p>

        <h2
          className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
          style={{ color: "#FFFFFF" }}
        >
          How We Do It
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SERVICES.map(({ label, href, icon }, i) => {
            const isExternal = href.startsWith("http");

            const content = (
              <>
                <AnimatedIcon src={icon} revealed={revealed} iconIndex={i} />
                <span
                  className="text-sm font-medium leading-snug md:text-base"
                  style={{ color: "#FFFFFF" }}
                >
                  {label}
                </span>
              </>
            );

            const cls = "group flex flex-col items-center gap-4 rounded-xl p-6 text-center transition-colors duration-200 hover:bg-[#00A1E1]";

            if (isExternal) {
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={label} href={href} className={cls}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
