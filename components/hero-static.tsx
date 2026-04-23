"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const DARK = "#323E48";

type Phase = "forward" | "text-in" | "text-hold" | "text-out" | "reverse" | "hold-start";

export function HeroStatic() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const [showText, setShowText] = useState(false);
  const [phase, setPhase] = useState<Phase>("forward");
  const phaseRef = useRef<Phase>("forward");

  // Extract frames from video into canvas-friendly bitmaps
  const extractFrames = useCallback(async () => {
    const video = videoRef.current;
    if (!video || framesRef.current.length > 0) return;

    // Wait for video to be loaded
    await new Promise<void>((resolve) => {
      if (video.readyState >= 2) return resolve();
      video.addEventListener("canplay", () => resolve(), { once: true });
    });

    video.pause();
    video.currentTime = 0;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d")!;
    const fps = 8;
    const duration = video.duration;
    const totalFrames = Math.floor(duration * fps);
    const frames: ImageBitmap[] = [];

    for (let i = 0; i < totalFrames; i++) {
      video.currentTime = i / fps;
      await new Promise<void>((r) => {
        video.onseeked = () => r();
      });
      ctx.drawImage(video, 0, 0);
      const bitmap = await createImageBitmap(canvas);
      frames.push(bitmap);
    }

    framesRef.current = frames;
    video.style.display = "none";

    // Start the animation loop
    runAnimation();
  }, []);

  const runAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const frames = framesRef.current;
    if (frames.length === 0) return;

    canvas.width = frames[0].width;
    canvas.height = frames[0].height;

    const fps = 8;
    const interval = 1000 / fps;
    let frameIndex = 0;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      if (timestamp - lastTime < interval) {
        requestAnimationFrame(animate);
        return;
      }
      lastTime = timestamp;

      const currentPhase = phaseRef.current;

      switch (currentPhase) {
        case "hold-start":
          // Hold first frame for ~2 seconds
          ctx.drawImage(frames[0], 0, 0);
          frameIndex++;
          if (frameIndex > fps * 2) {
            frameIndex = 0;
            phaseRef.current = "forward";
            setPhase("forward");
          }
          break;

        case "forward":
          // Play forward
          if (frameIndex < frames.length) {
            ctx.drawImage(frames[frameIndex], 0, 0);
            frameIndex++;
          } else {
            // Reached blank blue — show text
            frameIndex = 0;
            phaseRef.current = "text-in";
            setPhase("text-in");
            setShowText(true);
          }
          break;

        case "text-in":
          // Hold last frame, wait for text animation (0.8s = ~6 frames)
          ctx.drawImage(frames[frames.length - 1], 0, 0);
          frameIndex++;
          if (frameIndex > 6) {
            frameIndex = 0;
            phaseRef.current = "text-hold";
            setPhase("text-hold");
          }
          break;

        case "text-hold":
          // Hold text visible for ~2 seconds
          ctx.drawImage(frames[frames.length - 1], 0, 0);
          frameIndex++;
          if (frameIndex > fps * 2) {
            frameIndex = 0;
            phaseRef.current = "text-out";
            setPhase("text-out");
            setShowText(false);
          }
          break;

        case "text-out":
          // Wait for text to animate out (0.8s)
          ctx.drawImage(frames[frames.length - 1], 0, 0);
          frameIndex++;
          if (frameIndex > 6) {
            frameIndex = frames.length - 1;
            phaseRef.current = "reverse";
            setPhase("reverse");
          }
          break;

        case "reverse":
          // Play in reverse
          if (frameIndex >= 0) {
            ctx.drawImage(frames[frameIndex], 0, 0);
            frameIndex--;
          } else {
            // Back to start — hold and loop
            frameIndex = 0;
            phaseRef.current = "hold-start";
            setPhase("hold-start");
          }
          break;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    extractFrames();
  }, [extractFrames]);

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#1AABE5" }}>
      {/* Hidden video for frame extraction */}
      <video
        ref={videoRef}
        src="/hero-stopmotion.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-auto block"
        style={{ maxHeight: "100vh", objectFit: "cover" }}
      />

      {/* Canvas for frame-by-frame playback */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover" }}
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
                fontSize: "clamp(36px, 7vw, 90px)",
                lineHeight: 1.0,
                letterSpacing: "-0.05em",
                color: DARK,
                transform: showText ? "translateY(0)" : "translateY(110%)",
                opacity: showText ? 1 : 0,
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
                fontSize: "clamp(36px, 7vw, 90px)",
                lineHeight: 1.0,
                letterSpacing: "-0.05em",
                color: DARK,
                transform: showText ? "translateY(0)" : "translateY(-110%)",
                opacity: showText ? 1 : 0,
                transitionDelay: "0.1s",
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
