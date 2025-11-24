"use client"

import { motion } from "framer-motion"
import { Award, Heart, Shield, Users, Building2, Handshake } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind"
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Exceptional workmanship on every project, big or small"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to your project"
  },
  {
    icon: Handshake,
    title: "Customer Focused",
    description: "Building lasting relationships through quality service"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 font-chubbo">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-chubbo">
              Building Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At <span className="font-semibold text-primary">Platinum Construction</span>, we&apos;re dedicated to delivering exceptional construction services. With years of experience and a commitment to quality, we transform visions into reality.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Whether you&apos;re building your dream home, expanding your business, or renovating an existing space, our experienced team brings expertise, professionalism, and attention to detail to every project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We take pride in using premium materials, proven construction methods, and maintaining clear communication throughout every phase of your project. Your satisfaction is our top priority.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-300 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-chubbo">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
