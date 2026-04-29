"use client";

import { useEffect, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

const HERO_VIDEOS = [
  { id: 1, src: "/hero-stopmotion-videos/stopmotion1.mp4", textStartAt: 4.85 },
  { id: 2, src: "/hero-stopmotion-videos/stopmotion2.mp4", textStartAt: 3.88 },
  { id: 3, src: "/hero-stopmotion-videos/stopmotion3.mp4", textStartAt: 8.65 },
];
const TITLE_HOLD_MS = 3000;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function Hero3() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const pendingProgressRef = useRef(0);
  const holdStartedAtRef = useRef<number | null>(null);
  const activeVideoRef = useRef(HERO_VIDEOS[2]);
  const [activeVideo, setActiveVideo] = useState(HERO_VIDEOS[2]);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    activeVideoRef.current = activeVideo;
  }, [activeVideo]);

  useEffect(() => {
    const animate = () => {
      const video = videoRef.current;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
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
    if (!video) return;

    HERO_VIDEOS.forEach((heroVideo) => {
      if (heroVideo.src === activeVideo.src) return;
      const preloadVideo = document.createElement("video");
      preloadVideo.src = heroVideo.src;
      preloadVideo.preload = "auto";
    });
  }, [activeVideo.src]);

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

  function selectVideo(video: (typeof HERO_VIDEOS)[number]) {
    if (video.id === activeVideoRef.current.id) return;

    const currentVideo = videoRef.current;

    if (
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
      className="relative h-[100svh] w-full overflow-hidden"
      style={{ backgroundColor: "#00A1E1" }}
    >
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
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <HeroTextOverlay progress={textProgress} />

      <div
        className="absolute bottom-6 left-6 z-20 flex gap-2 md:bottom-8 md:left-10"
        aria-label="Preview hero animation versions"
      >
        {HERO_VIDEOS.map((video) => {
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
