import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { SearchCardIcon } from "@/components/home-page-view";
import type { SearchForMerchContent } from "@/lib/search-for-merch-content";

const BLUE = "#00A1E1";
const DARK = "#323E48";

export function SearchForMerchPageView({
  content,
}: {
  content: SearchForMerchContent;
}) {
  return (
    <SiteShell>
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: BLUE }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px] text-white/70">
            {content.eyebrow}
          </p>
          <h1 className="mb-4 text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px] text-white">
            {content.heading}
          </h1>
          <p className="mb-12 max-w-xl text-lg text-white/80">
            {content.body}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {content.cards.map((card) => {
              const isExternal = card.href.startsWith("http");
              const className = "group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg transition-transform duration-200 hover:-translate-y-1";
              const cardContent = (
                <>
                  <div>
                    <SearchCardIcon icon={card.icon} />
                    <h3 className="mb-2 text-2xl font-medium leading-[1.2] tracking-[-1px] md:text-[32px]" style={{ color: DARK }}>
                      {card.title}
                    </h3>
                    <p className="text-base" style={{ color: "rgba(50,62,72,0.7)" }}>
                      {card.body}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-medium" style={{ color: DARK }}>
                    {card.label}
                  </div>
                </>
              );

              if (isExternal) {
                return (
                  <a key={`${card.title}-${card.href}`} href={card.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {cardContent}
                  </a>
                );
              }

              return (
                <Link key={`${card.title}-${card.href}`} href={card.href} className={className}>
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
