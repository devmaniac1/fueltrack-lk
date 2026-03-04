import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GA4 from "@/components/GA4";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { GA_ID } from "@/lib/gtag";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fueltracklk.com"),
  title: {
    default: "FuelTrack LK | Fleet Fuel & Trip Log for Small Fleets",
    template: "%s | FuelTrack LK",
  },
  description:
    "Track trips, fuel refuels, and weekly fleet costs in one place. Built for Sri Lankan fleets with 3–30 vehicles.",
  keywords: [
    "fleet fuel log",
    "trip logging",
    "fleet management Sri Lanka",
    "fuel tracking app",
    "small fleet management",
    "fuel log system",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FuelTrack LK",
    title: "FuelTrack LK | Fleet Fuel & Trip Log for Small Fleets",
    description:
      "Track trips, fuel refuels, and weekly fleet costs in one place. Built for Sri Lankan fleets with 3–30 vehicles.",
    images: [{ url: "/images/hero-fleet.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuelTrack LK | Fleet Fuel & Trip Log for Small Fleets",
    description:
      "Track trips, fuel refuels, and weekly fleet costs in one place. Built for Sri Lankan fleets with 3–30 vehicles.",
    images: ["/images/hero-fleet.png"],
  },
  robots: { index: true, follow: true },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FuelTrack LK",
  url: "https://fueltracklk.com",
  logo: "https://fueltracklk.com/images/hero-fleet.png",
  description:
    "Fleet fuel and trip logging for Sri Lankan fleets with 3–30 vehicles.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@fueltracklk.com",
    contactType: "customer service",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FuelTrack LK",
  url: "https://fueltracklk.com",
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FuelTrack LK",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Fleet fuel and trip logging system for small fleets in Sri Lanka.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDKHVBHM');`}
        </Script>
        <meta
          name="google-site-verification"
          content="_u2fOeDffVmJsD2sfFssXMQYfPCwJDijdjjQDosKFhc"
        />
        {/* End Google Tag Manager */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <JsonLd data={softwareLd} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDKHVBHM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <GA4 />
        <ScrollReveal />
      </body>
    </html>
  );
}
