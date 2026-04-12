import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ServicesGrid } from "@/components/services-grid";
import { AboutHero } from "@/components/about-hero";

export const metadata: Metadata = {
  title: "About Us — Brand Makers",
  description:
    "Since 2008, Brand Makers has had one goal — to give our clients a better experience than they have had from any business in any industry.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const BRAND_PARTNERS = [
  "adidas-logo.jpg", "americantourister-logo.jpg", "amgiant-logo.jpg", "anker-logo.jpg",
  "ariat-logo.jpg", "badger-logo.jpg", "bella-logo.jpg", "bic-logo.jpg", "blowpop-logo.jpg",
  "bose-logo.jpg", "brooksbros-logo.jpg", "camelbak-logo.jpg", "carhartt-logo.jpg",
  "champion-logo.jpg", "coleman-logo.jpg", "columbia-logo.jpg", "contigo-logo.jpg",
  "cotopaxi-logo.jpg", "crocs-logo.jpg", "cuisinart-logo.jpg", "cutterandbuck-logo.jpg",
  "district-logo.jpg", "dumdums-logo.jpg", "eddiebauer-logo.jpg", "energizer-logo.jpg",
  "fairytalebrownies-logo.jpg", "fillitforward-logo.jpg", "ghirardelli-logo.jpg",
  "gildan-logo.jpg", "hanes-logo.jpg", "hershey-logo.jpg", "huk-logo.jpg",
  "hydroflask-logo.jpg", "igloo-logo.jpg", "jansport-logo.jpg", "jbl-logo.jpg",
  "jellybelly-logo.jpg", "jerzees-logo.jpg", "jollyrancher-logo.jpg", "justin-logo.jpg",
  "kind-logo.jpg", "koozie-logo.jpg", "m&ms-logo.jpg", "maglite-logo.jpg",
  "mauijim-logo.jpg", "moleskine-logo.jpg", "mrsfields-logo.jpg", "nautica-logo.jpg",
  "newera-logo.jpg", "nextlevel-logo.jpg", "nike-logo.jpg", "oakley-logo.jpg",
  "ogio-logo.jpg", "oreo-logo.jpg", "osprey-logo.jpg", "outoftheocean-logo.jpg",
  "owala-logo.jpg", "patagonia-logo.jpg", "portandco-logo.jpg", "puma-logo.jpg",
  "rayban-logo.jpg", "richardson-logo.jpg", "skullcandy-logo.jpg", "solostove-logo.jpg",
  "sourpatch-logo.jpg", "stanley-logo.jpg", "stormcreek-logo.jpg", "swell-logo.jpg",
  "taylormade-logo.jpg", "thenorthface-logo.jpg", "thermos-logo.jpg", "thule-logo.jpg",
  "titleist-logo.jpg", "travismathew-logo.jpg", "twizzlers-logo.jpg", "underamor-logo.jpg",
  "uniball-logo.jpg", "untuckit-logo.jpg", "vinyardvines-logo.jpg", "wenger-logo.jpg",
  "wilson-logo.jpg", "yankeecandle-logo.jpg", "yeti-logo.jpg", "zippo-logo.jpg",
];

const RESPONSIBILITY_SECTIONS = [
  {
    image: "/about-us/responsibility/we-actually-care.jpg",
    title: "We Actually Care",
    text: "We believe great products should reflect great values. That\u2019s why we prioritize our workforce, sustainable practices, nonprofit partnerships, and work with diverse suppliers \u2014 ensuring our offerings are as inclusive and responsible as our clients.",
  },
  {
    image: "/about-us/responsibility/ppai-award.jpg",
    title: "Our Workforce",
    text: "Brand Makers is all about being a great place to work. When we started back in 2008, it was on the first page of the business plan to prioritize staff happiness. We are an award winning company that has been recognized by PPAI as one of the \u201cGreatest Companies to Work For\u201d.",
  },
  {
    image: "/supplier.jpg",
    title: "Supplier Diversity and Accountability",
    stats: ["Women Owned Suppliers: 85+", "Minority Owned Suppliers: 60+", "Local Suppliers: 45+"],
    text: "We have worked to discover a supplier base that is as inclusive and responsible as our clients. What is important to you, is important to us. Our commitment to high standards extends to our partners as well. We seek out organizations that demonstrate strong environmental responsibility and maintain ethical, supportive workplaces.",
  },
  {
    image: "/about-us/responsibility/eco-friendly.jpg",
    title: "Eco-Friendly",
    text: "We prioritize partnering with environmentally responsible suppliers who follow sustainable practices. By selecting eco-friendly materials and emphasizing responsible sourcing, we help build a more sustainable and resilient supply chain. Check out some eco friendly ideas in our look books.",
  },
  {
    image: "/about-us/responsibility/give-back.jpg",
    title: "Community Involvement",
    text: "Brand Makers is about more than just business. We actually care. Having held over 30 company sponsored service projects, we know that helping the community is like holding a branded tumbler with your favorite hot drink. Everyone can see you do it, but you\u2019re the only one that gets that warm feeling. Tell your favorite Brand Makers team member that you saw this cheezy joke and get extra special service on your next project. Oh, and we think Give Back Suppliers are really cool too.",
  },
  {
    image: "/about-us/responsibility/reducing-waste.jpg",
    title: "Reducing Waste",
    text: "Reducing waste is all about having the right ideas. In our industry, successful sustainability initiatives are often about client education. Our approach with clients has always been to propose items that will get significant use. In simple terms, we guide clients to pick items that are usable in everyday life. Not only does this lead to a better experience for recipients, but also results in a successful outcome in sustainability through reduced waste and mindful production.",
  },
  {
    image: "/about-us/responsibility/company-emissions.jpg",
    title: "Company Emissions",
    text: "We frequently review company-wide processes regarding event travel, work from home, packaging, printing, freight carrier analysis, meeting travel, hard invoice mailing, and sustainable product availability for our customers. We are deeply committed to responsible business practices that extend across our entire supply chain, from sourcing to production. Our focus on Responsible Sourcing, Vendor Social Accountability, and Product Safety and Compliance ensures that we not only meet, but exceed industry standards for ethics, quality, and environmental responsibility.",
  },
  {
    image: "/about-us/responsibility/security-privacy.jpg",
    title: "Security and Privacy",
    text: "We take a comprehensive approach to security, privacy, and data control to ensure your information stays protected at every stage. We frequently train staff on security and threat awareness and ensure best security practices among employees. Brand Makers uses Google Workspace for email, data storage, and data transfer. Google Workspace is built on Google\u2019s secure global infrastructure and backed by some of the world\u2019s most trusted security standards. The platform is independently audited and certified under internationally recognized frameworks including ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, ISO/IEC 27701, and SOC 2 and SOC 3.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell transparentNavbar>

      {/* ── Hero ── */}
      <AboutHero />

      {/* ── Services Icons (reusing the services grid from homepage) ── */}
      <ServicesGrid />

      {/* ── Retail Brand Partners ── */}
      <section id="retail-brand-partners" className="py-20 md:py-[80px]" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Retail Brand Partners
          </p>
          <h2 className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]" style={{ color: DARK }}>
            Co-Brand with a Name You Know and Trust
          </h2>

          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
            {BRAND_PARTNERS.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-xl bg-white p-1.5"
              >
                <img
                  src={`/about-us/brand-partners/${logo}`}
                  alt={logo.replace(/-logo\.jpg$/, "").replace(/-/g, " ")}
                  className="h-auto w-full object-contain"
                  style={{ maxHeight: 80 }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Responsibility ── */}
      <section id="our-responsibility" className="py-20 md:py-[80px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Our Responsibility
          </p>
          <h2 className="mb-16 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]" style={{ color: DARK }}>
            Our Responsibility
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {RESPONSIBILITY_SECTIONS.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="mb-2 text-xl font-medium tracking-[-0.5px]"
                    style={{ color: DARK }}
                  >
                    {item.title}
                  </h3>
                  {item.stats && (
                    <div className="mb-2 flex flex-wrap gap-3">
                      {item.stats.map((s) => (
                        <span
                          key={s}
                          className="rounded-full px-3 py-1 text-xs font-medium"
                          style={{ backgroundColor: GREY, color: DARK }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.65)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
