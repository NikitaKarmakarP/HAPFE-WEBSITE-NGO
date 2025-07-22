"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Award, MapPin, Users, Heart, ArrowRight, Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

export function About() {
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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
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
        <div className="absolute bottom-1/3 left-1/4 animate-float-up-delayed">
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-shimmer">
            <Award className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-800">About HAPEF</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
              Sustainable Future
            </span>
            for Rural India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since our founding, HAPEF has been at the forefront of rural development, combining innovative agricultural
            practices with community empowerment to create lasting positive change across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Journey of Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to eradicate poverty through sustainable development, HAPEF has evolved into a
                leading force for rural transformation. Our innovative approach combines traditional agricultural wisdom
                with modern techniques, creating opportunities that honor both heritage and progress.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Operating primarily in Pakur district of Jharkhand, with our headquarters in Kolkata, we've built strong
                partnerships with government departments and community organizations. Our work has gained recognition
                from ETV Bharat Jharkhand and other media platforms, highlighting our commitment to transparency and
                measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="group bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Based in Kolkata</span>
                </div>
                <p className="text-sm text-gray-600">Registered NGO serving rural communities across India</p>
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Community Focus</span>
                </div>
                <p className="text-sm text-gray-600">Empowering women and families through sustainable programs</p>
              </div>
            </div>

            <Button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Learn Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="HAPEF team with farmers"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Training session"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Sustainable agriculture"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Community program"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-green-100 animate-float-card hover:scale-110 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 group-hover:animate-bounce">2+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values with Enhanced Animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To eradicate poverty through sustainable agricultural practices, community empowerment, and innovative livelihood programs that create lasting positive change in rural India.",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50",
              delay: "delay-200",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "A world where every rural family has access to sustainable livelihoods, food security, and the opportunity to thrive through dignified work and community support.",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-50 to-cyan-50",
              delay: "delay-400",
            },
            {
              icon: Heart,
              title: "Our Values",
              description:
                "Sustainability, community empowerment, innovation in agriculture, transparency in operations, and unwavering commitment to the dignity and rights of rural communities.",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50",
              delay: "delay-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${item.bgGradient} hover:-translate-y-4 hover:scale-105 ${isVisible ? `animate-fade-in-up ${item.delay}` : "opacity-0 translate-y-10"}`}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
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
        
        @keyframes float-up-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-float-up-delayed { animation: float-up-delayed 5s ease-in-out infinite; }
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
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-float-card { animation: float-card 4s ease-in-out infinite; }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}
