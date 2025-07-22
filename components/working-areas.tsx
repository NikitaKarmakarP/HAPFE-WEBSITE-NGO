"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Building, Users, Sprout } from "lucide-react"

export function WorkingAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Working Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HAPEF operates across multiple regions in India, with our headquarters in Kolkata and primary focus areas in
            Jharkhand state.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Office Location */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Building className="h-6 w-6" />
                Headquarters - Kolkata, West Bengal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.36315!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNDcuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HAPEF Headquarters Kolkata"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm">
                      Humanitarian Aid for Poverty Eradication Foundation
                      <br />
                      Kolkata, West Bengal, India
                      <br />
                      Registered NGO Office
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Primary Working Area */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Primary Working Area - Pakur District, Jharkhand
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d87.8333!3d24.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzAwLjAiTiA4N8KwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HAPEF Working Area Pakur District"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focus Area</h4>
                    <p className="text-gray-600 text-sm">
                      Hiranpur Block, Pakur District
                      <br />
                      Jharkhand State, India
                      <br />
                      Primary implementation area for all programs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coverage Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-sm font-medium text-gray-900">States Covered</div>
              <div className="text-xs text-gray-600">West Bengal & Jharkhand</div>
            </CardContent>
          </Card>
          <Card className="text-center border-blue-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm font-medium text-gray-900">Villages Reached</div>
              <div className="text-xs text-gray-600">Across Pakur District</div>
            </CardContent>
          </Card>
          <Card className="text-center border-purple-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-sm font-medium text-gray-900">Primary Block</div>
              <div className="text-xs text-gray-600">Hiranpur Block Focus</div>
            </CardContent>
          </Card>
          <Card className="text-center border-orange-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-sm font-medium text-gray-900">People Impacted</div>
              <div className="text-xs text-gray-600">Direct & Indirect Beneficiaries</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
