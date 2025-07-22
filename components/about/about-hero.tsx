import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Heart } from "lucide-react"

export function AboutHero() {
  return (
    <section
      id="overview"
      className="relative py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm mb-6">
              <Heart className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">About HAPEF</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Rural Communities
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              HAPEF (Humanitarian Action for Poverty Eradication Foundation) is dedicated to creating sustainable
              pathways out of poverty for rural communities across India through innovative agricultural programs,
              community empowerment, and holistic development approaches.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-green-600 mb-1">2022</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Families Impacted</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Villages Reached</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
              >
                Our Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
              >
                View Impact
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500&text=HAPEF+Team+with+Community"
                alt="HAPEF team working with rural community members"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-green-100 z-20">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-bold text-gray-900">Community Driven</div>
                  <div className="text-sm text-gray-600">Grassroots Approach</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-blue-100 z-20">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-bold text-gray-900">Sustainable Impact</div>
                  <div className="text-sm text-gray-600">Long-term Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To eradicate rural poverty through sustainable agricultural practices, community empowerment, and
              innovative development programs that respect local knowledge while introducing modern techniques for
              lasting positive change.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
                <p className="text-gray-600">Putting communities at the center of all our development initiatives</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Solutions</h3>
                <p className="text-gray-600">Creating long-term impact through environmentally conscious practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Approach</h3>
                <p className="text-gray-600">Addressing economic, social, and environmental aspects of development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
