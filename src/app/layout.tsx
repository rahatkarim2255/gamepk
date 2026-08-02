import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout/SiteLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeMetadata } from "@/lib/metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100"
        suppressHydrationWarning
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
