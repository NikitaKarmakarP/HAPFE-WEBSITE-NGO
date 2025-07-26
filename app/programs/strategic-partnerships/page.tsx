import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"

export default function StrategicPartnershipsPage() {
  const programData = {
    title: "Strategic Partnerships Program",
    subtitle: "Collaborating for Greater Impact and Sustainable Development",
    description:
      "We collaborate with organizations, government agencies, and stakeholders to maximize impact and reach. Our strategic partnerships drive innovation, resource sharing, and collective action for sustainable development.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "25+", label: "Partnerships Formed" },
      { number: "300%", label: "Impact Multiplier" },
      { number: "15", label: "Government Collaborations" },
      { number: "95%", label: "Partnership Success Rate" },
    ],
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <ProgramDetails />
      <ProgramImpact />
      <ProgramTestimonials />
      <ProgramCTA />
    </main>
  )
} 