import { NewsEventsHero } from "@/components/knowledge-hub/news-events/news-events-hero"
import { LatestNewsList } from "@/components/knowledge-hub/news-events/latest-news-list"
import { ContactSection } from "@/components/contact-section"

export default function LatestNewsPage() {
  return (
    <main className="min-h-screen">
      <NewsEventsHero
        title="Latest News"
        description="Stay updated with the latest developments, stories, and announcements from HAPEF"
        breadcrumb="News & Events / Latest News"
      />
      <LatestNewsList />
      <ContactSection />
    </main>
  )
}
