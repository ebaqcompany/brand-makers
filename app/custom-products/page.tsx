import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Custom Merch — Brand Makers",
  description:
    "From wearables to products, we turn ideas into reality. Every detail matters, and we're here to ensure your vision comes to life.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const MERCH_IMAGES = [
  "badge.jpg",
  "coca-cola-basket-mini.jpg",
  "coca-cola-mini-book.jpg",
  "empower.jpg",
  "img_3902.jpg",
  "mini-skate.jpg",
  "optiv.jpg",
];

export default function CustomProductsPage() {
  return (
    <SiteShell transparentNavbar>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 "
        style={{ backgroundColor: GREY }}
      >
        {/* Text content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Custom Merch
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 600 }}
          >
            Create Something Truly Unique
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
            From wearables to products, we turn ideas into reality. Every detail
            matters, and we&apos;re here to ensure your vision comes to life.
          </p>
          <div className="mt-10">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Start Your Project
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Our Work
          </p>
          <h2
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Custom Merch Gallery
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {MERCH_IMAGES.map((img) => (
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
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaSection />

    </SiteShell>
  );
}
