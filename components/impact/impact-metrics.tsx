"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Sprout, Heart, TrendingUp, Award, Star, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("impact-metrics")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const metrics = [
    {
      icon: Users,
      value: "500+",
      label: "Families Empowered",
      description: "Rural families directly supported through our programs",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Villages Reached",
      description: "Communities across multiple districts in Jharkhand",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Sprout,
      value: "1000+",
      label: "Acres of Land",
      description: "Agricultural land improved with sustainable practices",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: Heart,
      value: "200+",
      label: "Women Trained",
      description: "Women empowered with new skills and opportunities",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      icon: TrendingUp,
      value: "75%",
      label: "Income Increase",
      description: "Average income improvement for participating families",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Award,
      value: "15+",
      label: "Partnerships",
      description: "Government and NGO partnerships established",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  return (
    <section id="impact-metrics" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-up">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce-gentle">
          <Star className="w-5 h-5 text-pink-400 opacity-30 animate-pulse" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-shimmer">
            <TrendingUp className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-800">Impact Metrics</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measuring Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our impact is measured not just in numbers, but in the real transformation of lives, 
            communities, and sustainable development practices across rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-4 hover:scale-105 ${isVisible ? `animate-fade-in-up delay-${(index + 1) * 200}` : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                    >
                      <metric.icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {metric.label}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {metric.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Impact Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Impact</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Every number represents a real person, a real family, and a real transformation. 
              We believe in transparent reporting and continuous improvement to maximize our positive impact 
              on rural communities across India.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Sustainable</div>
                <div className="text-gray-600">Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-2">Community</div>
                <div className="text-gray-600">Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </section>
  )
} 