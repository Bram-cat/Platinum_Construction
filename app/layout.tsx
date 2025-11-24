import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Platinum Construction | Premium Construction Services",
  description: "Elite construction services specializing in residential and commercial projects, renovations, custom builds, and more. Premium craftsmanship you can trust.",
  keywords: [
    "construction services",
    "renovations",
    "home building",
    "commercial construction",
    "residential construction",
    "custom builds",
    "premium construction",
    "Platinum Construction"
  ],
  authors: [{ name: "Platinum Construction" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://platinumconstruction.com",
    title: "Platinum Construction | Premium Construction Services",
    description: "Elite construction services. Building excellence with premium craftsmanship and dedicated service.",
    siteName: "Platinum Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Construction | Premium Construction Services",
    description: "Elite construction services. Premium craftsmanship you can trust.",
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ fontFamily: 'Supreme, sans-serif' }}>
      <body>{children}</body>
    </html>
  )
}
