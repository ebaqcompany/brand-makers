"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // Scroll to the anchored element
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "instant", block: "start" });
        }
      });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, searchParams]);

  return null;
}
