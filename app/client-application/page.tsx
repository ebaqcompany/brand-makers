import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const TYPEFORM_URL = "https://brandmakersbox.typeform.com/3minuteintake";
const TYPEFORM_EMBED_URL =
  "https://brandmakersbox.typeform.com/3minuteintake?typeform-embed=oembed&typeform-medium=embed-oembed";

export const metadata: Metadata = {
  title: "Client Application | Brand Makers",
  description:
    "Start the Brand Makers 3 Minute Client Intake form for custom merch, company stores, kitting, fulfillment, and brand programs.",
};

export default function ClientApplicationPage() {
  return (
    <SiteShell>
      <section className="bg-[#F0F0F0] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.7fr)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
              Client Application
            </p>
            <h1
              className="max-w-4xl text-[52px] leading-[1.0] tracking-[-4px] md:text-[92px] md:tracking-[-6px]"
              style={{ color: DARK }}
            >
              Brand Makers 3 Minute Intake
            </h1>
          </div>
          <div className="max-w-xl text-lg leading-relaxed text-[#6d747b]">
            <p>
              Tell us about your company, timeline, and merch needs so the Brand Makers
              team can get the right program started.
            </p>
            <BmButton href={TYPEFORM_URL} target="_blank" className="mt-8">
              Open Application
            </BmButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="overflow-hidden rounded-md border border-[#d8dde0] bg-white">
            <iframe
              title="Brand Makers 3 Minute Client Intake Form"
              src={TYPEFORM_EMBED_URL}
              className="h-[720px] w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
