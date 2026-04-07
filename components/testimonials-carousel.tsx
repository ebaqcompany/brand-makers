"use client";

import { Star } from "lucide-react";
import { MarqueeRow } from "@/components/marquee-row";

const BLUE = "#00A1E1";
const DARK = "#323E48";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of People, Apex Technologies",
    initials: "SM",
    quote:
      "Brand Makers completely transformed how we think about company merch. The quality of the custom headwear and the seamless company store setup saved us hours every quarter.",
    stars: 5,
  },
  {
    name: "James Harrington",
    role: "Events Director, Meridian Group",
    initials: "JH",
    quote:
      "The on-site Hat Bar activation at our annual conference was an absolute hit. Guests were lining up and the brand impressions were through the roof.",
    stars: 5,
  },
  {
    name: "Lauren Okafor",
    role: "Head of HR, Summit Financial",
    initials: "LO",
    quote:
      "Their kitting and fulfillment program makes onboarding feel special. Every new hire gets a beautifully packaged welcome kit on day one — no logistics headaches for us.",
    stars: 5,
  },
  {
    name: "Derek Nguyen",
    role: "Brand Manager, TrailForce Outdoors",
    initials: "DN",
    quote:
      "Working with Brand Makers on our retail brand partner program was seamless. The co-branding quality matched our standards perfectly and turnaround was faster than expected.",
    stars: 5,
  },
  {
    name: "Monica Reyes",
    role: "Marketing Manager, SkyBridge Corp",
    initials: "MR",
    quote:
      "We've used Brand Makers for three years for our pop-up company store. The product selection is excellent and the team always delivers on time, no matter how tight the deadline.",
    stars: 5,
  },
  {
    name: "Tyler Brooks",
    role: "CMO, Crestline Brands",
    initials: "TB",
    quote:
      "From the first call to final delivery, the Brand Makers team made us feel like a priority. The custom products were beyond what we imagined.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          style={{
            fill: i < count ? "#F59E0B" : "none",
            color: i < count ? "#F59E0B" : "#D1D5DB",
          }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  initials,
  quote,
  stars,
}: (typeof testimonials)[0]) {
  return (
    <div
      className="flex w-[340px] shrink-0 flex-col gap-5 rounded-2xl border bg-white p-7 shadow-sm"
      style={{ borderColor: "rgba(50,62,72,0.1)" }}
    >
      {/* Header: avatar + name + stars */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: DARK }}
          >
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: DARK }}>
              {name}
            </p>
            <p className="text-xs" style={{ color: "rgba(50,62,72,0.55)" }}>
              {role}
            </p>
          </div>
        </div>
        <StarRating count={stars} />
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(50,62,72,0.75)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export function TestimonialsCarousel() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <MarqueeRow duration={50} direction="left" className="py-4">
      {doubled.map((t, i) => (
        <div key={i} className="mx-2.5">
          <TestimonialCard {...t} />
        </div>
      ))}
    </MarqueeRow>
  );
}
