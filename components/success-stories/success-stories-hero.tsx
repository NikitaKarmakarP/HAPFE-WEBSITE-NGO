import { Heart, Users, TrendingUp } from "lucide-react"

export function SuccessStoriesHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stories of Transformation
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Behind every statistic is a human story of courage, determination, and hope. 
            Discover how HAPEF's programs have transformed lives across rural India.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Lives Transformed</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
              <div className="text-gray-600 font-medium">Villages Impacted</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-gray-600 font-medium">Average Income Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 