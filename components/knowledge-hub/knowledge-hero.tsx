import { BookOpen, Users, Download, Video } from "lucide-react"

export function KnowledgeHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm mb-6">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Knowledge Hub</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Learn, Share, and
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Grow Together
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive resources, training materials, best practices, and success stories from HAPEF's
            programs. Empower yourself with knowledge for sustainable rural development.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Articles & Guides</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100 text-center">
            <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-sm text-gray-600">Training Videos</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 text-center">
            <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Downloadable Resources</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100 text-center">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  )
}
