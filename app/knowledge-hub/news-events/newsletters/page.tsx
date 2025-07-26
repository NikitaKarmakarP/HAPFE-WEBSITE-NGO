import { NewslettersHero } from "@/components/knowledge-hub/newsletters/newsletters-hero"
import { NewslettersList } from "@/components/knowledge-hub/newsletters/newsletters-list"
import { ContactSection } from "@/components/contact-section"

export default function NewslettersPage() {
  return (
    <main className="min-h-screen">
      <NewslettersHero />
      <NewslettersList />
      <ContactSection />
    </main>
  )
}
