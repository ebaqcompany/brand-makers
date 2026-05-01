export interface SiteLink {
  title: string;
  url: string;
  external?: boolean;
}

export const mainNavLinks: SiteLink[] = [
  { title: "Search for Merch", url: "/search-for-merch" },
  { title: "Company Stores", url: "/company-stores" },
  { title: "Kitting & Fulfillment", url: "/kitting-and-fulfillment" },
  { title: "Custom Headwear", url: "/custom-headwear" },
  { title: "Custom Merch", url: "/custom-products" },
  { title: "On-Site Experiences", url: "/on-site-experiences" },
  { title: "Retail Brand Partners", url: "/about#retail-brand-partners" },
  { title: "Our Responsibility", url: "/about#our-responsibility" },
  { title: "About Us", url: "/about" },
  { title: "Let's Connect", url: "/lets-connect" },
];

export const footerUtilityLinks: SiteLink[] = [
  {
    title: "Terms and Conditions",
    url: "https://brandmakers.com/wp-content/uploads/2025/11/Brand-Makers-Terms-and-Conditions.pdf",
    external: true,
  },
  {
    title: "Client Application",
    url: "https://brandmakersbox.typeform.com/3minuteintake",
    external: true,
  },
  {
    title: "Log In",
    url: "https://catalog.brandmakers.com/auth/login",
    external: true,
  },
];

export const hamburgerMenuLinks: SiteLink[] = [
  ...mainNavLinks,
  ...footerUtilityLinks,
];
