import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout, Gift, Leaf, Users } from "lucide-react"
import Link from "next/link"

export function ProgramsGrid() {
  const programs = [
    {
      icon: Sprout,
      title: "Mushroom Entrepreneurship Program",
      description:
        "Comprehensive training and resources for oyster and button mushroom cultivation, helping rural families generate sustainable income through modern farming techniques.",
      features: ["Training workshops", "Seed funding support", "Market linkage", "Technical guidance"],
      stats: { beneficiaries: "200+", villages: "25", success: "85%" },
      image: "/placeholder.svg?height=300&width=400",
      href: "/programs/mushroom-entrepreneurship",
      color: "green",
    },
    {
      icon: Gift,
      title: "Christmas Blanket Distribution",
      description:
        "Annual initiative providing warm blankets to vulnerable families during winter months, ensuring comfort and protection from harsh weather conditions.",
      features: [
        "Community outreach",
        "Vulnerable family identification",
        "Quality blanket distribution",
        "Follow-up support",
      ],
      stats: { beneficiaries: "1000+", villages: "30", success: "100%" },
      image: "/placeholder.svg?height=300&width=400",
      href: "/programs/christmas-blanket-distribution",
      color: "blue",
    },
    {
      icon: Leaf,
      title: "Climate-Resilient Agriculture & BRC",
      description:
        "Building resilient communities through sustainable agriculture practices, climate adaptation strategies, and Block Resource Center initiatives.",
      features: [
        "Climate adaptation training",
        "Sustainable farming methods",
        "Resource center development",
        "Community resilience building",
      ],
      stats: { beneficiaries: "150+", villages: "20", success: "90%" },
      image: "/placeholder.svg?height=300&width=400",
      href: "/programs/climate-resilient-agriculture",
      color: "emerald",
    },
    {
      icon: Users,
      title: "Convergence",
      description:
        "Collaborative initiatives bringing together government departments, NGOs, and communities to create synergistic development programs.",
      features: [
        "Multi-stakeholder partnerships",
        "Integrated development approach",
        "Resource optimization",
        "Impact amplification",
      ],
      stats: { beneficiaries: "300+", villages: "40", success: "95%" },
      image: "/placeholder.svg?height=300&width=400",
      href: "/programs/convergence",
      color: "purple",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each program is designed with specific objectives and measurable outcomes to ensure maximum impact on rural
            communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <program.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">Active Program</span>
                  </div>
                  <h3 className="text-xl font-bold">{program.title}</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 bg-${program.color}-600 rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className={`font-bold text-lg text-${program.color}-600`}>{program.stats.beneficiaries}</div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-lg text-${program.color}-600`}>{program.stats.villages}</div>
                      <div className="text-xs text-gray-600">Villages</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-lg text-${program.color}-600`}>{program.stats.success}</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>

                <Link href={program.href}>
                  <Button className={`w-full bg-${program.color}-600 hover:bg-${program.color}-700 group`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
