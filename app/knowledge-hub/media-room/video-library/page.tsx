import { VideoLibraryHero } from "@/components/knowledge-hub/media-room/video-library-hero"
import { VideoLibraryGrid } from "@/components/knowledge-hub/media-room/video-library-grid"
import { ContactSection } from "@/components/contact-section"

export default function VideoLibraryPage() {
  return (
    <main className="min-h-screen">
      <VideoLibraryHero />
      <VideoLibraryGrid />
      <ContactSection />
    </main>
  )
}
