// ── Design tokens ─────────────────────────────────────────────────────────────
const BLUE = "#00A1E1";
const DARK = "#323E48";

// ── Services data ─────────────────────────────────────────────────────────────
const SERVICES = [
  { label: "Search for Merch",        href: "/search-for-merch" },
  { label: "Company Stores",          href: "/company-stores" },
  { label: "Kitting & Fulfillment",   href: "/kitting-and-fulfillment" },
  { label: "Custom Headwear",         href: "/custom-headwear" },
  { label: "Custom Merch",            href: "/custom-products" },
  { label: "On-Site Experiences",     href: "/on-site-experiences" },
  { label: "Retail Brand Partners",   href: "/retail-brand-partners" },
  { label: "Our Responsibility",      href: "/our-responsibility" },
];

// ── Hat SVG ──────────────────────────────────────────────────────────────────
function HatIcon({ color = "#FFFFFF" }: { color?: string }) {
  const sharedProps = {
    fill: "none" as const,
    stroke: color,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.4,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100.7 68.26"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <path
        {...sharedProps}
        d="M1.14,54.59s3.99-3.35,12.48-3.35,19.08,7.56,25.72,11.87,11.17,6.4,22.46,3.37,21.76-15.36,21.76-15.36c0,0-9.66-1.4-26.18-8.84-16.52-7.45-28.16-4.54-32.47-2.56S-.11,51.23.36,56.94s14.6,3.64,21.93-3.58"
      />
      <path
        {...sharedProps}
        d="M83.56,51.12s7.6,1.81,15.32,2.24c0,0,11.58-41.82-30.33-49.95C29.57-4.16,24.91,39.71,24.91,39.71"
      />
      <path
        {...sharedProps}
        d="M39.83,37.57S48.53.26,68.55,3.41c20.02,3.14,8.48,46.18,8.48,46.18"
      />
      <path
        {...sharedProps}
        d="M64.38,2.74s.67-2.71,4.75-2.36,3.49,3.98,3.49,3.98"
      />
      <ellipse
        {...sharedProps}
        cx="65.44" cy="12.92" rx="1.39" ry="1.72"
        transform="translate(42.23 75.45) rotate(-80.81)"
      />
      <ellipse
        {...sharedProps}
        cx="88.79" cy="18.88" rx="1.05" ry="1.72"
        transform="translate(5.81 55.68) rotate(-35.92)"
      />
      <ellipse
        {...sharedProps}
        cx="42.7" cy="10.73" rx="1.72" ry=".93"
        transform="translate(1.82 27.09) rotate(-35.92)"
      />
      <path
        {...sharedProps}
        d="M1.14,54.59s3.99-3.35,12.48-3.35,19.08,7.56,25.72,11.87,11.17,6.4,22.46,3.37,21.76-15.36,21.76-15.36"
      />
      <path
        {...sharedProps}
        d="M7.73,48.87s4.01-2.2,11.89-.34c7.37,1.75,15.87,7.64,20.8,10.7s10.36,5.66,19.93,2.58,17.55-11.91,17.55-11.91"
      />
      <path
        {...sharedProps}
        d="M13.46,45.43s4.95-.98,11.45,1.13,13.37,6.97,16.6,8.79,9.54,4.91,17.4,1.78c7.86-3.13,13.74-8.88,13.74-8.88"
      />
    </svg>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-20 md:py-[80px]"
      style={{ backgroundColor: DARK }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[2px]"
          style={{ color: BLUE }}
        >
          Our Services
        </p>

        {/* Headline */}
        <h2
          className="mb-12 text-[36px] leading-[1.1] tracking-[-3px] md:text-[60px]"
          style={{ color: "#FFFFFF" }}
        >
          How We Do It
        </h2>

        {/* 4 × 2 grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SERVICES.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-4 rounded-xl p-6 text-center transition-colors duration-200 hover:bg-white/10"
            >
              {/* Icon container */}
              <div
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ width: 72, height: 52 }}
              >
                <HatIcon color="#FFFFFF" />
              </div>

              <span
                className="text-sm font-medium leading-snug md:text-base"
                style={{ color: "#FFFFFF" }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
