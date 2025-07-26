import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"

export default function EmpoweringCommunitiesPage() {
  const programData = {
    title: "Empowering Communities Program",
    subtitle: "Building Local Capacity and Leadership for Sustainable Development",
    description:
      "Our Empowering Communities initiative focuses on building local capacity, fostering leadership, and enabling sustainable development from within. We work hand-in-hand with rural communities to identify their unique strengths and challenges, co-create solutions, and nurture self-reliance for lasting impact.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "150+", label: "Community Leaders Trained" },
      { number: "45", label: "Villages Empowered" },
      { number: "300+", label: "Women Leaders" },
      { number: "90%", label: "Community Engagement" },
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