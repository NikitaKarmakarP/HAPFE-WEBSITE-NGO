import { MediaRoomHero } from "@/components/knowledge-hub/media-room/media-room-hero"
import { PressReleasesList } from "@/components/knowledge-hub/media-room/press-releases-list"
import { ContactSection } from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Users, Award } from "lucide-react"

export default function PressReleasesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MediaRoomHero
        title="Press Releases"
        description="Stay updated with our latest announcements, strategic partnerships, and impact stories that shape our mission to eradicate poverty through sustainable development."
        breadcrumb="Media Room / Press Releases"
      />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24+</h3>
              <p className="text-gray-600">Press Releases</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Partnerships</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Reach</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Press Releases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
              Latest Updates
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Informed with Our Latest News
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest initiatives, partnerships, and impact stories that are transforming rural communities across India.
            </p>
          </div>
          
          <PressReleasesList />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in Touch with Our Media Team
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            For media inquiries, interview requests, or press materials, our dedicated team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Media Team
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-colors">
              Download Media Kit
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
