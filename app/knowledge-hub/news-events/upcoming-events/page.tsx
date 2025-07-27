import { UpcomingEventsHero } from "@/components/knowledge-hub/news-events/upcoming-events-hero"
import { UpcomingEventsList } from "@/components/knowledge-hub/news-events/upcoming-events-list"
import { ContactSection } from "@/components/contact-section"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Clock, TrendingUp } from "lucide-react"

export default function UpcomingEventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <UpcomingEventsHero
        title="Upcoming Events"
        description="Join us for upcoming workshops, training sessions, community meetings, and special events. Be part of our mission to create positive change."
        breadcrumb="News & Events / Upcoming Events"
      />
      
      {/* Events Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-200">
              Join Our Events
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Be Part of Something Bigger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover upcoming opportunities to learn, grow, and contribute to our mission of 
              empowering rural communities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Upcoming Events</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Expected Attendees</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Locations</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
              <p className="text-gray-600">Event Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <UpcomingEventsList />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our upcoming events and be part of the transformation happening in rural communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Register for Events
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors">
              Contact Event Team
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
