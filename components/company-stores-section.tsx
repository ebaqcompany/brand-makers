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

const LANE_COLORS = ["#fcfcfd", "#fbfcff", "#fcfcfe", "#fcfcfa"];

const ROWS: Row[] = [
  { label: "Contract", values: ["None", "None", "30 Day Notice", "30 Day Notice"] },
  {
    label: "Description",
    values: [
      "Streamline the process of collecting product and shipping data through a user-friendly online form that matches your branding.",
      "Temporary store built for a specific purpose and closing date. The store is easy to navigate, and check out is simple.",
      "Blank items are decorated as orders are placed. Product selection is more limited and more expensive than a Traditional Company Store.",
      "A specialized e-commerce solution specific to your company. Users can access the store to order company merch, redeem awards, build culture, send marketing materials, and more.",
    ],
  },
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
    <section style={{ background: "#FFFFFF" }} className="py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Table shell */}
        <div className="relative">
          <div
            className="overflow-x-auto rounded-[28px]"
            style={{
              border: "1px solid #e5e7eb",
              boxShadow: "0 18px 46px rgba(15,23,42,0.08)",
              background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
              padding: 18,
            }}
          >
            <table className="w-full" style={{ minWidth: 900, borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  {/* Corner cell */}
                  <th
                    className="sticky left-0 z-[12]"
                    style={{
                      width: 240,
                      minWidth: 200,
                      padding: 0,
                      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                    }}
                  >
                    <div style={{ height: 112, borderBottom: "1px solid #e5e7eb" }} />
                  </th>

                  {/* Store headers as cards */}
                  {STORE_NAMES.map((name, i) => (
                    <th key={name} className="sticky top-0 z-10 px-2 text-left align-bottom">
                      <div
                        className="rounded-t-[22px] px-5 py-5"
                        style={{
                          minHeight: 112,
                          background: LANE_COLORS[i],
                          border: "1px solid #e5e7eb",
                          borderBottom: "none",
                          boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                        }}
                      >
                        <div
                          className="mb-2 text-[11px] font-medium uppercase"
                          style={{ letterSpacing: "0.12em", color: "#6b7280" }}
                        >
                          Option {i + 1}
                        </div>
                        <div
                          className="text-xl font-extrabold leading-tight"
                          style={{ color: DARK }}
                        >
                          {name}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row, ri) => {
                  const isLast = ri === ROWS.length - 1;
                  return (
                    <tr key={row.label}>
                      {/* Feature label — sticky left */}
                      <th
                        className="sticky left-0 z-[8] text-left align-top"
                        style={{
                          padding: "16px 18px",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#374151",
                          background: "#fff",
                          borderBottom: isLast ? "none" : "1px solid #e5e7eb",
                          borderRadius: isLast ? "0 0 0 18px" : undefined,
                        }}
                      >
                        {row.label}
                      </th>
                      {/* Data cells — card lanes */}
                      {row.values.map((val, vi) => (
                        <td
                          key={vi}
                          className="align-top"
                          style={{
                            padding: "16px 18px",
                            fontSize: 14,
                            lineHeight: 1.55,
                            background: LANE_COLORS[vi],
                            borderBottom: isLast ? "none" : "1px solid #e5e7eb",
                            borderLeft: "8px solid #fff",
                            borderRight: "8px solid #fff",
                            boxShadow: "inset 1px 0 0 #e5e7eb, inset -1px 0 0 #e5e7eb",
                            borderRadius: isLast ? "0 0 20px 20px" : undefined,
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

        </div>
      </div>
    </section>
  );
}
