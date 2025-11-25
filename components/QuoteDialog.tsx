"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

interface QuoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    details: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", service: "", address: "", details: "" })
        onOpenChange(false)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Quote request error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary font-chubbo">Request a Free Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll get back to you with a customized quote for your construction project
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Name *</Label>
              <Input
                id="quote-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone *</Label>
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-email">Email *</Label>
            <Input
              id="quote-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-service">Service Required *</Label>
            <select
              id="quote-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="">Select a service</option>
              <option value="residential-construction">Residential Construction</option>
              <option value="commercial-construction">Commercial Construction</option>
              <option value="renovations">Renovations</option>
              <option value="custom-builds">Custom Builds</option>
              <option value="finishing-design">Finishing & Design</option>
              <option value="other">Other / Multiple Services</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-address">Property Address</Label>
            <Input
              id="quote-address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St, Charlottetown, PE"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quote-details">Additional Details</Label>
            <Textarea
              id="quote-details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us more about your project, property size, special requirements, etc."
              rows={4}
            />
          </div>

          <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-primary mb-1">Prefer to speak directly?</p>
                <p className="text-gray-700">
                  Call Seth at{" "}
                  <a href="tel:9023301444" className="text-primary hover:underline font-medium">
                    (902) 330-1444
                  </a>{" "}
                  or Matt at{" "}
                  <a href="tel:9023947343" className="text-primary hover:underline font-medium">
                    (902) 394-7343
                  </a>
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-orange-500 text-black font-bold"
            disabled={isSubmitted || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : isSubmitted ? "Quote Request Sent!" : "Submit Quote Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
