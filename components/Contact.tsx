"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make your property shine? Contact us today for a free
            quote!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cleaning needs..."
                      rows={4}
                      required
                    />
                  </div>
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitted || isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : isSubmitted
                      ? "Message Sent!"
                      : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to us directly via phone or visit us in PEI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      Phone Numbers
                    </h3>
                    <a
                      href="tel:7058228605"
                      className="block text-gray-700 hover:text-primary transition-colors mb-1"
                    >
                      Pathik Pandya: (705) 822-8605
                    </a>
                    <a
                      href="tel:7059704920"
                      className="block text-gray-700 hover:text-primary transition-colors"
                    >
                      Atmiya Patel: (705) 970-4920
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">
                      Locally operated in
                      <br />
                      Prince Edward Island, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary to-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-4">
                  Call us today for a free, no-obligation quote on any of our
                  services!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-secondary text-primary hover:bg-secondary/90"
                  >
                    <a href="tel:7058228605">Call Pathik</a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <a href="tel:7059704920">Call Atmiya</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
