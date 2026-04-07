"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the hash from the URL
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  useIsomorphicLayoutEffect(() => {
    // If there's a hash (e.g. #retail-brand-partners), let the browser handle scrolling to it
    if (hash) return;

    // Otherwise force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, searchParams, hash]);

  return null;
}
