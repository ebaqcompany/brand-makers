import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Brand Makers — We Make Your Brand Look Good",
  description:
    "Brand Makers is your full-service promotional products partner. Custom headwear, company stores, kitting & fulfillment, on-site experiences, and more.",
  icons: {
    icon: [
      {
        url: "/brandmakers-logo-fav.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brandmakers-logo-fav-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Brand Makers — We Make Your Brand Look Good",
    description:
      "Full-service promotional products, custom headwear, company stores, kitting & fulfillment, and on-site experiences.",
    siteName: "Brand Makers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Makers — We Make Your Brand Look Good",
    description:
      "Full-service promotional products, custom headwear, company stores, kitting & fulfillment, and on-site experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense><ScrollToTop /></Suspense>
        {children}
      </body>
    </html>
  );
}
