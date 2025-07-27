import { Card, CardContent } from "@/components/ui/card"
import { Users, Sprout, Heart, Home, Star, Sparkles, TrendingUp, Award, Target, Zap } from "lucide-react"

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
      glowColor: "green",
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
      glowColor: "blue",
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
      glowColor: "purple",
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
      glowColor: "orange",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-bounce">
          <div className="w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-2000">
          <div className="w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-bounce delay-1500">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60 animate-spin" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-green-200 shadow-xl mb-8 group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <TrendingUp className="h-6 w-6 text-green-600 group-hover:animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-lg font-bold text-gray-800">Your Impact Multiplied</span>
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Enhanced Heading with Animation */}
          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            <span className="block">See Your</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Direct Impact
            </span>
          </h2>
          
          {/* Enhanced Description */}
          <div className="relative">
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every rupee you donate creates measurable, lasting change. Choose your impact level and see exactly how your
              generosity transforms lives in rural communities.
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactLevels.map((level, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-gradient-to-br ${level.bgGradient} hover:scale-105 hover:-translate-y-6`}
            >
              {/* Enhanced Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${level.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl`}
              ></div>

              {/* Animated Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r ${level.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}
              ></div>

              {/* Popular Badge for middle options */}
              {(index === 1 || index === 2) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl animate-bounce">
                    {index === 1 ? "🔥 MOST POPULAR" : "⭐ BEST VALUE"}
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center relative z-10">
                {/* Enhanced Icon with 3D Effect */}
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${level.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl group-hover:shadow-3xl`}
                    style={{
                      boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)`,
                    }}
                  >
                    <level.icon className="h-12 w-12 text-white group-hover:animate-bounce" />
                  </div>
                  
                  {/* Floating Emoji */}
                  <div className="absolute -top-3 -right-3 text-3xl animate-bounce group-hover:animate-spin">
                    {level.emoji}
                  </div>
                  
                  {/* Glow Dots */}
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-200"></div>
                </div>

                {/* Enhanced Amount with 3D Text Effect */}
                <div
                  className={`text-5xl font-black bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}
                  style={{
                    textShadow: `0 2px 4px rgba(0,0,0,0.1)`,
                  }}
                >
                  {level.amount}
                </div>

                {/* Enhanced Title with Badge */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {level.title}
                  </div>
                  <div className="relative">
                    <Star className={`h-6 w-6 text-${level.color}-500 group-hover:animate-spin`} />
                    <div className="absolute inset-0 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
                  </div>
                </div>

                {/* Enhanced Impact List with Hover Effects */}
                <div className="space-y-4">
                  {level.impacts.map((impact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 text-sm text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-105"
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${level.gradient} rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse group-hover:scale-150 transition-transform duration-300`}
                      ></div>
                      <span className="leading-relaxed font-semibold group-hover:font-bold transition-all duration-300">{impact}</span>
                    </div>
                  ))}
                </div>

                {/* Floating Action Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Section with 3D Effects */}
        <div className="relative">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="30" cy="30" r="2" />
                  <circle cx="10" cy="10" r="1" />
                  <circle cx="50" cy="10" r="1" />
                  <circle cx="10" cy="50" r="1" />
                  <circle cx="50" cy="50" r="1" />
                  <circle cx="30" cy="10" r="1" />
                  <circle cx="30" cy="50" r="1" />
                  <circle cx="10" cy="30" r="1" />
                  <circle cx="50" cy="30" r="1" />
                </g>
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 animate-bounce">
              <Award className="h-8 w-8 text-white/30 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4 animate-bounce delay-1000">
              <Target className="h-8 w-8 text-white/30 animate-pulse" />
            </div>

            <div className="relative text-center">
              {/* Enhanced Header */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Heart className="h-8 w-8 animate-pulse" />
                </div>
                <h3 className="text-5xl font-black group-hover:scale-105 transition-transform duration-500">
                  100% Direct Impact Guarantee
                </h3>
                <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="h-8 w-8 animate-spin" />
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="group/stats hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-black mb-3 group-hover/stats:scale-110 transition-transform duration-300">
                    0%
                  </div>
                  <div className="text-green-100 font-bold text-lg">Administrative Costs</div>
                  <div className="text-sm text-green-200 mt-2 opacity-80">Every rupee goes to programs</div>
                </div>
                <div className="group/stats hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-black mb-3 group-hover/stats:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-green-100 font-bold text-lg">Direct Impact</div>
                  <div className="text-sm text-green-200 mt-2 opacity-80">Transparent fund utilization</div>
                </div>
                <div className="group/stats hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-black mb-3 group-hover/stats:scale-110 transition-transform duration-300">
                    ₹5.2Cr
                  </div>
                  <div className="text-green-100 font-bold text-lg">Total Impact Created</div>
                  <div className="text-sm text-green-200 mt-2 opacity-80">Since our inception</div>
                </div>
              </div>

              {/* Enhanced Call to Action Box */}
              <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/20 group-hover:bg-white/20 transition-all duration-500">
                <p className="text-xl leading-relaxed font-medium">
                  🌟 Our operational costs are covered by grants and partnerships, ensuring every rupee you donate
                  directly benefits rural communities.
                  <span className="font-black text-green-100"> Your generosity creates immediate, measurable change.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
