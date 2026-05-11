import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { CompanyStoresSection } from "@/components/company-stores-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Company Stores — Brand Makers",
  description:
    "Four flexible company store options: Sendito Form, Pop-Up Store, On Demand Store, and Traditional Company Store. Find the right solution for your brand.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";

export default function CompanyStoresPage() {
  return (
    <SiteShell>
      {/* Hero — compact */}
      <section className="overflow-x-hidden pt-10 pb-0 md:pt-12 lg:pt-14" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto grid w-full max-w-[1200px] min-w-0 items-center gap-8 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="min-w-0 max-w-[560px]" style={{ maxWidth: "min(560px, calc(100vw - 48px))" }}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
              Company Stores
            </p>
            <h1
              className="max-w-[560px] text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
              style={{ color: DARK }}
            >
              Four Options That Deliver
            </h1>
            <p className="mt-6 max-w-full text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
              Whether you need a quick form or a fully branded storefront,
              Brand Makers has a company store option to match your team size,
              budget, and goals.
            </p>
          </div>

          <div
            className="mx-auto min-w-0 lg:mx-0 lg:justify-self-end"
            style={{ width: "100%", maxWidth: "min(560px, calc(100vw - 48px))" }}
          >
            <Image
              src="/company-stores/macbook-store-original-screenshot.png"
              alt="Laptop showing a Brand Makers company store"
              width={1586}
              height={992}
              priority
              quality={95}
              sizes="(max-width: 1023px) calc(100vw - 48px), 560px"
              className="h-auto w-full max-w-full"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <CompanyStoresSection />

      {/* CTA */}
      <CtaSection />
    </SiteShell>
  );
}
