"use client";

import { useEffect, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

const FRAME_COUNT = 32;
const FRAME_RATE = 4;
const TEXT_START_PROGRESS = 0.93;
const FRAME_DURATION_MS = 1000 / FRAME_RATE;

function getFrameSrc(index: number) {
  return `/hero-stopmotion-webp/frame-${String(index + 1).padStart(3, "0")}.webp`;
}

const HERO_FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) =>
  getFrameSrc(index)
);
const FRAME_DURATIONS = Array.from(
  { length: FRAME_COUNT },
  () => FRAME_DURATION_MS
);
const LOOP_FRAMES = Array.from({ length: FRAME_COUNT }, (_, index) => index);
const LOOP_FRAME_DURATIONS = LOOP_FRAMES.map(
  (frameIndex) => FRAME_DURATIONS[frameIndex]
);
const LOOP_FRAME_STARTS = LOOP_FRAME_DURATIONS.reduce<number[]>(
  (starts, duration) => {
    starts.push((starts.at(-1) ?? 0) + duration);
    return starts;
  },
  [0]
);
const LOOP_DURATION_MS = LOOP_FRAME_DURATIONS.reduce(
  (total, duration) => total + duration,
  0
);
const TEXT_START_FRAME = Math.round(TEXT_START_PROGRESS * (FRAME_COUNT - 1));
const TEXT_START_MS = LOOP_FRAME_STARTS[TEXT_START_FRAME];
const TEXT_END_MS =
  LOOP_FRAME_STARTS[FRAME_COUNT - 1] + FRAME_DURATIONS[FRAME_COUNT - 1];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function getLoopFrameState(elapsed: number) {
  for (let sequenceIndex = 0; sequenceIndex < LOOP_FRAMES.length; sequenceIndex++) {
    if (elapsed < LOOP_FRAME_STARTS[sequenceIndex + 1]) {
      return {
        sequenceIndex,
        frameIndex: LOOP_FRAMES[sequenceIndex],
        frameElapsed: elapsed - LOOP_FRAME_STARTS[sequenceIndex],
      };
    }
  }

  return {
    sequenceIndex: 0,
    frameIndex: 0,
    frameElapsed: 0,
  };
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
      const { sequenceIndex, frameIndex: nextFrame, frameElapsed } =
        getLoopFrameState(elapsed);
      const forwardElapsed = LOOP_FRAME_STARTS[sequenceIndex] + frameElapsed;

      if (nextFrame !== previousFrameRef.current) {
        previousFrameRef.current = nextFrame;
        setFrameIndex(nextFrame);
      }

      setTextProgress(
        clamp((forwardElapsed - TEXT_START_MS) / (TEXT_END_MS - TEXT_START_MS))
      );
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

      <HeroTextOverlay progress={textProgress} />
    </section>
  );
}
