import { PastEventsHero } from "@/components/knowledge-hub/news-events/past-events-hero"
import { PastEventsList } from "@/components/knowledge-hub/news-events/past-events-list"
import { ContactSection } from "@/components/contact-section"

export default function PastEventsPage() {
  return (
    <main className="min-h-screen">
      <PastEventsHero
        title="Past Events"
        description="Explore our successful events, workshops, and community gatherings. See the impact we've made together over the years."
        breadcrumb="News & Events / Past Events"
      />
      <PastEventsList />
      <ContactSection />
    </main>
  )
}
