import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function MushroomEntrepreneurshipPage() {
  const programData = {
    title: "Mushroom Entrepreneurship Program",
    subtitle: "Empowering Rural Families Through Sustainable Mushroom Cultivation",
    description:
      "Our flagship program provides comprehensive training, resources, and ongoing support to help rural families, particularly women, establish profitable mushroom farming enterprises.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "200+", label: "Families Trained" },
      { number: "300%", label: "Average Income Increase" },
      { number: "25", label: "Villages Covered" },
      { number: "85%", label: "Success Rate" },
    ],
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <ProgramDetails />
      <ProgramImpact />
      <ProgramTestimonials />
      <ProgramCTA />
      <ContactSection />
    </main>
  )
}
