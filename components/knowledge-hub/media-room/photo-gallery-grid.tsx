"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Eye, Download, X, Filter, Search, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Photo {
  id: string
  title: string
  description: string
  image: string
  category: string
  date: string
  location: string
  photographer?: string
  tags: string[]
  featured?: boolean
}

export function PhotoGalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")

  const categories = [
    "All",
    "Programs",
    "Community Events",
    "Training Sessions",
    "Infrastructure",
    "Leadership",
    "Celebrations",
  ]

  const photos: Photo[] = [
    {
      id: "1",
      title: "Mushroom Cultivation Training",
      description: "Farmers learning modern mushroom cultivation techniques in our training facility.",
      image: "/placeholder.svg?height=400&width=600&text=Mushroom+Training",
      category: "Programs",
      date: "2024-01-15",
      location: "Birbhum District",
      photographer: "HAPEF Team",
      tags: ["agriculture", "training", "mushroom", "farmers"],
      featured: true,
    },
    {
      id: "2",
      title: "Community Health Camp",
      description: "Free health checkup camp organized for rural communities with medical professionals.",
      image: "/placeholder.svg?height=400&width=600&text=Health+Camp",
      category: "Community Events",
      date: "2024-01-20",
      location: "Purulia Village",
      photographer: "Dr. Sharma",
      tags: ["health", "community", "medical", "rural"],
      featured: true,
    },
    {
      id: "3",
      title: "Women's Self-Help Group Meeting",
      description: "Monthly meeting of women's self-help group discussing microfinance and business opportunities.",
      image: "/placeholder.svg?height=400&width=600&text=SHG+Meeting",
      category: "Programs",
      date: "2024-01-25",
      location: "Bankura District",
      photographer: "Sunita Devi",
      tags: ["women", "empowerment", "microfinance", "business"],
      featured: false,
    },
    {
      id: "4",
      title: "Climate-Smart Agriculture Workshop",
      description: "Farmers participating in hands-on training for drought-resistant farming techniques.",
      image: "/placeholder.svg?height=400&width=600&text=Climate+Agriculture",
      category: "Training Sessions",
      date: "2024-02-01",
      location: "Hooghly District",
      photographer: "HAPEF Team",
      tags: ["climate", "agriculture", "workshop", "sustainability"],
      featured: false,
    },
    {
      id: "5",
      title: "New Water Pump Installation",
      description: "Installation of solar-powered water pump system for irrigation in drought-affected area.",
      image: "/placeholder.svg?height=400&width=600&text=Water+Pump",
      category: "Infrastructure",
      date: "2024-02-05",
      location: "Murshidabad District",
      photographer: "Engineering Team",
      tags: ["infrastructure", "water", "solar", "irrigation"],
      featured: true,
    },
    {
      id: "6",
      title: "Leadership Team Meeting",
      description: "Quarterly leadership team meeting discussing program strategies and community feedback.",
      image: "/placeholder.svg?height=400&width=600&text=Leadership+Meeting",
      category: "Leadership",
      date: "2024-02-10",
      location: "HAPEF Office, Kolkata",
      photographer: "Admin Team",
      tags: ["leadership", "strategy", "meeting", "planning"],
      featured: false,
    },
    {
      id: "7",
      title: "Children's Education Program",
      description: "Children participating in our after-school education and skill development program.",
      image: "/placeholder.svg?height=400&width=600&text=Education+Program",
      category: "Programs",
      date: "2024-02-15",
      location: "Nadia District",
      photographer: "Teacher Priya",
      tags: ["education", "children", "skills", "development"],
      featured: false,
    },
    {
      id: "8",
      title: "Annual Celebration Event",
      description: "Community celebration marking the 5th anniversary of HAPEF with cultural performances.",
      image: "/placeholder.svg?height=400&width=600&text=Anniversary+Celebration",
      category: "Celebrations",
      date: "2024-02-20",
      location: "Community Center, Kolkata",
      photographer: "Event Team",
      tags: ["celebration", "anniversary", "culture", "community"],
      featured: true,
    },
    {
      id: "9",
      title: "Organic Farming Training",
      description: "Demonstration of organic composting and natural pest control methods for sustainable farming.",
      image: "/placeholder.svg?height=400&width=600&text=Organic+Farming",
      category: "Training Sessions",
      date: "2024-02-25",
      location: "Bardhaman District",
      photographer: "Agricultural Expert",
      tags: ["organic", "farming", "composting", "sustainable"],
      featured: false,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Programs":
        return "bg-green-100 text-green-800 border-green-200"
      case "Community Events":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Training Sessions":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Infrastructure":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Leadership":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      case "Celebrations":
        return "bg-pink-100 text-pink-800 border-pink-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredPhotos = photos
    .filter((photo) => {
      const matchesCategory = selectedCategory === "All" || photo.category === selectedCategory
      const matchesSearch = 
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
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

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
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
                placeholder="Search photos by title, description, or tags..."
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
          {categories.map((category) => (
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
          Showing {filteredPhotos.length} of {photos.length} photos
        </p>
        <Badge variant="outline" className="text-blue-600 border-blue-200">
          {filteredPhotos.filter(p => p.featured).length} Featured
        </Badge>
      </div>

      {/* Enhanced Photo Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo) => (
          <Card 
            key={photo.id} 
            className={`group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
              photo.featured ? "ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white" : ""
            }`}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(photo)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={`${getCategoryColor(photo.category)} text-xs`}>
                    {photo.category}
                  </Badge>
                  {photo.featured && (
                    <Badge className="bg-blue-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <Heart className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 hover:text-blue-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{photo.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {photo.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {photo.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{photo.tags.length - 3}
                    </Badge>
                  )}
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
          Load More Photos
        </Button>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedPhoto.image || "/placeholder.svg"}
                  alt={selectedPhoto.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(selectedPhoto.category)}`}>
                    {selectedPhoto.category}
                  </Badge>
                </div>
                {selectedPhoto.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedPhoto.title}</h3>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">{selectedPhoto.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium ml-2">{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium ml-2">{selectedPhoto.location}</span>
                    </div>
                  </div>
                  {selectedPhoto.photographer && (
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <span className="text-gray-600">Photographer:</span>
                        <span className="font-medium ml-2">{selectedPhoto.photographer}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-gray-600 text-sm font-medium">Tags:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedPhoto.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
