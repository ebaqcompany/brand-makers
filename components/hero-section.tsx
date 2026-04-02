"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowDown } from "lucide-react";

const FIRST_FRAME = 3;
const LAST_FRAME = 58;
const FRAME_COUNT = LAST_FRAME - FIRST_FRAME + 1;
const SCROLL_VH = 1.5;

function getFrameSrc(index: number) {
  return `/hero-frames/frame-${String(index).padStart(3, "0")}.jpg`;
}

export function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = FIRST_FRAME; i <= LAST_FRAME; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedRef.current++;
        if (i === FIRST_FRAME) paintFrame(0);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  const paintFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width * dpr;
    const h = rect.height * dpr;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    // Cover: fill canvas, crop overflow, centered
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;

    let drawW: number, drawH: number, drawX: number, drawY: number;
    if (imgAspect > canvasAspect) {
      // Image wider than canvas — fit by height, crop sides
      drawH = h;
      drawW = h * imgAspect;
      drawX = (w - drawW) / 2;
      drawY = 0;
    } else {
      // Image taller than canvas — fit by width, crop top/bottom
      drawW = w;
      drawH = w / imgAspect;
      drawX = 0;
      drawY = (h - drawH) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  const handleScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const scrollable = wrapper.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
    const frameIndex = Math.min(
      Math.floor(progress * FRAME_COUNT),
      FRAME_COUNT - 1
    );

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => paintFrame(frameIndex));
  }, [paintFrame]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const totalHeight = `calc(100svh * ${1 + SCROLL_VH})`;

  return (
    <div ref={wrapperRef} style={{ height: totalHeight }}>
      <section
        className="sticky top-0 w-full overflow-hidden"
        style={{
          backgroundColor: "#F0F0F0",
          height: "100svh",
        }}
      >
        {/* Frame canvas — cover, fills entire section */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Top gradient to separate navbar from image */}
        <div
          className="absolute inset-x-0 top-0"
          style={{ height: "18%", background: "linear-gradient(to bottom, #F0F0F0 0%, transparent 100%)" }}
        />

        {/* Bottom gradient for text readability */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: "35%", background: "linear-gradient(to top, #F0F0F0 0%, #F0F0F0 15%, transparent 100%)" }}
        />

        {/* Bottom bar: headline left, arrow right */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 max-w-[1200px] mx-auto px-6"
          style={{
            paddingBottom: "clamp(32px, 5vw, 56px)",
          }}
        >
          <div className="flex items-end justify-between gap-8">
            <h1
              style={{
                fontFamily: "var(--font-sans, Inter, sans-serif)",
                fontWeight: 400,
                fontSize: "clamp(40px, 7vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "clamp(-2px, -0.05em, -4px)",
                color: "#323E48",
                margin: 0,
              }}
            >
              We Make Your
              <br />
              Brand Look Good
            </h1>

            <a
              href="#services"
              aria-label="Scroll down"
              className="animate-bounce shrink-0 cursor-pointer"
              style={{ color: "#323E48" }}
            >
              <ArrowDown
                strokeWidth={2}
                style={{ width: "clamp(32px, 4vw, 48px)", height: "clamp(32px, 4vw, 48px)" }}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
