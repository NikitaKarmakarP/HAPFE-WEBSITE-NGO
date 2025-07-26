import { FileText, Download, Calendar, TrendingUp } from "lucide-react"

export function AnnualReportsHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 shadow-sm mb-8">
            <FileText className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">Resources & Guides</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Annual Reports</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              2023-24, 2024-25
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive annual reports documenting our impact, achievements, and financial transparency. 
            Discover how HAPEF has transformed rural communities through sustainable development initiatives.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl">
                  <FileText className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-600 font-medium">Annual Reports</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Downloads</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 