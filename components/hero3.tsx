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
  src: "/hero-stopmotion-transparent-pro/frame-001.webp",
  kind: "frames",
  frameCount: 85,
  frameRate: 8,
  fallbackSrc: "/hero-stopmotion-flat.mp4",
  poster: "/hero-stopmotion-flat-poster.webp",
  fallbackPoster: "/hero-stopmotion-flat-poster.webp",
  textStartAt: 10.125,
  vignette: true,
};
const BRAND_HERO_BACKGROUND = "#00A1E1";
const FALLBACK_VIDEO_BACKGROUND = "#00A0E0";
const INITIAL_SEQUENCE_HOLD_MS = 0;
const TITLE_HOLD_MS = 4200;
const LOADER_CYCLE_MS = 3000;
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

function HeroFrameLoader({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[3] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="brandmakers-preloader">
        <svg
          viewBox="0 0 159.3 158.6"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <mask id="hero-top-reveal-mask" maskUnits="userSpaceOnUse">
              <rect width="159.3" height="158.6" fill="#000000" />
              <path
                className="reveal-stroke top-reveal"
                pathLength="1"
                d="M6.9,22.3c69.9,0,55.5,0,89.8,0c47.2,0,49.4,57,0,57H48.9"
              />
            </mask>

            <mask id="hero-middle-reveal-mask" maskUnits="userSpaceOnUse">
              <rect width="159.3" height="158.6" fill="#000000" />
              <path
                className="reveal-stroke middle-reveal"
                pathLength="1"
                d="M96.7,79.3c49.4,0,47.2,57,0,57c-34.3,0-47.8,0-47.8,0"
              />
            </mask>

            <mask id="hero-stem-reveal-mask" maskUnits="userSpaceOnUse">
              <rect width="159.3" height="158.6" fill="#000000" />
              <line
                className="reveal-stroke stem-reveal"
                pathLength="1"
                x1="24.1"
                y1="152.3"
                x2="24.1"
                y2="46.7"
              />
            </mask>
          </defs>

          <g mask="url(#hero-top-reveal-mask)">
            <path
              className="logo-shape"
              d="M6.9 38.3C6.9 20.63 21.23 6.3 38.9 6.3H96.7C128.95 6.3 146.1 25.1 146.1 50.8C146.1 76.5 128.85 95.3 96.7 95.3H80.7V63.3H96.7C117.35 63.3 117.35 38.3 96.7 38.3H6.9Z"
            />
            <path
              className="logo-shape"
              d="M48.9 63.3H100.8V95.3H48.9Z"
            />
          </g>

          <g mask="url(#hero-middle-reveal-mask)">
            <path
              className="logo-shape"
              d="M48.9 152.3V120.3H96.7C117.35 120.3 117.35 95.3 96.7 95.3H48.9V63.3H100.8C132.9 63.3 146.1 84.8 146.1 108.8C146.1 133.7 128.95 152.3 96.7 152.3H48.9Z"
            />
          </g>

          <g mask="url(#hero-stem-reveal-mask)">
            <path
              className="logo-shape"
              d="M7.1 46.7H41.1V152.3H41.1C22.32 152.3 7.1 137.08 7.1 118.3V46.7Z"
            />
          </g>
        </svg>
      </div>
      <style jsx>{`
        .brandmakers-preloader {
          aspect-ratio: 1;
          width: min(24vw, 150px);
          min-width: 88px;
          animation: preloader-cycle-fade 3s linear infinite;
        }

        .brandmakers-preloader svg {
          display: block;
          height: 100%;
          overflow: visible;
          width: 100%;
        }

        .logo-shape {
          fill: #ffffff;
        }

        .reveal-stroke {
          fill: none;
          opacity: 0;
          stroke: #ffffff;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          stroke-linecap: butt;
          stroke-linejoin: round;
          stroke-width: 78;
        }

        .top-reveal {
          animation: draw-top 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .middle-reveal {
          animation: draw-middle 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .stem-reveal {
          animation: draw-stem 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes draw-top {
          0% {
            opacity: 1;
            stroke-dashoffset: 1;
          }

          34%,
          92%,
          100% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-middle {
          0%,
          33.9% {
            opacity: 0;
            stroke-dashoffset: 1;
          }

          34% {
            opacity: 1;
            stroke-dashoffset: 1;
          }

          68%,
          92%,
          100% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-stem {
          0%,
          67.9% {
            opacity: 0;
            stroke-dashoffset: 1;
          }

          68% {
            opacity: 1;
            stroke-dashoffset: 1;
          }

          90%,
          92%,
          100% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }

        @keyframes preloader-cycle-fade {
          0%,
          92% {
            opacity: 1;
          }

          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
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
  const [framesReady, setFramesReady] = useState(false);
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
    setFramesReady(false);
    setTextProgress(0);

    if (!isFrameSequence(activeHeroItem)) {
      framesReadyRef.current = true;
      setFramesReady(true);
      frameStartedAtRef.current = null;
      setFrameIndex(0);
      return;
    }

    const sequenceDurationMs = getSequenceDuration(activeHeroItem) * 1000;
    frameStartedAtRef.current = null;
    setFrameIndex(getFrameIndex(activeHeroItem, pendingProgressRef.current * sequenceDurationMs));

    let isCancelled = false;
    let framesLoaded = false;
    let loaderCycleFinished = false;
    let loaderCycleTimer: number | null = null;

    const startSequence = () => {
      if (isCancelled || !framesLoaded || !loaderCycleFinished) return;

      framesReadyRef.current = true;
      setFramesReady(true);
      frameStartedAtRef.current = performance.now() + INITIAL_SEQUENCE_HOLD_MS;
      previousFrameRef.current = -1;
      setFrameIndex(0);
    };

    Promise.all(getFrameSources(activeHeroItem).map(preloadFrame)).then(() => {
      if (isCancelled) return;

      framesLoaded = true;
      startSequence();
    });

    loaderCycleTimer = window.setTimeout(() => {
      loaderCycleFinished = true;
      startSequence();
    }, LOADER_CYCLE_MS);

    return () => {
      isCancelled = true;
      if (loaderCycleTimer !== null) {
        window.clearTimeout(loaderCycleTimer);
      }
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
      {isFrameSequence(activeHeroItem) && framesReady ? (
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
      ) : !isFrameSequence(activeHeroItem) ? (
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
      ) : null}

      {/* CSS vignette sits above the hero background and below the loader/text. */}
      {activeHeroItem.vignette && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 35%, rgba(0,50,80,0.5) 100%)",
          }}
        />
      )}

      <HeroFrameLoader isVisible={isFrameSequence(activeHeroItem) && !framesReady} />

      {framesReady && (
        <HeroTextOverlay progress={textProgress} lineOne={lineOne} lineTwo={lineTwo} />
      )}
    </section>
  );
}
