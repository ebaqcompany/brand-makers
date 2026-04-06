import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { HeadwearSidebar } from "@/components/headwear-sidebar";

export const metadata: Metadata = {
  title: "Custom Headwear — Brand Makers",
  description:
    "Fully custom headwear designed to perfection. Cap styles, closure options, decoration, fabric colours, logo placements and more.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const CAP_STYLES = [
  "5panellasermeshhatinfo", "5paneltruckerhatinfo", "7panelclassichatinfo",
  "7panellaserflatbillhatinfo", "7paneltruckerhatinfo", "beanieinfo",
  "dadhatinfo", "flatbillfabrichatinfo", "flatbilltruckerhatinfo",
  "flexcaphatinfo", "foamtruckerhatinfo", "lowprotruckerhatinfo",
  "midprolasermeshhatinfo", "midprotrucker_bm601_infograph", "strawhatinfo",
];

const CLOSURE_STYLES = [
  "closures_v2-01", "closures_v2-02", "closures_v2-03", "closures_v2-04",
  "closures_v2-06", "closures_v2-07", "closures_v2-08",
];

const DECORATION_OPTIONS = [
  "3dpuffembroidery", "embroidery", "screenprint", "pvcpatch",
  "raisedpvcpatch", "tpu-transfer", "mixedmedia",
  "decorationtypes-01", "decorationtypes-03", "decorationtypes-06",
  "decorationtypes-07", "decorationtypes-08", "decorationtypes-09",
  "decorationtypes-12", "decorationtypes-15", "decorationtypes-18",
  "decorationtypes-19", "decorationtypes-20", "decorationtypes-21",
  "decorationtypes-30", "decorationtypes-31",
];

const ACCENTS = [
  "hemtag", "pvcaccentpatch", "tpu-transferunderbill", "dyesublimatedinsidebill",
  "decorationtypes-22", "decorationtypes-23", "decorationtypes-24",
  "decorationtypes-25", "decorationtypes-26", "decorationtypes-27",
];

function ImageGrid({ images, basePath }: { images: string[]; basePath: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img} className="overflow-hidden rounded-xl">
          <img
            src={`${basePath}/${img}.jpg`}
            alt={img.replace(/[-_]/g, " ")}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function Section({
  id, caption, title, children,
}: {
  id: string; caption: string; title: string; children: React.ReactNode;
}) {
  return (
    <div id={id} className="py-16 md:py-20 border-b border-gray-200/60 last:border-b-0">
      <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>{caption}</p>
      <h2 className="mb-10 text-[32px] leading-[1.1] tracking-[-2px] md:text-[48px]" style={{ color: DARK }}>{title}</h2>
      {children}
    </div>
  );
}

export default function CustomHeadwearPage() {
  return (
    <SiteShell>

      {/* ── Hero — full width ── */}
      <section
        className="relative overflow-hidden pt-16 pb-0 md:pt-20 min-h-[calc(100svh-72px)] md:min-h-0"
        style={{ backgroundColor: GREY }}
      >
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-end gap-6 md:gap-10">
          {/* Left: text content */}
          <div className="relative z-10 pb-10 md:pb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
              Custom Headwear
            </p>
            <h1
              className="text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
              style={{ color: DARK }}
            >
              Designed To Perfection
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
              From structured 6-panel caps to relaxed dad hats, we craft every
              detail — materials, colours, closures, and logo placements — exactly
              the way you envisioned.
            </p>
            <div className="mt-10">
              <BmButton href="/lets-connect" variant="primary" size="md">
                Get a Quote
              </BmButton>
            </div>
          </div>

          {/* Desktop: video in grid flow */}
          <video
            src="/headwear2-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hidden w-full object-contain pointer-events-none self-end md:block"
          />
        </div>

        {/* Mobile: video absolute at bottom */}
        <video
          src="/headwear2-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 right-0 w-[75%] object-contain pointer-events-none md:hidden"
        />
      </section>

      {/* ── Sidebar + Sections ── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 lg:gap-16 items-start">

          {/* Sidebar: 1/4, sticky, starts here — never above this point */}
          <HeadwearSidebar />

          {/* Content: 3/4 */}
          <div className="flex-1 min-w-0">

            <Section id="customizable-areas" caption="Overview" title="Customizable Areas">
              <div className="overflow-hidden rounded-2xl">
                <img src="/headwear/Customizable Areas/customizableareas.jpg" alt="Customizable areas of a cap" className="w-full h-auto" />
              </div>
            </Section>

            <Section id="cap-styles" caption="Choose Your Style" title="Cap Styles">
              <ImageGrid images={CAP_STYLES} basePath="/headwear/Cap Styles" />
            </Section>

            <Section id="closure-styles" caption="Back Details" title="Closure Styles">
              <ImageGrid images={CLOSURE_STYLES} basePath="/headwear/Closure Styles" />
            </Section>

            <Section id="decoration-options" caption="Make It Yours" title="Decoration Options">
              <ImageGrid images={DECORATION_OPTIONS} basePath="/headwear/Decoration Options" />
            </Section>

            <Section id="accent-options" caption="Finishing Touches" title="Accent Options">
              <ImageGrid images={ACCENTS} basePath="/headwear/Accents" />
            </Section>

            <Section id="fabric-color" caption="Materials" title="Fabric Color Options">
              <div className="overflow-hidden rounded-2xl">
                <img src="/headwear/Fabric Options/fabric-options-2.jpg" alt="Fabric color swatches" className="w-full h-auto" />
              </div>
            </Section>

            <Section id="mesh-color" caption="Materials" title="Mesh Color Options">
              <div className="overflow-hidden rounded-2xl">
                <img src="/headwear/Mesh Options/mesh-options-2.jpg" alt="Mesh color swatches" className="w-full h-auto" />
              </div>
            </Section>

            <Section id="logo-placement" caption="Branding" title="Logo Placements">
              <div className="overflow-hidden rounded-2xl">
                <img src="/headwear/Logo Placements/hat-decoration-locations.jpg" alt="Hat logo placement locations" className="w-full h-auto" />
              </div>
            </Section>

            <Section id="size-chart" caption="Fit Guide" title="Size Chart">
              <div className="overflow-hidden rounded-2xl">
                <img src="/headwear/Size Chart/sizechart.jpg" alt="Headwear size chart" className="w-full h-auto" />
              </div>
              <div className="mt-12 text-center">
                <BmButton href="/lets-connect" variant="primary" size="md">
                  Start Your Custom Order
                </BmButton>
              </div>
            </Section>

          </div>
        </div>
      </div>

    </SiteShell>
  );
}
