import type { HomeLinkCard } from "@/lib/home-content";

export interface SearchForMerchContent {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heading: string;
  body: string;
  cards: HomeLinkCard[];
}

export const SEARCH_FOR_MERCH_FALLBACK: SearchForMerchContent = {
  seoTitle: "Search for Merch — Brand Makers",
  seoDescription:
    "Browse thousands of customizable products or flip through our curated look books for instant brand inspiration.",
  eyebrow: "Search for Merch",
  heading: "Find Your Perfect Swag",
  body: "Browse thousands of customizable products — or flip through our curated look books for instant inspiration.",
  cards: [
    {
      title: "Full Swag Catalog",
      body: "Search the full catalog of customizable promotional products, apparel, headwear, and gifts.",
      href: "https://catalog.brandmakers.com/",
      label: "Browse Catalog →",
      icon: "catalog",
    },
    {
      title: "Look Books",
      body: "Flip through our seasonal look books for curated collections and fresh brand inspiration.",
      href: "/look-books",
      label: "View Look Books →",
      icon: "lookbook",
    },
  ],
};
