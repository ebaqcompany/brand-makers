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
  lineTwo = "Brand Look Good",
}: HeroTextOverlayProps) {
  const lineOneIn = easeOutCubic((progress - 0.02) / 0.2);
  const lineTwoIn = easeOutCubic((progress - 0.13) / 0.2);
  const exitTwo = easeInOutCubic((progress - 0.78) / 0.18);
  const exitOne = easeInOutCubic((progress - 0.83) / 0.16);
  const opacityIn = smoothstep((progress - 0.02) / 0.2);
  const opacityOut = easeInOutCubic((progress - 0.82) / 0.16);
  const opacity = clamp(opacityIn * (1 - opacityOut));

  return (
    <div className="absolute inset-0 pointer-events-none">
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
              fontSize: "clamp(48px, 9vw, 100px)",
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
              fontSize: "clamp(48px, 9vw, 100px)",
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
      </div>
    </div>
  );
}
