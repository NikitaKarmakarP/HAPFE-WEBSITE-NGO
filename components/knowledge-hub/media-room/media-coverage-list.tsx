"use client"

import { useState } from "react"
import { Calendar, ExternalLink, Newspaper, Tv, Radio, Globe, Search, Filter, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const mediaTypes = [
  { id: "all", label: "All Media", icon: Globe },
  { id: "print", label: "Print Media", icon: Newspaper },
  { id: "tv", label: "Television", icon: Tv },
  { id: "radio", label: "Radio", icon: Radio },
  { id: "online", label: "Online Media", icon: Globe },
]

const mediaCoverage = [
  {
    id: 1,
    title: "HAPEF's Mushroom Cultivation Program Transforms Rural Livelihoods",
    publication: "The Telegraph",
    type: "print",
    date: "2024-01-20",
    summary:
      "Feature story highlighting how HAPEF's mushroom cultivation training has helped over 500 women become successful entrepreneurs in rural West Bengal.",
    url: "https://example.com/telegraph-article",
    image: "/placeholder.svg?height=150&width=200&text=Telegraph+Article",
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Climate-Smart Agriculture: HAPEF's Innovative Approach",
    publication: "DD News",
    type: "tv",
    date: "2024-01-18",
    summary:
      "Television documentary showcasing HAPEF's climate-resilient agriculture program and its impact on farmer communities.",
    url: "https://example.com/dd-news-video",
    image: "/placeholder.svg?height=150&width=200&text=DD+News+Feature",
    featured: true,
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Empowering Women Through Self-Help Groups",
    publication: "All India Radio",
    type: "radio",
    date: "2024-01-15",
    summary:
      "Radio interview with HAPEF's Executive Director discussing women's empowerment initiatives and their community impact.",
    url: "https://example.com/air-interview",
    image: "/placeholder.svg?height=150&width=200&text=AIR+Interview",
    featured: false,
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Rural Development Success: HAPEF's Convergence Model",
    publication: "The Hindu",
    type: "print",
    date: "2024-01-12",
    summary:
      "In-depth analysis of HAPEF's convergence approach to rural development and its effectiveness in creating sustainable change.",
    url: "https://example.com/hindu-article",
    image: "/placeholder.svg?height=150&width=200&text=Hindu+Article",
    featured: true,
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Digital Innovation in Rural Healthcare",
    publication: "News18 Bengal",
    type: "online",
    date: "2024-01-10",
    summary: "Online feature about HAPEF's use of technology to improve healthcare access in remote villages.",
    url: "https://example.com/news18-article",
    image: "/placeholder.svg?height=150&width=200&text=News18+Article",
    featured: false,
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Sustainable Development Goals in Action",
    publication: "Zee 24 Ghanta",
    type: "tv",
    date: "2024-01-08",
    summary:
      "Television report on how HAPEF's programs align with and contribute to achieving the UN Sustainable Development Goals.",
    url: "https://example.com/zee-report",
    image: "/placeholder.svg?height=150&width=200&text=Zee+Report",
    featured: false,
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Community-Led Water Conservation Initiatives",
    publication: "Anandabazar Patrika",
    type: "print",
    date: "2024-01-05",
    summary: "Feature story on HAPEF's water conservation projects and their impact on drought-prone areas.",
    url: "https://example.com/abp-article",
    image: "/placeholder.svg?height=150&width=200&text=ABP+Article",
    featured: false,
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Education for All: HAPEF's Learning Centers",
    publication: "Akashvani Kolkata",
    type: "radio",
    date: "2024-01-03",
    summary:
      "Radio program featuring success stories from HAPEF's community learning centers and adult literacy programs.",
    url: "https://example.com/akashvani-program",
    image: "/placeholder.svg?height=150&width=200&text=Akashvani+Program",
    featured: false,
    readTime: "4 min read",
  },
  {
    id: 9,
    title: "NGO Innovation Awards: HAPEF Recognized",
    publication: "Times of India",
    type: "online",
    date: "2023-12-28",
    summary:
      "Coverage of HAPEF receiving recognition for innovative approaches to rural development and community empowerment.",
    url: "https://example.com/toi-award",
    image: "/placeholder.svg?height=150&width=200&text=TOI+Award",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 10,
    title: "Youth Leadership in Rural Development",
    publication: "Star Jalsha",
    type: "tv",
    date: "2023-12-25",
    summary:
      "Television interview with young leaders from HAPEF's internship program discussing their contributions to rural development.",
    url: "https://example.com/star-jalsha",
    image: "/placeholder.svg?height=150&width=200&text=Star+Jalsha",
    featured: false,
    readTime: "5 min read",
  },
]

export function MediaCoverageList() {
  const [selectedType, setSelectedType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")

  const getTypeColor = (type: string) => {
    switch (type) {
      case "print":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "tv":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "radio":
        return "bg-green-100 text-green-800 border-green-200"
      case "online":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredCoverage = mediaCoverage
    .filter((item) => {
      const matchesType = selectedType === "all" || item.type === selectedType
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.publication.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesType && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === "featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
      return 0
    })

  const getTypeIcon = (type: string) => {
    const mediaType = mediaTypes.find((mt) => mt.id === type)
    return mediaType ? mediaType.icon : Globe
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Filter and Search */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search media coverage by title, publication, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1"
            >
              <option value="date">Date</option>
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {mediaTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 ${
                  selectedType === type.id ? "bg-indigo-600 hover:bg-indigo-700" : "border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {type.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredCoverage.length} of {mediaCoverage.length} articles
        </p>
        <Badge variant="outline" className="text-indigo-600 border-indigo-200">
          {filteredCoverage.filter(item => item.featured).length} Featured
        </Badge>
      </div>

      {/* Enhanced Media Coverage List */}
      <div className="space-y-6">
        {filteredCoverage.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          return (
            <Card 
              key={item.id} 
              className={`group hover:shadow-xl transition-all duration-300 ${
                item.featured ? "ring-2 ring-indigo-200 bg-gradient-to-r from-indigo-50 to-white" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.featured && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-indigo-600 text-white text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2">
                        <Badge className={`${getTypeColor(item.type)} text-xs`}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {item.publication}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {item.readTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{item.summary}</p>

                    <div className="flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(item.url, "_blank")}
                        className="flex items-center gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Full Coverage
                      </Button>

                      <div className="text-sm text-gray-500 capitalize">{item.type} Media</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredCoverage.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No media coverage found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters.</p>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button 
          variant="outline" 
          size="lg"
          className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8"
        >
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
