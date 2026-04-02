import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { KittingTimeline } from "@/components/kitting-timeline";

export const metadata: Metadata = {
  title: "Kitting & Fulfillment — Brand Makers",
  description:
    "Create the ultimate unboxing experience with custom swag, packaging, and direct-mail fulfillment managed end-to-end by Brand Makers.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";


export default function KittingPage() {
  return (
    <SiteShell>

      {/* ── Page hero ── */}
      <section className="py-20" style={{ backgroundColor: "#F0F0F0" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Kitting &amp; Fulfillment
          </p>
          <h1
            className="text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 700 }}
          >
            The Ultimate Unboxing Experience
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            Create custom swag and packaging that matches your brand perfectly.
            Our team handles the design, packing, shipping logistics, and direct
            mail — so you don&apos;t have to.
          </p>
          <div className="mt-8">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Get Started
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
            Our Process
          </p>
          <h2
            className="mb-4 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Kitting and Fulfillment
          </h2>
          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.75)" }}
          >
            Create the ultimate unboxing experience with custom swag and
            packaging that matches your brand. Our team will custom design the
            perfect presentation kit and manage shipping logistics and direct
            mail.
          </p>

          {/* Animated Timeline */}
          <KittingTimeline />

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
            {/* Graphic 1 — landscape */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/kitting-graphic-1.jpg" alt="Branded swag collection" className="h-full w-full object-cover" />
            </div>
            {/* Graphic 2 — landscape */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/kitting-graphic-2.jpg" alt="Branded merchandise set" className="h-full w-full object-cover" />
            </div>
            {/* Graphic 3 — portrait, spans 2 rows */}
            <div className="row-span-2 overflow-hidden rounded-2xl">
              <img src="/kitting/kitting-graphic-3.jpg" alt="Custom branded box" className="h-full w-full object-cover" />
            </div>
            {/* Graphic 4 — portrait */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/kitting-graphic-4.jpg" alt="Shipping fulfillment" className="h-full w-full object-cover" />
            </div>
            {/* Graphic 5 — portrait */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/kitting-graphic-5.jpg" alt="Unboxing experience" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Let&apos;s Connect
            </BmButton>
          </div>
        </div>
      </section>

      {/* ── Examples ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Client Work
          </p>
          <h2
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Kitting Examples
          </h2>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {/* Taco Viva — square */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting---taco-viva.jpg" alt="Taco Viva kitting" className="h-full w-full object-cover" />
            </div>
            {/* BFF — square */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-bff.jpg" alt="BFF kitting" className="h-full w-full object-cover" />
            </div>
            {/* Cyberdine — landscape, spans 2 cols */}
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-cyberdine.jpg" alt="Cyberdine kitting" className="h-full w-full object-cover" />
            </div>
            {/* G2 Capital — landscape, spans 2 cols */}
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-g2-capital.jpg" alt="G2 Capital kitting" className="h-full w-full object-cover" />
            </div>
            {/* Last Mile — square */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-last-mile.jpg" alt="Last Mile kitting" className="h-full w-full object-cover" />
            </div>
            {/* Instat — square, same size as Last Mile */}
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-instat.jpg" alt="Instat kitting" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
