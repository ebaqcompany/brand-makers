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
  const enter = smoothstep((progress - 0.22) / 0.2);
  const travel = smoothstep((progress - 0.46) / 0.34);
  const exit = smoothstep((progress - 0.82) / 0.1);
  const translateX = -62 + enter * 62 + travel * 32 + exit * 42;
  const opacity = clamp(enter * 1.15 - exit);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div
        className="text-center"
        style={{
          opacity,
          transform: `translate3d(${translateX}vw, 0, 0)`,
          transition: "opacity 120ms linear",
          willChange: "transform, opacity",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
            }}
          >
            We Make Your
          </h1>
        </div>
        <div className="mt-1">
          <h1
            style={{
              fontFamily: "var(--font-sans, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
            }}
          >
            Brand Look Good
          </h1>
        </div>
      </div>
    </div>
  );
}
