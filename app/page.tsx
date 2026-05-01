import type { Metadata } from "next";
import { HomePageView } from "@/components/home-page-view";
import { HOME_FALLBACK } from "@/lib/home-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HOME_FALLBACK.seoTitle,
    description: HOME_FALLBACK.seoDescription,
  };
}

export default async function Home() {
  return <HomePageView content={HOME_FALLBACK} />;
}
