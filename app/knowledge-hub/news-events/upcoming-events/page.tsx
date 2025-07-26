import { UpcomingEventsHero } from "@/components/knowledge-hub/news-events/upcoming-events-hero"
import { UpcomingEventsList } from "@/components/knowledge-hub/news-events/upcoming-events-list"
import { ContactSection } from "@/components/contact-section"

export default function UpcomingEventsPage() {
  return (
    <main className="min-h-screen">
      <UpcomingEventsHero
        title="Upcoming Events"
        description="Join us for upcoming workshops, training sessions, community meetings, and special events. Be part of our mission to create positive change."
        breadcrumb="News & Events / Upcoming Events"
      />
      <UpcomingEventsList />
      <ContactSection />
    </main>
  )
}
