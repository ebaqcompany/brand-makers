type HeroTextOverlayProps = {
  showText: boolean;
};

export function HeroTextOverlay({ showText }: HeroTextOverlayProps) {
  return (
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
  );
}
