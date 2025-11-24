"use client"

import { HardHat, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-orange-300 rounded-full flex items-center justify-center">
                <HardHat className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="font-bold text-lg font-chubbo">Platinum</div>
                <div className="text-xs text-orange-200 -mt-1">Construction</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium construction services that build excellence. Delivering exceptional craftsmanship and dedicated service for all your construction needs.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary font-chubbo">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+15551234567"
                    className="block text-white/70 hover:text-white transition-colors mb-1"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@platinumconstruction.com"
                    className="block text-white/70 hover:text-white transition-colors text-sm"
                  >
                    info@platinumconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-white/70">
                  123 Main Street<br />
                  Suite 100, Your City
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary font-chubbo">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors">
                <Link href="/services#residential">Residential Construction</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#commercial">Commercial Projects</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#renovations">Renovations</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#custom-builds">Custom Builds</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/services#finishing">Finishing & Design</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              &copy; {currentYear} Platinum Construction. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-4 h-4 text-secondary" />
              <span className="font-medium text-secondary font-chubbo">Building Excellence Together</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
