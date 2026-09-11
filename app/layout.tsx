import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/ThemeProvider";
import { site } from "@/content/site";
import { seo } from "@/content/seo";

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
    default: seo.titleDefault,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.founder, url: `${site.url}/studio` }],
  creator: site.founder,
  publisher: site.name,
  category: "design",
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: { "en-GB": "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: site.url,
    siteName: site.name,
    title: seo.titleDefault,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titleDefault,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F2EA" },
    { media: "(prefers-color-scheme: dark)", color: "#161310" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${desire.variable} h-full antialiased`}
    >
      <Script id="bymotif-theme-init" strategy="beforeInteractive">
        {themeInitScript}
      </Script>
      <body className="grain min-h-full bg-ivory text-ink transition-colors duration-(--duration-soft) ease-editorial">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-6 focus:py-3 focus:text-label-lg focus:uppercase focus:tracking-[0.14em] focus:text-ivory"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <SmoothScrollProvider>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </SmoothScrollProvider>
        </ThemeProvider>

        <OrganizationSchema />
      </body>
    </html>
  );
}
