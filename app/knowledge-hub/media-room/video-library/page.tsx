import { VideoLibraryHero } from "@/components/knowledge-hub/media-room/video-library-hero"
import { VideoLibraryGrid } from "@/components/knowledge-hub/media-room/video-library-grid"
import { MediaRoomSidebar } from "@/components/knowledge-hub/media-room/media-room-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function VideoLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <VideoLibraryHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <VideoLibraryGrid />
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
