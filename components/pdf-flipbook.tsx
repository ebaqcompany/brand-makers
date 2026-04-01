"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DARK = "#323E48";

interface PdfFlipbookProps {
  basePath: string;
  totalPages: number;
  title?: string;
}

function PageInfo({
  currentPage,
  totalPages,
  goTo,
}: {
  currentPage: number;
  totalPages: number;
  goTo: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: DARK }}>
      <input
        type="number"
        min={1}
        max={totalPages}
        value={currentPage}
        onChange={(e) => {
          const v = parseInt(e.target.value, 10);
          if (!isNaN(v)) goTo(v);
        }}
        className="w-14 rounded border border-gray-300 px-2 py-1 text-center text-sm"
      />
      <span>of {totalPages}</span>
    </div>
  );
}

export function PdfFlipbook({ basePath, totalPages, title }: PdfFlipbookProps) {
  const [currentPage, setCurrentPage] = useState(1);

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

  const padLen = String(totalPages).length;
  const pageSrc = `${basePath}-${String(currentPage).padStart(padLen, "0")}.jpg`;

  return (
    <div className="flex flex-col items-center gap-4">
      {title && (
        <h3 className="text-center text-lg font-medium" style={{ color: DARK }}>
          {title}
        </h3>
      )}

      {/* Top page info */}
      <PageInfo currentPage={currentPage} totalPages={totalPages} goTo={goTo} />

      {/* Viewer with side arrows */}
      <div className="flex w-full items-center gap-2 md:gap-4">
        {/* Left arrow */}
        <button
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage <= 1}
          className="shrink-0 p-2 transition-opacity hover:opacity-70 disabled:opacity-15"
          style={{ color: DARK }}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-10 w-10 md:h-14 md:w-14" strokeWidth={1.5} />
        </button>

        {/* Page image */}
        <div className="relative flex-1 overflow-hidden rounded-xl shadow-lg">
          <img
            src={pageSrc}
            alt={`Page ${currentPage} of ${totalPages}`}
            className="w-full h-auto block select-none"
            draggable={false}
          />
        </div>

        {/* Right arrow */}
        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="shrink-0 p-2 transition-opacity hover:opacity-70 disabled:opacity-15"
          style={{ color: DARK }}
          aria-label="Next page"
        >
          <ChevronRight className="h-10 w-10 md:h-14 md:w-14" strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom page info */}
      <PageInfo currentPage={currentPage} totalPages={totalPages} goTo={goTo} />
    </div>
  );
}
