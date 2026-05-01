export interface CustomProductsGalleryImage {
  src: string;
  alt: string;
}

export interface CustomProductsContent {
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroBody: string;
  galleryHeading: string;
  galleryImages: CustomProductsGalleryImage[];
  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
}

const MERCH_COUNT = 49;
const FEATURED_MERCH_IMAGE_NUMBERS = [
  29, 11, 25, 46, 43, 45, 37, 48, 26, 49, 40, 47, 17, 38, 19, 7,
];
const MERCH_IMAGE_ORDER = [
  ...FEATURED_MERCH_IMAGE_NUMBERS,
  ...Array.from({ length: MERCH_COUNT }, (_, i) => i + 1).filter(
    (number) => !FEATURED_MERCH_IMAGE_NUMBERS.includes(number),
  ),
];

function customMerchImage(number: number): CustomProductsGalleryImage {
  return {
    src: `/custom-merch/merch-${String(number).padStart(2, "0")}.jpg`,
    alt: `Custom merch ${number}`,
  };
}

export const CUSTOM_MERCH_FEATURED_IMAGES = FEATURED_MERCH_IMAGE_NUMBERS.map(
  customMerchImage,
);

export const CUSTOM_PRODUCTS_FALLBACK: CustomProductsContent = {
  seoTitle: "Custom Merch - Brand Makers",
  seoDescription:
    "From wearables to products, we turn ideas into reality. Every detail matters, and we're here to ensure your vision comes to life.",
  heroEyebrow: "Custom Merch",
  heroHeading: "Create Something Truly Unique",
  heroBody:
    "From wearables to products, we turn ideas into reality. Every detail matters, and we're here to ensure your vision comes to life.",
  galleryHeading: "Our Custom Merch Work",
  galleryImages: MERCH_IMAGE_ORDER.map(customMerchImage),
  ctaHeading: "Let's Work Together",
  ctaBody:
    "Ready to elevate your brand? Tell us about your project and we'll make it happen.",
  ctaPrimaryLabel: "Let's Connect",
  ctaPrimaryHref: "/lets-connect",
  ctaSecondaryLabel: "View Catalog",
  ctaSecondaryHref: "https://catalog.brandmakers.com/",
};
