import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sprout, Users, Target } from "lucide-react"

/**
 * The “Our Story” section for the About page.
 * Exposes an `id` for in-page links (#our-story) and
 * highlights HAPEF’s founding journey and core values.
 */
export function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                HAPEF was born from a simple yet powerful vision: to create sustainable pathways out of poverty for
                rural communities across India. Founded in 2022 by a group of passionate social workers and agricultural
                experts, our organization emerged from the recognition that traditional charity models, while
                well-intentioned, often failed to create lasting change.
              </p>
              <p>
                Our founders spent years working directly with rural communities, learning about their challenges,
                strengths, and aspirations. This grassroots experience shaped our core philosophy: true development must
                be community-driven, sustainable, and respectful of local knowledge and traditions.
              </p>
              <p>
                Starting with a small pilot program in mushroom cultivation in 2022, we quickly realized the
                transformative power of combining traditional agricultural wisdom with modern techniques. In just two
                years, what began as a single-village initiative has grown into a comprehensive development program
                reaching over 50 villages across multiple states.
              </p>
              <p>
                Despite being established just two years ago, HAPEF has achieved remarkable growth and impact. Our rapid
                expansion demonstrates the urgent need for our services and the effectiveness of our community-centered
                approach. In these two years, we've built strong foundations that will support decades of sustainable
                development work.
              </p>
            </div>
          </div>

          {/* Founders image + callout */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="HAPEF founders with community members"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                <div>
                  <div className="font-bold text-gray-900">Community First</div>
                  <div className="text-sm text-gray-600">Our founding principle</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Agriculture</h3>
              <p className="text-gray-600 text-sm">
                Promoting eco-friendly farming practices that protect the environment while improving yields.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Empowerment</h3>
              <p className="text-gray-600 text-sm">
                Building local capacity and leadership to ensure programs continue beyond our direct involvement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Targeted Impact</h3>
              <p className="text-gray-600 text-sm">
                Focusing our efforts where they can make the most difference for vulnerable populations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Holistic Approach</h3>
              <p className="text-gray-600 text-sm">
                Addressing multiple aspects of rural development from economic to social and environmental.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

/* ——————————————————————————————————————————
   Exports
   —————————————————————————————————————————— */
export default OurStory // optional default export
