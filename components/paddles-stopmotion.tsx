"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 3;
const FRAME_RATE = 4;
const FRAME_DURATION_MS = 1000 / FRAME_RATE;
const FRAMES = Array.from(
  { length: FRAME_COUNT },
  (_, index) =>
    `/custom-merch/paddles-stopmotion/frame-${String(index + 1).padStart(
      3,
      "0"
    )}.webp`
);

function getFrameIndex(elapsedMs: number) {
  return Math.floor(elapsedMs / FRAME_DURATION_MS) % FRAME_COUNT;
}

export function PaddlesStopMotion() {
  const rafRef = useRef<number>(0);
  const previousFrameRef = useRef(-1);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    let startedAt: number | null = null;

    const animate = (now: number) => {
      if (startedAt === null) startedAt = now;

      const nextFrame = getFrameIndex(now - startedAt);
      if (nextFrame !== previousFrameRef.current) {
        previousFrameRef.current = nextFrame;
        setFrameIndex(nextFrame);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <img
      src={FRAMES[frameIndex]}
      alt=""
      className="h-auto w-full"
      loading="eager"
      decoding="sync"
      draggable={false}
    />
  );
}
