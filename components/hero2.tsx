"use client";

import { useEffect, useRef, useState } from "react";
import { HeroTextOverlay } from "@/components/hero-text-overlay";

export function Hero2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      const duration = video.duration || 4;
      const progress = (video.currentTime % duration) / duration;
      setTextProgress(progress);
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[100svh]" style={{ backgroundColor: "#1AABE5" }}>
      <video
        ref={videoRef}
        src="/TEST/PHOTOS/stopmotion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <HeroTextOverlay progress={textProgress} />
    </section>
  );
}
