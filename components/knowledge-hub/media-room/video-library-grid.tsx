"use client"

import { useState } from "react"
import { Play, Calendar, Clock, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  },
]

export function VideoLibraryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos")
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  const filteredVideos =
    selectedCategory === "All Videos" ? videos : videos.filter((video) => video.category === selectedCategory)

  const openVideoModal = (video: (typeof videos)[0]) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse Videos</h2>
        <div className="flex flex-wrap gap-2">
          {videoCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative group cursor-pointer" onClick={() => openVideoModal(video)}>
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {video.category}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {video.views}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(video.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm text-gray-300">Click to play: {selectedVideo.title}</p>
                </div>
              </div>
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{selectedVideo.category}</Badge>
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

              <p className="text-gray-600 mb-6">{selectedVideo.description}</p>

              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Video
                </Button>
                <Button variant="outline">Share Video</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
