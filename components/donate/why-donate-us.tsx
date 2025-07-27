import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, MapPin, TrendingUp, Award, Shield, Target, Sparkles, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export function WhyDonateUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Transform Lives",
      description: "Your donation directly impacts rural families, providing sustainable livelihoods and breaking the cycle of poverty.",
      color: "red",
      stats: "500+ families empowered",
      features: ["Direct family support", "Sustainable income", "Poverty alleviation"]
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Support local communities in building self-reliance through innovative agricultural programs and skill development.",
      color: "blue",
      stats: "50+ villages reached",
      features: ["Leadership training", "Skill development", "Community empowerment"]
    },
    {
      icon: TrendingUp,
      title: "Sustainable Impact",
      description: "Fund programs that create lasting change through mushroom entrepreneurship and climate-resilient agriculture.",
      color: "green",
      stats: "90% success rate",
      features: ["Long-term solutions", "Environmental focus", "Innovation driven"]
    },
    {
      icon: MapPin,
      title: "Geographic Reach",
      description: "Extend our reach to more rural areas in Jharkhand, bringing development to underserved communities.",
      color: "purple",
      stats: "Pakur District focus",
      features: ["Rural development", "Underserved areas", "Local impact"]
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Established NGO with registered status and transparent operations since 2022.",
      color: "yellow",
      stats: "2+ years of service",
      features: ["Registered NGO", "Transparent operations", "Proven results"]
    },
    {
      icon: Shield,
      title: "Transparency & Accountability",
      description: "Complete transparency in fund utilization with regular impact reports and community feedback.",
      color: "indigo",
      stats: "100% transparency",
      features: ["Regular reports", "Community feedback", "Fund tracking"]
    }
  ]

  const impactAreas = [
    {
      title: "Agricultural Innovation",
      description: "Support mushroom farming and climate-resilient agriculture programs",
      icon: Target,
      color: "emerald",
      impact: "500+ farmers trained"
    },
    {
      title: "Community Empowerment",
      description: "Fund leadership training and capacity building initiatives",
      icon: Users,
      color: "blue",
      impact: "150+ leaders developed"
    },
    {
      title: "Rural Development",
      description: "Enable infrastructure and sustainable development projects",
      icon: MapPin,
      color: "purple",
      impact: "50+ villages transformed"
    }
  ]

  const trustFactors = [
    "100% of donations go directly to programs",
    "Regular impact reports and transparency",
    "Registered NGO with proven track record",
    "Community-driven development approach",
    "Sustainable and long-term solutions",
    "Local expertise and cultural understanding"
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-red-200 shadow-xl mb-8 group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Heart className="h-6 w-6 text-red-600 group-hover:animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-lg font-bold text-gray-800">Make a Real Difference</span>
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          </div>

          <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            Why Donate to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">HAPEF</span>?
          </h2>
          
          <div className="relative">
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your contribution directly transforms rural communities through sustainable development, 
              innovative agricultural programs, and community empowerment initiatives.
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover:scale-105 hover:-translate-y-4">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${reason.color}-200 to-${reason.color}-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-${reason.color}-100 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${reason.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{reason.title}</h3>
                      <p className="text-sm text-gray-500 font-medium">{reason.stats}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{reason.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {reason.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className={`h-4 w-4 text-${reason.color}-500`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Impact Areas */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Your Donation Supports</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every rupee contributes to our comprehensive rural development programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${area.color}-100 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 text-${area.color}-600`} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                  <div className="text-sm font-semibold text-gray-500">{area.impact}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust Factors */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white mb-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center">
                <Shield className="h-8 w-8 animate-pulse" />
              </div>
              <h3 className="text-4xl font-bold">Why Trust HAPEF?</h3>
              <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center">
                <Star className="h-8 w-8 animate-spin" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 mr-3 animate-pulse" />
              <h3 className="text-4xl font-bold">Ready to Make an Impact?</h3>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join us in transforming rural communities. Every donation, no matter the size, 
              creates ripples of positive change that last for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#donation-form" passHref>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Donate Now
                </Button>
              </Link>
              <Link href="/impact" passHref>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
                >
                  See Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 