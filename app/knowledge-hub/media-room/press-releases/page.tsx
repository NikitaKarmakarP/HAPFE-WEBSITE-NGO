import { MediaRoomHero } from "@/components/knowledge-hub/media-room/media-room-hero"
import { PressReleasesList } from "@/components/knowledge-hub/media-room/press-releases-list"
import { ContactSection } from "@/components/contact-section"

export default function PressReleasesPage() {
  return (
    <main className="min-h-screen">
      <MediaRoomHero
        title="Press Releases"
        description="Latest announcements, updates, and official statements from HAPEF"
        breadcrumb="Media Room / Press Releases"
      />
      <PressReleasesList />
      <ContactSection />
    </main>
  )
}
