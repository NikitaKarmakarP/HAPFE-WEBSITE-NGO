"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Sprout, Heart, Award, Sparkles, Star, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function FeaturedWork() {
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

    const element = document.getElementById("featured-work")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-work" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="animate-pulse-slow" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float-gentle">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-40 animate-spin-slow" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-gentle-delayed">
          <Star className="w-5 h-5 text-pink-400 opacity-40 animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce-gentle">
          <div className="w-4 h-4 bg-green-400 rounded-full opacity-40 animate-ping"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6 animate-shimmer">
            <Award className="h-4 w-4 text-green-600 animate-pulse" />
            <span className="text-sm font-semibold text-green-800">Featured Initiatives</span>
            <Zap className="h-4 w-4 text-yellow-500 animate-bounce" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Lives Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
              Innovative Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how HAPEF is creating sustainable change in rural communities through our flagship programs that
            combine traditional wisdom with modern innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Program */}
          <Card
            className={`group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-green-50 to-emerald-50 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"}`}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Mushroom Entrepreneurship Program"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full animate-bounce-gentle">
                <span className="text-xs font-bold text-green-600">🏆 FLAGSHIP</span>
              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout className="h-5 w-5 animate-pulse" />
                  <span className="text-sm font-medium">Flagship Program</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:animate-pulse">Mushroom Entrepreneurship</h3>
                <p className="text-sm opacity-90">Empowering 200+ families through sustainable farming</p>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive mushroom cultivation program provides training, resources, and ongoing support to help
                rural families, particularly women, establish profitable mushroom farming enterprises.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center group-hover:scale-110 transition-transform duration-300">
                    <div className="font-bold text-2xl text-green-600 animate-count-up">200+</div>
                    <div className="text-xs text-gray-600">Families Trained</div>
                  </div>
                  <div className="text-center group-hover:scale-110 transition-transform duration-300">
                    <div className="font-bold text-2xl text-green-600 animate-count-up">300%</div>
                    <div className="text-xs text-gray-600">Income Increase</div>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 group/btn transform hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Programs */}
          <div className="space-y-8">
            {[
              {
                icon: Heart,
                title: "Christmas Blanket Distribution",
                description:
                  "Annual winter relief program providing warm blankets to vulnerable families across rural communities.",
                stats: ["1000+ Blankets", "50+ Villages"],
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                delay: "delay-200",
              },
              {
                icon: Sprout,
                title: "Climate-Resilient Agriculture",
                description:
                  "Building sustainable farming practices that adapt to climate change while improving crop yields.",
                stats: ["100+ Farmers", "25+ Techniques"],
                color: "emerald",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
                delay: "delay-400",
              },
              {
                icon: Users,
                title: "Convergence Initiatives",
                description:
                  "Collaborative programs bringing together communities, government, and organizations for maximum impact.",
                stats: ["15+ Partners", "Multi-sector"],
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                delay: "delay-600",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${program.bgGradient} transform hover:scale-105 hover:-translate-y-1 ${isVisible ? `animate-slide-in-right ${program.delay}` : "opacity-0 translate-x-10"}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 bg-gradient-to-br ${program.gradient} rounded-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative`}
                    >
                      <program.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        {program.stats.map((stat, idx) => (
                          <span
                            key={idx}
                            className={`font-semibold text-${program.color}-600 bg-${program.color}-100 px-3 py-1 rounded-full group-hover:scale-105 transition-transform duration-300`}
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg bg-transparent transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>

      {/* Custom CSS for Additional Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
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
        
        @keyframes count-up {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-gentle-delayed { animation: float-gentle-delayed 5s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-count-up { animation: count-up 0.8s ease-out; }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  )
}
