import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Case Studies — Brand Makers",
  description:
    "See how Brand Makers has helped brands like Coca-Cola and Caterpillar create unforgettable on-site experiences.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

export default function CaseStudiesPage() {
  return (
    <SiteShell transparentNavbar>
      {/* Hero */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: GREY }}>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Case Studies
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 600 }}
          >
            Real Results, Real Brands
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
            See how we&apos;ve helped brands create unforgettable on-site experiences
            that drive engagement, build loyalty, and leave lasting impressions.
          </p>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: GREY }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={cs.image}
                    alt={`${cs.company} activation`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="mb-1 text-xl font-medium tracking-[-0.5px]"
                    style={{ color: DARK }}
                  >
                    <span style={{ color: BLUE }}>{cs.company}</span> {cs.title}
                  </h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[1px]" style={{ color: "rgba(50,62,72,0.5)" }}>
                    {cs.location}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.65)" }}>
                    {cs.overview.split(".")[0]}.
                  </p>
                  <span className="text-sm font-medium transition-colors group-hover:opacity-70" style={{ color: BLUE }}>
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </SiteShell>
  );
}
