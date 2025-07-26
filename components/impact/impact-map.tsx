"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Sprout } from "lucide-react"

export function ImpactMap() {
  const regions = [
    {
      name: "Pakur District",
      state: "Jharkhand",
      villages: 70,
      families: 1250,
      programs: ["Mushroom Entrepreneurship", "Blanket Distribution", "Climate Agriculture", "Convergence"],
      coordinates: { lat: 24.6333, lng: 87.8333 },
      subRegions: ["Hiranpur Block"],
    },
    {
      name: "Kolkata Region",
      state: "West Bengal",
      villages: 15,
      families: 300,
      programs: ["Training Hub", "Resource Center"],
      coordinates: { lat: 22.5726, lng: 88.3639 },
    },
  ]

  return (
    <section className="py-24 bg-white" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Geographic Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs span across multiple regions, creating a network of sustainable development and community
            empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d87.8333!3d24.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzAwLjAiTiA4N8KwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HAPEF Impact Areas Map"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{region.name}</h3>
                      <p className="text-gray-600 mb-3">{region.state}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{region.families} families</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sprout className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{region.villages} villages</span>
                        </div>
                      </div>

                      {region.subRegions && (
                        <div className="mb-3">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Areas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {region.subRegions.map((subRegion, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                              >
                                {subRegion}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Active Programs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.programs.map((program, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Expanding Our Reach</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We're continuously expanding our programs to reach more communities. Our goal is to cover 100 villages and
              impact 5,000 families by 2025.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85</div>
                <div className="text-sm text-gray-600">Current Villages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,550</div>
                <div className="text-sm text-gray-600">Current Families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">2025</div>
                <div className="text-sm text-gray-600">Target Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
