import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="p-8 lg:p-16 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardContent className="space-y-8 p-8">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
              <p className="text-gray-600 text-sm">
                Humanitarian Aid for Poverty Eradication Foundation
                <br />
                Kolkata, West Bengal, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">+91&nbsp;XXXX&nbsp;XXXXXX</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600 text-sm">info@hapef.org</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-green-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
