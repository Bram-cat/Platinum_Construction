import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Platinum Construction | Construction & Contracting in Charlottetown, PEI",
  description: "Come home to quality. Professional construction and contracting services in Charlottetown and Prince Edward Island. Residential and commercial projects, renovations, and custom builds.",
  keywords: [
    "construction Charlottetown",
    "construction PEI",
    "contractor Prince Edward Island",
    "renovations Charlottetown",
    "home building PEI",
    "commercial construction PEI",
    "residential construction Charlottetown",
    "Platinum Construction PEI"
  ],
  authors: [{ name: "Platinum Construction" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://platinumconstructionpei.com",
    title: "Platinum Construction | Construction & Contracting in Charlottetown, PEI",
    description: "Come home to quality. Professional construction services serving Charlottetown and Prince Edward Island.",
    siteName: "Platinum Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Construction | Construction & Contracting in Charlottetown, PEI",
    description: "Come home to quality. Professional construction services serving PEI.",
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
