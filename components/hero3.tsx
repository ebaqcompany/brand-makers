"use client";

import { useEffect, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

type HomeHeroVideo = {
  id: number;
  src: string;
  textStartAt: number;
  kind?: "video" | "frames";
  frameCount?: number;
  frameRate?: number;
  poster?: string;
  vignette?: boolean;
};

const DEFAULT_HERO_ITEM: HomeHeroVideo = {
  id: 7,
  src: "/hero-stopmotion-flat.mp4",
  kind: "video",
  frameCount: 74,
  frameRate: 8,
  poster: "/hero-stopmotion-flat-poster.webp",
  textStartAt: 10.15,
  vignette: false,
};
const INITIAL_SEQUENCE_HOLD_MS = 1500;
const TITLE_HOLD_MS = 4200;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function isFrameSequence(item: HomeHeroVideo) {
  return item.kind === "frames";
}

function getFrameSrc(item: HomeHeroVideo, index: number) {
  const prefix = item.src.replace(/frame-\d+\.webp$/, "frame-");
  return `${prefix}${String(index + 1).padStart(3, "0")}.webp`;
}

function getSequenceDuration(item: HomeHeroVideo, videoDuration = 0) {
  if (isFrameSequence(item)) {
    return (item.frameCount || 1) / (item.frameRate || 8);
  }

  return Number.isFinite(videoDuration) ? videoDuration : 0;
}

function getFrameIndex(item: HomeHeroVideo, elapsedMs: number) {
  const frameCount = item.frameCount || 1;
  const frameRate = item.frameRate || 8;
  const frameDurationMs = 1000 / frameRate;
  const safeElapsedMs = Math.max(elapsedMs, 0);

  return Math.min(Math.floor(safeElapsedMs / frameDurationMs), frameCount - 1);
}

type Hero3Props = {
  lineOne?: string;
  lineTwo?: string;
  videos?: HomeHeroVideo[];
};

export function Hero3({ lineOne, lineTwo, videos = [DEFAULT_HERO_ITEM] }: Hero3Props) {
  const heroItem =
    videos.find((item) => item.id === DEFAULT_HERO_ITEM.id) ||
    videos[0] ||
    DEFAULT_HERO_ITEM;
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const pendingProgressRef = useRef(0);
  const holdStartedAtRef = useRef<number | null>(null);
  const frameStartedAtRef = useRef<number | null>(null);
  const previousFrameRef = useRef(-1);
  const heroItemRef = useRef(heroItem);
  const [frameIndex, setFrameIndex] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    heroItemRef.current = heroItem;
    pendingProgressRef.current = 0;
    holdStartedAtRef.current = null;
    previousFrameRef.current = -1;
    setTextProgress(0);

    if (!isFrameSequence(heroItem)) {
      frameStartedAtRef.current = null;
      setFrameIndex(0);
      return;
    }

    const sequenceDurationMs = getSequenceDuration(heroItem) * 1000;
    const now = performance.now();
    frameStartedAtRef.current = now + INITIAL_SEQUENCE_HOLD_MS;
    setFrameIndex(getFrameIndex(heroItem, pendingProgressRef.current * sequenceDurationMs));
  }, [heroItem]);

  useEffect(() => {
    const animate = () => {
      const activeItem = heroItemRef.current;
      const video = videoRef.current;

      if (isFrameSequence(activeItem)) {
        const now = performance.now();
        if (frameStartedAtRef.current === null) {
          frameStartedAtRef.current = now - pendingProgressRef.current * getSequenceDuration(activeItem) * 1000;
        }

        const sequenceDuration = getSequenceDuration(activeItem);
        const sequenceDurationMs = sequenceDuration * 1000;
        const rawElapsedMs = now - frameStartedAtRef.current;
        const elapsedMs = Math.max(rawElapsedMs, 0);
        const holdStartedAt = holdStartedAtRef.current;
        const holdElapsedMs =
          holdStartedAt === null ? 0 : now - holdStartedAt;
        const timelineSeconds =
          holdStartedAt === null
            ? Math.min(elapsedMs, sequenceDurationMs) / 1000
            : sequenceDuration + holdElapsedMs / 1000;
        const nextFrame = getFrameIndex(activeItem, Math.min(elapsedMs, sequenceDurationMs - 1));

        if (nextFrame !== previousFrameRef.current) {
          previousFrameRef.current = nextFrame;
          setFrameIndex(nextFrame);
        }

        if (elapsedMs >= sequenceDurationMs && holdStartedAt === null) {
          holdStartedAtRef.current = now;
        }

        const textEndAt = sequenceDuration + TITLE_HOLD_MS / 1000;
        setTextProgress(
          clamp((timelineSeconds - activeItem.textStartAt) / (textEndAt - activeItem.textStartAt))
        );

        if (holdStartedAt !== null && holdElapsedMs >= TITLE_HOLD_MS) {
          holdStartedAtRef.current = null;
          pendingProgressRef.current = 0;
          frameStartedAtRef.current = now;
          previousFrameRef.current = -1;
          setFrameIndex(0);
        }
      } else if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const holdStartedAt = holdStartedAtRef.current;
        const holdElapsedMs =
          holdStartedAt === null ? 0 : performance.now() - holdStartedAt;
        const timelineSeconds =
          holdStartedAt === null
            ? video.currentTime
            : video.duration + holdElapsedMs / 1000;
        const textStartAt = heroItemRef.current.textStartAt;
        const textEndAt = video.duration + TITLE_HOLD_MS / 1000;

        setTextProgress(
          clamp((timelineSeconds - textStartAt) / (textEndAt - textStartAt))
        );

        if (holdStartedAt !== null && holdElapsedMs >= TITLE_HOLD_MS) {
          holdStartedAtRef.current = null;
          pendingProgressRef.current = 0;
          video.currentTime = 0;
          video.play().catch(() => undefined);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function handleLoadedMetadata() {
    const video = videoRef.current;
    if (!video) return;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = pendingProgressRef.current * video.duration;
    }

    holdStartedAtRef.current = null;
    video.play().catch(() => undefined);
  }

  function handleEnded() {
    holdStartedAtRef.current = performance.now();
  }

  return (
    <section
      className="relative h-[clamp(320px,62svh,520px)] w-full overflow-hidden md:h-[100svh]"
      style={{ backgroundColor: "#00A1E1" }}
    >
      {isFrameSequence(heroItem) ? (
        <img
          key={heroItem.src}
          src={getFrameSrc(heroItem, frameIndex)}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="sync"
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      ) : (
        <video
          ref={videoRef}
          key={heroItem.src}
          src={heroItem.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={heroItem.poster}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-center"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Vignette overlay is intentionally disabled for the flat-background MP4; set vignette to true to restore it. */}
      {heroItem.vignette && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 35%, rgba(0,50,80,0.5) 100%)",
          }}
        />
      )}

      <HeroTextOverlay progress={textProgress} lineOne={lineOne} lineTwo={lineTwo} />
    </section>
  );
}
