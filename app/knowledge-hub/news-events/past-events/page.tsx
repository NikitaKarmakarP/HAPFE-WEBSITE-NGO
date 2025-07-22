import { PastEventsHero } from "@/components/knowledge-hub/news-events/past-events-hero"
import { PastEventsList } from "@/components/knowledge-hub/news-events/past-events-list"
import { NewsEventsSidebar } from "@/components/knowledge-hub/news-events/news-events-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PastEventsHero
        title="Past Events"
        description="Explore our successful events, workshops, and community gatherings. See the impact we've made together over the years."
        breadcrumb="News & Events / Past Events"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PastEventsList />
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
