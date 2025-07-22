import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Award, Sprout, Heart } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Families Empowered",
      description: "Rural families supported through our various programs",
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Villages Reached",
      description: "Communities across Pakur district and beyond",
    },
    {
      icon: Sprout,
      number: "200+",
      label: "Farmers Trained",
      description: "In sustainable agriculture and mushroom cultivation",
    },
    {
      icon: Heart,
      number: "1000+",
      label: "Blankets Distributed",
      description: "Providing warmth during winter months",
    },
    {
      icon: TrendingUp,
      number: "75%",
      label: "Income Increase",
      description: "Average income improvement for participating families",
    },
    {
      icon: Award,
      number: "2+",
      label: "Years of Service",
      description: "Dedicated to rural community development",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring success through the positive changes we bring to rural communities across India. Every number
            represents lives transformed and communities empowered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Mushroom Farming Success</h4>
                  <p className="text-gray-600 text-sm">
                    "Through HAPEF's mushroom cultivation program, I was able to start my own business and increase my
                    family's monthly income by 300%. The training and ongoing support have been invaluable."
                  </p>
                  <div className="text-sm text-green-600 font-medium mt-2">- Priya Devi, Pakur District</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Community Transformation</h4>
                  <p className="text-gray-600 text-sm">
                    "Our entire village has benefited from HAPEF's sustainable agriculture programs. We now have better
                    crop yields and improved food security for all families."
                  </p>
                  <div className="text-sm text-green-600 font-medium mt-2">- Ram Kumar, Village Head</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Success stories from HAPEF programs"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
