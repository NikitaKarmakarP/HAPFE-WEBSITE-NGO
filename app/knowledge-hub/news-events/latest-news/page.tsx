import { NewsEventsHero } from "@/components/knowledge-hub/news-events/news-events-hero"
import { LatestNewsList } from "@/components/knowledge-hub/news-events/latest-news-list"
import { NewsEventsSidebar } from "@/components/knowledge-hub/news-events/news-events-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function LatestNewsPage() {
  return (
    <main className="min-h-screen">
      <NewsEventsHero
        title="Latest News"
        description="Stay updated with the latest developments, stories, and announcements from HAPEF"
        breadcrumb="News & Events / Latest News"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <LatestNewsList />
          </div>
          <div className="lg:col-span-1">
            <NewsEventsSidebar />
          </div>
        </div>
      </div>
      <ContactSection />
    </main>
  )
}
