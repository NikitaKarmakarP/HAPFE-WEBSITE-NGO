import { Camera, Calendar, MapPin } from "lucide-react"

export function PhotoGalleryHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm mb-6">
            <Camera className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Visual Stories</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our visual journey through impactful moments, community transformations, and the faces behind our
            mission. Each photograph tells a story of hope, progress, and positive change.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100">
              <Camera className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Photos</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Years Documented</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
