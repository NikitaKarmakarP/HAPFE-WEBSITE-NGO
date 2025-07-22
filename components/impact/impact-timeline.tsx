import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Sprout, TrendingUp } from "lucide-react"

export function ImpactTimeline() {
  const milestones = [
    {
      year: "2022",
      title: "Foundation & First Steps",
      description: "HAPEF established with initial focus on 5 villages in Pakur district",
      impact: "50 families reached",
      icon: Calendar,
      color: "green",
    },
    {
      year: "2022",
      title: "Mushroom Program Launch",
      description: "Flagship mushroom cultivation program launched with 25 women entrepreneurs",
      impact: "100% success rate",
      icon: Sprout,
      color: "emerald",
    },
    {
      year: "2023",
      title: "Expansion & Recognition",
      description: "Programs expanded to 20 villages, received first government recognition",
      impact: "300 families impacted",
      icon: Award,
      color: "blue",
    },
    {
      year: "2023",
      title: "Climate Resilience Focus",
      description: "Launched climate-resilient agriculture program addressing environmental challenges",
      impact: "500 farmers trained",
      icon: TrendingUp,
      color: "purple",
    },
    {
      year: "2024",
      title: "Major Milestone",
      description: "Reached 500+ families across 50+ villages with comprehensive programs",
      impact: "₹2Cr+ income generated",
      icon: Users,
      color: "orange",
    },
    {
      year: "2024",
      title: "Current Impact",
      description: "Serving 75+ villages with 4 major programs and 1,550+ families",
      impact: "₹5.2Cr+ economic impact",
      icon: TrendingUp,
      color: "red",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of consistent growth, learning, and measurable impact in rural community development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div
                        className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`p-3 rounded-xl bg-${milestone.color}-100`}>
                          <milestone.icon className={`h-6 w-6 text-${milestone.color}-600`} />
                        </div>
                        <span className={`text-3xl font-bold text-${milestone.color}-600`}>{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                      <div
                        className={`inline-block px-4 py-2 bg-${milestone.color}-100 text-${milestone.color}-700 rounded-full text-sm font-medium`}
                      >
                        {milestone.impact}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className={`w-6 h-6 bg-${milestone.color}-500 rounded-full border-4 border-white shadow-lg`}
                  ></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Looking Ahead: 2025 Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">100</div>
                <div className="text-green-100">Villages to Cover</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000</div>
                <div className="text-green-100">Families to Impact</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹10Cr</div>
                <div className="text-green-100">Economic Impact Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
