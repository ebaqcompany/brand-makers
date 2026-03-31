import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";

export const metadata: Metadata = {
  title: "Custom Headwear — Brand Makers",
  description:
    "Fully custom headwear designed to perfection. Cap styles, closure options, decoration, fabric colours, logo placements and more.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const tags = [
  "Cap Styles",
  "Closure Styles",
  "Decoration Options",
  "Accent Options",
  "Fabric Color Options",
  "Mesh Color Options",
  "Logo Placements",
  "Size Chart",
];

export default function CustomHeadwearPage() {
  return (
    <SiteShell>

      {/* ── Page hero ── */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Custom Headwear
          </p>
          <h1
            className="text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 700 }}
          >
            Designed To Perfection
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            From structured 6-panel caps to relaxed dad hats, we craft every
            detail — materials, colours, closures, and logo placements — exactly
            the way you envisioned.
          </p>
          <div className="mt-8">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Get a Quote
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            What We Offer
          </p>
          <h2
            className="mb-2 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Custom Headwear
          </h2>
          <p className="mb-8 text-xl font-medium" style={{ color: BLUE }}>
            Designed To Perfection
          </p>

          {/* Feature tags */}
          <div className="mb-12 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{ borderColor: "rgba(50,62,72,0.2)", color: DARK }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image gallery placeholder */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl"
                style={{ backgroundColor: GREY }}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Start Your Custom Order
            </BmButton>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
