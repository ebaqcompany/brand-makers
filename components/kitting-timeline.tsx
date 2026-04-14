"use client";

import { useEffect, useRef, useState } from "react";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const STEP_DELAY = 0.5;

const STEP_PHOTOS = [
  "/kitting/kitting-graphic-1.jpg",
  "/kitting/kitting-graphic-2.jpg",
  "/kitting/kitting-graphic-3.jpg",
  "/kitting/kitting-graphic-4.jpg",
  "/kitting/kitting-graphic-5.jpg",
];

const STEPS = [
  {
    title: "Ideas",
    paths: [
      "M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992",
      "M12 1.99921V2.99921",
      "M22 11.9992H21",
      "M3 11.9992H2",
      "M19.0704 4.92792L18.3633 5.63503",
      "M5.6368 5.636L4.92969 4.92889",
      "M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056",
    ],
  },
  {
    title: "Customized",
    paths: [
      "M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21",
      "M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z",
      "M8.5 10.5006C8.5 10.5006 9.5 11.0006 10.25 12.5006C10.25 12.5006 13.0294 8.33394 15.5 7.50061",
    ],
  },
  {
    title: "Packed",
    paths: [
      "M17.8043 4.06866L13.6094 2.45779C12.8147 2.1526 12.4173 2 12 2C11.5827 2 11.1853 2.1526 10.3906 2.45779L6.19572 4.06866C4.06524 4.88678 3 5.29585 3 6C3 6.70415 4.06524 7.11322 6.19573 7.93134L10.3906 9.54221C11.1853 9.8474 11.5827 10 12 10C12.4173 10 12.8147 9.8474 13.6094 9.54221L17.8043 7.93134C19.9348 7.11322 21 6.70415 21 6C21 5.29585 19.9348 4.88678 17.8043 4.06866Z",
      "M21 6V18C21 18.7042 19.9348 19.1132 17.8043 19.9313L13.6094 21.5422C12.8147 21.8474 12.4173 22 12 22C11.5827 22 11.1853 21.8474 10.3906 21.5422L6.19573 19.9313C4.06524 19.1132 3 18.7042 3 18V6",
      "M12 10V22",
      "M16.5 4L7 8V10.5",
      "M5.5 16.092V15.2555C5.5 14.5602 5.5 14.2125 5.72475 14.0621C5.94951 13.9116 6.26431 14.0486 6.89392 14.3225L8.39392 14.975C8.68787 15.1029 8.83484 15.1668 8.91742 15.294C9 15.4211 9 15.5834 9 15.908V16.7445C9 17.4398 9 17.7875 8.77525 17.9379C8.55049 18.0884 8.23568 17.9514 7.60608 17.6775L6.10608 17.025C5.81213 16.8971 5.66516 16.8332 5.58258 16.706C5.5 16.5789 5.5 16.4166 5.5 16.092Z",
    ],
  },
  {
    title: "Shipped",
    paths: [
      "M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z",
      "M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z",
      "M14.5 17.5H9.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5",
    ],
  },
  {
    title: "Fan For Life!",
    paths: [
      "M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z",
      "M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17",
      "M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z",
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

export function KittingTimeline() {
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

  // Progress: 0 = nothing, 1 = first dot, 2 = second dot, etc.
  // Line percentage maps activeCount to how far the blue line should extend
  // Each step is at position (i / (total-1)) across the line
  // The line should reach just past the active dot
  const totalSteps = STEPS.length;
  // Line reaches the center of the last active dot
  // Dot i is at (i + 0.5) / totalSteps * 100
  const lineProgress = activeCount === 0
    ? 0
    : ((activeCount - 1 + 0.5) / totalSteps) * 100;
  // Total animation duration = all steps * delay
  const totalDuration = totalSteps * STEP_DELAY;

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

        {/* Row 2: Line + dots — single row spanning all columns */}
        <div
          className="relative col-span-full flex items-center"
          style={{ height: 14 }}
        >
          {/* Grey line — only between first and last dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              height: 3,
              backgroundColor: "#E0E2E5",
              left: `${(0.5 / totalSteps) * 100}%`,
              right: `${(0.5 / totalSteps) * 100}%`,
            }}
          />
          {/* Blue line — one element, starts at first dot, grows right */}
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
          {/* Dots — positioned at center of each column */}
          {STEPS.map((_, i) => {
            const active = i < activeCount;
            // Center of column i: (i + 0.5) / totalSteps * 100
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

        {/* Row 3: Titles only */}
        {STEPS.map((item, i) => {
          const active = i < activeCount;
          return (
            <div key={`text-${i}`} className="pt-4 px-2 text-center">
              <h3
                className="text-sm font-semibold uppercase tracking-[1.5px] transition-colors duration-500"
                style={{ color: active ? DARK : "rgba(50,62,72,0.35)" }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Mobile vertical layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {STEPS.map((item, i) => {
          const active = i < activeCount;
          return (
            <div key={item.title} className="flex items-center gap-4">
              <div className="shrink-0" style={{ width: 44, height: 44 }}>
                <StepIcon paths={item.paths} active={active} />
              </div>
              <h3
                className="text-sm font-semibold uppercase tracking-[1.5px] transition-colors duration-500"
                style={{ color: active ? DARK : "rgba(50,62,72,0.35)" }}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Step photos row */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {STEP_PHOTOS.map((photo, i) => (
          <div key={photo} className="aspect-square overflow-hidden rounded-xl">
            <img
              src={photo}
              alt={STEPS[i].title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
