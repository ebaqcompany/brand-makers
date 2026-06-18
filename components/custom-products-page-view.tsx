import { CtaSection } from "@/components/cta-section";
import { ImageLightbox } from "@/components/image-lightbox";
import { PaddlesStopMotion } from "@/components/paddles-stopmotion";
import { SiteShell } from "@/components/site-shell";
import type { CustomProductsContent } from "@/lib/custom-products-content";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

interface CustomProductsPageViewProps {
  content: CustomProductsContent;
  editableAttributes?: Record<string, string | undefined>;
}

function renderBalancedHeroHeading(heading: string) {
  const words = heading.trim().split(/\s+/);

  if (words.length === 4) {
    return (
      <>
        <span className="block">{words.slice(0, 2).join(" ")}</span>
        <span className="block">{words.slice(2).join(" ")}</span>
      </>
    );
  }

  return heading;
}

function preventLastWordWidow(text: string) {
  const lastSpaceIndex = text.trim().lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return text;
  }

  return `${text.trim().slice(0, lastSpaceIndex)}\u00A0${text
    .trim()
    .slice(lastSpaceIndex + 1)}`;
}

export function CustomProductsPageView({
  content,
  editableAttributes,
}: CustomProductsPageViewProps) {
  return (
    <SiteShell transparentNavbar>
      <section
        {...editableAttributes}
        className="relative overflow-hidden py-20"
        style={{ backgroundColor: GREY }}
      >
        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <div className="min-w-0">
            <p
              className="mb-4 text-xs font-medium uppercase tracking-[2px]"
              style={{ color: BLUE }}
            >
              {content.heroEyebrow}
            </p>
            <h1
              className="text-[clamp(40px,6vw,74px)] font-normal leading-[1.05] tracking-[-4px]"
              style={{ color: DARK, maxWidth: 690 }}
            >
              {renderBalancedHeroHeading(content.heroHeading)}
            </h1>
            <p
              className="mt-6 max-w-[500px] text-lg leading-relaxed [text-wrap:pretty]"
              style={{ color: "rgba(50,62,72,0.7)" }}
            >
              {preventLastWordWidow(content.heroBody)}
            </p>
          </div>

          <div
            className="mx-auto w-full min-w-0 max-w-[700px] lg:mx-0 lg:justify-self-end"
            aria-hidden="true"
          >
            <PaddlesStopMotion />
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            {content.galleryHeading}
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {content.galleryImages.map((image, i) => (
              <div
                key={`${image.src}-${i}`}
                className="aspect-square overflow-hidden rounded-xl border border-gray-200"
              >
                <ImageLightbox
                  src={image.src}
                  alt={image.alt}
                  imgClassName="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        content={{
          heading: content.ctaHeading,
          body: content.ctaBody,
          primaryLabel: content.ctaPrimaryLabel,
          primaryHref: content.ctaPrimaryHref,
          secondaryLabel: content.ctaSecondaryLabel,
          secondaryHref: content.ctaSecondaryHref,
        }}
      />
    </SiteShell>
  );
}
