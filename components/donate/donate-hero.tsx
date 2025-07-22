"use client"

import { Heart, Users, Sprout, Gift, Star, Sparkles } from "lucide-react"

export function DonateHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float delay-1000">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float delay-2000">
          <div className="w-5 h-5 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float delay-1500">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-20">
          {/* Badge with Animation */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-green-200 shadow-lg mb-8 animate-fade-in-up">
            <div className="relative">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Transform Lives Today</span>
            <Star className="h-4 w-4 text-yellow-500" />
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in-up delay-200">
            <span className="text-gray-900">Your</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
              Generosity
            </span>
            <span className="block text-gray-900">Changes Everything</span>
          </h1>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-400">
            Every rupee you donate creates ripples of positive change across rural India. Join thousands of
            compassionate donors in building a sustainable future for farming communities.
          </p>

          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-600">
            <button className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                <Heart className="h-6 w-6 group-hover:animate-pulse" />
                Donate Now
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </span>
            </button>
            <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-10 py-5 rounded-2xl text-xl font-semibold border-2 border-green-200 hover:border-green-400 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                <Users className="h-6 w-6 text-green-600 group-hover:animate-bounce" />
                See Impact Stories
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Impact Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Sprout,
              amount: "₹500",
              impact: "Trains 1 farmer in mushroom cultivation",
              color: "from-green-500 to-emerald-500",
              bgColor: "from-green-50 to-emerald-50",
              delay: "delay-100",
            },
            {
              icon: Users,
              amount: "₹2,000",
              impact: "Supports a family for one month",
              color: "from-blue-500 to-cyan-500",
              bgColor: "from-blue-50 to-cyan-50",
              delay: "delay-200",
            },
            {
              icon: Gift,
              amount: "₹5,000",
              impact: "Provides blankets for 10 families",
              color: "from-purple-500 to-pink-500",
              bgColor: "from-purple-50 to-pink-50",
              delay: "delay-300",
            },
            {
              icon: Heart,
              amount: "₹10,000",
              impact: "Sets up complete mushroom unit",
              color: "from-orange-500 to-red-500",
              bgColor: "from-orange-50 to-red-50",
              delay: "delay-400",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up ${item.delay} border border-white/50 backdrop-blur-sm`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Icon with Animation */}
              <div
                className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                <item.icon className="h-8 w-8 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.amount}
                </div>
                <div className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item.impact}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center animate-fade-in-up delay-800">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              <span className="text-sm font-medium text-gray-700">Tax Deductible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              <span className="text-sm font-medium text-gray-700">Instant Receipt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-green-600 rounded-full flex justify-center p-2">
          <div className="w-2 h-4 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  )
}
