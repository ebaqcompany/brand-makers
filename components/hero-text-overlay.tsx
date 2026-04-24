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
  const approach = smoothstep((progress - 0.3) / 0.28);
  const drift = smoothstep((progress - 0.62) / 0.2);
  const exit = smoothstep((progress - 0.88) / 0.08);
  const lineOne = smoothstep((progress - 0.38) / 0.18) * (1 - exit);
  const lineTwo = smoothstep((progress - 0.44) / 0.18) * (1 - exit);
  const wipe = smoothstep((progress - 0.36) / 0.28) * (1 - exit);
  const driftX = drift * 8;
  const translateX = -64 + approach * 64 + driftX - exit * (64 + driftX);
  const opacity = clamp(wipe * 1.2);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-1/2 w-[min(calc(100vw-48px),980px)] text-left"
        style={{
          left: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
          opacity,
          clipPath: `inset(0 ${100 - wipe * 100}% 0 0)`,
          transform: `translate3d(${translateX}vw, -50%, 0)`,
          transition: "opacity 120ms linear",
          willChange: "clip-path, transform, opacity",
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
              transform: `translate3d(${(1 - lineTwo) * -6}vw, ${(1 - lineTwo) * 112}%, 0)`,
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
