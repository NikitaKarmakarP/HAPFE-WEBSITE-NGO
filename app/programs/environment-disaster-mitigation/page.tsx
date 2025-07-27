import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function EnvironmentDisasterMitigationPage() {
  const programData = {
    title: "Environment Sustainability & Disaster Management",
    subtitle: "Building Resilient Communities Through Environmental Protection",
    description:
      "Our Environment Sustainability & Disaster Management program focuses on building climate-resilient communities through sustainable environmental practices, disaster preparedness, and natural resource conservation. We work with rural communities to implement eco-friendly solutions and create disaster-ready villages for a safer, greener future.",
    image: "/placeholder.svg?height=600&width=800&text=Environment+Sustainability",
    stats: [
      { number: "30+", label: "Villages Protected" },
      { number: "500+", label: "Families Trained" },
      { number: "15", label: "Disaster Drills Conducted" },
      { number: "80%", label: "Risk Reduction" },
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