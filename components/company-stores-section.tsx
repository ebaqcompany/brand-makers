const BLUE = "#00A1E1";
const DARK = "#323E48";

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

const LANE_COLORS = ["#F8F8F8", "#ffffff", "#F8F8F8", "#ffffff"];

const ROWS: Row[] = [
  {
    label: "Description",
    values: [
      "Streamline the process of collecting product and shipping data through a user-friendly online form that matches your branding.",
      "Temporary store built for a specific purpose and closing date. The store is easy to navigate, and check out is simple.",
      "Blank items are decorated as orders are placed. Product selection is more limited and more expensive than a Traditional Company Store.",
      "A specialized e-commerce solution specific to your company. Users can access the store to order company merch, redeem awards, build culture, send marketing materials, and more.",
    ],
  },
  { label: "Contract", values: ["None", "None", "30 Day Notice", "30 Day Notice"] },
  {
    label: "Term",
    values: [
      "Closes at the time of your choosing",
      "Closes at the time of your choosing",
      "Open ended",
      "Open ended",
    ],
  },
  { label: "Fortune 500 Customers", values: ["Yes", "Yes", "Yes", "Yes"] },
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
  { label: "Employee Recognition", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "New Hire Kits", values: ["Yes", "No", "No", "Yes"] },
  { label: "Fundraising", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Uniforms and Supplies", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Custom Swag Boxes", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Branded Merch and Swag", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Pick & Pack", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Kitting", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Dedicated Success Manager", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Redemption Code", values: ["Yes", "Yes", "No", "No"] },
  { label: "Real Time Reporting", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "Custom Domain", values: ["Semi Custom", "Semi Custom", "Yes", "Yes"] },
  { label: "CC Processing", values: ["None", "Brand Makers", "Client", "Client"] },
  { label: "Customer Accounts", values: ["No", "No", "Yes", "Yes"] },
  { label: "3rd Party Integration", values: ["No", "No", "Yes", "Yes"] },
  { label: "Net Terms", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "100,000+ Unique Items", values: ["Yes", "Yes", "Limited", "Yes"] },
  { label: "Custom Merch Capabilities", values: ["Yes", "Yes", "Limited", "Yes"] },
  { label: "User Permissions", values: ["No", "No", "Yes", "Yes"] },
  { label: "Single Sign On", values: ["No", "No", "Yes", "Yes"] },
  { label: "Storage and Fulfillment", values: ["Yes", "Yes", "Yes", "Yes"] },
  {
    label: "Distribution",
    values: ["Domestic & International", "Domestic & International", "Domestic & International", "Domestic & International"],
  },
  { label: "Inventory Management", values: ["No", "No", "Yes", "Yes"] },
];

function renderCell(value: CellValue) {
  if (value === "Yes")
    return (
      <span className="inline-block rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: "#eaf6ee", color: "#166534" }}>
        Yes
      </span>
    );
  if (value === "No")
    return (
      <span className="inline-block rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: "#fcecec", color: "#991b1b" }}>
        No
      </span>
    );
  if (value === "Limited")
    return (
      <span className="inline-block rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: "#fef3c7", color: "#92400e" }}>
        Limited
      </span>
    );
  if (value === "—")
    return <span style={{ color: "rgba(50,62,72,0.25)" }}>—</span>;
  if (typeof value === "object" && "href" in value) {
    return (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold underline"
        style={{ color: DARK }}
      >
        {value.label}
      </a>
    );
  }
  return <span className="text-sm" style={{ color: "rgba(50,62,72,0.75)" }}>{value as string}</span>;
}

export function CompanyStoresSection() {
  return (
    <section style={{ background: "#FFFFFF" }} className="relative py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
          <thead className="relative after:absolute after:left-[-100vw] after:right-[-100vw] after:bottom-0 after:h-px after:shadow-[0_8px_16px_4px_rgba(0,0,0,0.06)]">
            <tr>
              {/* Corner cell — sticky top + left */}
              <th
                className="sticky top-[70px] left-0 z-[20]"
                style={{
                  width: 200,
                  minWidth: 160,
                  padding: "24px 18px 24px 0",
                  background: "#ffffff",
                }}
              />

              {/* Store option headers — sticky to top below navbar */}
              {STORE_NAMES.map((name, i) => (
                <th
                  key={name}
                  className="sticky top-[70px] z-[15] text-left align-bottom"
                  style={{
                    padding: "24px 18px",
                    background: "#ffffff",
                  }}
                >
                  <div
                    className="mb-1 text-[10px] font-medium uppercase"
                    style={{ letterSpacing: "0.12em", color: "#6b7280" }}
                  >
                    Option {i + 1}
                  </div>
                  <div
                    className="text-lg font-extrabold leading-tight"
                    style={{ color: DARK }}
                  >
                    {name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROWS.map((row, ri) => {
              const isLast = ri === ROWS.length - 1;
              return (
                <tr key={row.label} className="transition-shadow duration-150 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:relative hover:z-[5]">
                  {/* Feature label */}
                  <th
                    className="text-left align-top transition-colors duration-150"
                    style={{
                      padding: "14px 18px 14px 0",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#374151",
                      background: "#fff",
                      borderBottom: isLast ? "none" : "1px solid #e5e7eb",
                    }}
                  >
                    {row.label}
                  </th>
                  {/* Data cells */}
                  {row.values.map((val, vi) => (
                    <td
                      key={vi}
                      className="align-top"
                      style={{
                        padding: "14px 18px",
                        fontSize: 14,
                        lineHeight: 1.55,
                        background: LANE_COLORS[vi],
                        borderBottom: isLast ? "none" : "1px solid #e5e7eb",
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
    </section>
  );
}
