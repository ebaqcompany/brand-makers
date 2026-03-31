"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  // Keep ref in sync so the rAF closure always reads the latest value
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait one frame so the DOM is painted and scrollWidth is correct
    const startAnimation = () => {
      const halfWidth = track.scrollWidth / 2;

      const step = () => {
        if (!pausedRef.current) {
          posRef.current -= 0.6;
          // Reset once we've scrolled one full set
          if (Math.abs(posRef.current) >= halfWidth) {
            posRef.current = 0;
          }
          track.style.transform = `translateX(${posRef.current}px)`;
        }
        animRef.current = requestAnimationFrame(step);
      };

      animRef.current = requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(startAnimation);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Duplicate list for seamless looping
  const doubled = [...testimonials, ...testimonials];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-5 py-4"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}
