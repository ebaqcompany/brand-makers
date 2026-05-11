import { CompanyStoreDemoLink } from "@/components/company-store-demo-link";

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

const STORE_OPTIONS = [
  {
    name: "Sendito Form",
    sampleHref: "https://sendito.brandmakers.com/sendito",
  },
  {
    name: "Pop-Up Store",
    sampleHref: "https://brandmakerspopupdemo.itemorder.com/shop/home/",
  },
  {
    name: "On Demand Store",
    sampleHref: "https://bit.ly/brandmakersondemand",
  },
  {
    name: "Traditional Company Store",
    sampleHref: "https://brandmakersemployeestore.itemorder.com/shop/home/",
  },
];

const LANE_COLORS = ["#F8F8F8", "#ffffff", "#F8F8F8", "#ffffff"];
const TABLE_STICKY_TOP = 65;

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
      { href: "https://sendito.brandmakers.com/sendito", label: "Open demo" },
      {
        href: "https://brandmakerspopupdemo.itemorder.com/shop/home/",
        label: "Open demo",
      },
      { href: "https://bit.ly/brandmakersondemand", label: "Open demo" },
      {
        href: "https://brandmakersemployeestore.itemorder.com/shop/home/",
        label: "Open demo",
      },
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
      <CompanyStoreDemoLink
        href={value.href}
        className="text-sm font-bold underline"
        style={{ color: DARK }}
      >
        {value.label}
      </CompanyStoreDemoLink>
    );
  }
  return <span className="text-sm" style={{ color: "rgba(50,62,72,0.75)" }}>{value as string}</span>;
}

export function CompanyStoresSection() {

  return (
    <section style={{ background: "#FFFFFF" }} className="overflow-visible pt-0 pb-8 md:pb-12">
      <div className="space-y-4 px-6 lg:hidden">
        {STORE_OPTIONS.map((store, storeIndex) => (
          <article
            key={store.name}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <header className="border-b border-gray-200 p-5">
              <div
                className="mb-1 text-[10px] font-medium uppercase"
                style={{ letterSpacing: "0.12em", color: "#6b7280" }}
              >
                Option {storeIndex + 1}
              </div>
              <h2 className="text-xl font-extrabold leading-tight" style={{ color: DARK }}>
                {store.name}
              </h2>
              <CompanyStoreDemoLink
                href={store.sampleHref}
                className="mt-4 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase no-underline transition-colors hover:bg-gray-100 hover:text-[#323E48]"
                style={{
                  border: "1px solid #CBD5E1",
                  color: "#6B7280",
                  letterSpacing: "0.12em",
                }}
              >
                Open demo
              </CompanyStoreDemoLink>
            </header>

            <dl>
              {ROWS.map((row, rowIndex) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-gray-200 p-5 last:border-b-0"
                  style={{ background: rowIndex % 2 === 0 ? "#F8F8F8" : "#ffffff" }}
                >
                  <dt className="text-sm font-bold" style={{ color: "#374151" }}>
                    {row.label}
                  </dt>
                  <dd>{renderCell(row.values[storeIndex])}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden w-full overflow-visible lg:block">
      <table className="w-full min-w-[1120px]" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
        <thead>
          <tr>
            {/* Corner cell — sticky */}
            <th
              className="sticky left-0 z-[30]"
              style={{
                top: TABLE_STICKY_TOP,
                padding: "18px 18px 18px 0",
                paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
                background: "#ffffff",
                boxShadow: "0 8px 16px -4px rgba(0,0,0,0.06)",
              }}
            />

            {/* Store option headers — sticky */}
            {STORE_OPTIONS.map((store, i) => (
              <th
                key={store.name}
                className="sticky z-[20] text-left align-bottom"
                style={{
                  top: TABLE_STICKY_TOP,
                  padding: "18px 18px",
                  background: "#ffffff",
                  boxShadow: "0 8px 16px -4px rgba(0,0,0,0.06)",
                  ...(i === STORE_OPTIONS.length - 1 ? { paddingRight: "max(24px, calc((100vw - 1200px) / 2 + 24px))" } : {}),
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
                  {store.name}
                </div>
                <CompanyStoreDemoLink
                  href={store.sampleHref}
                  className="mt-4 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase no-underline transition-colors hover:bg-gray-100 hover:text-[#323E48]"
                  style={{
                    border: "1px solid #CBD5E1",
                    color: "#6B7280",
                    letterSpacing: "0.12em",
                  }}
                >
                  Open demo
                </CompanyStoreDemoLink>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {ROWS.map((row, ri) => {
            const isLast = ri === ROWS.length - 1;
            const isFirst = ri === 0;
            return (
              <tr
                key={row.label}
                className="transition-shadow duration-150 hover:shadow-[0_0_24px_rgba(0,0,0,0.08)] hover:relative hover:z-[5]"
              >
                {/* Feature label */}
                <th
                  className="text-left align-top"
                  style={{
                    padding: `${isFirst ? 112 : 14}px 18px 14px 0`,
                    paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
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
                      padding: `${isFirst ? 112 : 14}px 18px 14px`,
                      fontSize: 14,
                      lineHeight: 1.55,
                      background: LANE_COLORS[vi],
                      borderBottom: isLast ? "none" : "1px solid #e5e7eb",
                      ...(vi === row.values.length - 1 ? { paddingRight: "max(24px, calc((100vw - 1200px) / 2 + 24px))" } : {}),
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
