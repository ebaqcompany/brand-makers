import type { Metadata } from "next";
import { BmButton } from "@/components/bm-button";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Design Ideas — Brand Makers",
  description:
    "Design inspiration from the Brand Makers design team, including custom and stock design ideas.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

export default function DesignIdeasPage() {
  return (
    <SiteShell>
      <section className="py-20 md:py-[110px]" style={{ backgroundColor: GREY }}>
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px]"
              style={{ color: BLUE }}
            >
              From Our Design Team
            </p>
            <h1
              className="text-[52px] leading-[1.0] tracking-[-6px] md:text-[92px]"
              style={{ color: DARK }}
            >
              Design Ideas
            </h1>
          </div>

          <div>
            <p
              className="mb-8 text-lg leading-relaxed md:text-xl"
              style={{ color: "rgba(50,62,72,0.72)" }}
            >
              Thank you for trusting us with your brand. We strive to offer
              lightning-fast turnaround time and creative designs that impress.
              We ask that you give us as much direction as possible and we will
              work our magic. We hope that you are inspired by these samples of
              our work.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BmButton
                href="https://drive.google.com/drive/folders/1IlauPiS_vmY2muAYr8HEkCyhR7m6OT2x?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Custom Design Ideas
              </BmButton>
              <BmButton
                href="https://drive.google.com/drive/folders/1v0oJZxNkwnQFX-9AEHEQfabNPXIyZ8uP?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Stock Design Ideas
              </BmButton>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
