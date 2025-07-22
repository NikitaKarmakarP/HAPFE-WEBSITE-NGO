import { Video } from "lucide-react"

export function VideoLibraryHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Video className="h-12 w-12" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Video Library</h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Watch our impact stories, program documentaries, and community testimonials
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Videos Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5M+</div>
              <div className="text-blue-200">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Program Stories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
