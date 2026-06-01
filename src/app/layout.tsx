import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wpkit.cc"),
  title: "WP Kit - WordPress Plugin Stacks, Launch Checklists and Tool Comparisons",
  description: "Choose WordPress plugins by use case. WP Kit maps small business, content, and WooCommerce sites to practical plugin stacks, launch checklists, and comparison pages.",
  keywords: [
    "WordPress plugin stack",
    "WordPress launch checklist",
    "WordPress plugin audit",
    "WordPress plugin comparison",
    "small business WordPress plugins",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WP Kit - WordPress Plugin Stacks and Launch Checklists",
    description: "A practical WordPress plugin stack decision tool for small business sites, content sites, and WooCommerce stores.",
    url: "/",
    siteName: "WP Kit",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
