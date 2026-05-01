import { BmButton } from "@/components/bm-button";

const BLUE = "#00A1E1";

export interface CtaSectionContent {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export const DEFAULT_CTA_CONTENT: CtaSectionContent = {
  heading: "Let's Work Together",
  body: "Ready to elevate your brand? Tell us about your project and we'll make it happen.",
  primaryLabel: "Let's Connect",
  primaryHref: "/lets-connect",
  secondaryLabel: "View Catalog",
  secondaryHref: "https://catalog.brandmakers.com/",
};

interface CtaSectionProps {
  content?: Partial<CtaSectionContent>;
}

export function CtaSection({ content }: CtaSectionProps) {
  const resolvedContent = {
    ...DEFAULT_CTA_CONTENT,
    ...content,
  };

  return (
    <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: BLUE }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className="mb-5 text-[36px] leading-[1.1] tracking-[-3px] text-white md:mb-6 md:text-[60px]">
          {resolvedContent.heading}
        </h2>
        <p className="text-base leading-relaxed text-white/80">
          {resolvedContent.body}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <BmButton href={resolvedContent.primaryHref} variant="dark">
            {resolvedContent.primaryLabel}
          </BmButton>
          <BmButton
            href={resolvedContent.secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
          >
            {resolvedContent.secondaryLabel}
          </BmButton>
        </div>
      </div>
    </section>
  );
}
