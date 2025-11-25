"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { QuoteDialog } from "@/components/QuoteDialog"
import Image from "next/image"

export default function ContactPage() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation onGetQuote={() => setIsQuoteDialogOpen(true)} />

      {/* Contact Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/4.jpg"
            alt="Contact Platinum Construction"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Get in touch for a free quote today!
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
    </main>
  )
}
