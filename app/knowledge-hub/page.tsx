import { KnowledgeHero } from "@/components/knowledge-hub/knowledge-hero"
import { KnowledgeGrid } from "@/components/knowledge-hub/knowledge-grid"
import { KnowledgeCategories } from "@/components/knowledge-hub/knowledge-categories"
import { KnowledgeCTA } from "@/components/knowledge-hub/knowledge-cta"
import { ContactSection } from "@/components/contact-section"

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen">
      <KnowledgeHero />
      <KnowledgeCategories />
      <KnowledgeGrid />
      <KnowledgeCTA />
      <ContactSection />
    </main>
  )
}
