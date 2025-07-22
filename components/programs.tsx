import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MouseIcon as Mushroom, Gift, Leaf, Users, ArrowRight } from "lucide-react"

export function Programs() {
  const programs = [
    {
      icon: Mushroom,
      title: "Mushroom Entrepreneurship Program",
      description:
        "Comprehensive training and resources for oyster and button mushroom cultivation, helping rural families generate sustainable income through modern farming techniques.",
      features: ["Training workshops", "Seed funding support", "Market linkage", "Technical guidance"],
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive initiatives designed to empower rural communities through sustainable
            development, agricultural innovation, and community support programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <program.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
