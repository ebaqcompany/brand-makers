import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { BmButton } from "@/components/bm-button";

const DARK = "#323E48";
const BLUE = "#00A1E1";

const columnLinks = [
  [
    { title: "Search for Merch", url: "/search-for-merch" },
    { title: "Company Stores", url: "/company-stores" },
    { title: "Kitting & Fulfillment", url: "/kitting-and-fulfillment" },
    { title: "Custom Headwear", url: "/custom-headwear" },
    { title: "Custom Products", url: "/custom-products" },
    { title: "On-Site Experiences", url: "/on-site-experiences" },
  ],
  [
    { title: "Creative Services", url: "/creative-services" },
    { title: "Our Responsibility", url: "/our-responsibility" },
    { title: "About", url: "/about" },
    { title: "Let's Connect", url: "/lets-connect" },
    { title: "Client Application", url: "https://brandmakersbox.typeform.com/3minuteintake" },
    { title: "Log In", url: "https://catalog.brandmakers.com/auth/login" },
  ],
];

const socialLinks = [
  { url: "https://www.facebook.com/brandmakersutah/", icon: <BiLogoFacebookCircle className="size-6" /> },
  { url: "https://www.instagram.com/brandmakers/", icon: <BiLogoInstagram className="size-6" /> },
  { url: "https://linkedin.com/company/brand-makers/", icon: <BiLogoLinkedinSquare className="size-6" /> },
];

interface Footer2Props {
  logo?: { url: string; src: string; alt: string; title: string };
  className?: string;
}

const Footer2 = ({ logo, className }: Footer2Props) => {
  return (
    <footer
      className={`px-[5%] py-12 md:py-18 lg:py-20 ${className ?? ""}`}
      style={{ backgroundColor: DARK, color: "#fff" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Top section */}
        <div className="border-b border-white/15 pb-12 md:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-0">

            {/* Left: heading + description + CTAs */}
            <div className="max-w-md">
              <h2
                className="mb-5 text-[36px] font-normal leading-[1.1] tracking-[-3px] text-white md:text-[60px]"
              >
                We Make Your Brand Look Good.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Full-service promotional products, custom headwear, company stores,
                kitting &amp; fulfillment, and on-site experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BmButton href="/lets-connect" variant="primary">
                  Let&apos;s Connect
                </BmButton>
                <BmButton
                  href="https://catalog.brandmakers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-light"
                >
                  View Catalog
                </BmButton>
              </div>
            </div>

            {/* Right: nav columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 items-start">
              {columnLinks.map((col, ci) => (
                <ul key={ci}>
                  {col.map((link, li) => (
                    <li key={li} className="py-2">
                      <a
                        href={link.url}
                        className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Social row */}
          <div className="mt-12 md:mt-16 flex justify-end">
            <div className="flex gap-3 items-center">
              <span className="text-xs font-medium uppercase tracking-[2px] text-white/40 mr-2">Follow us</span>
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 pt-6 text-xs text-white/40 md:flex-row md:items-center md:pt-8">
          <p>&copy; {new Date().getFullYear()} Brand Makers. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href="https://brandmakers.com/wp-content/uploads/2025/11/Brand-Makers-Terms-and-Conditions.pdf"
              className="hover:text-white/70 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            <a href="/our-responsibility" className="hover:text-white/70 transition-colors">
              Our Responsibility
            </a>
            <a
              href="https://brandmakersbox.typeform.com/3minuteintake"
              className="hover:text-white/70 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Application
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Footer2 };
