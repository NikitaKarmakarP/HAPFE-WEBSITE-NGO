import { MediaCoverageHero } from "@/components/knowledge-hub/media-room/media-coverage-hero"
import { MediaCoverageList } from "@/components/knowledge-hub/media-room/media-coverage-list"
import { ContactSection } from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Tv, Radio, Globe, TrendingUp, Award, Users, Eye } from "lucide-react"

export default function MediaCoveragePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MediaCoverageHero />
      
      {/* Media Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
              Press Recognition
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Making Headlines Across Media
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how HAPEF's impactful work is being recognized and featured across various media platforms, 
              showcasing our commitment to rural development and community empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Print Articles</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tv className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">TV Features</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Radio className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Radio Interviews</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Online Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Media Coverage Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MediaCoverageList />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in Touch with Our Media Team
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Journalists and media professionals interested in covering our work are welcome to reach out for interviews, 
            press releases, and exclusive stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Media Inquiries
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition-colors">
              Press Kit Download
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
