"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

export function OurMission() {
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

    const element = document.getElementById("our-mission")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="our-mission" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-up">
          <Sparkles className="w-6 h-6 text-green-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce-gentle">
          <Star className="w-5 h-5 text-emerald-400 opacity-30 animate-pulse" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-shimmer">
            <Target className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-800">Our Mission</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Eradicating Poverty Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
              Sustainable Development
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To eradicate poverty through sustainable agricultural practices, community empowerment, 
            and innovative livelihood programs that create lasting positive change in rural India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission in Action</h3>
              <p className="text-gray-600 leading-relaxed">
                HAPEF's mission is rooted in the belief that sustainable development is the key to 
                breaking the cycle of poverty. We work directly with rural communities to implement 
                innovative solutions that address the root causes of economic hardship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our comprehensive approach combining agricultural innovation, skill development, 
                and community mobilization, we create pathways to prosperity that benefit entire villages 
                and can be replicated across regions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="group bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Sustainable Agriculture</span>
                </div>
                <p className="text-sm text-gray-600">Promoting eco-friendly farming practices</p>
              </div>
              <div className="group bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Star className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Community Empowerment</span>
                </div>
                <p className="text-sm text-gray-600">Building self-reliant rural communities</p>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Sustainable farming practices"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Community training"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Innovative agriculture"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Empowered community"
                  className="rounded-2xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-green-100 animate-float-card hover:scale-110 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 group-hover:animate-bounce">50+</div>
                <div className="text-sm text-gray-600">Villages Reached</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
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
      `}</style>
    </section>
  )
} 