const DARK = "#323E48";

const navLinks = [
  { title: "Search for Merch", url: "/search-for-merch" },
  { title: "Company Stores", url: "/company-stores" },
  { title: "Kitting & Fulfillment", url: "/kitting-and-fulfillment" },
  { title: "Custom Headwear", url: "/custom-headwear" },
  { title: "About Us", url: "/about" },
  { title: "On-Site Experiences", url: "/on-site-experiences" },
  { title: "Creative Services", url: "/creative-services" },
  { title: "Our Responsibility", url: "/our-responsibility" },
  { title: "Custom Merch", url: "/custom-products" },
  { title: "Let's Connect", url: "/lets-connect" },
];

const footerLinks = [
  {
    title: "Terms and Conditions",
    url: "https://brandmakers.com/wp-content/uploads/2025/11/Brand-Makers-Terms-and-Conditions.pdf",
  },
  { title: "Client Application", url: "https://brandmakersbox.typeform.com/3minuteintake" },
  { title: "Log In", url: "https://catalog.brandmakers.com/auth/login" },
];

const Footer2 = () => {
  return (
    <footer className="py-12 md:py-18 lg:py-20" style={{ backgroundColor: DARK, color: "#fff" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top: logo centered, then links centered underneath */}
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <a href="/" className="mb-16">
            <img
              src="/brandmakers-logo-footer.svg"
              alt="Brand Makers"
              className="inline-block h-[96px]"
            />
          </a>
          <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 text-center">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white whitespace-nowrap"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/15" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm text-white/40 md:flex-row md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">&copy; {new Date().getFullYear()} Brand Makers. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 underline underline-offset-2 transition-colors hover:text-white/70"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer2 };
