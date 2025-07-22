import { NewslettersHero } from "@/components/knowledge-hub/newsletters/newsletters-hero"
import { NewslettersList } from "@/components/knowledge-hub/newsletters/newsletters-list"
import { NewslettersSidebar } from "@/components/knowledge-hub/newsletters/newsletters-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function NewslettersPage() {
  return (
    <div className="min-h-screen bg-white">
      <NewslettersHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewslettersList />
          </div>
          <div className="lg:col-span-1">
            <NewslettersSidebar />
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
