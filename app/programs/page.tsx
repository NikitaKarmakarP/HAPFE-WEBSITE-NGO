import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramsGrid } from "@/components/programs/programs-grid"
import { ProgramsStats } from "@/components/programs/programs-stats"
import { ProgramsCTA } from "@/components/programs/programs-cta"
import { ContactSection } from "@/components/contact-section"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramsStats />
      <ProgramsCTA />
      <ContactSection />
    </main>
  )
}
