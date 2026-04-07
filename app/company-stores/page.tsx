import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { CompanyStoresSection } from "@/components/company-stores-section";

export const metadata: Metadata = {
  title: "Company Stores — Brand Makers",
  description:
    "Four flexible company store options: Sendito Form, Pop-Up Store, On Demand Store, and Traditional Company Store. Find the right solution for your brand.",
};

export default function CompanyStoresPage() {
  return (
    <SiteShell transparentNavbar>
      {/* Page hero */}
      <section
        className="relative overflow-hidden py-20 "
        style={{ backgroundColor: "#F0F0F0" }}
      >
        {/* Text content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: "#00A1E1" }}
          >
            Our Solutions
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: "#323E48", maxWidth: 600 }}
          >
            Company Stores Built for Your Brand
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            From a simple order form to a fully branded on-demand storefront,
            Brand Makers has a company store option to match your team size,
            budget, and goals.
          </p>
          <div className="mt-10">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Get Started
            </BmButton>
          </div>
        </div>

        {/* Illustration — sticks to bottom right */}
        <img
          src="/stores.png"
          alt="Company stores"
          className="absolute bottom-0 right-0 w-[80%] object-contain pointer-events-none md:w-[45%] md:right-[max(1.5rem,calc((100%-1200px)/2))] md:max-w-[550px]"
        />
      </section>

      {/* Full comparison table (starts expanded on this page) */}
      <CompanyStoresSection />
    </SiteShell>
  );
}
