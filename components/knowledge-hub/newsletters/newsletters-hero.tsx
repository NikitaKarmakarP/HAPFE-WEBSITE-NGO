import { Mail, Users, Calendar, TrendingUp } from "lucide-react"

export function NewslettersHero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="mb-4">
            <span className="text-purple-200 text-sm">Knowledge Hub / News & Events / Newsletters</span>
          </nav>
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Mail className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">HAPEF Newsletters</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our monthly newsletters featuring program updates, success stories, upcoming events, and
            community highlights from across our rural development initiatives.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Calendar className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">48</div>
              <div className="text-purple-200 text-sm">Issues Published</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">2,500+</div>
              <div className="text-purple-200 text-sm">Subscribers</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-purple-200 text-sm">Years Publishing</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Mail className="h-6 w-6 text-white mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-purple-200 text-sm">Open Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
