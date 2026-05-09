import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

const BLUE = "#00A1E1";
const DARK = "#323E48";

const termSections = [
  {
    title: "Orders",
    body: [
      "Orders are accepted when Brand Makers confirms the project details, product selections, quantities, pricing, decoration method, production schedule, and shipping requirements. Custom product orders may require artwork approval, deposit, or full payment before production begins.",
      "Because promotional products are produced to order, changes after approval may affect pricing, inventory availability, production time, and delivery dates.",
    ],
  },
  {
    title: "Artwork and Approvals",
    body: [
      "Clients are responsible for reviewing proofs, artwork, spelling, colors, placement, quantities, sizes, and all other order details before approval. Production begins from the approved proof or approved order details.",
      "Brand Makers will make reasonable efforts to match colors and artwork, but slight variations can occur because of product materials, decoration methods, screen settings, and manufacturing tolerances.",
    ],
  },
  {
    title: "Pricing and Payment",
    body: [
      "Quotes are based on the specifications provided at the time of quoting and may change if product costs, freight costs, quantities, decoration requirements, or delivery requirements change.",
      "Payment terms, deposits, and credit arrangements must be approved by Brand Makers. Past-due balances may delay production, shipment, or future orders.",
    ],
  },
  {
    title: "Production and Delivery",
    body: [
      "Production timelines begin after all required approvals, payment requirements, artwork, and order details are complete. Estimated delivery dates are not guaranteed unless Brand Makers has specifically confirmed a guaranteed service in writing.",
      "Brand Makers is not responsible for delays caused by carriers, suppliers, customs, weather, inventory changes, incomplete approvals, or other circumstances outside its control.",
    ],
  },
  {
    title: "Shipping, Shortages, and Damages",
    body: [
      "Shipping charges, split shipments, rush services, and special handling may be billed separately unless included in the confirmed quote. Title and risk of loss may transfer when goods are delivered to the carrier.",
      "Any shipment shortage, damage, or order issue should be reported promptly so Brand Makers can review the issue with the supplier or carrier.",
    ],
  },
  {
    title: "Cancellations and Returns",
    body: [
      "Custom-decorated, personalized, or made-to-order products are generally not returnable unless Brand Makers determines there is a production defect or approved order error.",
      "Cancellation requests are reviewed based on the order status. Costs already incurred for product, artwork, setup, production, shipping, or supplier fees may still be billed.",
    ],
  },
  {
    title: "Client Materials and Trademarks",
    body: [
      "Clients represent that they have the right to use any logos, trademarks, artwork, names, images, and other materials submitted to Brand Makers for production.",
      "Brand Makers may display completed work as examples of its capabilities unless confidentiality or brand-use restrictions are agreed to in writing.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "Brand Makers' liability for an order is limited to the amount paid for the affected goods or services. Brand Makers is not liable for indirect, incidental, consequential, or special damages, including lost profits, missed events, or lost business opportunities.",
      "These terms are intended to support clear project expectations and may be updated from time to time.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms and Conditions | Brand Makers",
  description:
    "Review Brand Makers terms and conditions for custom merchandise orders, artwork approvals, payment, production, shipping, and returns.",
};

export default function TermsAndConditionsPage() {
  return (
    <SiteShell>
      <section className="bg-[#F0F0F0] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[2px]" style={{ color: BLUE }}>
            Legal
          </p>
          <h1
            className="max-w-4xl text-[52px] leading-[1.0] tracking-[-4px] md:text-[92px] md:tracking-[-6px]"
            style={{ color: DARK }}
          >
            Terms and Conditions
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#6d747b]">
            These terms outline the standard expectations for Brand Makers orders,
            custom production, approvals, payment, shipping, and returns.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="text-sm leading-relaxed text-[#6d747b]">
            <p className="font-semibold uppercase tracking-[1.5px]" style={{ color: DARK }}>
              Brand Makers
            </p>
            <p className="mt-4">464 South Main Street</p>
            <p>Spanish Fork, UT 84660</p>
            <p className="mt-4">
              <a className="underline underline-offset-4" href="mailto:contact@brandmakers.com">
                contact@brandmakers.com
              </a>
            </p>
            <p>
              <a className="underline underline-offset-4" href="tel:8017986470">
                801-798-6470
              </a>
            </p>
          </aside>

          <div className="space-y-10">
            {termSections.map((section) => (
              <section key={section.title} className="border-b border-[#d8dde0] pb-10 last:border-b-0 last:pb-0">
                <h2 className="text-3xl font-semibold tracking-[-1px]" style={{ color: DARK }}>
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-[#6d747b]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
