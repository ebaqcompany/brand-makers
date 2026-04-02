"use client";

import { useState } from "react";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

export function AboutHero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 md:py-[100px]" style={{ backgroundColor: GREY }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
          About Us
        </p>
        <h1
          className="mb-6 text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-4px]"
          style={{ color: DARK, maxWidth: 700 }}
        >
          Welcome to Brand Makers
        </h1>
        <p
          className="max-w-3xl text-lg leading-relaxed"
          style={{ color: "rgba(50,62,72,0.7)" }}
        >
          Since 2008, Brand Makers has had one goal &mdash; to give our clients
          (and team) a better experience than they have had from any business in
          any industry that they have ever worked with.
        </p>

        {expanded && (
          <div className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: "rgba(50,62,72,0.7)" }}>
            <p>We are often told that we have achieved our goal.</p>
            <p className="mt-4">
              From our humble roots of just putting your logo on stuff, we&apos;ve
              grown to excel at each of the brand building services listed below. We
              remember where we came from. We&apos;re small enough to care and big
              enough to cover all of your needs. We thank our current clients, and we
              invite those that we have not yet worked with to come and see for
              yourself. We want to turn you into a raving fan!
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: BLUE }}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
