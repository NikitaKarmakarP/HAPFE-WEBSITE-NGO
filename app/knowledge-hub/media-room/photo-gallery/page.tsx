import { PhotoGalleryHero } from "@/components/knowledge-hub/media-room/photo-gallery-hero"
import { PhotoGalleryGrid } from "@/components/knowledge-hub/media-room/photo-gallery-grid"
import { MediaRoomSidebar } from "@/components/knowledge-hub/media-room/media-room-sidebar"
import { ContactSection } from "@/components/contact-section"

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen">
      <PhotoGalleryHero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <PhotoGalleryGrid />
            </div>
            <div className="lg:col-span-1">
              <MediaRoomSidebar />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
