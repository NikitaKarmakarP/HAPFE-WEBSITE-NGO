import { UpcomingEventsHero } from "@/components/knowledge-hub/news-events/upcoming-events-hero"
import { UpcomingEventsList } from "@/components/knowledge-hub/news-events/upcoming-events-list"
import { NewsEventsSidebar } from "@/components/knowledge-hub/news-events/news-events-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <UpcomingEventsHero
        title="Upcoming Events"
        description="Join us for upcoming workshops, training sessions, community meetings, and special events. Be part of our mission to create positive change."
        breadcrumb="News & Events / Upcoming Events"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <UpcomingEventsList />
          </div>
          <div className="lg:col-span-1">
            <NewsEventsSidebar />
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
