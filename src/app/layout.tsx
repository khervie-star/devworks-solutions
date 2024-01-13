import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const URL_BASE = "https://devworks-solutions.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(URL_BASE),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Devworks Solutions",
    description: "Software Development | Networking | IT Solutions",
    url: URL_BASE,
    siteName: "Devworks Solutions",
    images: [
      {
        url: `${URL_BASE}/logos/logo_trs/4.png`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: `${URL_BASE}/logos/logo_trs/4.png`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Devworks Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Devworks Solutions",
  description: "Software Development | Networking | IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${space.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
