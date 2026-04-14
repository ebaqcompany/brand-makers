"use client";

import { useEffect, useRef, useState } from "react";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const STEP_DELAY = 0.5;

const STEPS = [
  {
    title: "Pick An Item",
    description: "Guests choose their item and design",
    paths: [
      "M20.4993 12.5C20.5 12.1804 20.5 11.8473 20.5 11.5C20.5 7.25736 20.5 5.13604 19.182 3.81802C17.864 2.5 15.7426 2.5 11.5 2.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5C2.5 15.7426 2.5 17.864 3.81802 19.182C5.13604 20.5 7.25736 20.5 11.5 20.5C11.8473 20.5 12.1804 20.5 12.5 20.4993",
      "M3 7.5H20",
      "M11.5 16H12.5M6.5 16H7.5",
      "M11.5 12H16.5M6.5 12H7.5",
      "M20 20L21.5 21.5M20.5 18C20.5 16.6193 19.3807 15.5 18 15.5C16.6193 15.5 15.5 16.6193 15.5 18C15.5 19.3807 16.6193 20.5 18 20.5C19.3807 20.5 20.5 19.3807 20.5 18Z",
    ],
  },
  {
    title: "Decorate It",
    description: "We customize it live on the spot",
    paths: [
      "M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5C21 11.9693 21 11.4701 20.9977 11",
      "M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z",
      "M7 17.5C9.3317 15.0578 13.6432 14.9428 16 17.5M13.9951 10C13.9951 11.3807 12.8742 12.5 11.4915 12.5C10.1089 12.5 8.98797 11.3807 8.98797 10C8.98797 8.61929 10.1089 7.5 11.4915 7.5C12.8742 7.5 13.9951 8.61929 13.9951 10Z",
    ],
  },
  {
    title: "You're Activated",
    description: "They leave as brand ambassadors",
    paths: [
      "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
      "M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15",
      "M15.625 8.387V8.91649M8.375 8.387V8.91649M8.75 8.75C8.75 8.33579 8.58211 8 8.375 8C8.16789 8 8 8.33579 8 8.75C8 9.16421 8.16789 9.5 8.375 9.5C8.58211 9.5 8.75 9.16421 8.75 8.75ZM16 8.75C16 8.33579 15.8321 8 15.625 8C15.4179 8 15.25 8.33579 15.25 8.75C15.25 9.16421 15.4179 9.5 15.625 9.5C15.8321 9.5 16 9.16421 16 8.75Z",
    ],
  },
];

function StepIcon({ paths, active }: { paths: string[]; active: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-full h-full transition-colors duration-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: active ? BLUE : "#C8CDD1" }}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export function ExperiencesTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          STEPS.forEach((_, i) => {
            timers.push(setTimeout(() => {
              setActiveCount(i + 1);
            }, (i + 1) * STEP_DELAY * 1000));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const totalSteps = STEPS.length;
  const lineProgress = activeCount === 0
    ? 0
    : ((activeCount - 1 + 0.5) / totalSteps) * 100;

  return (
    <div ref={ref} className="relative mb-16">
      {/* Desktop horizontal layout */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: `repeat(${totalSteps}, 1fr)` }}>
        {/* Row 1: Icons */}
        {STEPS.map((item, i) => (
          <div key={`icon-${i}`} className="flex justify-center pb-4">
            <div style={{ width: 56, height: 56 }}>
              <StepIcon paths={item.paths} active={i < activeCount} />
            </div>
          </div>
        ))}

        {/* Row 2: Line + dots */}
        <div
          className="relative col-span-full flex items-center"
          style={{ height: 14 }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              height: 3,
              backgroundColor: "#E0E2E5",
              left: `${(0.5 / totalSteps) * 100}%`,
              right: `${(0.5 / totalSteps) * 100}%`,
            }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              height: 3,
              backgroundColor: BLUE,
              left: `${(0.5 / totalSteps) * 100}%`,
              width: activeCount === 0 ? "0%" : `${lineProgress - (0.5 / totalSteps) * 100}%`,
              transition: `width ${STEP_DELAY}s ease-out`,
            }}
          />
          {STEPS.map((_, i) => {
            const active = i < activeCount;
            const leftPct = ((i + 0.5) / totalSteps) * 100;
            return (
              <div
                key={`dot-${i}`}
                className="absolute z-20 size-3.5 rounded-full shadow-[0_0_0_4px_#F0F0F0] transition-all duration-500"
                style={{
                  left: `${leftPct}%`,
                  top: "50%",
                  transform: `translate(-50%, -50%) scale(${active ? 1.2 : 1})`,
                  backgroundColor: active ? BLUE : "#D0D3D6",
                }}
              />
            );
          })}
        </div>

        {/* Row 3: Text */}
        {STEPS.map((item, i) => {
          const active = i < activeCount;
          return (
            <div key={`text-${i}`} className="pt-4 px-2 text-center">
              <h3
                className="mb-1 text-sm font-semibold uppercase tracking-[1.5px] transition-colors duration-500"
                style={{ color: active ? DARK : "rgba(50,62,72,0.35)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed transition-colors duration-500"
                style={{ color: active ? "rgba(50,62,72,0.7)" : "rgba(50,62,72,0.25)" }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile vertical layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {STEPS.map((item, i) => {
          const active = i < activeCount;
          return (
            <div key={item.title} className="flex items-start gap-4">
              <div className="shrink-0" style={{ width: 44, height: 44 }}>
                <StepIcon paths={item.paths} active={active} />
              </div>
              <div>
                <h3
                  className="mb-1 text-sm font-semibold uppercase tracking-[1.5px] transition-colors duration-500"
                  style={{ color: active ? DARK : "rgba(50,62,72,0.35)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-colors duration-500"
                  style={{ color: active ? "rgba(50,62,72,0.7)" : "rgba(50,62,72,0.25)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
