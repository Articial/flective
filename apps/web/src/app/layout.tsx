import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://articial.me"),
  title: { default: "Flective — Digital Growth & Intelligence Partner", template: "%s — Flective" },
  description: "Flective helps businesses understand what matters, decide what to change, build what they need, and grow what works.",
  openGraph: { type: "website", locale: "en_ID", siteName: "Flective", title: "Flective — Digital Growth & Intelligence Partner", description: "See clearly. Move decisively." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
