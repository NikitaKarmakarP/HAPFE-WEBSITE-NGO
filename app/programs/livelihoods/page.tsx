import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"

export default function LivelihoodsPage() {
  const programData = {
    title: "Livelihoods Program",
    subtitle: "Empowering Rural Families Through Sustainable Income Generation",
    description:
      "Our Livelihoods programs empower rural families through sustainable agriculture, entrepreneurship, and income generation. We provide training, resources, and support to help communities build resilient and prosperous futures.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "500+", label: "Families Empowered" },
      { number: "200%", label: "Average Income Increase" },
      { number: "50", label: "Villages Reached" },
      { number: "75%", label: "Success Rate" },
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