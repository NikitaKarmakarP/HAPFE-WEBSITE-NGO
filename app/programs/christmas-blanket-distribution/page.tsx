import { ProgramHero } from "@/components/programs/program-hero"
import { BlanketProgramDetails } from "@/components/programs/blanket-program-details"
import { BlanketProgramImpact } from "@/components/programs/blanket-program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function ChristmasBlanketDistributionPage() {
  const programData = {
    title: "Christmas Blanket Distribution",
    subtitle: "Providing Warmth and Comfort to Rural Communities",
    description:
      "Our annual Christmas Blanket Distribution program ensures that vulnerable families in rural areas stay warm during harsh winter months, demonstrating our commitment to community welfare.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "1000+", label: "Blankets Distributed" },
      { number: "30", label: "Villages Covered" },
      { number: "500+", label: "Families Helped" },
      { number: "100%", label: "Success Rate" },
    ],
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <BlanketProgramDetails />
      <BlanketProgramImpact />
      <ProgramTestimonials />
      <ProgramCTA />
      <ContactSection />
    </main>
  )
}
