interface SbBlokData {
  _uid?: string;
  component?: string;
}

export interface CtaSectionContent {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

const DEFAULT_CTA_CONTENT: CtaSectionContent = {
  heading: "Let's Work Together",
  body: "Ready to elevate your brand? Tell us about your project and we'll make it happen.",
  primaryLabel: "Let's Connect",
  primaryHref: "/lets-connect",
  secondaryLabel: "View Catalog",
  secondaryHref: "https://catalog.brandmakers.com/",
};

export interface HomeHeroVideo {
  id: number;
  src: string;
  textStartAt: number;
  kind?: "video" | "frames";
  frameCount?: number;
  frameRate?: number;
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

export interface StoryblokAsset {
  filename?: string;
  alt?: string;
  name?: string;
  title?: string;
}

interface HomeHeroVideoBlok extends SbBlokData {
  video?: StoryblokAsset;
  fallback_src?: string;
  text_start_at?: string | number;
}

interface HomeServiceItemBlok extends SbBlokData {
  label?: string;
  href?: string;
  icon?: string;
}

interface HomeLinkCardBlok extends SbBlokData {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
  icon?: "catalog" | "lookbook";
}

interface HomeMediaItemBlok extends SbBlokData {
  media?: StoryblokAsset;
  fallback_src?: string;
  alt?: string;
}

export interface HomeStoryblokContent extends SbBlokData {
  seo_title?: string;
  seo_description?: string;
  hero_line_one?: string;
  hero_line_two?: string;
  hero_videos?: HomeHeroVideoBlok[];
  services_eyebrow?: string;
  services_heading?: string;
  services_items?: HomeServiceItemBlok[];
  search_eyebrow?: string;
  search_heading?: string;
  search_body?: string;
  search_cards?: HomeLinkCardBlok[];
  custom_merch_eyebrow?: string;
  custom_merch_heading?: string;
  custom_merch_body?: string;
  custom_merch_images?: StoryblokAsset[];
  custom_merch_cta_label?: string;
  custom_merch_cta_href?: string;
  onsite_eyebrow?: string;
  onsite_heading?: string;
  onsite_body?: string;
  onsite_videos?: HomeMediaItemBlok[];
  onsite_cta_label?: string;
  onsite_cta_href?: string;
  cta_heading?: string;
  cta_body?: string;
  cta_primary_label?: string;
  cta_primary_href?: string;
  cta_secondary_label?: string;
  cta_secondary_href?: string;
}

export const HOME_FALLBACK: HomePageContent = {
  seoTitle: "Brand Makers",
  seoDescription:
    "Brand Makers creates custom merch, company stores, kitting, fulfillment, headwear, and on-site brand experiences.",
  heroLineOne: "We Make Your",
  heroLineTwo: "Brand Look Good",
  heroVideos: [
    { id: 1, src: "/hero-stopmotion-videos/stopmotion1.mp4", textStartAt: 4.85 },
    { id: 2, src: "/hero-stopmotion-videos/stopmotion2.mp4", textStartAt: 3.88 },
    { id: 3, src: "/hero-stopmotion-videos/stopmotion3.mp4", textStartAt: 8.65 },
    {
      id: 4,
      src: "/hero-stopmotion-clean-background-webp/frame-001.webp",
      kind: "frames",
      frameCount: 72,
      frameRate: 8,
      textStartAt: 8.65,
    },
    {
      id: 5,
      src: "/hero-stopmotion-clean-background-expanded-backup/frame-001.webp",
      kind: "frames",
      frameCount: 72,
      frameRate: 8,
      textStartAt: 8.65,
    },
    {
      id: 6,
      src: "/hero-stopmotion-transparent/frame-001.webp",
      kind: "frames",
      frameCount: 72,
      frameRate: 8,
      textStartAt: 8.65,
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
    { label: "On-Site Experiences", href: "/on-site-experiences", icon: "bm_icons-retailpartner_onsite" },
    { label: "Retail Brand Partners", href: "/about#retail-brand-partners", icon: "bm_icons-retailpartner" },
    { label: "Our Responsibility", href: "/about#our-responsibility", icon: "bm_icons-responsibility" },
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
  customMerchImages: Array.from({ length: 8 }).map((_, i) => ({
    src: `/custom-merch/merch-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Custom merch ${i + 1}`,
  })),
  customMerchCtaLabel: "See Custom Merch",
  customMerchCtaHref: "/custom-products",
  onsiteEyebrow: "On-Site Experiences",
  onsiteHeading: "Merch That Moves People",
  onsiteBody:
    "Our on-site branding activations allow guests to create branded merchandise in real time — transforming ordinary giveaways into unforgettable brand moments.",
  onsiteVideos: Array.from({ length: 6 }).map((_, i) => ({
    src: `/experiences/clips/clip-${String(i + 1).padStart(2, "0")}.mp4`,
    alt: `On-site experience clip ${i + 1}`,
  })),
  onsiteCtaLabel: "Explore Experiences",
  onsiteCtaHref: "/on-site-experiences",
  cta: DEFAULT_CTA_CONTENT,
};

function assetUrl(asset?: StoryblokAsset): string | undefined {
  return asset?.filename || undefined;
}

function mapHeroVideos(bloks?: HomeHeroVideoBlok[]): HomeHeroVideo[] | undefined {
  if (!bloks?.length) return undefined;
  return bloks
    .map((blok, index) => {
      const src = assetUrl(blok.video) || blok.fallback_src;
      if (!src) return null;
      return {
        id: index + 1,
        src,
        textStartAt: Number(blok.text_start_at || HOME_FALLBACK.heroVideos[index]?.textStartAt || 0),
      };
    })
    .filter(Boolean) as HomeHeroVideo[];
}

function mapServiceItems(bloks?: HomeServiceItemBlok[]): HomeServiceItem[] | undefined {
  if (!bloks?.length) return undefined;
  return bloks.map((blok) => ({
    label: blok.label || "Untitled service",
    href: blok.href || "#",
    icon: blok.icon || "bm_icons-customproducts",
  }));
}

function mapSearchCards(bloks?: HomeLinkCardBlok[]): HomeLinkCard[] | undefined {
  if (!bloks?.length) return undefined;
  return bloks.map((blok) => ({
    title: blok.title || "Untitled card",
    body: blok.body || "",
    href: blok.href || "#",
    label: blok.label || "Learn More",
    icon: blok.icon || "catalog",
  }));
}

function mapAssets(assets?: StoryblokAsset[]): HomeMediaItem[] | undefined {
  if (!assets?.length) return undefined;
  return assets
    .map((asset, index) => {
      const src = assetUrl(asset);
      if (!src) return null;
      return {
        src,
        alt: asset.alt || asset.title || asset.name || `Image ${index + 1}`,
      };
    })
    .filter(Boolean) as HomeMediaItem[];
}

function mapMediaItems(bloks?: HomeMediaItemBlok[]): HomeMediaItem[] | undefined {
  if (!bloks?.length) return undefined;
  return bloks
    .map((blok, index) => {
      const src = assetUrl(blok.media) || blok.fallback_src;
      if (!src) return null;
      return {
        src,
        alt: blok.alt || blok.media?.alt || blok.media?.title || `Media ${index + 1}`,
      };
    })
    .filter(Boolean) as HomeMediaItem[];
}

export function normalizeHomeContent(
  blok?: HomeStoryblokContent | null,
): HomePageContent {
  if (!blok) return HOME_FALLBACK;

  return {
    seoTitle: blok.seo_title || HOME_FALLBACK.seoTitle,
    seoDescription: blok.seo_description || HOME_FALLBACK.seoDescription,
    heroLineOne: blok.hero_line_one || HOME_FALLBACK.heroLineOne,
    heroLineTwo: blok.hero_line_two || HOME_FALLBACK.heroLineTwo,
    heroVideos: mapHeroVideos(blok.hero_videos) || HOME_FALLBACK.heroVideos,
    servicesEyebrow: blok.services_eyebrow || HOME_FALLBACK.servicesEyebrow,
    servicesHeading: blok.services_heading || HOME_FALLBACK.servicesHeading,
    servicesItems: mapServiceItems(blok.services_items) || HOME_FALLBACK.servicesItems,
    searchEyebrow: blok.search_eyebrow || HOME_FALLBACK.searchEyebrow,
    searchHeading: blok.search_heading || HOME_FALLBACK.searchHeading,
    searchBody: blok.search_body || HOME_FALLBACK.searchBody,
    searchCards: mapSearchCards(blok.search_cards) || HOME_FALLBACK.searchCards,
    customMerchEyebrow: blok.custom_merch_eyebrow || HOME_FALLBACK.customMerchEyebrow,
    customMerchHeading: blok.custom_merch_heading || HOME_FALLBACK.customMerchHeading,
    customMerchBody: blok.custom_merch_body || HOME_FALLBACK.customMerchBody,
    customMerchImages: mapAssets(blok.custom_merch_images) || HOME_FALLBACK.customMerchImages,
    customMerchCtaLabel: blok.custom_merch_cta_label || HOME_FALLBACK.customMerchCtaLabel,
    customMerchCtaHref: blok.custom_merch_cta_href || HOME_FALLBACK.customMerchCtaHref,
    onsiteEyebrow: blok.onsite_eyebrow || HOME_FALLBACK.onsiteEyebrow,
    onsiteHeading: blok.onsite_heading || HOME_FALLBACK.onsiteHeading,
    onsiteBody: blok.onsite_body || HOME_FALLBACK.onsiteBody,
    onsiteVideos: mapMediaItems(blok.onsite_videos) || HOME_FALLBACK.onsiteVideos,
    onsiteCtaLabel: blok.onsite_cta_label || HOME_FALLBACK.onsiteCtaLabel,
    onsiteCtaHref: blok.onsite_cta_href || HOME_FALLBACK.onsiteCtaHref,
    cta: {
      heading: blok.cta_heading || HOME_FALLBACK.cta.heading,
      body: blok.cta_body || HOME_FALLBACK.cta.body,
      primaryLabel: blok.cta_primary_label || HOME_FALLBACK.cta.primaryLabel,
      primaryHref: blok.cta_primary_href || HOME_FALLBACK.cta.primaryHref,
      secondaryLabel: blok.cta_secondary_label || HOME_FALLBACK.cta.secondaryLabel,
      secondaryHref: blok.cta_secondary_href || HOME_FALLBACK.cta.secondaryHref,
    },
  };
}
