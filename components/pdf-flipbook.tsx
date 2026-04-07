"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DARK = "#323E48";
const BLUE = "#00A1E1";

interface PdfFlipbookProps {
  basePath: string;
  totalPages: number;
  title?: string;
}

function getPageSrc(basePath: string, page: number, totalPages: number) {
  const padLen = String(totalPages).length;
  return `${basePath}-${String(page).padStart(padLen, "0")}.jpg`;
}

export function PdfFlipbook({ basePath, totalPages, title }: PdfFlipbookProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) setCurrentPage(page);
    },
    [totalPages]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(currentPage + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(currentPage - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentPage, goTo]);

  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const active = container.querySelector("[data-active='true']");
    if (active) {
      active.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [currentPage]);

  const pageSrc = getPageSrc(basePath, currentPage, totalPages);

  return (
    <>
      {/* Mobile layout: caption, title, big image with arrows, then thumbnails */}
      <div className="flex flex-col gap-6 md:hidden">
        <div>
          <a href="/look-books" className="mb-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[2px] transition-opacity hover:opacity-70" style={{ color: BLUE }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
            All Look Books
          </a>
          <h1
            className="text-[36px] leading-[1.1] tracking-[-3px]"
            style={{ color: DARK }}
          >
            {title}
          </h1>
        </div>

        {/* Big image with arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage <= 1}
            className="shrink-0 p-1 transition-opacity hover:opacity-70 disabled:opacity-15"
            style={{ color: DARK }}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-8 w-8" strokeWidth={1.5} />
          </button>

          <div className="flex-1 overflow-hidden rounded-xl shadow-lg">
            <img
              src={pageSrc}
              alt={`Page ${currentPage} of ${totalPages}`}
              className="w-full h-auto block select-none"
              draggable={false}
            />
          </div>

          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="shrink-0 p-1 transition-opacity hover:opacity-70 disabled:opacity-15"
            style={{ color: DARK }}
            aria-label="Next page"
          >
            <ChevronRight className="h-8 w-8" strokeWidth={1.5} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap content-start gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              className={`w-[calc(25%-6px)] overflow-hidden rounded-lg border-2 transition-all ${
                page === currentPage
                  ? "border-[#00A1E1] shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={getPageSrc(basePath, page, totalPages)}
                alt={`Page ${page}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop layout: left (title + thumbnails), right (big image) */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
        {/* Left column */}
        <div>
          <a href="/look-books" className="mb-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[2px] transition-opacity hover:opacity-70" style={{ color: BLUE }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
            All Look Books
          </a>
          <h1
            className="mb-8 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            {title}
          </h1>

          <div
            ref={thumbsRef}
            className="flex flex-wrap content-start gap-2 max-h-[60vh] overflow-y-auto pr-2"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                data-active={page === currentPage}
                onClick={() => goTo(page)}
                className={`w-[calc(20%-6.4px)] overflow-hidden rounded-lg border-2 transition-all ${
                  page === currentPage
                    ? "border-[#00A1E1] shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={getPageSrc(basePath, page, totalPages)}
                  alt={`Page ${page}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right column: preview — sticky at top */}
        <div className="sticky top-20 overflow-hidden rounded-xl shadow-lg">
          <img
            src={pageSrc}
            alt={`Page ${currentPage} of ${totalPages}`}
            className="w-full h-auto block select-none"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
