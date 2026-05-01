import { CtaSection } from "@/components/cta-section";
import { SiteShell } from "@/components/site-shell";
import type { CustomProductsContent } from "@/lib/custom-products-content";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

interface CustomProductsPageViewProps {
  content: CustomProductsContent;
  editableAttributes?: Record<string, string | undefined>;
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            {content.heroEyebrow}
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 600 }}
          >
            {content.heroHeading}
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            {content.heroBody}
          </p>
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
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
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
