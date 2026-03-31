import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";

export const metadata: Metadata = {
  title: "Kitting & Fulfillment — Brand Makers",
  description:
    "Create the ultimate unboxing experience with custom swag, packaging, and direct-mail fulfillment managed end-to-end by Brand Makers.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const steps = ["Ideas", "Customized", "Packed", "Shipped", "Fan For Life!"];

export default function KittingPage() {
  return (
    <SiteShell>

      {/* ── Page hero ── */}
      <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
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
      <section className="py-20" style={{ backgroundColor: GREY }}>
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

          {/* Process steps */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-2">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  style={{ backgroundColor: i === steps.length - 1 ? DARK : BLUE }}
                >
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="h-5 w-5 shrink-0" style={{ color: DARK }} />
                )}
              </div>
            ))}
          </div>

          {/* Image gallery placeholder */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl"
                style={{ backgroundColor: "rgba(50,62,72,0.1)" }}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Let&apos;s Connect
            </BmButton>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
