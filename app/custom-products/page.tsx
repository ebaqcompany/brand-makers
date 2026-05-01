import type { Metadata } from "next";
import { CustomProductsPageView } from "@/components/custom-products-page-view";
import { CUSTOM_PRODUCTS_FALLBACK } from "@/lib/custom-products-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: CUSTOM_PRODUCTS_FALLBACK.seoTitle,
    description: CUSTOM_PRODUCTS_FALLBACK.seoDescription,
  };
}

export default async function CustomProductsPage() {
  return <CustomProductsPageView content={CUSTOM_PRODUCTS_FALLBACK} />;
}
