"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Sprout, Play, Award, MapPin, Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float-up">
          <div className="w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-up-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-up-slow">
          <div className="w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-bounce-slow">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60 animate-spin-slow" />
        </div>
        <div className="absolute top-3/4 left-1/5 animate-float-up">
          <Star className="w-5 h-5 text-pink-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute top-1/5 right-1/5 animate-bounce-slow">
          <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            {/* Badge with Animation */}
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
            >
              <div className="relative">
                <Award className="h-4 w-4 text-green-600 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-green-800">Estd. 2022 • Registered NGO • Kolkata, India</span>
            </div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span
                  className={`block transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
                >
                  Empowering
                </span>
                <span
                  className={`block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
                >
                  Rural Dreams
                </span>
                <span
                  className={`block text-4xl lg:text-5xl text-gray-700 transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
                >
                  Through Sustainable Growth
                </span>
              </h1>

              <p
                className={`text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              >
                HAPEF transforms lives through innovative agricultural programs, mushroom entrepreneurship, and
                community empowerment initiatives across rural India.
              </p>
            </div>

            {/* CTA Buttons with Hover Animations */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Explore Our Impact
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-green-600 text-green-600 hover:bg-green-50 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats with Staggered Animation */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-1000 delay-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Users className="h-8 w-8 text-green-600 group-hover:animate-bounce" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-gray-900 group-hover:scale-110 transition-transform duration-300 animate-count-up">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">Families Empowered</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <MapPin className="h-8 w-8 text-blue-600 group-hover:animate-bounce" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-gray-900 group-hover:scale-110 transition-transform duration-300 animate-count-up">
                  50+
                </div>
                <div className="text-sm text-gray-600 font-medium">Villages Reached</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Sprout className="h-8 w-8 text-emerald-600 group-hover:animate-bounce" />
                  </div>
                </div>
                <div className="font-bold text-3xl text-gray-900 group-hover:scale-110 transition-transform duration-300 animate-count-up">
                  2+
                </div>
                <div className="text-sm text-gray-600 font-medium">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Hero Image with Enhanced Animations */}
          <div
            className={`relative transition-all duration-1000 delay-1400 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative z-10 group">
              <img
                src="/placeholder.svg?height=700&width=600"
                alt="Rural farmers working in sustainable agriculture"
                className="rounded-3xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Cards with Enhanced Animations */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-green-100 animate-float-card hover:scale-110 transition-all duration-300 cursor-pointer group/card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover/card:rotate-12 transition-transform duration-300">
                    <Sprout className="h-6 w-6 text-white group-hover/card:animate-bounce" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Mushroom Farming</div>
                    <div className="text-sm text-gray-600">Sustainable Income</div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-opacity duration-300"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-100 animate-float-card-delayed hover:scale-110 transition-all duration-300 cursor-pointer group/card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover/card:rotate-12 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-white group-hover/card:animate-pulse" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Community Care</div>
                    <div className="text-sm text-gray-600">Blanket Distribution</div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-opacity duration-300"></div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute top-1/4 -right-4 animate-bounce-slow">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-pulse"></div>
              </div>
              <div className="absolute bottom-1/4 -left-4 animate-bounce-slow delay-1000">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70 animate-pulse"></div>
              </div>
            </div>

            {/* Background Decoration with Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-3xl transform rotate-6 scale-105 -z-10 animate-rotate-slow"></div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-scroll-indicator"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-200/30 to-transparent animate-pulse"></div>
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
        
        @keyframes float-up-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes float-up-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(6deg) scale(1.05); }
          to { transform: rotate(8deg) scale(1.05); }
        }
        
        @keyframes count-up {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-up { animation: float-up 4s ease-in-out infinite; }
        .animate-float-up-delayed { animation: float-up-delayed 5s ease-in-out infinite; }
        .animate-float-up-slow { animation: float-up-slow 7s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-float-card { animation: float-card 4s ease-in-out infinite; }
        .animate-float-card-delayed { animation: float-card-delayed 5s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 10s ease-in-out infinite alternate; }
        .animate-count-up { animation: count-up 0.8s ease-out; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
