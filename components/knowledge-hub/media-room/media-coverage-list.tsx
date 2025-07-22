"use client"

import { useState } from "react"
import { Calendar, ExternalLink, Newspaper, Tv, Radio, Globe, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

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
  },
]

export function MediaCoverageList() {
  const [selectedType, setSelectedType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCoverage = mediaCoverage.filter((item) => {
    const matchesType = selectedType === "all" || item.type === selectedType
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.publication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    const mediaType = mediaTypes.find((mt) => mt.id === type)
    return mediaType ? mediaType.icon : Globe
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "print":
        return "bg-blue-100 text-blue-800"
      case "tv":
        return "bg-purple-100 text-purple-800"
      case "radio":
        return "bg-green-100 text-green-800"
      case "online":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Coverage</h2>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search media coverage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Media Type Filter */}
        <div className="flex flex-wrap gap-2">
          {mediaTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 ${
                  selectedType === type.id ? "bg-green-600 hover:bg-green-700" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                {type.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Media Coverage List */}
      <div className="space-y-6">
        {filteredCoverage.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-48 flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge className={`mb-2 ${getTypeColor(item.type)}`}>
                        <TypeIcon className="h-3 w-3 mr-1" />
                        {item.publication}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(item.url, "_blank")}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read Full Coverage
                    </Button>

                    <div className="text-sm text-gray-500 capitalize">{item.type} Media</div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  )
}
