"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "eager" | "lazy";
  draggable?: boolean;
}

export function ImageLightbox({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  draggable,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close image preview"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white text-[#323E48] shadow-lg transition-opacity hover:opacity-85"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={cn("block h-full w-full cursor-zoom-in text-left", className)}
        onClick={() => setOpen(true)}
        aria-label={`Open larger image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          loading={loading}
          draggable={draggable}
        />
      </button>
      {overlay}
    </>
  );
}
