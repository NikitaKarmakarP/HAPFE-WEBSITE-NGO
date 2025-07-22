import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Award, DollarSign, Calendar } from "lucide-react"

export function ProgramsStats() {
  const stats = [
    {
      icon: Users,
      title: "Total Beneficiaries",
      value: "1,650+",
      description: "Individuals directly impacted by our programs",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Geographic Reach",
      value: "115",
      description: "Villages across Jharkhand and West Bengal",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      value: "₹2.5Cr+",
      description: "Additional income generated for families",
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: "87%",
      description: "Average success rate across all programs",
      color: "purple",
    },
    {
      icon: Calendar,
      title: "Program Duration",
      value: "2+",
      description: "Years of continuous program implementation",
      color: "orange",
    },
    {
      icon: Award,
      title: "Recognition",
      value: "15+",
      description: "Awards and recognitions received",
      color: "pink",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs have created measurable, lasting impact across multiple dimensions of rural development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
