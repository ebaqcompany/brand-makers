"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

type HomeHeroVideo = {
  id: number;
  src: string;
  textStartAt: number;
  kind?: "video" | "frames";
  frameCount?: number;
  frameRate?: number;
  poster?: string;
  fallbackSrc?: string;
  fallbackPoster?: string;
  mobileSrc?: string;
  mobilePoster?: string;
  vignette?: boolean;
};

const DEFAULT_HERO_ITEM: HomeHeroVideo = {
  id: 7,
  src: "/hero-stopmotion-transparent/frame-001.webp",
  kind: "frames",
  frameCount: 74,
  frameRate: 8,
  fallbackSrc: "/hero-stopmotion-flat.mp4",
  poster: "/hero-stopmotion-flat-poster.webp",
  fallbackPoster: "/hero-stopmotion-flat-poster.webp",
  textStartAt: 8.75,
  vignette: true,
};
const BRAND_HERO_BACKGROUND = "#00A1E1";
const FALLBACK_VIDEO_BACKGROUND = "#00A0E0";
const INITIAL_SEQUENCE_HOLD_MS = 1500;
const TITLE_HOLD_MS = 4200;
const WEBP_SUPPORT_TEST_IMAGE =
  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";

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

function getFrameSources(item: HomeHeroVideo) {
  return Array.from({ length: item.frameCount || 1 }, (_, index) =>
    getFrameSrc(item, index)
  );
}

function preloadFrame(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    img.decoding = "sync";
    img.onload = () => {
      if (typeof img.decode === "function") {
        img.decode()
          .then(finish)
          .catch(finish);
      } else {
        finish();
      }
    };
    img.onerror = finish;
    img.src = src;

    if (img.complete) {
      if (typeof img.decode === "function") {
        img.decode()
          .then(finish)
          .catch(finish);
      } else {
        finish();
      }
    }
  });
}

function supportsWebP() {
  return new Promise<boolean>((resolve) => {
    const img = new Image();

    img.onload = () => resolve(img.width === 1 && img.height === 1);
    img.onerror = () => resolve(false);
    img.src = WEBP_SUPPORT_TEST_IMAGE;
  });
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
  const framesReadyRef = useRef(false);
  const frameStartedAtRef = useRef<number | null>(null);
  const previousFrameRef = useRef(-1);
  const [useVideoFallback, setUseVideoFallback] = useState(false);
  const activeHeroItem = useMemo<HomeHeroVideo>(() => {
    const fallbackSrc = heroItem.fallbackSrc || heroItem.mobileSrc;
    const fallbackPoster =
      heroItem.fallbackPoster || heroItem.mobilePoster || heroItem.poster;

    if (!useVideoFallback || !fallbackSrc) {
      return heroItem;
    }

    return {
      ...heroItem,
      src: fallbackSrc,
      kind: "video",
      poster: fallbackPoster,
    };
  }, [heroItem, useVideoFallback]);
  const heroItemRef = useRef(activeHeroItem);
  const [frameIndex, setFrameIndex] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    setUseVideoFallback(false);

    supportsWebP().then((isSupported) => {
      if (isCancelled || isSupported) return;
      setUseVideoFallback(Boolean(heroItem.fallbackSrc || heroItem.mobileSrc));
    });

    return () => {
      isCancelled = true;
    };
  }, [heroItem]);

  useEffect(() => {
    heroItemRef.current = activeHeroItem;
    pendingProgressRef.current = 0;
    holdStartedAtRef.current = null;
    previousFrameRef.current = -1;
    framesReadyRef.current = false;
    setTextProgress(0);

    if (!isFrameSequence(activeHeroItem)) {
      framesReadyRef.current = true;
      frameStartedAtRef.current = null;
      setFrameIndex(0);
      return;
    }

    const sequenceDurationMs = getSequenceDuration(activeHeroItem) * 1000;
    frameStartedAtRef.current = null;
    setFrameIndex(getFrameIndex(activeHeroItem, pendingProgressRef.current * sequenceDurationMs));

    let isCancelled = false;

    Promise.all(getFrameSources(activeHeroItem).map(preloadFrame)).then(() => {
      if (isCancelled) return;

      framesReadyRef.current = true;
      frameStartedAtRef.current = performance.now() + INITIAL_SEQUENCE_HOLD_MS;
      previousFrameRef.current = -1;
      setFrameIndex(0);
    });

    return () => {
      isCancelled = true;
    };
  }, [activeHeroItem]);

  useEffect(() => {
    const animate = () => {
      const activeItem = heroItemRef.current;
      const video = videoRef.current;

      if (isFrameSequence(activeItem)) {
        const now = performance.now();
        if (!framesReadyRef.current) {
          setTextProgress(0);
          rafRef.current = requestAnimationFrame(animate);
          return;
        }

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
      style={{
        backgroundColor: isFrameSequence(activeHeroItem)
          ? BRAND_HERO_BACKGROUND
          : FALLBACK_VIDEO_BACKGROUND,
      }}
    >
      {isFrameSequence(activeHeroItem) ? (
        <img
          key={activeHeroItem.src}
          src={getFrameSrc(activeHeroItem, frameIndex)}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="sync"
          draggable={false}
          className="absolute inset-0 h-full w-full scale-[1.14] object-contain object-center md:scale-100"
        />
      ) : (
        <video
          ref={videoRef}
          key={activeHeroItem.src}
          src={activeHeroItem.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={activeHeroItem.poster}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.14] object-contain object-center md:scale-100"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* CSS vignette sits above the flat-background MP4 and below the animated hero text. */}
      {activeHeroItem.vignette && (
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
