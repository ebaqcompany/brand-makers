
import { BmButton } from "@/components/bm-button";
import { CtaSection } from "@/components/cta-section";
import { Navbar1 } from "@/components/navbar1";
import { ScrollNavbar } from "@/components/scroll-navbar";
import { HeroStatic } from "@/components/hero-static";
// import { HeroSection } from "@/components/hero-section";
import { Footer2 } from "@/components/footer2";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ServicesGridCustom } from "@/components/services-grid-custom";
// import { ServicesGrid } from "@/components/services-grid";

// ─── Brand colour tokens ───────────────────────────────────────────────────
const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

// ─── Shared section-padding classes ───────────────────────────────────────
const SEC = "py-20 md:py-[80px]";
const CONTAINER = "max-w-[1200px] mx-auto px-6";


export default function Home() {
  return (
    <main className="flex flex-col w-full">

      {/* ── 1. NAVBAR (fixed over hero, transitions to sticky white on scroll) ── */}
      <ScrollNavbar />

      {/* ── 2. HERO ──────────────────────────────────────────────────── */}
      <HeroStatic />
      {/* <HeroSection /> */}

      {/* ── Content (overflow hidden only on the scrolling content, not navbar) ── */}
      <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── 3. SERVICES GRID ──────────────────────────────────────────── */}
      {/* Original services grid with Hugeicons (hidden for review) */}
      {/* <ServicesGrid /> */}
      <ServicesGridCustom />

      {/* ── 4. SEARCH FOR MERCH ───────────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: BLUE }}>
        <div className={CONTAINER}>
          {/* Caption */}
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-white/70">
            Search for Merch
          </p>
          {/* Headline */}
          <h2
            className="mb-4 text-[36px] leading-[1.1] tracking-[-3px] text-white md:text-[60px]"
          >
            Find Your Perfect Swag
          </h2>
          <p className="mb-12 max-w-xl text-lg text-white/80">
            Browse thousands of customizable products — or flip through our
            curated look books for instant inspiration.
          </p>

          {/* Two CTA cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Swag Catalog */}
            <a
              href="https://catalog.brandmakers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-4 h-10 w-10" fill="none" stroke={DARK} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.4993 12.5C20.5 12.1804 20.5 11.8473 20.5 11.5C20.5 7.25736 20.5 5.13604 19.182 3.81802C17.864 2.5 15.7426 2.5 11.5 2.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5C2.5 15.7426 2.5 17.864 3.81802 19.182C5.13604 20.5 7.25736 20.5 11.5 20.5C11.8473 20.5 12.1804 20.5 12.5 20.4993" />
                  <path d="M3 7.5H20" />
                  <path d="M11.5 16H12.5M6.5 16H7.5" />
                  <path d="M11.5 12H16.5M6.5 12H7.5" />
                  <path d="M20 20L21.5 21.5M20.5 18C20.5 16.6193 19.3807 15.5 18 15.5C16.6193 15.5 15.5 16.6193 15.5 18C15.5 19.3807 16.6193 20.5 18 20.5C19.3807 20.5 20.5 19.3807 20.5 18Z" />
                </svg>
                <h3
                  className="mb-2 text-2xl font-medium leading-[1.2] tracking-[-1px] md:text-[32px]"
                  style={{ color: DARK }}
                >
                  Full Swag Catalog
                </h3>
                <p className="text-base" style={{ color: "rgba(50,62,72,0.7)" }}>
                  Search the full catalog of customizable promotional products,
                  apparel, headwear, and gifts.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-medium" style={{ color: DARK }}>
                Browse Catalog
              </div>
            </a>

            {/* Look Books */}
            <a
              href="/look-books"
              className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-4 h-10 w-10" fill="none" stroke={DARK} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5055 2.01874C12.8289 2.83455 12 7.5 12 7.5V22C12 22 12.8867 17.1272 18.0004 16.5588C18.5493 16.4978 19 16.0576 19 15.5058V3.39309C19 2.5654 18.3216 1.87638 17.5055 2.01874Z" />
                  <path d="M5.33333 5.00001C7.79379 4.99657 10.1685 5.88709 12 7.5V22C10.1685 20.3871 7.79379 19.4966 5.33333 19.5C3.77132 19.5 2.99032 19.5 2.64526 19.2792C2.4381 19.1466 2.35346 19.0619 2.22086 18.8547C2 18.5097 2 17.8941 2 16.6629V8.40322C2 6.97543 2 6.26154 2.54874 5.68286C3.09748 5.10418 3.65923 5.07432 4.78272 5.0146C4.965 5.00491 5.14858 5.00001 5.33333 5.00001Z" />
                  <path d="M12 22.001C13.8315 20.3881 16.2062 19.4976 18.6667 19.501C20.2287 19.501 21.0097 19.501 21.3547 19.2802C21.5619 19.1476 21.6465 19.0629 21.7791 18.8558C22 18.5107 22 17.8951 22 16.6639V8.40424C22 6.97645 22 6.26256 21.4513 5.68388C20.9025 5.1052 20.1235 5.05972 19 5" />
                </svg>
                <h3
                  className="mb-2 text-2xl font-medium leading-[1.2] tracking-[-1px] md:text-[32px]"
                  style={{ color: DARK }}
                >
                  Look Books
                </h3>
                <p className="text-base" style={{ color: "rgba(50,62,72,0.7)" }}>
                  Flip through our seasonal look books for curated collections
                  and fresh brand inspiration.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-medium" style={{ color: DARK }}>
                View Look Books
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. CUSTOM MERCH ───────────────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: GREY }}>
        <div className={CONTAINER}>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Custom Merch
          </p>
          <h2
            className="mb-4 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Create Something Truly Unique
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.75)" }}>
            From wearables to products, we turn ideas into reality. Every detail matters, and we&apos;re here to ensure your vision comes to life.
          </p>

          {/* 6-tile image grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              "badge.jpg",
              "coca-cola-basket-mini.jpg",
              "coca-cola-mini-book.jpg",
              "empower.jpg",
              "mini-skate.jpg",
              "optiv.jpg",
            ].map((img) => (
              <div key={img} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={`/custom-merch/${img}`}
                  alt={img.replace(/\.jpg$/, "").replace(/-/g, " ")}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <BmButton href="/custom-products" variant="primary">
              See Custom Merch
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── 9. ABOUT / TEAM (hidden — waiting for team photo) ── */}

      {/* ── 10. ON-SITE EXPERIENCES ───────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: DARK }}>
        <div className={CONTAINER} style={{ textAlign: "center" }}>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            On-Site Experiences
          </p>
          <h2 className="mb-6 text-[36px] leading-[1.1] tracking-[-3px] text-white md:text-[60px]">
            Merch That Moves People
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
            Our on-site branding activations allow guests to create branded merchandise in real time — transforming ordinary giveaways into unforgettable brand moments.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <video
                  src={`/experiences/clips/clip-${String(i + 1).padStart(2, "0")}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <BmButton href="/on-site-experiences" variant="primary">
              Explore Experiences
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS (hidden — waiting for real client testimonials) ── */}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CtaSection />

      {/* ── 13. FOOTER ────────────────────────────────────────────────── */}
      <Footer2 />
      </div>{/* end overflow-x-hidden content wrapper */}
    </main>
  );
}
