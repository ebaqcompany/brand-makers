type HeroTextOverlayProps = {
  progress: number;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

export function HeroTextOverlay({ progress }: HeroTextOverlayProps) {
  const exitTwo = smoothstep((progress - 0.8) / 0.12);
  const exitOne = smoothstep((progress - 0.9) / 0.08);
  const lineOne = smoothstep((progress - 0.06) / 0.18) * (1 - exitOne);
  const lineTwo = smoothstep((progress - 0.18) / 0.18) * (1 - exitTwo);
  const opacity = clamp(Math.max(lineOne, lineTwo) * 1.15);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute w-[min(calc(100vw-48px),980px)] text-left"
        style={{
          left: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
          bottom: "clamp(40px, 8vh, 88px)",
          opacity,
          transition: "opacity 120ms linear",
          willChange: "opacity",
        }}
      >
        <div className="overflow-hidden">
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              transform: `translate3d(0, ${(1 - lineOne) * 112}%, 0)`,
              willChange: "transform",
            }}
          >
            We Make Your
          </h1>
        </div>
        <div className="mt-1 overflow-hidden">
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              transform: `translate3d(0, ${(1 - lineTwo) * 112}%, 0)`,
              willChange: "transform",
            }}
          >
            Brand Look Good
          </h1>
        </div>
      </div>
    </div>
  );
}
