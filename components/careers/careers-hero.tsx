"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Target, Award } from "lucide-react"
import Link from "next/link"

export function CareersHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-green-200 shadow-sm mb-8">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Join Our Mission</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            <span className="block">Build Your Career</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              With Purpose
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join our dedicated team working to transform rural communities through sustainable development, 
            innovative agricultural programs, and community empowerment initiatives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#job-listings" passHref legacyBehavior>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <Link href="#application-process" passHref legacyBehavior>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-green-600 text-green-600 hover:bg-green-50 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn How to Apply
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Remote Friendly</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl group-hover:scale-110 transition-all duration-300">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 