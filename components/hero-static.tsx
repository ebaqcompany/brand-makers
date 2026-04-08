const DARK = "#323E48";
const GREY = "#F0F0F0";

export function HeroStatic() {
  return (
    <section className="relative w-full overflow-hidden h-[100svh]" style={{ backgroundColor: GREY }}>
      {/* Hero image */}
      <img
        src="/hero-img1.jpg"
        alt="Brand Makers hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1200px] mx-auto px-6 w-full pb-6 md:pb-10">
          <h1
            style={{
              fontWeight: 400,
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 1.0,
              letterSpacing: "-0.05em",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            We Make Your
            <br />
            Brand Look Good
          </h1>
        </div>
      </div>
    </section>
  );
}
