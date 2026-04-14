import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";
import { CtaSection } from "@/components/cta-section";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.company} \u2014 ${cs.title} \u2014 Case Study \u2014 Brand Makers`,
    description: cs.overview,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <SiteShell>
      {/* Hero — split layout */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center gap-10">
          {/* Left: text */}
          <div>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[2px] transition-opacity hover:opacity-70"
              style={{ color: BLUE }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
              Case Studies
            </Link>

            <h1
              className="mb-6 text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
              style={{ color: DARK }}
            >
              <span style={{ color: BLUE }}>{cs.company}</span>
              <br />
              {cs.title}
            </h1>
            <p
              className="text-xs font-medium uppercase tracking-[2px]"
              style={{ color: "rgba(50,62,72,0.5)" }}
            >
              {cs.location}
            </p>
          </div>

          {/* Right: image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={cs.image}
              alt={`${cs.company} activation in ${cs.location}`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pt-12 pb-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-12 md:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[2px] mb-2" style={{ color: BLUE }}>
                Company
              </p>
              <p className="text-2xl font-semibold" style={{ color: DARK }}>
                {cs.company}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[2px] mb-2" style={{ color: BLUE }}>
                Location
              </p>
              <p className="text-2xl font-semibold" style={{ color: DARK }}>
                {cs.location}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[2px] mb-2" style={{ color: BLUE }}>
                Event Attendance
              </p>
              <p className="text-2xl font-semibold" style={{ color: DARK }}>
                {cs.attendance}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[2px] mb-2" style={{ color: BLUE }}>
                Items Distributed
              </p>
              <p className="text-2xl font-semibold" style={{ color: DARK }}>
                {cs.items}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections: Challenge, Strategy, Execution, Results — 2×2 grid */}
      <section className="pt-4 pb-16 md:pb-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cs.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: GREY }}
              >
                <h3 className="mb-4 text-[24px] font-medium leading-[1.2] tracking-[-1px] md:text-[32px]" style={{ color: DARK }}>
                  {section.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(50,62,72,0.75)" }}
                >
                  {section.text}
                </p>
              </div>
            ))}

            {/* Key Takeaways — double wide card */}
            <div
              className="md:col-span-2 rounded-2xl p-8"
              style={{ backgroundColor: GREY }}
            >
              <h3 className="mb-6 text-[24px] font-medium leading-[1.2] tracking-[-1px] md:text-[32px]" style={{ color: DARK }}>
                Key Takeaways
              </h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {cs.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0" style={{ color: BLUE }}>
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base leading-relaxed" style={{ color: "rgba(50,62,72,0.75)" }}>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </SiteShell>
  );
}
