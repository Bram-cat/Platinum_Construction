"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ashley Callaghan",
    rating: 5,
    review: "Highly recommend Washly Washing services- our siding and windows look fantastic! Excellent communication and can tell they take pride in their work and do a thorough job.",
    date: "a month ago",
    avatar: "A"
  },
  {
    name: "Steve Collette",
    rating: 5,
    review: "Fantastic services and results with this company. Very professional young men and their attention to detail with their services and customer satisfaction is extremely impressive. They made our house look brand new again. Highly recommended",
    date: "a month ago",
    avatar: "S"
  },
  {
    name: "Ernie Dunsford",
    rating: 5,
    review: "The boys did a great job of cleaning the siding on my home. It had been covered with something that Fiona left on it and they did a wonderful job of removing it. They were very professional and charged exactly what they had quoted me.",
    date: "a month ago",
    avatar: "E"
  },
  {
    name: "Monika Somogyi",
    rating: 5,
    review: "Excellent job on our siding. The mold and the oily furnece exhaust residue are completely gone, looks like new. They guys are absolutely knowledgeable how to treat the siding.",
    date: "2 months ago",
    avatar: "M"
  },
  {
    name: "Greg White",
    rating: 5,
    review: "Our siding was becoming oxidized and some black areas were beginning to form around our soffits. My wife and I hired Washly Washing Services for a full exterior soft wash, oxidation removal, and window and screen cleaning. Highly recommended!",
    date: "2 months ago",
    avatar: "G"
  },
  {
    name: "Shawn G",
    rating: 5,
    review: "I was in contact with this company through a friend after being recommended. The owner visited my home to provide a quote and schedule a date. This company was absolutely amazing, punctual, friendly and very professional.",
    date: "2 months ago",
    avatar: "SH"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-tanker">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">5.0</span>
          </div>
          <p className="text-lg text-gray-600">
            Based on 41+ Google reviews from satisfied customers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-primary">
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-gray-700 leading-relaxed pl-6">
                      {testimonial.review}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">{testimonial.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.google.com/search?q=washly+washing+services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Read all reviews on Google
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
