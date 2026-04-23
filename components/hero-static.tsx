"use client";

import { useRef, useEffect, useState } from "react";

const DARK = "#323E48";

export function HeroStatic() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      const t = video.currentTime;
      const dur = video.duration || 24;
      // Items go in from 0-9.75s, blank blue hold from 9.75-12.75s, reverse from 12.75-22.25s, hold hero from 22.25-24.25s
      // Show text during the blank blue hold
      // Text appears slightly before blank blue, disappears shortly after reverse starts
      const blueStart = 8.5;
      const blueEnd = 13.5;
      setShowText(t >= blueStart && t < blueEnd);
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[100svh]" style={{ backgroundColor: "#1AABE5" }}>
      <video
        ref={videoRef}
        src="/hero-stopmotion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Text overlay */}
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
