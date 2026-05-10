import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

const BLUE = "#00A1E1";
const DARK = "#323E48";

const introParagraphs = [
  'All sales made by Brand Makers ("Seller") to you ("Customer") are governed by these Terms and Conditions of Sale unless otherwise indicated by Brand Makers in writing.',
];

const importantNotice =
  "PLEASE READ THESE TERMS AND CONDITIONS THOROUGHLY BEFORE PLACING AN ORDER. DO NOT PLACE AN ORDER UNLESS YOU UNDERSTAND THESE TERMS AND CONDITIONS AND AGREE TO ABIDE BY THEM. BRAND MAKERS RESERVES THE RIGHT TO AMEND OR MODIFY THESE TERMS AND CONDITIONS OF SALE AT ANY TIME AT ITS SOLE DISCRETION. SELLER SHALL NOT ACCEPT CUSTOMER'S PURCHASE ORDERS UNLESS AND UNTIL CUSTOMER CONSENTS TO THESE TERMS AND CONDITIONS OF SALE. THESE TERMS AND CONDITIONS OF SALE (AS SET FORTH HERE) SUPERSEDE THE TERMS AND CONDITIONS OF CUSTOMER'S PURCHASE ORDER(S) AND WILL GOVERN ALL TRANSACTIONS BETWEEN CUSTOMER AND SELLER. THESE TERMS AND CONDITIONS OF SALE ALSO APPLY TO ALL FUTURE TRANSACTIONS UNLESS MODIFIED IN WRITING SIGNED BY SELLER AND CUSTOMER.";

const termSections = [
  {
    title: "Order Acceptance",
    body: [
      "You agree that your order is an offer to buy, under these Sales Terms and Conditions, all products and services listed in your order. All orders must be accepted by us or we will not be obligated to sell the products or services to you. We may choose not to accept any orders in our sole discretion. Changes or canceled orders may incur additional charges if made after we have received your approval.",
    ],
  },
  {
    title: "Payment Terms",
    body: [
      "New client may be required to pre-pay for orders until payment terms are approved. Seller accepts payment by Visa, Mastercard, Discover or American Express. Orders paid via credit card in excess of $10,000 will need prior approval to pay via credit card. Pre-paid orders will be charged in full before custom decoration. Credit card orders in excess of $2,000 may require deposit before shipment. Company checks will be accepted only with pre-approved credit. Customer will be charged a $25.00 service charge for any returned check. Net terms will be accepted with pre-approved credit upon credit terms determined by Seller. If customer is approved to purchase on an open account, all invoices are due and payable no later than thirty (30) days from date of invoice.",
    ],
  },
  {
    title: "Payment Default",
    body: [
      "It is understood that should Customer become delinquent in payment, no further credit will be extended. Seller may, at its sole discretion charge Customer interest on all overdue amounts at the rate of 1.5% per month (18% per annum), or the maximum amount allowed by law, whichever is lesser. Customer will also be responsible for and shall reimburse Seller for any collection agency fees up to 40% of the balance owed and reasonable attorneys' fees, court costs with or without suit, and all other costs and expenses which may be incurred by Seller in the enforcement of these Terms and Conditions of Sale. Customer acknowledges that these charges, fees, and expenses are reasonable under the circumstances as an estimate of the damages Seller is likely to suffer if Customer defaults in its payment obligations.",
    ],
  },
  {
    title: "Permission to Contact",
    body: [
      "We want to stay in touch with you regarding your account. Since most people only have cell phones we will need your permission to call your cell phone. Agreeing to these terms will allow us to do that. You acknowledge and agree that this authorization shall extend to any billing or collection company or companies which may be assigned to your account(s) for servicing or collection.",
    ],
  },
  {
    title: "Over/Under Runs",
    body: [
      "Due to the process of manufacturing items to customer specifications, over or under runs of not more than 10% may occur. These will be deemed acceptable by the customer and billed on the final invoice.",
    ],
  },
  {
    title: "Taxes and Duties (International Shipments)",
    body: [
      "All international orders are subject to taxes and duties that may be billed at a later date.",
    ],
  },
  {
    title: "Notice of Defects",
    body: [
      "Customer is responsible for inspecting all merchandise upon receipt. Customer shall notify Seller in writing within 5 days of Customer's receipt of the merchandise of any claims for damages resulting from late delivery or any defect in the merchandise discovered by Customer, including, without limitation, claims related to shortages, quality, or specification. Seller shall not be responsible for shortages when shipments are directed to a third party other than Customer. Brand Makers, LLC does not assume any responsibility for products provided by Customer.",
      "UNDER NO CIRCUMSTANCES WILL SELLER ACCEPT CLAIMS OR RETURNS OF MERCHANDISE WHICH HAS BEEN ALTERED OR MODIFIED IN ANY MANNER OR THAT HAS BEEN DISTRIBUTED AND IS NOT COLLECTABLE.",
    ],
  },
  {
    title: "Customer Acceptance of Late or Defective Merchandise",
    body: [
      "Customer's failure to provide written notice of a claim, as set forth in these Terms and Conditions of Sale, shall constitute a waiver of any claim Customer may have for damages resulting from such defects, including late delivery. Seller is not liable for late delivery of merchandise due to incompetence of third-party shipping companies.",
    ],
  },
  {
    title: "Shipments; Delivery; Title and Risk of Loss",
    body: [
      "We will arrange for shipment of the products to you. You will pay all shipping and handling charges specified during the ordering process.",
      "Title and risk of loss pass to you upon our transfer of the products to the carrier (FOB Carrier). Shipping and delivery dates are estimates only and cannot be guaranteed. We are not liable for any delays in shipments.",
    ],
  },
  {
    title: "Limited Liability",
    body: [
      "Customer acknowledges that Seller shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, or other intangible losses (even if Seller has been advised of the possibility of such damages), or personal injuries or death resulting from use or sale of the Seller's merchandise.",
    ],
  },
  {
    title: "PPE Items",
    body: [
      "PPE items such as face masks, face coverings, hand sanitizers, and other PPE items of any kind ordered from Brand Makers, LLC are not approved for medical use or purposes and Brand Makers, LLC cannot be held liable for any losses caused by such items.",
    ],
  },
  {
    title: "Credit Deterioration",
    body: [
      "Seller has the right, in addition to other remedies provided by the law, to terminate any delivery or suspend further deliveries of other shipments in the event Customer fails to pay for any shipment. Should Customer's financial condition become unsatisfactory, Seller may require cash payments in advance or other security satisfactory to Seller prior to shipment of merchandise.",
    ],
  },
  {
    title: "Notices",
    body: [
      "We may provide any notice to you under these Sales Terms and Conditions by: (a) sending a message to the email address you provide; or (b) by posting to the Website. Notices sent by email will be effective when we send the email and notices we provide by posting will be effective upon posting. It is your responsibility to keep your email address current.",
      "To give us notice under these Sales Terms and Conditions, you must contact us as follows: (i) by sending a message to contact@brandmakers.com; or (ii) by personal delivery, overnight courier or registered or certified mail to Brand Makers, LLC 464 South Main St Spanish Fork, UT 84660, Attn: Legal Department. We may update our email address or mailing address for notices to us by posting a notice on the Website.",
      "Notices provided by personal delivery will be effective immediately. Notices provided by email or overnight courier will be effective one business day after they are sent. Notices provided by registered or certified mail will be effective three business days after they are sent.",
    ],
  },
  {
    title: "Severability",
    body: [
      "If any provision of these Sales Terms and Conditions is invalid, illegal, void, or unenforceable, then that provision will be deemed severed from these Sales Terms and Conditions and will not affect the validity or enforceability of the remaining provisions of these Sales Terms and Conditions.",
    ],
  },
  {
    title: "Miscellaneous",
    body: [
      "These Terms and Conditions of Sale constitute the entire agreement between Seller and Customer, superseding any prior agreements between Customer and Seller. The failure of Seller to exercise or enforce any right or provision of these Terms and Conditions of Sale shall not constitute a waiver of such right or provision.",
      "You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to these Terms and Conditions of Sale must be filed within one (1) year from the time such claim or cause of action arose or be forever barred.",
    ],
  },
];

const closingParagraphs = [
  "Thank you for reading and agreeing to these Terms and Conditions of Sale. Please direct any questions or comments regarding the Terms and Conditions of Sale by electronic mail to contact@brandmakers.com or by standard mail to Seller at the following address:",
  "Brand Makers, 464 South Main Street, Spanish Fork, Utah 84660",
  "WE REPORT TO DUN & BRADSTREET",
];

export const metadata: Metadata = {
  title: "Terms and Conditions | Brand Makers",
  description:
    "Review Brand Makers terms and conditions of sale for orders, payment, delivery, notices, and liability.",
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
            Please read these terms and conditions thoroughly before placing an
            order with Brand Makers.
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
            <section className="border-b border-[#d8dde0] pb-10">
              <div className="space-y-4 text-lg leading-relaxed text-[#6d747b]">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="font-semibold uppercase" style={{ color: DARK }}>
                  {importantNotice}
                </p>
              </div>
            </section>

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

            <section className="space-y-4 text-lg leading-relaxed text-[#6d747b]">
              {closingParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={paragraph === "WE REPORT TO DUN & BRADSTREET" ? "font-semibold uppercase" : undefined}
                  style={paragraph === "WE REPORT TO DUN & BRADSTREET" ? { color: DARK } : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
