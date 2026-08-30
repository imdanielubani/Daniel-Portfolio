import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";
import "@/styles/portfolio.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Ubani - Full Stack Software Engineer",
    template: "%s | Daniel Ubani",
  },
  description:
    "Full Stack Software Engineer building production systems across web, mobile, AI, fintech and real-time infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Daniel Ubani - Full Stack Software Engineer",
    description:
      "I design, architect and ship production systems across web, mobile, AI and real-time infrastructure.",
    url: "/",
    siteName: "Daniel Ubani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ubani - Full Stack Software Engineer",
    description:
      "Production systems across web, mobile, AI, fintech and real-time infrastructure.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SmoothScroll />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
