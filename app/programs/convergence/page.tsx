import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function ConvergencePage() {
  const programData = {
    title: "Convergence",
    subtitle: "Integrating Multiple Development Approaches for Holistic Impact",
    description:
      "The Convergence program brings together various development initiatives, government schemes, and community resources to create comprehensive solutions that address multiple challenges simultaneously in rural communities.",
    image: "/placeholder.svg?height=600&width=800&text=Convergence+Program",
    stats: [
      { number: "50+", label: "Programs Integrated" },
      { number: "25", label: "Partner Organizations" },
      { number: "10,000+", label: "Beneficiaries Reached" },
      { number: "12", label: "Districts Covered" },
    ],
  }

  const details = {
    overview:
      "The Convergence program represents our innovative approach to development by integrating multiple government schemes, NGO initiatives, and community resources. Rather than working in silos, we create synergies between different programs to maximize impact and ensure sustainable development outcomes.",
    objectives: [
      "Integrate multiple development programs for holistic impact",
      "Maximize utilization of government schemes and resources",
      "Create sustainable community-led development models",
      "Reduce duplication and increase efficiency of interventions",
      "Build strong partnerships across sectors and organizations",
    ],
    activities: [
      {
        title: "Multi-Sectoral Planning",
        description:
          "Coordinating agriculture, health, education, and livelihood programs to create comprehensive village development plans.",
      },
      {
        title: "Government Scheme Integration",
        description:
          "Helping communities access and effectively utilize various government schemes like MGNREGA, PM-KISAN, and rural development programs.",
      },
      {
        title: "Partnership Development",
        description:
          "Building strategic partnerships with government agencies, NGOs, private sector, and academic institutions.",
      },
      {
        title: "Community Mobilization",
        description:
          "Strengthening village institutions and community groups to lead and sustain integrated development initiatives.",
      },
      {
        title: "Resource Optimization",
        description:
          "Pooling resources from multiple sources to implement larger-scale, more impactful development projects.",
      },
      {
        title: "Monitoring & Evaluation",
        description:
          "Implementing comprehensive M&E systems to track progress across multiple programs and measure collective impact.",
      },
    ],
    beneficiaries:
      "Rural communities, farmers, women's self-help groups, youth, elderly, and marginalized populations across multiple districts in West Bengal and neighboring states.",
    timeline:
      "Launched in 2020, this program operates on a 5-year cycle with continuous expansion to new areas based on partnership opportunities and community readiness.",
  }

  const impact = {
    title: "Creating Synergies for Sustainable Development",
    description:
      "By bringing together multiple programs and stakeholders, Convergence has created unprecedented impact in rural communities, demonstrating the power of integrated development approaches.",
    metrics: [
      {
        value: "10,000+",
        label: "Direct Beneficiaries",
        description: "Across 12 districts through integrated programs",
      },
      {
        value: "50+",
        label: "Programs Integrated",
        description: "Government schemes and NGO initiatives working together",
      },
      {
        value: "25",
        label: "Partner Organizations",
        description: "Including government agencies, NGOs, and private sector",
      },
      {
        value: "85%",
        label: "Scheme Utilization Rate",
        description: "Improved access to government benefits and services",
      },
    ],
    stories: [
      {
        title: "Integrated Village Development",
        description:
          "In Bankura district, convergence of agriculture, health, and education programs has transformed 15 villages into model communities with improved livelihoods and quality of life.",
        image: "/placeholder.svg?height=300&width=400&text=Village+Development",
      },
      {
        title: "Multi-Agency Collaboration",
        description:
          "Partnership between HAPEF, district administration, and local NGOs has successfully implemented integrated watershed management benefiting 5,000 farmers.",
        image: "/placeholder.svg?height=300&width=400&text=Collaboration",
      },
      {
        title: "Resource Mobilization Success",
        description:
          "Convergence approach has mobilized ₹2.5 crores from various sources for comprehensive rural infrastructure development in target areas.",
        image: "/placeholder.svg?height=300&width=400&text=Resource+Mobilization",
      },
    ],
  }

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "District Collector, Bankura",
      content:
        "The Convergence program has revolutionized how we implement development schemes. The integrated approach has significantly improved outcomes and reduced administrative burden.",
      image: "/placeholder.svg?height=80&width=80&text=PS",
    },
    {
      name: "Ramesh Mondal",
      role: "Village Panchayat President",
      content:
        "Through Convergence, our village has accessed multiple government schemes simultaneously. We now have better roads, water supply, and livelihood opportunities all working together.",
      image: "/placeholder.svg?height=80&width=80&text=RM",
    },
    {
      name: "Anjali Roy",
      role: "SHG Federation Leader",
      content:
        "The program helped us understand how different schemes complement each other. Our women's groups now effectively utilize multiple programs for maximum benefit to our members.",
      image: "/placeholder.svg?height=80&width=80&text=AR",
    },
  ]

  const ctaData = {
    title: "Join the Convergence Movement",
    description:
      "Support our integrated approach to development that maximizes impact by bringing together multiple programs, partners, and resources for sustainable change.",
    primaryButton: {
      text: "Partner With Us",
      href: "/contact",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/about",
    },
  }

  return (
    <main className="min-h-screen">
      <ProgramHero data={programData} />
      <ProgramDetails {...details} />
      <ProgramImpact {...impact} />
      <ProgramTestimonials testimonials={testimonials} />
      <ProgramCTA {...ctaData} />
      <ContactSection />
    </main>
  )
}
