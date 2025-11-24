"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Home, Wind, Waves } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description: "Crystal-clear windows that let the sunshine in. We clean both residential and commercial windows with streak-free perfection.",
    color: "text-blue-500"
  },
  {
    icon: Wind,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely. We remove debris and ensure proper drainage to protect your home from water damage.",
    color: "text-green-500"
  },
  {
    icon: Waves,
    title: "Soft & Pressure Washing",
    description: "Revitalize your house, driveway, walkway, and more. Our specialized washing techniques restore surfaces to their original beauty.",
    color: "text-cyan-500"
  },
  {
    icon: Home,
    title: "Roof Cleaning",
    description: "Extend the life of your roof with professional cleaning. We safely remove moss, algae, and stains to keep your roof looking great.",
    color: "text-purple-500"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to keep your property pristine all year round
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl font-semibold text-primary">
            Call us today for a free quote!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
