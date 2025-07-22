import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { Leadership } from "@/components/about/leadership"
import { Timeline } from "@/components/about/timeline"
import { Recognition } from "@/components/about/recognition"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Timeline />
      <Leadership />
      <Recognition />
      <ContactSection />
    </main>
  )
}
