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
  vignette?: boolean;
};

const HERO_VIDEOS: HomeHeroVideo[] = [
  { id: 1, src: "/hero-stopmotion-videos/stopmotion1.mp4", textStartAt: 4.85 },
  { id: 2, src: "/hero-stopmotion-videos/stopmotion2.mp4", textStartAt: 3.88 },
  { id: 3, src: "/hero-stopmotion-videos/stopmotion3.mp4", textStartAt: 8.65 },
  {
    id: 4,
    src: "/hero-stopmotion-clean-background-webp/frame-001.webp",
    kind: "frames",
    frameCount: 72,
    frameRate: 8,
    textStartAt: 8.65,
  },
  {
    id: 5,
    src: "/hero-stopmotion-clean-background-expanded-backup/frame-001.webp",
    kind: "frames",
    frameCount: 72,
    frameRate: 8,
    textStartAt: 8.65,
  },
  {
    id: 6,
    src: "/hero-stopmotion-transparent/frame-001.webp",
    kind: "frames",
    frameCount: 72,
    frameRate: 8,
    textStartAt: 8.65,
  },
  {
    id: 7,
    src: "/hero-stopmotion-transparent/frame-001.webp",
    kind: "frames",
    frameCount: 72,
    frameRate: 8,
    textStartAt: 8.65,
    vignette: true,
  },
];
const TITLE_HOLD_MS = 3000;

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

  return Math.min(Math.floor(elapsedMs / frameDurationMs), frameCount - 1);
}

type Hero3Props = {
  lineOne?: string;
  lineTwo?: string;
  videos?: HomeHeroVideo[];
};

export function Hero3({ lineOne, lineTwo, videos = HERO_VIDEOS }: Hero3Props) {
  const heroItems = useMemo(() => {
    const items = videos.length ? videos : HERO_VIDEOS;
    const missingFallbackItems = HERO_VIDEOS.filter(
      (fallbackItem) =>
        fallbackItem.id >= 4 &&
        !items.some((item) => item.id === fallbackItem.id)
    );

    return missingFallbackItems.length ? [...items, ...missingFallbackItems] : items;
  }, [videos]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const pendingProgressRef = useRef(0);
  const holdStartedAtRef = useRef<number | null>(null);
  const frameStartedAtRef = useRef<number | null>(null);
  const previousFrameRef = useRef(-1);
  const activeVideoRef = useRef(heroItems[2] || heroItems[0] || HERO_VIDEOS[2]);
  const [activeVideo, setActiveVideo] = useState(heroItems[2] || heroItems[0] || HERO_VIDEOS[2]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    activeVideoRef.current = activeVideo;
  }, [activeVideo]);

  useEffect(() => {
    const animate = () => {
      const activeItem = activeVideoRef.current;
      const video = videoRef.current;

      if (isFrameSequence(activeItem)) {
        const now = performance.now();
        if (frameStartedAtRef.current === null) {
          frameStartedAtRef.current = now - pendingProgressRef.current * getSequenceDuration(activeItem) * 1000;
        }

        const sequenceDuration = getSequenceDuration(activeItem);
        const sequenceDurationMs = sequenceDuration * 1000;
        const rawElapsedMs = now - frameStartedAtRef.current;
        const holdStartedAt = holdStartedAtRef.current;
        const holdElapsedMs =
          holdStartedAt === null ? 0 : now - holdStartedAt;
        const timelineSeconds =
          holdStartedAt === null
            ? Math.min(rawElapsedMs, sequenceDurationMs) / 1000
            : sequenceDuration + holdElapsedMs / 1000;
        const nextFrame = getFrameIndex(activeItem, Math.min(rawElapsedMs, sequenceDurationMs - 1));

        if (nextFrame !== previousFrameRef.current) {
          previousFrameRef.current = nextFrame;
          setFrameIndex(nextFrame);
        }

        if (rawElapsedMs >= sequenceDurationMs && holdStartedAt === null) {
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
        const textStartAt = activeVideoRef.current.textStartAt;
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

  useEffect(() => {
    const video = videoRef.current;

    heroItems.forEach((heroVideo) => {
      if (heroVideo.src === activeVideo.src) return;
      if (isFrameSequence(heroVideo)) {
        Array.from({ length: heroVideo.frameCount || 1 }).forEach((_, index) => {
          const img = new Image();
          img.src = getFrameSrc(heroVideo, index);
        });
        return;
      }

      if (!video) return;
      const preloadVideo = document.createElement("video");
      preloadVideo.src = heroVideo.src;
      preloadVideo.preload = "auto";
    });
  }, [activeVideo.src, heroItems]);

  useEffect(() => {
    if (!isFrameSequence(activeVideo)) return;

    const sequenceDurationMs = getSequenceDuration(activeVideo) * 1000;
    const now = performance.now();
    frameStartedAtRef.current = now - pendingProgressRef.current * sequenceDurationMs;
    holdStartedAtRef.current = null;
    previousFrameRef.current = -1;
    setFrameIndex(getFrameIndex(activeVideo, pendingProgressRef.current * sequenceDurationMs));
  }, [activeVideo]);

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

  function selectVideo(video: HomeHeroVideo) {
    if (video.id === activeVideoRef.current.id) return;

    const currentVideo = videoRef.current;
    const currentItem = activeVideoRef.current;

    if (isFrameSequence(currentItem) && frameStartedAtRef.current !== null) {
      const elapsedMs = performance.now() - frameStartedAtRef.current;
      pendingProgressRef.current = clamp(
        elapsedMs / (getSequenceDuration(currentItem) * 1000)
      );
    } else if (
      currentVideo &&
      Number.isFinite(currentVideo.duration) &&
      currentVideo.duration > 0
    ) {
      pendingProgressRef.current = clamp(
        currentVideo.currentTime / currentVideo.duration
      );
    }

    setActiveVideo(video);
  }

  return (
    <section
      className="relative h-[clamp(320px,62svh,520px)] w-full overflow-hidden md:h-[100svh]"
      style={{ backgroundColor: "#00A1E1" }}
    >
      {isFrameSequence(activeVideo) ? (
        <img
          key={activeVideo.src}
          src={getFrameSrc(activeVideo, frameIndex)}
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
          key={activeVideo.src}
          src={activeVideo.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      )}

      {/* Vignette overlay — brand blue darkening at edges */}
      {activeVideo.vignette && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 35%, rgba(0,50,80,0.5) 100%)",
          }}
        />
      )}

      <HeroTextOverlay progress={textProgress} lineOne={lineOne} lineTwo={lineTwo} />

      <div
        className="absolute bottom-6 left-6 z-20 flex gap-2 md:bottom-8 md:left-10"
        aria-label="Preview hero animation versions"
      >
        {heroItems.map((video) => {
          const isActive = video.id === activeVideo.id;

          return (
            <button
              key={video.id}
              type="button"
              onClick={() => selectVideo(video)}
              aria-pressed={isActive}
              aria-label={`Preview stop motion version ${video.id}`}
              className={[
                "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium text-white transition",
                "border-white/80 bg-transparent hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
                isActive ? "bg-white/20" : "",
              ].join(" ")}
            >
              {video.id}
            </button>
          );
        })}
      </div>
    </section>
  );
}
