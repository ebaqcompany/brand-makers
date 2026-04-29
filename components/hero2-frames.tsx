"use client";

import { useEffect, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

const FRAME_COUNT = 71;
const FRAME_RATE = 8;
const TEXT_START_PROGRESS = 0.86;
const TITLE_HOLD_MS = 3000;
const FRAME_DURATION_MS = 1000 / FRAME_RATE;
const SEQUENCE_DURATION_MS = FRAME_COUNT * FRAME_DURATION_MS;
const LOOP_DURATION_MS = SEQUENCE_DURATION_MS + TITLE_HOLD_MS;
const TEXT_START_MS = SEQUENCE_DURATION_MS * TEXT_START_PROGRESS;
const TEXT_DURATION_MS = LOOP_DURATION_MS - TEXT_START_MS;

function getFrameSrc(index: number) {
  return `/hero-stopmotion-webp/frame-${String(index + 1).padStart(3, "0")}.webp`;
}

const HERO_FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) =>
  getFrameSrc(index)
);

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function getFrameIndex(elapsed: number) {
  if (elapsed >= SEQUENCE_DURATION_MS) return FRAME_COUNT - 1;
  return Math.min(Math.floor(elapsed / FRAME_DURATION_MS), FRAME_COUNT - 1);
}

export function Hero2Frames() {
  const rafRef = useRef<number>(0);
  const previousFrameRef = useRef(-1);
  const [textProgress, setTextProgress] = useState(0);
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
      const nextFrame = getFrameIndex(elapsed);

      if (nextFrame !== previousFrameRef.current) {
        previousFrameRef.current = nextFrame;
        setFrameIndex(nextFrame);
      }

      setTextProgress(
        clamp((elapsed - TEXT_START_MS) / TEXT_DURATION_MS)
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[100svh]" style={{ backgroundColor: "#00A1E1" }}>
      <img
        src={HERO_FRAMES[frameIndex]}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="sync"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <HeroTextOverlay progress={textProgress} />
    </section>
  );
}
