import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Impact } from "@/components/impact"
import { WorkingAreas } from "@/components/working-areas"
import { Contact } from "@/components/contact"
import { FeaturedWork } from "@/components/featured-work"
import { CallToAction } from "@/components/call-to-action"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedWork />
      <About />
      <Programs />
      <Impact />
      <CallToAction />
      <WorkingAreas />
      <Contact />
      <ContactSection />
    </main>
  )
}
