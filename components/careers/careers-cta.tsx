"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, MapPin, Heart, Users, Award, Globe } from "lucide-react"
import Link from "next/link"

export function CareersCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Join Our Mission
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join our dedicated team and help us transform rural communities through sustainable development, 
            innovative programs, and community empowerment initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Why Join Us */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-6 w-6 text-green-300" />
                <CardTitle className="text-white">Purpose-Driven Work</CardTitle>
              </div>
              <CardDescription className="text-green-100">
                Every day, you'll contribute to meaningful change in rural communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-green-100">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Direct impact on community development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Work with passionate professionals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Continuous learning opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Growth Opportunities */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-green-300" />
                <CardTitle className="text-white">Growth & Development</CardTitle>
              </div>
              <CardDescription className="text-green-100">
                Advance your career while making a positive impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-green-100">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Professional development programs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Mentorship and training opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Career advancement pathways
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Work Environment */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-green-300" />
                <CardTitle className="text-white">Supportive Environment</CardTitle>
              </div>
              <CardDescription className="text-green-100">
                Work in a collaborative and inclusive team culture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-green-100">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Flexible work arrangements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Health and wellness benefits
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  Inclusive and diverse workplace
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#job-listings" passHref legacyBehavior>
              <Button
                size="lg"
                className="group bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                className="group border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Start Application
              </Button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6">Have Questions?</h3>
            <p className="text-green-100 mb-8">
              Our HR team is here to help. Reach out to us for any questions about our positions, 
              application process, or working at HAPEF.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Mail className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-green-100">careers@hapef.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Phone className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-green-100">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin className="h-5 w-5 text-green-300" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-sm text-green-100">Kolkata, West Bengal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-green-300" />
              <span className="text-green-100 font-medium">Follow us for updates</span>
            </div>
            <p className="text-sm text-green-200">
              Stay connected with us on social media to get the latest updates about new positions, 
              team events, and our impact in rural communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 