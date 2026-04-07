import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
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
      <section className="pt-16 pb-8 md:pt-20 md:pb-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Company Stores
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK }}
          >
            Four Options That Deliver
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
            Whether you need a quick form or a fully branded storefront,
            Brand Makers has a company store option to match your team size,
            budget, and goals.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <CompanyStoresSection />

      {/* CTA */}
      <CtaSection />
    </SiteShell>
  );
}
