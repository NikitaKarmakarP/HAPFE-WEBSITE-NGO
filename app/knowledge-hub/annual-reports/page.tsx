import { AnnualReportsHero } from "@/components/knowledge-hub/annual-reports/annual-reports-hero"
import { AnnualReportsGrid } from "@/components/knowledge-hub/annual-reports/annual-reports-grid"
import { ContactSection } from "@/components/contact-section"

export default function AnnualReportsPage() {
  return (
    <main className="min-h-screen">
      <AnnualReportsHero />
      <AnnualReportsGrid />
      <ContactSection />
    </main>
  )
} 