import { ProgramHero } from "@/components/programs/program-hero"
import { ProgramDetails } from "@/components/programs/program-details"
import { ProgramImpact } from "@/components/programs/program-impact"
import { ProgramTestimonials } from "@/components/programs/program-testimonials"
import { ProgramCTA } from "@/components/programs/program-cta"
import { ContactSection } from "@/components/contact-section"

export default function ClimateResilientAgriculturePage() {
  const programData = {
    title: "Climate-Resilient Agriculture & BRC",
    subtitle: "Building Resilient Communities Through Sustainable Agriculture",
    description:
      "Our Climate-Resilient Agriculture and Building Resilient Communities (BRC) program empowers farmers with sustainable practices, climate adaptation strategies, and community-based solutions to address environmental challenges.",
    image: "/placeholder.svg?height=600&width=800&text=Climate-Resilient+Agriculture",
    stats: [
      { number: "2,500+", label: "Farmers Trained" },
      { number: "15", label: "Villages Covered" },
      { number: "40%", label: "Yield Increase" },
      { number: "8", label: "Climate Techniques" },
    ],
  }

  const details = {
    overview:
      "The Climate-Resilient Agriculture & BRC program addresses the urgent need for sustainable farming practices in the face of climate change. We work directly with farming communities to implement drought-resistant crops, water conservation techniques, and soil health management strategies.",
    objectives: [
      "Promote climate-smart agricultural practices",
      "Build community resilience to climate shocks",
      "Improve food security and nutrition",
      "Enhance farmer incomes through sustainable methods",
      "Strengthen local agricultural value chains",
    ],
    activities: [
      {
        title: "Drought-Resistant Crop Training",
        description:
          "Teaching farmers to cultivate crops that can withstand water scarcity and extreme weather conditions.",
      },
      {
        title: "Water Conservation Systems",
        description:
          "Installing rainwater harvesting systems and efficient irrigation methods to optimize water usage.",
      },
      {
        title: "Soil Health Management",
        description: "Implementing organic farming practices and soil testing to maintain and improve soil fertility.",
      },
      {
        title: "Climate Information Services",
        description:
          "Providing weather forecasting and climate advisory services to help farmers make informed decisions.",
      },
      {
        title: "Community Seed Banks",
        description: "Establishing local seed banks to preserve indigenous varieties and ensure seed security.",
      },
      {
        title: "Farmer Field Schools",
        description:
          "Conducting hands-on training sessions where farmers learn through practical demonstration and peer learning.",
      },
    ],
    beneficiaries:
      "Small and marginal farmers, women farmers, youth in agriculture, and rural communities in climate-vulnerable areas across West Bengal and neighboring states.",
    timeline:
      "This is an ongoing program that started in 2019 and continues to expand to new regions based on community needs and climate vulnerability assessments.",
  }

  const impact = {
    title: "Transforming Agriculture for Climate Resilience",
    description:
      "Our comprehensive approach to climate-resilient agriculture has created lasting change in farming communities, improving both environmental sustainability and economic outcomes.",
    metrics: [
      {
        value: "2,500+",
        label: "Farmers Trained",
        description: "Across 15 villages in climate-smart practices",
      },
      {
        value: "40%",
        label: "Average Yield Increase",
        description: "Through improved farming techniques and crop varieties",
      },
      {
        value: "60%",
        label: "Water Usage Reduction",
        description: "Via efficient irrigation and conservation methods",
      },
      {
        value: "25",
        label: "Indigenous Seed Varieties",
        description: "Preserved and promoted through community seed banks",
      },
    ],
    stories: [
      {
        title: "Sustainable Water Management Success",
        description:
          "Implementation of drip irrigation systems has reduced water consumption by 50% while increasing crop yields in drought-prone areas.",
        image: "/placeholder.svg?height=300&width=400&text=Water+Management",
      },
      {
        title: "Community Seed Bank Initiative",
        description:
          "Local seed banks have preserved 25 indigenous varieties, ensuring food security and maintaining agricultural biodiversity.",
        image: "/placeholder.svg?height=300&width=400&text=Seed+Bank",
      },
      {
        title: "Women Farmers Leadership",
        description:
          "Over 800 women farmers have become community leaders in climate-smart agriculture, training other farmers in their villages.",
        image: "/placeholder.svg?height=300&width=400&text=Women+Farmers",
      },
    ],
  }

  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Farmer, Birbhum District",
      content:
        "The drought-resistant rice varieties and water conservation techniques have completely transformed my farming. Even during the worst drought in years, I was able to maintain good yields.",
      image: "/placeholder.svg?height=80&width=80&text=RK",
    },
    {
      name: "Sunita Devi",
      role: "Women Farmer Group Leader",
      content:
        "Through the farmer field schools, I learned organic farming methods that not only improved my crops but also reduced my input costs by 30%. Now I train other women in my village.",
      image: "/placeholder.svg?height=80&width=80&text=SD",
    },
    {
      name: "Amit Ghosh",
      role: "Young Farmer, Purulia",
      content:
        "The climate information services help me plan my farming activities better. I receive weather updates and farming advisories on my phone, which has improved my decision-making significantly.",
      image: "/placeholder.svg?height=80&width=80&text=AG",
    },
  ]

  const ctaData = {
    title: "Support Climate-Resilient Agriculture",
    description:
      "Help us expand sustainable farming practices and build resilient communities that can adapt to climate change challenges.",
    primaryButton: {
      text: "Donate Now",
      href: "/donate",
    },
    secondaryButton: {
      text: "Learn More",
      href: "/contact",
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
