"use client"

import { useState } from "react"
import { Play, Calendar, Clock, Eye, Download, Filter, Search, Heart, Share2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const videoCategories = [
  "All Videos",
  "Program Stories",
  "Community Impact",
  "Training Sessions",
  "Events & Celebrations",
  "Leadership Talks",
  "Documentaries",
]

const videos = [
  {
    id: 1,
    title: "Mushroom Cultivation Success Story",
    description:
      "Follow Priya's journey from unemployment to successful mushroom entrepreneur through HAPEF's training program.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Mushroom+Success+Story",
    duration: "8:45",
    views: "12.5K",
    date: "2024-01-15",
    category: "Program Stories",
    videoUrl: "https://example.com/video1.mp4",
    featured: true,
  },
  {
    id: 2,
    title: "Climate-Resilient Agriculture Workshop",
    description:
      "Comprehensive training session on drought-resistant farming techniques and water conservation methods.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Agriculture+Workshop",
    duration: "25:30",
    views: "8.2K",
    date: "2024-01-10",
    category: "Training Sessions",
    videoUrl: "https://example.com/video2.mp4",
    featured: false,
  },
  {
    id: 3,
    title: "Women's Self-Help Group Impact",
    description:
      "Documentary showcasing how women's groups are transforming rural communities through collective action.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Women+Empowerment",
    duration: "15:20",
    views: "18.7K",
    date: "2024-01-05",
    category: "Community Impact",
    videoUrl: "https://example.com/video3.mp4",
    featured: true,
  },
  {
    id: 4,
    title: "Annual Community Celebration 2023",
    description: "Highlights from our annual celebration featuring cultural performances and community achievements.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Community+Celebration",
    duration: "12:15",
    views: "22.1K",
    date: "2023-12-20",
    category: "Events & Celebrations",
    videoUrl: "https://example.com/video4.mp4",
    featured: true,
  },
  {
    id: 5,
    title: "Leadership Team Vision 2024",
    description: "Our leadership team shares the vision and strategic goals for HAPEF's future initiatives.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Leadership+Vision",
    duration: "18:45",
    views: "9.8K",
    date: "2023-12-15",
    category: "Leadership Talks",
    videoUrl: "https://example.com/video5.mp4",
    featured: false,
  },
  {
    id: 6,
    title: "Rural Healthcare Initiative",
    description: "Documentary on our mobile healthcare program bringing medical services to remote villages.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Healthcare+Initiative",
    duration: "22:30",
    views: "15.3K",
    date: "2023-12-10",
    category: "Documentaries",
    videoUrl: "https://example.com/video6.mp4",
    featured: false,
  },
  {
    id: 7,
    title: "Organic Farming Training Program",
    description: "Step-by-step guide to organic farming techniques taught by our agricultural experts.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Organic+Farming",
    duration: "28:15",
    views: "11.4K",
    date: "2023-12-05",
    category: "Training Sessions",
    videoUrl: "https://example.com/video7.mp4",
    featured: false,
  },
  {
    id: 8,
    title: "Children's Education Program Impact",
    description: "Stories of transformation through our education initiatives in rural communities.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Education+Impact",
    duration: "16:40",
    views: "19.6K",
    date: "2023-11-30",
    category: "Program Stories",
    videoUrl: "https://example.com/video8.mp4",
    featured: true,
  },
  {
    id: 9,
    title: "Water Conservation Project",
    description: "Community-led water conservation efforts and rainwater harvesting techniques.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Water+Conservation",
    duration: "14:25",
    views: "13.7K",
    date: "2023-11-25",
    category: "Community Impact",
    videoUrl: "https://example.com/video9.mp4",
    featured: false,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Program Stories":
      return "bg-green-100 text-green-800 border-green-200"
    case "Community Impact":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Training Sessions":
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "Events & Celebrations":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "Leadership Talks":
      return "bg-indigo-100 text-indigo-800 border-indigo-200"
    case "Documentaries":
      return "bg-pink-100 text-pink-800 border-pink-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export function VideoLibraryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos")
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")

  const filteredVideos = videos
    .filter((video) => {
      const matchesCategory = selectedCategory === "All Videos" || video.category === selectedCategory
      const matchesSearch = 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === "featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
      if (sortBy === "views") {
        return parseInt(b.views.replace(/[^\d]/g, '')) - parseInt(a.views.replace(/[^\d]/g, ''))
      }
      return 0
    })

  const openVideoModal = (video: (typeof videos)[0]) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
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
                placeholder="Search videos by title or description..."
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
              <option value="views">Views</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {videoCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : "border-blue-200 text-blue-700 hover:bg-blue-50"}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredVideos.length} of {videos.length} videos
        </p>
        <Badge variant="outline" className="text-blue-600 border-blue-200">
          {filteredVideos.filter(v => v.featured).length} Featured
        </Badge>
      </div>

      {/* Enhanced Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <Card 
            key={video.id} 
            className={`group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
              video.featured ? "ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white" : ""
            }`}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail || "/placeholder.svg"} 
                  alt={video.title} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => openVideoModal(video)}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={`${getCategoryColor(video.category)} text-xs`}>
                    {video.category}
                  </Badge>
                  {video.featured && (
                    <Badge className="bg-blue-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-3 right-3">
                  <Heart className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {video.duration}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(video.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button 
          variant="outline" 
          size="lg"
          className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8"
        >
          Load More Videos
        </Button>
      </div>

      {/* Enhanced Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="p-6 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                    <Play className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
                  <p className="text-blue-100">Click to play video</p>
                </div>
              </div>
              <Button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                variant="ghost"
                size="sm"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Badge className={`${getCategoryColor(selectedVideo.category)}`}>
                    {selectedVideo.category}
                  </Badge>
                  {selectedVideo.featured && (
                    <Badge className="bg-blue-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {selectedVideo.views} views
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedVideo.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedVideo.title}</h2>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedVideo.description}</p>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Video
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
