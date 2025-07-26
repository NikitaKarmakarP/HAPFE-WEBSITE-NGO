import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="bg-gray-50 py-16" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our programs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Location */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600">Bidyadharpur - Madsar Natunpally, Near Naba Sakti Sangha Club, P.O + P.S - Sonarpur, Kolkata - 700150</p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+91XXXXXXXXXX" className="text-gray-600 hover:text-green-600 transition-colors">
              +91 XXXX XXXXXX
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <a href="mailto:info@hapef.org" className="text-gray-600 hover:text-green-600 transition-colors">
              info@hapef.org
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
