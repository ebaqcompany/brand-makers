import { CUSTOM_MERCH_FEATURED_IMAGES } from "@/lib/custom-products-content";

export interface CtaSectionContent {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface HomeHeroVideo {
  id: number;
  src: string;
  textStartAt: number;
  kind?: "video" | "frames";
  frameCount?: number;
  frameRate?: number;
  poster?: string;
  fallbackSrc?: string;
  fallbackPoster?: string;
  mobileSrc?: string;
  mobilePoster?: string;
  vignette?: boolean;
}

export interface HomeServiceItem {
  label: string;
  href: string;
  icon: string;
}

export interface HomeLinkCard {
  title: string;
  body: string;
  href: string;
  label: string;
  icon: "catalog" | "lookbook";
}

export interface HomeMediaItem {
  src: string;
  alt: string;
}

export interface HomePageContent {
  seoTitle: string;
  seoDescription: string;
  heroLineOne: string;
  heroLineTwo: string;
  heroVideos: HomeHeroVideo[];
  servicesEyebrow: string;
  servicesHeading: string;
  servicesItems: HomeServiceItem[];
  searchEyebrow: string;
  searchHeading: string;
  searchBody: string;
  searchCards: HomeLinkCard[];
  customMerchEyebrow: string;
  customMerchHeading: string;
  customMerchBody: string;
  customMerchImages: HomeMediaItem[];
  customMerchCtaLabel: string;
  customMerchCtaHref: string;
  onsiteEyebrow: string;
  onsiteHeading: string;
  onsiteBody: string;
  onsiteVideos: HomeMediaItem[];
  onsiteCtaLabel: string;
  onsiteCtaHref: string;
  cta: CtaSectionContent;
}

export const HOME_FALLBACK: HomePageContent = {
  seoTitle: "Brand Makers",
  seoDescription:
    "Brand Makers creates custom merch, company stores, kitting, fulfillment, headwear, and on-site brand activations.",
  heroLineOne: "We Make Your",
  heroLineTwo: "Brand Look Good.",
  heroVideos: [
    {
      id: 7,
      src: "/hero-stopmotion-transparent-pro/frame-001.webp",
      kind: "frames",
      frameCount: 88,
      frameRate: 8,
      fallbackSrc: "/hero-stopmotion-flat.mp4",
      poster: "/hero-stopmotion-flat-poster.webp",
      fallbackPoster: "/hero-stopmotion-flat-poster.webp",
      textStartAt: 10.125,
      vignette: true,
    },
  ],
  servicesEyebrow: "Our Services",
  servicesHeading: "How We Do It",
  servicesItems: [
    { label: "Search for Merch", href: "/search-for-merch", icon: "bm_icons-searchforswag" },
    { label: "Company Stores", href: "/company-stores", icon: "bm_icons-companystores" },
    { label: "Kitting & Fulfillment", href: "/kitting-and-fulfillment", icon: "bm_icons-kitting" },
    { label: "Custom Headwear", href: "/custom-headwear", icon: "bm_icons-headwear" },
    { label: "Custom Merch", href: "/custom-products", icon: "bm_icons-customproducts" },
    { label: "On-Site Activations", href: "/on-site-experiences", icon: "bm_icons-retailpartner_onsite" },
    { label: "Retail Brand Partners", href: "/about#retail-brand-partners", icon: "bm_icons-retailpartner" },
    { label: "Design Ideas", href: "/design-ideas", icon: "bm_icons-designideas" },
  ],
  searchEyebrow: "Search for Merch",
  searchHeading: "Find Your Perfect Swag",
  searchBody:
    "Browse thousands of customizable products — or flip through our curated look books for instant inspiration.",
  searchCards: [
    {
      title: "Full Swag Catalog",
      body: "Search the full catalog of customizable promotional products, apparel, headwear, and gifts.",
      href: "https://catalog.brandmakers.com/",
      label: "Browse Catalog",
      icon: "catalog",
    },
    {
      title: "Look Books",
      body: "Flip through our seasonal look books for curated collections and fresh brand inspiration.",
      href: "/look-books",
      label: "View Look Books",
      icon: "lookbook",
    },
  ],
  customMerchEyebrow: "Custom Merch",
  customMerchHeading: "Create Something Truly Unique",
  customMerchBody:
    "From wearables to products, we turn ideas into reality. Every detail matters, and we're here to ensure your vision comes to life.",
  customMerchImages: CUSTOM_MERCH_FEATURED_IMAGES.slice(0, 8),
  customMerchCtaLabel: "See Custom Merch",
  customMerchCtaHref: "/custom-products",
  onsiteEyebrow: "On-Site Activations",
  onsiteHeading: "Merch That Moves People",
  onsiteBody:
    "Our on-site branding activations allow guests to create branded merchandise in real time — transforming ordinary giveaways into unforgettable brand moments.",
  onsiteVideos: Array.from({ length: 6 }).map((_, i) => ({
    src: `/experiences/clips/clip-${String(i + 1).padStart(2, "0")}.mp4`,
    alt: `On-site experience clip ${i + 1}`,
  })),
  onsiteCtaLabel: "Explore Activations",
  onsiteCtaHref: "/on-site-experiences",
  cta: {
    heading: "Design Ideas",
    body: "Get inspired by custom and stock design ideas from our creative team.",
    primaryLabel: "Explore Design Ideas",
    primaryHref: "/design-ideas",
    secondaryLabel: "Custom Design Ideas",
    secondaryHref: "https://drive.google.com/drive/folders/1IlauPiS_vmY2muAYr8HEkCyhR7m6OT2x?usp=sharing",
  },
};
