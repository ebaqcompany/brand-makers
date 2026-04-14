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
    <SiteShell transparentNavbar>

      {/* ── Page hero ── */}
      <section
        className="relative overflow-hidden py-20 "
        style={{ backgroundColor: GREY }}
      >
        {/* Text content — stays in place */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Kitting &amp; Fulfillment
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 600 }}
          >
            The Ultimate Unboxing Experience
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            Create the ultimate unboxing experience with custom swag and packaging
            that matches your brand perfectly. We ensure every order is packed
            accurately and shipped quickly. By partnering with multiple carriers,
            we have the flexibility to find the best shipping solutions for your
            timeline and budget.
          </p>
          <div className="mt-10">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting---taco-viva.jpg" alt="Taco Viva kitting" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-bff.jpg" alt="BFF kitting" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-cyberdine.jpg" alt="Cyberdine kitting" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-g2-capital.jpg" alt="G2 Capital kitting" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-instat.jpg" alt="Instat kitting" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-last-mile.jpg" alt="Last Mile kitting" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/kitting/examples/kitting-custom.jpg" alt="Custom kitting" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
