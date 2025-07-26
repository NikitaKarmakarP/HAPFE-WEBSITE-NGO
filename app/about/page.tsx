import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurVision } from "@/components/about/our-vision"
import { OurValues } from "@/components/about/our-values"
import { OurStrategic } from "@/components/about/our-strategic"
import { Leadership } from "@/components/about/leadership"
import { Timeline } from "@/components/about/timeline"
import { Recognition } from "@/components/about/recognition"
import { ContactSection } from "@/components/contact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <OurVision />
      <OurValues />
      <OurStrategic />
      <Timeline />
      <Leadership />
      <Recognition />
      <ContactSection />
    </main>
  )
}
