"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ICON_PATH = "/about-us/responsibility-icons";
const TOTAL_ANIM_TIME = 2.8;
const ICON_STAGGER = 0.08;

type AnimatedResponsibilityIconProps = {
  src: string;
  title: string;
  iconIndex: number;
};

export function AnimatedResponsibilityIcon({
  src,
  title,
  iconIndex,
}: AnimatedResponsibilityIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const animatePaths = useCallback((container: HTMLDivElement, reveal: boolean) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const paths = container.querySelectorAll<SVGGeometryElement>(
      "path, line, polyline, polygon, circle, ellipse, rect"
    );
    const pathCount = paths.length;
    const pathDuration = pathCount > 1 ? TOTAL_ANIM_TIME / pathCount : TOTAL_ANIM_TIME;

    paths.forEach((path, i) => {
      let len = 1000;

      try {
        len = path.getTotalLength();
      } catch {
        // Some SVG geometry elements can fail length measurement in older browsers.
      }

      path.style.strokeDasharray = String(len);

      if (prefersReducedMotion) {
        path.style.transition = "none";
        path.style.strokeDashoffset = "0";
        return;
      }

      if (reveal) {
        path.style.strokeDashoffset = String(len);
        path.getBoundingClientRect();
        const delay = iconIndex * ICON_STAGGER + i * pathDuration * 0.28;
        path.style.transition = `stroke-dashoffset ${pathDuration}s cubic-bezier(0.4,0,0.2,1) ${delay.toFixed(3)}s`;
        path.style.strokeDashoffset = "0";
      } else {
        path.style.transition = "none";
        path.style.strokeDashoffset = String(len);
      }
    });
  }, [iconIndex]);

  const replay = useCallback(() => {
    const container = containerRef.current;
    if (!container || !loaded) return;
    animatePaths(container, false);
    requestAnimationFrame(() => animatePaths(container, true));
  }, [animatePaths, loaded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const controller = new AbortController();

    fetch(`${ICON_PATH}/${src}.svg`, { signal: controller.signal })
      .then((response) => response.text())
      .then((svgText) => {
        const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");

        if (!svg) return;

        svg.querySelectorAll("script, style, foreignObject").forEach((node) => node.remove());
        svg.querySelectorAll("*").forEach((node) => {
          [...node.attributes].forEach((attr) => {
            const name = attr.name.toLowerCase();
            const value = attr.value.trim().toLowerCase();

            if (name.startsWith("on") || value.startsWith("javascript:")) {
              node.removeAttribute(attr.name);
            }
          });
        });

        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", title);
        svg.setAttribute("focusable", "false");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.style.display = "block";
        svg.style.overflow = "visible";

        svg
          .querySelectorAll<SVGElement>("path, line, polyline, polygon, circle, ellipse, rect")
          .forEach((shape) => {
            shape.setAttribute("fill", "none");
            shape.setAttribute("stroke", "currentColor");
            shape.setAttribute("stroke-width", "1.55");
            shape.setAttribute("stroke-linecap", "round");
            shape.setAttribute("stroke-linejoin", "round");
            shape.setAttribute("vector-effect", "non-scaling-stroke");
            shape.removeAttribute("stroke-opacity");
          });

        container.replaceChildren(svg);
        setLoaded(true);
      })
      .catch((error) => {
        if (error instanceof Error && error.name === "AbortError") return;
      });

    return () => controller.abort();
  }, [src, title]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !loaded) return;
    animatePaths(container, revealed);
  }, [animatePaths, loaded, revealed]);

  return (
    <div
      ref={containerRef}
      className="h-32 w-32 text-[#00A1E1] md:h-36 md:w-36"
      onMouseEnter={replay}
    />
  );
}
