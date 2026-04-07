import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BmButton } from "@/components/bm-button";

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
  { label: "Hats", image: "/experiences/items-to-decorate/Hatsv2.jpg" },
  { label: "Bucket Hats", image: "/experiences/items-to-decorate/BucketHats.jpg" },
  { label: "Straw Hats", image: "/experiences/items-to-decorate/Strawhats.jpg" },
  { label: "Shirts", image: "/experiences/items-to-decorate/Shirts.jpg" },
  { label: "Jackets", image: "/experiences/items-to-decorate/Jackets.jpg" },
  { label: "Tote Bags", image: "/experiences/items-to-decorate/Totebags.jpg" },
  { label: "Backpacks", image: "/experiences/items-to-decorate/Backpackv2s.jpg" },
  { label: "Cinch Bags", image: "/experiences/items-to-decorate/CinchBags.jpg" },
  { label: "Fanny Packs", image: "/experiences/items-to-decorate/FannyPacks.jpg" },
  { label: "Crossbody Bags", image: "/experiences/items-to-decorate/CrossbodyBags.jpg" },
  { label: "Sling Bags", image: "/experiences/items-to-decorate/Slingbags.jpg" },
  { label: "Drinkware", image: "/experiences/items-to-decorate/Drinkware.jpg" },
  { label: "Key Chains", image: "/experiences/items-to-decorate/KeyChains.jpg" },
  { label: "Luggage Tags", image: "/experiences/items-to-decorate/LuggageTags.jpg" },
  { label: "Mousepads", image: "/experiences/items-to-decorate/Mousepads_v2.jpg" },
  { label: "Pens", image: "/experiences/items-to-decorate/Pens.jpg" },
  { label: "Plushies", image: "/experiences/items-to-decorate/Plushies.jpg" },
  { label: "Coin Purses", image: "/experiences/items-to-decorate/CoinPurse.jpg" },
  { label: "Printed Liner Bags", image: "/experiences/items-to-decorate/Bagswithprintedliners.jpg" },
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
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            How It Works
          </p>
          <h2 className="mb-16 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]" style={{ color: DARK }}>
            Three Simple Steps
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
            {[
              { step: "01", label: "Pick", desc: "Guests choose their item and design" },
              { step: "02", label: "Decorate", desc: "We customize it live on the spot" },
              { step: "03", label: "Activated", desc: "They leave as brand ambassadors" },
            ].map((s, i) => (
              <div key={s.step} className="flex flex-col items-center gap-3">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-semibold text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  {s.step}
                </div>
                <h3 className="text-xl font-medium" style={{ color: DARK }}>{s.label}</h3>
                <p className="max-w-[200px] text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.6)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
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
            The Original Hat Bar Experience
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
            The Hat Bar was a hit! Guests choose their preferred hat and patch,
            and we customize it live on the spot. It&apos;s the activation
            everyone talks about months later.
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "/experiences/case-studies/coca-cola.jpg",
                company: "Coca-Cola",
                location: "Atlanta, Georgia",
                attendance: "3,000+",
                items: "~400",
                overview: "The on-site hat decoration experience at Coca-Cola\u2019s college football tailgate was a huge success. Fans loved customizing their hats in real time, creating a steady flow of excitement and engagement throughout the event.",
              },
              {
                image: "/experiences/case-studies/caterpillar-abu-dhabi.jpg",
                company: "Caterpillar",
                location: "Abu Dhabi, UAE",
                attendance: "239,000",
                items: "3,000+ over 4 days",
                overview: "A multi-day activation featuring on-site laser engraving of premium leather luggage tags and coasters. Over 3,000 items produced with steady traffic and strong engagement throughout.",
              },
              {
                image: "/experiences/case-studies/caterpillar-houston.jpg",
                company: "Caterpillar",
                location: "Houston, TX — Minute Maid Park",
                attendance: "~350 booth visitors",
                items: "~350",
                overview: "On-site laser engraving at Minute Maid Park where attendees personalized premium leather luggage tags and valet trays, driving meaningful engagement and lasting impressions.",
              },
            ].map((cs) => (
              <div
                key={cs.location}
                className="overflow-hidden rounded-2xl"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={cs.image}
                    alt={`${cs.company} activation`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="mb-1 text-xl font-medium tracking-[-0.5px]"
                    style={{ color: DARK }}
                  >
                    {cs.company}
                  </h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[1px]" style={{ color: BLUE }}>
                    {cs.location}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(50,62,72,0.65)" }}>
                    {cs.overview}
                  </p>
                  <div className="flex gap-6 border-t pt-4" style={{ borderColor: "rgba(50,62,72,0.1)" }}>
                    <div>
                      <p className="text-lg font-semibold" style={{ color: DARK }}>{cs.attendance}</p>
                      <p className="text-xs" style={{ color: "rgba(50,62,72,0.5)" }}>Attendance</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold" style={{ color: DARK }}>{cs.items}</p>
                      <p className="text-xs" style={{ color: "rgba(50,62,72,0.5)" }}>Items Distributed</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Items to Decorate ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: "#FFFFFF" }}>
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {ITEMS_TO_DECORATE.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-2xl"
                style={{ backgroundColor: GREY }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p
                  className="py-4 text-center text-lg font-medium tracking-[-0.5px]"
                  style={{ color: DARK }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-[80px]" style={{ backgroundColor: BLUE }}>
        <div className="max-w-[1200px] mx-auto px-6 grid w-full grid-cols-1 items-center justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 lg:gap-x-20">
          <div className="max-w-lg">
            <h2 className="mb-3 text-[36px] leading-[1.1] tracking-[-3px] text-white md:mb-4 md:text-[60px]">
              Book Your Activation
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              Ready to wow your guests? Let&apos;s plan your next on-site
              branding experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <BmButton href="/lets-connect" variant="dark">
              Get a Quote
            </BmButton>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
