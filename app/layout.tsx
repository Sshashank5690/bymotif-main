import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import localFont from "next/font/local";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { site } from "@/content/site";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const desire = localFont({
  src: "../public/fonts/Desire.otf",
  variable: "--font-desire",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Digital experiences built around your brand`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "wedding photographer website design",
    "luxury wedding brand website",
    "bespoke website design studio",
    "photography portfolio website development",
    "event design studio website",
    "Next.js design and development studio",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Digital experiences built around your brand`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Digital experiences built around your brand`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F2EA",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${desire.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-ivory">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:text-label-lg focus:uppercase focus:tracking-[0.14em] focus:text-ivory"
        >
          Skip to content
        </a>

        <SmoothScrollProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>

        <OrganizationSchema />
      </body>
    </html>
  );
}
