import { PhotoGalleryHero } from "@/components/knowledge-hub/media-room/photo-gallery-hero"
import { PhotoGalleryGrid } from "@/components/knowledge-hub/media-room/photo-gallery-grid"
import { ContactSection } from "@/components/contact-section"

export default function PhotoGalleryPage() {
  return (
    <main className="min-h-screen">
      <PhotoGalleryHero />
      <PhotoGalleryGrid />
      <ContactSection />
    </main>
  )
}
