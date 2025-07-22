import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Download, Eye } from "lucide-react"

export function KnowledgeGrid() {
  const resources = [
    {
      type: "Guide",
      title: "Complete Mushroom Cultivation Manual",
      description: "Step-by-step guide for setting up and managing oyster mushroom cultivation units",
      author: "Dr. Sunita Devi",
      date: "March 2024",
      category: "Agriculture",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 245,
      views: 1200,
    },
    {
      type: "Video",
      title: "Community Engagement Best Practices",
      description: "Learn effective strategies for engaging rural communities in development programs",
      author: "Amit Ghosh",
      date: "February 2024",
      category: "Community Development",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 0,
      views: 850,
    },
    {
      type: "Case Study",
      title: "Success Story: Priya's Mushroom Enterprise",
      description: "How one woman transformed her family's livelihood through mushroom farming",
      author: "HAPEF Team",
      date: "January 2024",
      category: "Success Stories",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 156,
      views: 2100,
    },
    {
      type: "Template",
      title: "Program Application Forms",
      description: "Standard application forms for all HAPEF programs with guidelines",
      author: "Priya Sharma",
      date: "December 2023",
      category: "Downloads",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 89,
      views: 450,
    },
    {
      type: "Report",
      title: "Climate-Resilient Agriculture Impact Report 2023",
      description: "Comprehensive analysis of our climate adaptation program outcomes",
      author: "Dr. Rajesh Kumar",
      date: "November 2023",
      category: "Reports",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 312,
      views: 980,
    },
    {
      type: "Training",
      title: "Financial Literacy for Rural Entrepreneurs",
      description: "Essential financial management skills for small-scale rural businesses",
      author: "HAPEF Team",
      date: "October 2023",
      category: "Training",
      image: "/placeholder.svg?height=200&width=300",
      downloads: 178,
      views: 750,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our newest guides, training materials, and success stories from the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {resource.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-blue-600 font-medium">{resource.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{resource.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{resource.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{resource.views}</span>
                    </div>
                    {resource.downloads > 0 && (
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        <span>{resource.downloads}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                  {resource.type === "Video" ? "Watch Now" : "Read More"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
          >
            View All Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
