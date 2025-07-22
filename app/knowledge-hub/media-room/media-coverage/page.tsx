import { MediaCoverageHero } from "@/components/knowledge-hub/media-room/media-coverage-hero"
import { MediaCoverageList } from "@/components/knowledge-hub/media-room/media-coverage-list"
import { MediaRoomSidebar } from "@/components/knowledge-hub/media-room/media-room-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function MediaCoveragePage() {
  return (
    <div className="min-h-screen bg-white">
      <MediaCoverageHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <MediaCoverageList />
          </div>
          <div className="lg:col-span-1">
            <MediaRoomSidebar />
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}
