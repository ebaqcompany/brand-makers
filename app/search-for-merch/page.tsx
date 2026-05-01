import type { Metadata } from "next";
import { SearchForMerchPageView } from "@/components/search-for-merch-page-view";
import { SEARCH_FOR_MERCH_FALLBACK } from "@/lib/search-for-merch-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SEARCH_FOR_MERCH_FALLBACK.seoTitle,
    description: SEARCH_FOR_MERCH_FALLBACK.seoDescription,
  };
}

export default async function SearchForMerchPage() {
  return <SearchForMerchPageView content={SEARCH_FOR_MERCH_FALLBACK} />;
}
