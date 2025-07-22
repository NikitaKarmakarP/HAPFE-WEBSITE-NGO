import { Newspaper, Tv, Radio, Globe } from "lucide-react"

export function MediaCoverageHero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Newspaper className="h-12 w-12" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Coverage</h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            Discover how HAPEF's work is making headlines across various media platforms
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Newspaper className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-purple-200">Print Articles</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Tv className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">25+</div>
              <div className="text-purple-200">TV Features</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Radio className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-purple-200">Radio Interviews</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-purple-200">Online Articles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
