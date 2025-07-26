"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Star, Shield, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function OurValues() {
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

    const element = document.getElementById("our-values")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Sustainability",
      description: "We prioritize long-term environmental and social impact over short-term gains.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "We believe in building self-reliant communities that can drive their own development.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We maintain open and honest communication in all our operations and partnerships.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously seek creative solutions to address complex rural challenges.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Star,
      title: "Dignity",
      description: "We respect and uphold the dignity and rights of all rural communities.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and initiatives.",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ]

  return (
    <section id="our-values" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-up">
          <Sparkles className="w-6 h-6 text-purple-400 opacity-30 animate-spin-slow" />
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
            <Heart className="h-4 w-4 text-purple-600 animate-pulse" />
            <span className="text-sm font-semibold text-purple-800">Our Values</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Principles That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x">
              Guide Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our values are the foundation of everything we do. They guide our decisions, 
            shape our programs, and ensure we remain true to our mission of serving rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-4 hover:scale-105 ${isVisible ? `animate-fade-in-up delay-${(index + 1) * 200}` : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-spin" />
                </div>
              </CardContent>
            </Card>
          ))}
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