import { PhotoGalleryHero } from "@/components/knowledge-hub/media-room/photo-gallery-hero"
import { PhotoGalleryGrid } from "@/components/knowledge-hub/media-room/photo-gallery-grid"
import { ContactSection } from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"
import { Camera, Heart, Eye, Share2 } from "lucide-react"

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PhotoGalleryHero />
      
      {/* Gallery Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              Visual Impact
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Capturing Moments of Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every photograph tells a story of hope, resilience, and positive change in rural communities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Photographs</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Communities</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600">Views</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1K+</h3>
              <p className="text-gray-600">Shares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGalleryGrid />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your Story with Us
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have photos from our programs or events? We'd love to feature your perspective in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Submit Photos
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
              Request Photography
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
