// src/app/page.tsx
import HomePage from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookBridge BD | Buy, Sell & Donate Academic Books",
  description:
    "BookBridge BD is a trusted marketplace for students to buy, sell, and donate used academic books across Bangladesh. Discover affordable textbooks or share books with others.",

  keywords: [
    "BookBridge",
    "BookBridge BD",
    "academic books",
    "used books",
    "buy books",
    "sell books",
    "donate books",
    "textbooks",
    "student marketplace",
    "Bangladesh",
  ],

  alternates: {
    canonical: "https://bookbridgebd.com",
  },

  openGraph: {
    title: "BookBridge BD | Buy, Sell & Donate Academic Books",
    description:
      "Buy, sell, and donate used academic books with students across Bangladesh.",
    url: "https://bookbridgebd.com",
    siteName: "BookBridge BD",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bookbridgebd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BookBridge BD",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BookBridge BD | Buy, Sell & Donate Academic Books",
    description:
      "A student marketplace for buying, selling, and donating academic books.",
    images: ["https://bookbridgebd.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Home() {
  // console.log("[Root Home] Rendering main layout with full responsive width support.");

  return (

    <div className="w-full min-h-screen bg-[#F5F7F8] font-sans antialiased overflow-x-hidden">
      <HomePage />
    </div>
  );
}