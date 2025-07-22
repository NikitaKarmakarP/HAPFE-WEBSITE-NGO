import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Home } from "lucide-react"

export function ProgramImpact() {
  const impacts = [
    {
      icon: DollarSign,
      title: "Economic Impact",
      stats: [
        { label: "Average Monthly Income", value: "₹15,000" },
        { label: "Return on Investment", value: "300%" },
        { label: "Break-even Period", value: "3 months" },
      ],
      color: "green",
    },
    {
      icon: Users,
      title: "Social Impact",
      stats: [
        { label: "Women Entrepreneurs", value: "150+" },
        { label: "Youth Engaged", value: "75+" },
        { label: "Families Benefited", value: "200+" },
      ],
      color: "blue",
    },
    {
      icon: Home,
      title: "Community Impact",
      stats: [
        { label: "Villages Covered", value: "25" },
        { label: "Local Employment", value: "400+" },
        { label: "Food Security", value: "Improved" },
      ],
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Growth Impact",
      stats: [
        { label: "Program Expansion", value: "200%" },
        { label: "Success Rate", value: "85%" },
        { label: "Sustainability", value: "Long-term" },
      ],
      color: "emerald",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mushroom entrepreneurship program has created tangible, lasting change in rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-${impact.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <impact.icon className={`h-6 w-6 text-${impact.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{impact.title}</h3>
                <div className="space-y-3">
                  {impact.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{stat.label}</span>
                      <span className={`font-bold text-${impact.color}-600`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Community?</h3>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our mushroom entrepreneurship program and become part of a growing network of successful rural
              entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all duration-300">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
