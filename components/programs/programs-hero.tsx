import { Sprout, Users, Heart, Handshake } from "lucide-react"

export function ProgramsHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm mb-6">
            <Sprout className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">Our Programs</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Lives Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Sustainable Programs
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HAPEF's comprehensive programs address multiple aspects of rural development, from sustainable agriculture
            to community welfare, creating lasting positive change in rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 text-center">
            <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
            <div className="text-sm text-gray-600">Active Programs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Beneficiaries</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 text-center">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Villages Covered</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100 text-center">
            <Handshake className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Partner Organizations</div>
          </div>
        </div>
      </div>
    </section>
  )
}
