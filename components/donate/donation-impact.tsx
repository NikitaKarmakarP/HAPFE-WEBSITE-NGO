import { Card, CardContent } from "@/components/ui/card"
import { Users, Sprout, Heart, Home, Star, Sparkles, TrendingUp } from "lucide-react"

export function DonationImpact() {
  const impactLevels = [
    {
      amount: "₹500",
      title: "Supporter",
      icon: Sprout,
      impacts: [
        "Train 1 farmer in mushroom cultivation",
        "Provide seeds for sustainable farming",
        "Support 1 family for a week",
      ],
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      emoji: "🌱",
    },
    {
      amount: "₹2,000",
      title: "Advocate",
      icon: Users,
      impacts: [
        "Support a family for one month",
        "Provide training materials for 5 farmers",
        "Distribute blankets to 4 families",
      ],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      emoji: "👥",
    },
    {
      amount: "₹5,000",
      title: "Champion",
      icon: Heart,
      impacts: [
        "Provide blankets for 10 families",
        "Set up basic mushroom cultivation unit",
        "Support community workshop",
      ],
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      emoji: "💜",
    },
    {
      amount: "₹10,000",
      title: "Transformer",
      icon: Home,
      impacts: [
        "Set up complete mushroom unit",
        "Support a family for 6 months",
        "Train 20 farmers in sustainable practices",
      ],
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      emoji: "🏠",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-green-200 shadow-lg mb-8">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-800">Your Impact Multiplied</span>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See Your
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Direct Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every rupee you donate creates measurable, lasting change. Choose your impact level and see exactly how your
            generosity transforms lives in rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactLevels.map((level, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br ${level.bgGradient} hover:scale-105 hover:-translate-y-4`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${level.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              {/* Popular Badge for middle options */}
              {(index === 1 || index === 2) && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {index === 1 ? "MOST POPULAR" : "BEST VALUE"}
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center relative z-10">
                {/* Icon with Enhanced Animation */}
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${level.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                  >
                    <level.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce group-hover:animate-spin">
                    {level.emoji}
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>

                {/* Amount with Gradient */}
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {level.amount}
                </div>

                {/* Title with Badge */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-xl font-bold text-gray-900">{level.title}</div>
                  <Star className={`h-5 w-5 text-${level.color}-500 group-hover:animate-spin`} />
                </div>

                {/* Impact List with Enhanced Styling */}
                <div className="space-y-3">
                  {level.impacts.map((impact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${level.gradient} rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse`}
                      ></div>
                      <span className="leading-relaxed font-medium">{impact}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 border-gradient-to-r ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="30" cy="30" r="2" />
                  <circle cx="10" cy="10" r="1" />
                  <circle cx="50" cy="10" r="1" />
                  <circle cx="10" cy="50" r="1" />
                  <circle cx="50" cy="50" r="1" />
                </g>
              </svg>
            </div>

            <div className="relative text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Heart className="h-6 w-6 animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold">100% Direct Impact Guarantee</h3>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 animate-spin" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="group">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    0%
                  </div>
                  <div className="text-green-100 font-medium">Administrative Costs</div>
                  <div className="text-sm text-green-200 mt-1">Every rupee goes to programs</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-green-100 font-medium">Direct Impact</div>
                  <div className="text-sm text-green-200 mt-1">Transparent fund utilization</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    ₹5.2Cr
                  </div>
                  <div className="text-green-100 font-medium">Total Impact Created</div>
                  <div className="text-sm text-green-200 mt-1">Since our inception</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed">
                  🌟 Our operational costs are covered by grants and partnerships, ensuring every rupee you donate
                  directly benefits rural communities.
                  <span className="font-semibold"> Your generosity creates immediate, measurable change.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
