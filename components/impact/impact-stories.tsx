import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ImpactStories() {
  const stories = [
    {
      name: "Priya Devi",
      location: "Pakur District, Jharkhand",
      program: "Mushroom Entrepreneurship",
      story:
        "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹18,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "300% income increase",
      rating: 5,
      beforeIncome: "₹3,000",
      afterIncome: "₹18,000",
    },
    {
      name: "Ram Kumar",
      location: "Hiranpur Block, Jharkhand",
      program: "Climate-Resilient Agriculture",
      story:
        "Climate change was destroying our traditional farming methods. HAPEF taught us drought-resistant techniques and crop diversification. Our village now has food security year-round, and we've reduced water usage by 40% while increasing yields by 60%. The entire community has benefited from these sustainable practices.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "60% yield increase",
      rating: 5,
      beforeIncome: "₹25,000",
      afterIncome: "₹45,000",
    },
    {
      name: "Sunita Kumari",
      location: "Pakur District, Jharkhand",
      program: "Community Leadership",
      story:
        "I was just a housewife with no voice in community decisions. Through HAPEF's leadership program, I learned to speak up, organize, and lead. Today, I'm the village head and have initiated several development projects. I've helped establish a women's self-help group that now has 50 members and manages a fund of ₹2 lakhs.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Community leader",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹12,000",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every statistic is a human story of courage, determination, and transformation. Meet some of the
            incredible people whose lives have been changed through HAPEF's programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{story.story}"</p>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.location}</p>
                    <p className="text-sm text-green-600 font-medium">{story.program}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Monthly Income</span>
                    <span className="text-sm font-medium text-green-600">{story.impact}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Before</div>
                      <div className="font-bold text-gray-900">{story.beforeIncome}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-green-600" />
                    <div className="text-center">
                      <div className="text-sm text-gray-500">After</div>
                      <div className="font-bold text-green-600">{story.afterIncome}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
          >
            View All Success Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
