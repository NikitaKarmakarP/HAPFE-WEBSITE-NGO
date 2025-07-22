import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function ProgramTestimonials() {
  const testimonials = [
    {
      name: "Priya Devi",
      location: "Pakur District, Jharkhand",
      quote:
        "HAPEF's mushroom program changed my life completely. I now earn ₹18,000 monthly and have become financially independent. My children can now go to better schools.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      impact: "300% income increase",
    },
    {
      name: "Sunita Kumari",
      location: "Hiranpur Block, Jharkhand",
      quote:
        "The training was excellent and the ongoing support helped me overcome initial challenges. Now I'm training other women in my village to start their own mushroom farms.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      impact: "Community leader",
    },
    {
      name: "Ravi Kumar",
      location: "Pakur District, Jharkhand",
      quote:
        "What I love most is that mushroom farming doesn't require much land or water. It's perfect for small farmers like us. The market demand is always high.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      impact: "Sustainable farming",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the entrepreneurs who have transformed their lives through our mushroom cultivation program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {testimonial.impact}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
