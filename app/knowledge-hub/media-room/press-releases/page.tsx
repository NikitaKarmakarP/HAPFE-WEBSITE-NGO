import { MediaRoomHero } from "@/components/knowledge-hub/media-room/media-room-hero"
import { PressReleasesList } from "@/components/knowledge-hub/media-room/press-releases-list"
import { MediaRoomSidebar } from "@/components/knowledge-hub/media-room/media-room-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function PressReleasesPage() {
  return (
    <main className="min-h-screen">
      <MediaRoomHero
        title="Press Releases"
        description="Latest announcements, updates, and official statements from HAPEF"
        breadcrumb="Media Room / Press Releases"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PressReleasesList />
          </div>
          <div className="lg:col-span-1">
            <MediaRoomSidebar />
          </div>
        </div>
      </div>
      <ContactSection />
    </main>
  )
}
