import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Award, DollarSign, Calendar, Heart, Sprout } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      title: "Lives Transformed",
      value: "2,500+",
      description: "Individuals directly impacted by our programs",
      color: "green",
      trend: "+25%",
    },
    {
      icon: MapPin,
      title: "Geographic Reach",
      value: "75",
      description: "Villages across Jharkhand and West Bengal",
      color: "blue",
      trend: "+15%",
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      value: "₹5.2Cr",
      description: "Additional income generated for families",
      color: "emerald",
      trend: "+40%",
    },
    {
      icon: Sprout,
      title: "Farmers Trained",
      value: "800+",
      description: "In sustainable agriculture practices",
      color: "green",
      trend: "+30%",
    },
    {
      icon: Heart,
      title: "Families Supported",
      value: "1,200+",
      description: "Through various welfare programs",
      color: "red",
      trend: "+20%",
    },
    {
      icon: Award,
      title: "Success Rate",
      value: "87%",
      description: "Average success rate across programs",
      color: "purple",
      trend: "+5%",
    },
    {
      icon: Calendar,
      title: "Years of Service",
      value: "2+",
      description: "Continuous community development",
      color: "orange",
      trend: "Stable",
    },
    {
      icon: TrendingUp,
      title: "Program Growth",
      value: "300%",
      description: "Expansion in the last 5 years",
      color: "blue",
      trend: "+50%",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every statistic represents real lives transformed, communities empowered, and sustainable change created
            through our dedicated programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div
                  className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
                <div className="text-sm text-gray-600 mb-3 leading-relaxed">{stat.description}</div>
                <div
                  className={`text-xs font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}
                >
                  {stat.trend} this year
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
