import {
  Search,
  Layers,
  Play,
} from "lucide-react";

import { BmButton } from "@/components/bm-button";
import { Navbar1 } from "@/components/navbar1";
import { ScrollNavbar } from "@/components/scroll-navbar";
import { HeroSection } from "@/components/hero-section";
import { Footer2 } from "@/components/footer2";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ServicesGrid } from "@/components/services-grid";

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
      <HeroSection />

      {/* ── Content (overflow hidden only on the scrolling content, not navbar) ── */}
      <div className="flex flex-col w-full overflow-x-hidden">

      {/* ── 3. SERVICES GRID ──────────────────────────────────────────── */}
      <ServicesGrid />

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
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: BLUE }}
                >
                  <Search className="h-5 w-5 text-white" />
                </div>
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
              <div className="mt-6 flex items-center gap-2 font-medium" style={{ color: BLUE }}>
                Browse Catalog
              </div>
            </a>

            {/* Look Books */}
            <a
              href="/look-books"
              className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: DARK }}
                >
                  <Layers className="h-5 w-5 text-white" />
                </div>
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
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl"
                style={{ backgroundColor: "rgba(50,62,72,0.1)" }}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <BmButton href="/custom-products" variant="primary">
              See Custom Merch
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── 9. ABOUT / TEAM ───────────────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: "#FFFFFF" }}>
        <div className={CONTAINER}>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Our Team
          </p>
          <h2
            className="mb-6 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK, maxWidth: 700 }}
          >
            From our Creative Services Team
          </h2>
          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            Thank you for trusting us with your brand. We strive to offer lightning-fast turnaround time and creative designs that impress. We ask that you give us as much direction as possible and we will work our magic. That is all. Please enjoy these samples of our work.
          </p>

          {/* Group photo placeholder */}
          <div
            className="w-full rounded-2xl"
            style={{
              aspectRatio: "16 / 7",
              backgroundColor: "#E8EFF4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-center">
              <div
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,161,225,0.1)" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "rgba(50,62,72,0.35)" }}
              >
                Team photo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. ON-SITE EXPERIENCES ───────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: GREY }}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* ── Left: copy ── */}
            <div className="lg:w-[45%] lg:shrink-0">
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[2px]"
                style={{ color: BLUE }}
              >
                On-Site Experiences
              </p>

              <h2
                className="mb-6 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
                style={{ color: DARK }}
              >
                Merch That Moves People
              </h2>
              <p className="mb-10 text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
                Our on-site branding activations allow guests to create branded merchandise in real time — transforming ordinary giveaways into unforgettable brand moments.
              </p>

              <BmButton href="/on-site-experiences" variant="primary">
                Explore Experiences
              </BmButton>
            </div>

            {/* ── Right: 2×3 video clip grid ── */}
            <div className="grid flex-1 grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: "4 / 3",
                    backgroundColor: "rgba(50,62,72,0.08)",
                  }}
                >
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: "rgba(0,161,225,0.85)" }}
                    >
                      <Play className="h-4 w-4 translate-x-0.5 text-white" />
                    </div>
                  </div>
                  {/* Clip label */}
                  <span
                    className="absolute bottom-3 left-3 text-xs font-medium"
                    style={{ color: "rgba(50,62,72,0.35)" }}
                  >
                    Clip {i + 1}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS ──────────────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Testimonials
          </p>
          <h2
            className="text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            What Our Clients Say
          </h2>
        </div>
        <TestimonialsCarousel />
        <div className="max-w-[1200px] mx-auto px-6 mt-12 text-center">
          <BmButton
            href="https://www.google.com/maps/place/Brand+Makers/@40.0977,-111.6559,17z/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            See More Reviews
          </BmButton>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className={SEC} style={{ backgroundColor: BLUE }}>
        <div className={`${CONTAINER} grid w-full grid-cols-1 items-center justify-between gap-8 md:grid-cols-[1fr_max-content] md:gap-x-12 lg:gap-x-20`}>
          <div>
            <h2 className="mb-3 text-[36px] leading-[1.1] tracking-[-3px] text-white md:mb-4 md:text-[60px]">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              Ready to elevate your brand? Tell us about your project and
              we&apos;ll make it happen.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <BmButton href="/lets-connect" variant="dark">
              Let&apos;s Connect
            </BmButton>
            <BmButton href="https://catalog.brandmakers.com/" target="_blank" rel="noopener noreferrer" variant="outline-light">
              View Catalog
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── 13. FOOTER ────────────────────────────────────────────────── */}
      <Footer2 />
      </div>{/* end overflow-x-hidden content wrapper */}
    </main>
  );
}
