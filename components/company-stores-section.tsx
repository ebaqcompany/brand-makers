"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const BLUE = "#00A1E1";
const DARK = "#323E48";
const GREY = "#F0F0F0";

const PREVIEW_ROWS = 6; // rows shown before "Show more"

type CellValue =
  | "Yes"
  | "No"
  | "Limited"
  | "—"
  | { href: string; label: string }
  | string;

interface Row {
  label: string;
  values: [CellValue, CellValue, CellValue, CellValue];
}

const STORE_NAMES = [
  "Sendito Form",
  "Pop-Up Store",
  "On Demand Store",
  "Traditional Company Store",
];

const ROWS: Row[] = [
  { label: "Contract", values: ["None", "None", "30 Day Notice", "30 Day Notice"] },
  {
    label: "Description",
    values: [
      "Streamline the process of collecting product and shipping data through a user-friendly online form that matches your branding. Selections are then sent to the individual users.",
      "Temporary store built for a specific purpose and closing date. The store is easy to navigate, and check out is simple.",
      "Blank items are decorated as orders are placed. Because of the nature of instant decoration, product selection is very limited and more expensive than a Traditional Company Store.",
      "A Traditional Company Store is a specialized e-commerce solution specific to your company. Users can access the store to order company merch, redeem awards, build culture, send marketing materials, and more.",
    ],
  },
  {
    label: "Term",
    values: [
      "Closes at the time of your choosing and orders are fulfilled",
      "Closes at the time of your choosing and orders are fulfilled",
      "Open ended",
      "Open ended",
    ],
  },
  { label: "We have Fortune 500 customers", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Company Branded Storefront", values: ["Yes", "Yes", "Yes", "Yes"] },
  {
    label: "Sample Site",
    values: [
      { href: "https://sendito.brandmakers.com/sendito", label: "View sample" },
      "—",
      "—",
      "—",
    ],
  },
  { label: "Good for Sending Gifts", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Good for Redemption", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Good For Employee Recognition", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Good New Hire Kits", values: ["Yes", "No", "No", "Yes"] },
  { label: "Good For Fundraising", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Good for Uniforms and Supplies", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Custom Swag Boxes", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Branded Merch and Swag", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Pick & Pack", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Kitting", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Dedicated Success Manager", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Redemption Code", values: ["Yes", "Yes", "No", "No"] },
  { label: "Real Time Reporting and Analysis", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Custom Domain", values: ["Semi Custom", "Semi Custom", "Yes", "Yes"] },
  { label: "CC Processing", values: ["None", "Brand Makers", "Client", "Client"] },
  { label: "Customer Accounts", values: ["No", "No", "Yes", "Yes"] },
  { label: "3rd Party Integration", values: ["No", "No", "Yes", "Yes"] },
  { label: "Net Terms", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Access to over 100,000 unique items", values: ["Yes", "Yes", "Limited", "Yes"] },
  { label: "Access to Brand Makers Custom Merch Capabilities", values: ["Yes", "Yes", "Limited", "Yes"] },
  { label: "User Permissions", values: ["No", "No", "Yes", "Yes"] },
  { label: "Single Sign On", values: ["No", "No", "Yes", "Yes"] },
  { label: "Storage and Fulfillment", values: ["Yes", "Yes", "Yes", "Yes"] },
  {
    label: "Distribution",
    values: [
      "Domestic and International",
      "Domestic and International",
      "Domestic and International",
      "Domestic and International",
    ],
  },
  { label: "Inventory Management", values: ["No", "No", "Yes", "Yes"] },
];

// ── Pill components ───────────────────────────────────────────────────────────

function YesPill() {
  return (
    <span
      style={{
        background: "#E8F7FD",
        color: BLUE,
        fontWeight: 600,
        borderRadius: 999,
        padding: "4px 12px",
        fontSize: 12,
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      Yes
    </span>
  );
}

function NoPill({ label = "No" }: { label?: string }) {
  return (
    <span
      style={{
        background: GREY,
        color: "rgba(50,62,72,0.5)",
        fontWeight: 600,
        borderRadius: 999,
        padding: "4px 12px",
        fontSize: 12,
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function renderCell(value: CellValue) {
  if (value === "Yes") return <YesPill />;
  if (value === "No") return <NoPill />;
  if (value === "Limited") return <NoPill label="Limited" />;
  if (value === "—")
    return <span style={{ color: "rgba(50,62,72,0.25)", fontSize: 13 }}>—</span>;
  if (typeof value === "object" && "href" in value) {
    return (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: BLUE, textDecoration: "underline", fontWeight: 600, fontSize: 13 }}
      >
        {value.label}
      </a>
    );
  }
  return <span style={{ color: "rgba(50,62,72,0.75)", fontSize: 13 }}>{value as string}</span>;
}

// ── Main component ────────────────────────────────────────────────────────────

export function CompanyStoresSection({ defaultExpanded = false }: { defaultExpanded?: boolean } = {}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const visibleRows = expanded ? ROWS : ROWS.slice(0, PREVIEW_ROWS);

  return (
    <section style={{ background: "#FFFFFF" }} className="py-20">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Heading + CTA ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p
              style={{
                color: BLUE,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Company Stores
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                color: DARK,
                lineHeight: 1.1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Four Company Store Options<br />That Deliver
            </h2>
            <p style={{ color: "rgba(50,62,72,0.65)", fontSize: 16, marginTop: 16, maxWidth: 520 }}>
              Whether you need a quick form or a fully branded storefront, we have a solution.
            </p>
          </div>
          <div className="md:self-start md:mt-8">
            <a
              href="/lets-connect"
              style={{
                background: BLUE,
                color: "#FFFFFF",
                borderRadius: 8,
                padding: "14px 28px",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* ── Table wrapper — relative so the fade overlay can be positioned ── */}
        <div className="relative">
          <div
            className="overflow-x-auto rounded-2xl"
            style={{
              border: "1px solid rgba(50,62,72,0.1)",
              boxShadow: "0 8px 32px rgba(15,23,42,0.06)",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: 820,
                borderCollapse: "separate",
                borderSpacing: 0,
              }}
            >
              {/* ── Column headers ── */}
              <thead>
                <tr style={{ backgroundColor: DARK }}>
                  {/* Corner cell */}
                  <th
                    style={{
                      width: 220,
                      minWidth: 180,
                      padding: "20px 24px",
                      textAlign: "left",
                      position: "sticky",
                      left: 0,
                      zIndex: 12,
                      background: DARK,
                      borderRadius: "16px 0 0 0",
                    }}
                  />
                  {STORE_NAMES.map((name, i) => (
                    <th
                      key={name}
                      style={{
                        padding: "20px 20px 20px 20px",
                        textAlign: "left",
                        verticalAlign: "bottom",
                        borderRadius: i === STORE_NAMES.length - 1 ? "0 16px 0 0" : undefined,
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontSize: 10,
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.45)",
                          marginBottom: 6,
                        }}
                      >
                        Option {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(15px, 1.6vw, 20px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1.15,
                        }}
                      >
                        {name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ── Rows ── */}
              <tbody>
                {visibleRows.map((row, ri) => {
                  const isEven = ri % 2 === 0;
                  const isLast = ri === visibleRows.length - 1;
                  return (
                    <tr key={row.label} style={{ backgroundColor: isEven ? "#FFFFFF" : "#FAFAFA" }}>
                      {/* Feature label — sticky left */}
                      <td
                        style={{
                          padding: "14px 24px",
                          fontWeight: 600,
                          fontSize: 13,
                          color: DARK,
                          verticalAlign: "top",
                          position: "sticky",
                          left: 0,
                          zIndex: 8,
                          background: isEven ? "#FFFFFF" : "#FAFAFA",
                          borderBottom: isLast ? "none" : "1px solid rgba(50,62,72,0.07)",
                          borderRight: "1px solid rgba(50,62,72,0.07)",
                          borderRadius: isLast ? "0 0 0 16px" : undefined,
                        }}
                      >
                        {row.label}
                      </td>
                      {/* Data cells */}
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          style={{
                            padding: "14px 20px",
                            verticalAlign: "top",
                            fontSize: 13,
                            borderBottom: isLast ? "none" : "1px solid rgba(50,62,72,0.07)",
                            borderRadius:
                              isLast && vi === row.values.length - 1 ? "0 0 16px 0" : undefined,
                          }}
                        >
                          {renderCell(val)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ── Fade-out overlay (only when collapsed) ── */}
          {!expanded && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 120,
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFFFFF 85%)",
                borderRadius: "0 0 16px 16px",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* ── Show more / Show less button ── */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{
              background: expanded ? GREY : BLUE,
              color: expanded ? DARK : "#FFFFFF",
              border: "none",
              borderRadius: 8,
              padding: "13px 28px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp className="h-4 w-4 transition-transform" />
              </>
            ) : (
              <>
                Show All {ROWS.length} Features
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
