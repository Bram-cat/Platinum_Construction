"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, Building2, CheckCircle } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onGetQuote: () => void;
}

export function Hero({ onGetQuote }: HeroProps) {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="Platinum Construction"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-primary/70 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <HardHat className="w-5 h-5 text-secondary" />
              <span className="text-white text-sm font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Serving Charlottetown & Prince Edward Island
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-chubbo leading-tight"
          >
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Come Home to
            </span>{" "}
            <span className="bg-gradient-to-r from-secondary via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(252,163,17,0.6)]">
              Quality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] font-medium"
          >
            Professional construction and contracting services in Charlottetown
            and across Prince Edward Island. Quality craftsmanship you can
            trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              onClick={onGetQuote}
              className="bg-secondary hover:bg-orange-500 text-black font-bold text-xl px-12 py-8 group shadow-2xl hover:shadow-secondary/50 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-3 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Building2, text: "Licensed & Insured" },
              { icon: CheckCircle, text: "Quality Guaranteed" },
              { icon: HardHat, text: "Experienced Team" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg"
              >
                <feature.icon className="w-6 h-6 text-secondary" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
