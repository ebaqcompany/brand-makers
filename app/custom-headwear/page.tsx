import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { HeadwearSidebar } from "@/components/headwear-sidebar";
import { ImageLightbox } from "@/components/image-lightbox";

export const metadata: Metadata = {
  title: "Custom Headwear — Brand Makers",
  description:
    "Fully custom headwear designed to perfection. Customizable areas, popular hat styles, decoration, closures, accents, and fabric options.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const POPULAR_HAT_STYLES = [
  "BM-502_FishingTrucker.png",
  "BM-503_CamoChainstitch.png",
  "BM-503_BWCircle_PerfRope.png",
  "BM-503_GreenFlatbill.png",
  "BM-503_MountainPatch_CorduroyBill.png",
  "BM-575_BlueBeKind.png",
  "BM-600_WoolTopoPatch.png",
  "BM-606_Simplegray.png",
  "BM-609_NavyRedChenille.png",
  "BM-701_7panelblk.png",
];

const DECORATION_OPTIONS = [
  "3DPuff.png",
  "BeveledPVC.png",
  "ChenillePatch.png",
  "ChannelStitch.png",
  "Embroidery.png",
  "DyeSublimated.png",
  "DyeSubPatch.png",
  "LeatherPatch.png",
  "MixedMedia.png",
  "PVCPatch.png",
  "Screenprint.png",
  "SiliconeTransfer.png",
  "TackleTwill.png",
  "WovenPatch.png",
];

const CLOSURE_OPTIONS = [
  "ComfortStrapVelcro.png",
  "LeatherMetalBuckle.png",
  "MetalBuckle.png",
  "MetalSlideBuckle.png",
  "PlasticBuckle.png",
  "StandardSnap.png",
  "Velcro.png",
  "VerticalSnap.png",
];

const ACCENT_OPTIONS = [
  "CustomTaping.png",
  "CustomTags.png",
  "DyeSubInsidePanel.png",
  "TPUTransfer.png",
  "UnderbillScreenprint.png",
  "WovenHemTag.png",
];

const POPULAR_FABRIC_OPTIONS = [
  "Corduroy.png",
  "CottonCanvas.png",
  "CottonTwill.png",
  "Foam.png",
  "LaserMesh.png",
  "Mesh.png",
  "Nylon.png",
  "Polyester.png",
  "Ripstop.png",
  "Sublimated.png",
  "WaxedCanvas.png",
  "Wool.png",
];

function formatAlt(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
}

function ImageGrid({ images, basePath }: { images: string[]; basePath: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img} className="overflow-hidden rounded-xl">
          <ImageLightbox
            src={`${basePath}/${img}`}
            alt={formatAlt(img)}
            imgClassName="w-full h-auto"
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

      {/* ── Sidebar + Sections ── */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-12 lg:gap-16 items-start">

          {/* Sidebar: 1/4, sticky, starts here — never above this point */}
          <HeadwearSidebar />

          {/* Content: 3/4 */}
          <div className="flex-1 min-w-0">

            <Section id="customizable-areas" caption="Overview" title="Customizable Areas">
              <div className="overflow-hidden rounded-2xl">
                <ImageLightbox
                  src="/headwear/Customizable Areas/customizable-areas.png"
                  alt="Customizable areas of a cap"
                  imgClassName="w-full h-auto"
                />
              </div>
            </Section>

            <Section id="popular-hat-styles" caption="Choose Your Style" title="Popular Hat Styles">
              <ImageGrid images={POPULAR_HAT_STYLES} basePath="/headwear/Popular Hat Styles" />
            </Section>

            <Section id="decoration-options" caption="Make It Yours" title="Decoration Options">
              <ImageGrid images={DECORATION_OPTIONS} basePath="/headwear/Decoration Options" />
            </Section>

            <Section id="closure-options" caption="Back Details" title="Closure Options">
              <ImageGrid images={CLOSURE_OPTIONS} basePath="/headwear/Closure Options" />
            </Section>

            <Section id="accent-options" caption="Finishing Touches" title="Accent Options">
              <ImageGrid images={ACCENT_OPTIONS} basePath="/headwear/Accent Options" />
            </Section>

            <Section id="popular-fabric-options" caption="Materials" title="Popular Fabric Options">
              <ImageGrid images={POPULAR_FABRIC_OPTIONS} basePath="/headwear/Popular Fabric Options" />
            </Section>

            <Section id="fabric-color" caption="Materials" title="Popular Fabric Colors">
              <div className="overflow-hidden rounded-2xl">
                <ImageLightbox
                  src="/headwear/Fabric Options/fabric-options-2.jpg"
                  alt="Popular fabric color swatches"
                  imgClassName="w-full h-auto"
                />
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
