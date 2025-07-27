"use client"

import { Heart, Users, Sprout, Gift, Star, Sparkles, ArrowRight, Shield, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export function DonateHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1500"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute top-3/4 left-1/5 animate-bounce delay-3000">
          <Star className="w-5 h-5 text-pink-400 opacity-60 animate-pulse" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-20">
          {/* Enhanced Badge with Animation */}
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full border border-green-200 shadow-xl mb-8 group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-lg font-bold text-gray-800">Transform Lives Today</span>
            <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Enhanced Main Heading with Better Typography */}
          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
            <span className="text-gray-900 block">Your</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
              Generosity
            </span>
            <span className="text-gray-900 block">Changes Everything</span>
          </h1>

          {/* Enhanced Description */}
          <div className="relative">
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12 font-medium">
              Every rupee you donate creates ripples of positive change across rural India. Join thousands of
              compassionate donors in building a sustainable future for farming communities.
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced CTA Buttons with Better Design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="#donation-form" passHref>
              <button className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-6 rounded-3xl text-2xl font-bold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-4">
                  <Heart className="h-7 w-7 group-hover:animate-pulse" />
                  Donate Now
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="w-3 h-3 bg-white rounded-full group-hover:animate-ping"></div>
                </span>
              </button>
            </Link>
            <Link href="/impact" passHref>
              <button className="group bg-white/90 backdrop-blur-sm text-gray-800 px-12 py-6 rounded-3xl text-2xl font-bold border-2 border-green-200 hover:border-green-400 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-4">
                  <Users className="h-7 w-7 text-green-600 group-hover:animate-bounce" />
                  See Impact Stories
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Enhanced Impact Cards with Better Design */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Sprout,
              amount: "₹500",
              impact: "Trains 1 farmer in mushroom cultivation",
              color: "from-green-500 to-emerald-500",
              bgColor: "from-green-50 to-emerald-50",
              delay: "delay-100",
              emoji: "🌱",
            },
            {
              icon: Users,
              amount: "₹2,000",
              impact: "Supports a family for one month",
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-50 to-cyan-50",
              delay: "delay-200",
              emoji: "👥",
            },
            {
              icon: Gift,
              amount: "₹5,000",
              impact: "Provides blankets for 10 families",
              color: "from-purple-500 to-pink-500",
              bgColor: "from-purple-50 to-pink-50",
              delay: "delay-300",
              emoji: "💜",
            },
            {
              icon: Heart,
              amount: "₹10,000",
              impact: "Sets up complete mushroom unit",
              color: "from-orange-500 to-red-500",
              bgColor: "from-orange-50 to-red-50",
              delay: "delay-400",
              emoji: "🏠",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.bgColor} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 border border-white/50 backdrop-blur-sm`}
            >
              {/* Enhanced Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 blur-xl`}
              ></div>

              {/* Popular Badge for middle options */}
              {(index === 1 || index === 2) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl animate-bounce">
                    {index === 1 ? "🔥 POPULAR" : "⭐ BEST VALUE"}
                  </div>
                </div>
              )}

              {/* Enhanced Icon with 3D Effect */}
              <div
                className={`relative w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl group-hover:shadow-3xl`}
                style={{
                  boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)`,
                }}
              >
                <item.icon className="h-10 w-10 text-white group-hover:animate-bounce" />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce group-hover:animate-spin">
                  {item.emoji}
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Content */}
              <div className="text-center relative z-10">
                <div
                  className={`text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    textShadow: `0 2px 4px rgba(0,0,0,0.1)`,
                  }}
                >
                  {item.amount}
                </div>
                <div className="text-gray-700 font-semibold leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-lg">
                  {item.impact}
                </div>
              </div>

              {/* Enhanced Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
              ></div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white/95 backdrop-blur-sm px-10 py-6 rounded-3xl shadow-2xl border border-green-100 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-gray-700">100% Secure</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <span className="text-lg font-semibold text-gray-700">Tax Deductible</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              <span className="text-lg font-semibold text-gray-700">Instant Receipt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 border-2 border-green-600 rounded-full flex justify-center p-2">
          <div className="w-3 h-6 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
