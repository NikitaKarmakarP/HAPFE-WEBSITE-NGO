import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Users, BookOpen, Video, Download, MessageCircle } from "lucide-react"

export function KnowledgeCategories() {
  const categories = [
    {
      icon: Sprout,
      title: "Agriculture & Farming",
      description: "Sustainable farming techniques, mushroom cultivation guides, and climate-resilient practices",
      count: "25 Resources",
      color: "green",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Community engagement strategies, leadership development, and social impact methodologies",
      count: "18 Resources",
      color: "blue",
    },
    {
      icon: BookOpen,
      title: "Training Materials",
      description: "Comprehensive training modules, workshop guides, and educational content for programs",
      count: "30 Resources",
      color: "purple",
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Training videos, success stories, and documentary content from our field work",
      count: "25 Videos",
      color: "red",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Forms, templates, reports, and other downloadable resources for program implementation",
      count: "15 Files",
      color: "orange",
    },
    {
      icon: MessageCircle,
      title: "Success Stories",
      description: "Real stories from beneficiaries, case studies, and impact documentation",
      count: "20 Stories",
      color: "teal",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of resources organized by category to help you find exactly what you
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className={`text-sm font-medium text-${category.color}-600`}>{category.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
