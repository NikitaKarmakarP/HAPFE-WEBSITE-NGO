import { MediaCoverageHero } from "@/components/knowledge-hub/media-room/media-coverage-hero"
import { MediaCoverageList } from "@/components/knowledge-hub/media-room/media-coverage-list"
import { ContactSection } from "@/components/contact-section"

export default function MediaCoveragePage() {
  return (
    <main className="min-h-screen">
      <MediaCoverageHero />
      <MediaCoverageList />
      <ContactSection />
    </main>
  )
}
