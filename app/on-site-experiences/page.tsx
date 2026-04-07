import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";
import { ExperiencesTimeline } from "@/components/experiences-timeline";
import { CtaSection } from "@/components/cta-section";
import { MarqueeRow } from "@/components/marquee-row";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "On-Site Experiences — Brand Makers",
  description:
    "Our on-site branding activations allow guests to create branded merchandise in real time — transforming ordinary giveaways into unforgettable brand moments.",
};

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const EXPERIENCES = [
  {
    title: "Heat Transfers",
    description: "Full-color transfers applied on demand. Perfect for complex designs, photos, and gradients on any garment.",
    image: "/experiences/experiences/heat-transfers.jpg",
  },
  {
    title: "Embroidery",
    description: "On-site embroidery machines stitch custom logos and names in real time onto hats, polos, and jackets.",
    image: "/experiences/experiences/embroidery.jpg",
  },
  {
    title: "Heat Transfer Patches",
    description: "Custom patches pressed on the spot — guests pick their design and placement for a one-of-a-kind takeaway.",
    image: "/experiences/experiences/heat-transfer_patches.jpg",
  },
  {
    title: "Vinyl Plotting",
    description: "Cut vinyl lettering and graphics personalized on the spot. Names, numbers, and custom text in minutes.",
    image: "/experiences/experiences/vinylplotting.jpg",
  },
  {
    title: "Engraving",
    description: "Laser engraving on drinkware, pens, keychains, and more. A premium, permanent decoration method.",
    image: "/experiences/experiences/engraving.jpg",
  },
  {
    title: "Screen Printing",
    description: "Live screen printing on t-shirts, totes, and more. Guests watch their merch come to life right before their eyes.",
    image: "/experiences/experiences/screen-printing.jpg",
  },
];

const ITEMS_TO_DECORATE = [
  { label: "Hats", image: "/experiences/items2/Hatsv2.jpg" },
  { label: "Bucket Hats", image: "/experiences/items2/BucketHats.jpg" },
  { label: "Straw Hats", image: "/experiences/items2/Strawhats.jpg" },
  { label: "Shirts", image: "/experiences/items2/Shirts.jpg" },
  { label: "Jackets", image: "/experiences/items2/Jackets.jpg" },
  { label: "Tote Bags", image: "/experiences/items2/Totebags.jpg" },
  { label: "Backpacks", image: "/experiences/items2/Backpackv2s.jpg" },
  { label: "Cinch Bags", image: "/experiences/items2/CinchBags.jpg" },
  { label: "Fanny Packs", image: "/experiences/items2/FannyPacks.jpg" },
  { label: "Crossbody Bags", image: "/experiences/items2/CrossbodyBags.jpg" },
  { label: "Sling Bags", image: "/experiences/items2/Slingbags.jpg" },
  { label: "Drinkware", image: "/experiences/items2/Drinkware.jpg" },
  { label: "Key Chains", image: "/experiences/items2/KeyChains.jpg" },
  { label: "Luggage Tags", image: "/experiences/items2/LuggageTags.jpg" },
  { label: "Mousepads", image: "/experiences/items2/Mousepads_v2.jpg" },
  { label: "Pens", image: "/experiences/items2/Pens.jpg" },
  { label: "Plushies", image: "/experiences/items2/Plushies.jpg" },
  { label: "Coin Purses", image: "/experiences/items2/CoinPurse.jpg" },
  { label: "Printed Liner Bags", image: "/experiences/items2/Bagswithprintedliners.jpg" },
];

const OUR_WORK_COUNT = 35;

export default function OnSiteExperiencesPage() {
  return (
    <SiteShell transparentNavbar>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ backgroundColor: GREY }}
      >
        {/* Text content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            On-Site Experiences
          </p>
          <h1
            className="text-[clamp(40px,7vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
            style={{ color: DARK, maxWidth: 600 }}
          >
            Merch That Moves People
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            Our on-site branding activations allow guests to create branded
            merchandise in real time — transforming ordinary giveaways into
            unforgettable brand moments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BmButton href="/lets-connect" variant="primary" size="md">
              Get a Quote
            </BmButton>
          </div>
        </div>

        {/* Illustration — sticks to bottom right */}
        <img
          src="/experiences.png"
          alt="On-site experiences"
          className="absolute bottom-0 right-0 w-[80%] object-contain pointer-events-none md:w-[45%] md:right-[max(1.5rem,calc((100%-1200px)/2))] md:max-w-[550px]"
        />
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            How It Works
          </p>
          <h2 className="mb-16 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]" style={{ color: DARK }}>
            Three Simple Steps
          </h2>
          <ExperiencesTimeline />
        </div>
      </section>

      {/* ── Home of the Hat Bar ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: DARK }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Home of the Hat Bar
          </p>
          <h2 className="mb-6 text-[36px] leading-[1.1] tracking-[-3px] text-white md:text-[60px]">
            Merch That Moves People
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
            Our on-site branding activations allow guests to create branded
            merchandise in real time — transforming ordinary giveaways into
            unforgettable brand moments.
          </p>
          {/* Video clips grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <video
                  src={`/experiences/clips/clip-${String(i + 1).padStart(2, "0")}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <img
            src="/experiences/hatbar-white.png"
            alt="The Hat Bar"
            className="mx-auto mt-12 h-20"
          />
        </div>
      </section>

      {/* ── Section 1: Experiences (Decoration Methods) ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            What We Offer
          </p>
          <h2
            className="mb-4 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Experiences
          </h2>
          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            From live screen printing to on-the-spot embroidery, we bring the
            production floor to your event.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="overflow-hidden rounded-2xl transition-colors duration-200 hover:bg-gray-100"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                <h3
                  className="mb-2 text-xl font-medium leading-snug tracking-[-0.5px]"
                  style={{ color: DARK }}
                >
                  {exp.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.65)" }}>
                  {exp.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Our Work (Display Ideas) ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Portfolio
          </p>
          <h2
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Our Work
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: OUR_WORK_COUNT }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={`/experiences/our-work/work-${String(i + 1).padStart(2, "0")}.jpg`}
                  alt={`On-site activation ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Case Studies ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: GREY }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            Results
          </p>
          <h2
            className="mb-4 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Case Studies
          </h2>
          <p
            className="mb-12 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(50,62,72,0.7)" }}
          >
            See how our on-site activations drive engagement, boost brand
            visibility, and create lasting impressions.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={cs.image}
                    alt={`${cs.company} activation`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="mb-1 text-xl font-medium tracking-[-0.5px]"
                    style={{ color: DARK }}
                  >
                    <span style={{ color: BLUE }}>{cs.company}</span> {cs.title}
                  </h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[1px]" style={{ color: "rgba(50,62,72,0.5)" }}>
                    {cs.location}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.65)" }}>
                    {cs.overview.split(".")[0]}.
                  </p>
                  <span className="text-sm font-medium transition-colors group-hover:opacity-70" style={{ color: BLUE }}>
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Items to Decorate ── */}
      <section className="py-20 md:py-[80px] overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[2px]"
            style={{ color: BLUE }}
          >
            What We Decorate
          </p>
          <h2
            className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
            style={{ color: DARK }}
          >
            Items to Decorate
          </h2>
        </div>

        {/* Row 1 — scrolls left, draggable */}
        <MarqueeRow duration={40} direction="left" className="mb-4">
          {[...ITEMS_TO_DECORATE.slice(0, 10), ...ITEMS_TO_DECORATE.slice(0, 10)].map((item, i) => (
            <div
              key={`r1-${i}`}
              className="mx-2 w-[180px] shrink-0 overflow-hidden rounded-2xl"
              style={{ backgroundColor: GREY }}
            >
              <img src={item.image} alt={item.label} className="w-full h-auto block" draggable={false} loading="lazy" />
              <p className="py-3 text-center text-sm font-medium tracking-[-0.5px]" style={{ color: DARK }}>
                {item.label}
              </p>
            </div>
          ))}
        </MarqueeRow>

        {/* Row 2 — scrolls right, draggable */}
        <MarqueeRow duration={40} direction="right">
          {[...ITEMS_TO_DECORATE.slice(10), ...ITEMS_TO_DECORATE.slice(10)].map((item, i) => (
            <div
              key={`r2-${i}`}
              className="mx-2 w-[180px] shrink-0 overflow-hidden rounded-2xl"
              style={{ backgroundColor: GREY }}
            >
              <img src={item.image} alt={item.label} className="w-full h-auto block" draggable={false} loading="lazy" />
              <p className="py-3 text-center text-sm font-medium tracking-[-0.5px]" style={{ color: DARK }}>
                {item.label}
              </p>
            </div>
          ))}
        </MarqueeRow>
      </section>

      {/* ── CTA ── */}
      <CtaSection />

    </SiteShell>
  );
}
