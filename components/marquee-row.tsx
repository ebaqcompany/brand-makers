"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface MarqueeRowProps {
  children: React.ReactNode;
  /** Duration in seconds for one full loop */
  duration?: number;
  /** Direction: "left" scrolls left, "right" scrolls right */
  direction?: "left" | "right";
  className?: string;
}

export function MarqueeRow({
  children,
  duration = 40,
  direction = "left",
  className = "",
}: MarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafRef = useRef(0);
  const offsetRef = useRef(0);
  const animRef = useRef(0);

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = direction === "left" ? -1 : 1;
    const pxPerFrame = (track.scrollWidth / 2) / (duration * 60);

    const animate = () => {
      if (!isDragging) {
        offsetRef.current += speed * pxPerFrame;
        const halfWidth = track.scrollWidth / 2;

        if (direction === "left" && offsetRef.current <= -halfWidth) {
          offsetRef.current += halfWidth;
        } else if (direction === "right" && offsetRef.current >= 0) {
          offsetRef.current -= halfWidth;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    // Initialize offset for right direction
    if (direction === "right") {
      offsetRef.current = -(track.scrollWidth / 2);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [duration, direction, isDragging]);

  // Momentum coast after drag
  const coast = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    velocity.current *= 0.95;
    if (Math.abs(velocity.current) < 0.5) {
      setIsDragging(false);
      return;
    }

    offsetRef.current += velocity.current;
    const halfWidth = track.scrollWidth / 2;
    if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
    if (offsetRef.current >= 0) offsetRef.current -= halfWidth;

    track.style.transform = `translateX(${offsetRef.current}px)`;
    rafRef.current = requestAnimationFrame(coast);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    cancelAnimationFrame(rafRef.current);
    dragStart.current = { x: e.clientX, scrollLeft: offsetRef.current };
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    velocity.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;

    const dx = e.clientX - dragStart.current.x;
    offsetRef.current = dragStart.current.scrollLeft + dx;

    const halfWidth = track.scrollWidth / 2;
    if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
    if (offsetRef.current >= 0) offsetRef.current -= halfWidth;

    track.style.transform = `translateX(${offsetRef.current}px)`;

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (e.clientX - lastX.current) / dt * 16;
    }
    lastX.current = e.clientX;
    lastTime.current = now;
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;
    rafRef.current = requestAnimationFrame(coast);
  }, [isDragging, coast]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        ref={trackRef}
        className="flex select-none"
        style={{ width: "max-content" }}
      >
        {children}
      </div>
    </div>
  );
}
