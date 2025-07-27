import { NewsEventsHero } from "@/components/knowledge-hub/news-events/news-events-hero"
import { LatestNewsList } from "@/components/knowledge-hub/news-events/latest-news-list"
import { ContactSection } from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"
import { Newspaper, TrendingUp, Users, Eye, Clock, Heart } from "lucide-react"

export default function LatestNewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NewsEventsHero
        title="Latest News"
        description="Stay updated with the latest developments, stories, and announcements from HAPEF"
        breadcrumb="News & Events / Latest News"
      />
      
      {/* News Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">
              Breaking News
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stories That Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the latest updates, success stories, and transformative initiatives that are shaping 
              rural communities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Articles Published</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25K+</h3>
              <p className="text-gray-600">Total Views</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Stories Shared</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2K+</h3>
              <p className="text-gray-600">Engagements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestNewsList />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Connected with Our News
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest updates, success stories, and community impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-orange-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-700 transition-colors">
              Submit News Story
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
