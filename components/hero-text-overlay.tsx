type HeroTextOverlayProps = {
  progress: number;
  lineOne?: string;
  lineTwo?: string;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function easeOutCubic(value: number) {
  const t = clamp(value);
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(value: number) {
  const t = clamp(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function HeroTextOverlay({
  progress,
  lineOne = "We Make Your",
  lineTwo = "Brand Look Good.",
}: HeroTextOverlayProps) {
  const lineOneIn = easeOutCubic((progress - 0.02) / 0.2);
  const lineTwoIn = easeOutCubic((progress - 0.13) / 0.2);
  const subheadIn = easeOutCubic((progress - 0.34) / 0.16);
  const subheadExit = easeInOutCubic((progress - 0.76) / 0.16);
  const exitTwo = easeInOutCubic((progress - 0.78) / 0.18);
  const exitOne = easeInOutCubic((progress - 0.83) / 0.16);
  const opacityIn = smoothstep((progress - 0.02) / 0.2);
  const opacityOut = easeInOutCubic((progress - 0.82) / 0.16);
  const opacity = clamp(opacityIn * (1 - opacityOut));
  const subheadOpacity = clamp(subheadIn * (1 - subheadExit));
  const subheadOffset = (1 - subheadIn) * 18 + subheadExit * 16;
  const chevronPulse = clamp((progress - 0.48) / 0.28);
  const chevronOffset =
    chevronPulse < 1
      ? Math.max(0, Math.sin(chevronPulse * Math.PI * 4)) *
        Math.pow(1 - chevronPulse, 0.55) *
        9
      : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <div
        className="absolute left-1/2 top-1/2 w-[min(calc(100vw-48px),980px)] text-center"
        style={{
          opacity,
          transform: "translate3d(-50%, -50%, 0)",
          transition: "opacity 180ms ease",
          willChange: "opacity",
        }}
      >
        <div className="overflow-hidden">
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(34px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              transform: `translate3d(0, ${
                (1 - lineOneIn) * 112 + exitOne * 112
              }%, 0)`,
              willChange: "transform",
            }}
          >
            {lineOne}
          </h1>
        </div>
        <div className="mt-1 overflow-hidden">
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(34px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              transform: `translate3d(0, ${
                (1 - lineTwoIn) * 112 + exitTwo * 112
              }%, 0)`,
              willChange: "transform",
            }}
          >
            {lineTwo}
          </h1>
        </div>
        <div
          className="mt-7 flex flex-col items-center justify-center gap-2 md:mt-8"
          style={{
            opacity: subheadOpacity,
            transform: `translate3d(0, ${subheadOffset}px, 0)`,
            willChange: "opacity, transform",
          }}
        >
          <span
            className="text-base font-semibold uppercase text-white md:text-lg"
            style={{
              letterSpacing: "0.18em",
            }}
          >
            See how we do it.
          </span>
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-white md:h-5 md:w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: `translate3d(0, ${chevronOffset}px, 0)`,
              willChange: "transform",
            }}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
