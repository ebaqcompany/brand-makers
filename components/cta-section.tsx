import { BmButton } from "@/components/bm-button";

const BLUE = "#00A1E1";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: BLUE }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className="mb-5 text-[36px] leading-[1.1] tracking-[-3px] text-white md:mb-6 md:text-[60px]">
          Let&apos;s Work Together
        </h2>
        <p className="text-base leading-relaxed text-white/80">
          Ready to elevate your brand? Tell us about your project and
          we&apos;ll make it happen.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <BmButton href="/lets-connect" variant="dark">
            Let&apos;s Connect
          </BmButton>
          <BmButton href="https://catalog.brandmakers.com/" target="_blank" rel="noopener noreferrer" variant="outline-light">
            View Catalog
          </BmButton>
        </div>
      </div>
    </section>
  );
}
