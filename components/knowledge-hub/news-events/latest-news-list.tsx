import { Calendar, Clock, User, Tag, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const newsArticles = [
  {
    id: 1,
    title: "Local Farmers Achieve 300% Income Increase Through HAPEF's Mushroom Program",
    excerpt:
      "Success stories from rural communities showcase the transformative impact of sustainable mushroom cultivation training and ongoing support.",
    content:
      "In a remarkable demonstration of community empowerment, farmers participating in HAPEF's Mushroom Entrepreneurship Program have reported an average income increase of 300% within their first year...",
    author: "Sarah Johnson",
    date: "2024-01-18",
    readTime: "5 min read",
    category: "Success Stories",
    tags: ["Mushroom Farming", "Income Generation", "Rural Development"],
    featured: true,
    views: 1250,
    likes: 89,
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    title: "HAPEF Expands Climate-Resilient Agriculture Program to Three New Regions",
    excerpt:
      "The organization's innovative approach to sustainable farming practices reaches more communities facing climate challenges.",
    content:
      "Building on the success of pilot programs, HAPEF announces the expansion of its Climate-Resilient Agriculture initiative to three additional regions...",
    author: "Michael Chen",
    date: "2024-01-15",
    readTime: "4 min read",
    category: "Program Updates",
    tags: ["Climate Change", "Agriculture", "Expansion"],
    featured: false,
    views: 892,
    likes: 67,
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    title: "Community Workshop Series Empowers 200 Women Entrepreneurs",
    excerpt:
      "HAPEF's women-focused entrepreneurship workshops create new opportunities for economic independence and leadership development.",
    content:
      "Over the past quarter, HAPEF's specialized workshop series has successfully trained 200 women in various entrepreneurial skills...",
    author: "Priya Sharma",
    date: "2024-01-12",
    readTime: "3 min read",
    category: "Community Impact",
    tags: ["Women Empowerment", "Entrepreneurship", "Training"],
    featured: false,
    views: 743,
    likes: 92,
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 4,
    title: "Technology Integration Boosts Agricultural Productivity by 40%",
    excerpt:
      "Smart farming techniques and digital tools help farmers optimize their crop yields and reduce resource waste.",
    content:
      "HAPEF's technology integration program has demonstrated significant improvements in agricultural productivity across participating communities...",
    author: "David Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Innovation",
    tags: ["Technology", "Smart Farming", "Productivity"],
    featured: false,
    views: 1156,
    likes: 78,
    image: "/placeholder.svg?height=300&width=600",
  },
]

export function LatestNewsList() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Tag className="h-4 w-4 mr-2" />
            Filter by Category
          </Button>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <Card className="overflow-hidden border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {featuredArticle.category}
                </span>
                <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  {featuredArticle.author}
                  <Calendar className="h-4 w-4 ml-4 mr-1" />
                  {new Date(featuredArticle.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.views} views
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {featuredArticle.likes}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button className="bg-orange-600 hover:bg-orange-700">Read Full Article</Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Regular Articles */}
      <div className="space-y-6">
        {regularArticles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-3 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                    <Calendar className="h-4 w-4 ml-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.views} views
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {article.likes}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 hover:bg-orange-100 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Read More
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
