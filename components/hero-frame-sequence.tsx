"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 32;
const FRAME_RATE = 8;
const LOOP_DURATION_MS = (FRAME_COUNT / FRAME_RATE) * 1000;

function getFrameSrc(index: number) {
  return `/hero-stopmotion-webp/frame-${String(index + 1).padStart(3, "0")}.webp`;
}

const HERO_FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) =>
  getFrameSrc(index)
);

export function HeroFrameSequence() {
  const rafRef = useRef<number>(0);
  const previousFrameRef = useRef(-1);
  const [showText, setShowText] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    HERO_FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    let startedAt: number | null = null;

    const animate = (now: number) => {
      if (startedAt === null) startedAt = now;

      const elapsed = (now - startedAt) % LOOP_DURATION_MS;
      const progress = elapsed / LOOP_DURATION_MS;
      const nextFrame = Math.min(
        Math.floor(progress * FRAME_COUNT),
        FRAME_COUNT - 1
      );

      if (nextFrame !== previousFrameRef.current) {
        previousFrameRef.current = nextFrame;
        setFrameIndex(nextFrame);
        setShowText(progress >= 0.28 && progress < 0.72);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[100svh]" style={{ backgroundColor: "#1AABE5" }}>
      <img
        src={HERO_FRAMES[frameIndex]}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="sync"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="overflow-hidden">
            <h1
              className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                fontFamily: "var(--font-sans, Inter, sans-serif)",
                fontWeight: 400,
                fontSize: "clamp(48px, 9vw, 100px)",
                lineHeight: 1.0,
                letterSpacing: "-0.05em",
                color: "#FFFFFF",
                transform: showText ? "translateY(0)" : "translateY(110%)",
              }}
            >
              We Make Your
            </h1>
          </div>
          <div className="overflow-hidden mt-1">
            <h1
              className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                fontFamily: "var(--font-sans, Inter, sans-serif)",
                fontWeight: 400,
                fontSize: "clamp(48px, 9vw, 100px)",
                lineHeight: 1.0,
                letterSpacing: "-0.05em",
                color: "#FFFFFF",
                transform: showText ? "translateY(0)" : "translateY(-110%)",
                transitionDelay: showText ? "0.1s" : "0s",
              }}
            >
              Brand Look Good
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
