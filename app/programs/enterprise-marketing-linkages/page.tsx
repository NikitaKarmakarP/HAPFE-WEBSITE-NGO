import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"

export default function EnterpriseMarketingLinkagesPage() {
  const programData = {
    title: "Enterprise & Marketing Linkages Program",
    subtitle: "Connecting Rural Entrepreneurs to Markets and Value Chains",
    description:
      "We facilitate market access and enterprise development for rural entrepreneurs. Our initiatives connect producers to value chains, foster innovation, and support business growth for sustainable livelihoods.",
    image: "/placeholder.svg?height=600&width=800",
    stats: [
      { number: "100+", label: "Enterprises Supported" },
      { number: "150%", label: "Market Access Increase" },
      { number: "30", label: "Market Linkages Created" },
      { number: "80%", label: "Business Growth Rate" },
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