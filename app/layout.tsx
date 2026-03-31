import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      { url: "/brandmakers-logo-fav.svg", media: "(prefers-color-scheme: light)" },
      { url: "/brandmakers-logo-fav-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/brandmakers-logo-fav.svg",
    apple: "/brandmakers-logo-fav.svg",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
