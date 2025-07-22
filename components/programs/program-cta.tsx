import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function ProgramCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your
              <span className="block text-green-600">Mushroom Enterprise?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of successful entrepreneurs who have transformed their lives through sustainable mushroom
              cultivation. Our comprehensive program provides everything you need to succeed.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Call us: +91 XXXX XXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Email: programs@hapef.org</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Visit our office in Kolkata</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
                Apply for Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Successful mushroom farmer"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">Next Batch</div>
                <div className="text-sm text-gray-600">Starting March 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
