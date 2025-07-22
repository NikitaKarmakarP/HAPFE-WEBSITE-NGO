import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Home, TrendingUp } from "lucide-react"

export function BlanketProgramImpact() {
  const impacts = [
    {
      icon: Heart,
      title: "Health Impact",
      stats: [
        { label: "Families Protected", value: "500+" },
        { label: "Cold-related Illness Reduction", value: "60%" },
        { label: "Elderly Beneficiaries", value: "200+" },
      ],
      color: "red",
    },
    {
      icon: Users,
      title: "Social Impact",
      stats: [
        { label: "Children Helped", value: "800+" },
        { label: "Community Events", value: "30" },
        { label: "Volunteer Hours", value: "500+" },
      ],
      color: "blue",
    },
    {
      icon: Home,
      title: "Community Impact",
      stats: [
        { label: "Villages Covered", value: "30" },
        { label: "Local Partnerships", value: "15" },
        { label: "Community Leaders Engaged", value: "50+" },
      ],
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Program Growth",
      stats: [
        { label: "Annual Growth", value: "25%" },
        { label: "Repeat Beneficiaries", value: "70%" },
        { label: "Program Sustainability", value: "High" },
      ],
      color: "purple",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Christmas Blanket Distribution program has created significant positive impact on community health and
            welfare.
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

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Join Our Winter Relief Efforts</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Help us provide warmth and comfort to vulnerable families this winter. Your support can make a real
              difference in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
                Donate Blankets
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
