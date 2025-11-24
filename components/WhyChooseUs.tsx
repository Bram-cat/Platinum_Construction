"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ThumbsUp, Users, Sparkles, Clock, Award, DollarSign, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind and protection",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Locally Operated",
    description: "Proudly serving Prince Edward Island with personalized local service",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction",
    description: "We&apos;re not happy until you&apos;re happy - satisfaction guaranteed",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Award,
    title: "Professional Team",
    description: "Experienced, trained professionals who take pride in their work",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "We respect your time and always arrive when scheduled",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Transparent, competitive pricing with no hidden fees",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Environmentally safe products that protect your property and nature",
    color: "from-green-600 to-teal-500"
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Meticulous care ensures every job meets our high standards",
    color: "from-pink-500 to-rose-500"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
}

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Washly?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional results and outstanding customer service
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary to-blue-900 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-xl font-bold">
              ⭐ Rated 5.0 Stars • 40+ Happy Customers • 100% Satisfaction Rate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
