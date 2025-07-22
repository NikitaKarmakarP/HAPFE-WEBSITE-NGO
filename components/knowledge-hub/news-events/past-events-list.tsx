"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Filter, Search, Award, Download } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export function PastEventsList() {
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All Events",
    "Training Workshops",
    "Community Meetings",
    "Health Camps",
    "Cultural Events",
    "Awareness Programs",
    "Skill Development",
    "Awards & Recognition",
  ]

  const years = ["All Years", "2024", "2023", "2022", "2021", "2020"]

  const pastEvents = [
    {
      id: 1,
      title: "Annual Community Development Summit 2023",
      date: "2023-12-15",
      time: "9:00 AM - 6:00 PM",
      location: "HAPEF Convention Center, Kolkata",
      category: "Community Meetings",
      participants: 250,
      description:
        "Our flagship annual event bringing together community leaders, beneficiaries, and stakeholders to celebrate achievements and plan for the future.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "5 new partnerships formed, 12 community projects launched",
      materials: ["Event Report", "Photo Gallery", "Video Highlights"],
      featured: true,
      year: "2023",
    },
    {
      id: 2,
      title: "Mushroom Cultivation Master Training Program",
      date: "2023-11-20",
      time: "10:00 AM - 5:00 PM",
      location: "Agricultural Training Center, Hooghly",
      category: "Training Workshops",
      participants: 85,
      description:
        "Comprehensive 3-day training program on advanced mushroom cultivation techniques, covering spawn production to marketing.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "85 farmers trained, 60% increase in mushroom production reported",
      materials: ["Training Manual", "Participant Certificates", "Follow-up Report"],
      featured: false,
      year: "2023",
    },
    {
      id: 3,
      title: "Women's Empowerment Awards Ceremony",
      date: "2023-10-08",
      time: "4:00 PM - 8:00 PM",
      location: "Rabindra Sadan, Kolkata",
      category: "Awards & Recognition",
      participants: 180,
      description:
        "Annual awards ceremony recognizing outstanding women entrepreneurs and leaders from our self-help group programs.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "25 women recognized, 10 success stories shared",
      materials: ["Award Winners List", "Success Stories", "Media Coverage"],
      featured: true,
      year: "2023",
    },
    {
      id: 4,
      title: "Climate-Smart Agriculture Field Day",
      date: "2023-09-12",
      time: "8:00 AM - 4:00 PM",
      location: "Demonstration Farm, Nadia",
      category: "Training Workshops",
      participants: 120,
      description:
        "Hands-on demonstration of climate-resilient farming techniques, drought-resistant crops, and water conservation methods.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "120 farmers trained, 15 new techniques demonstrated",
      materials: ["Field Guide", "Technique Videos", "Resource List"],
      featured: false,
      year: "2023",
    },
    {
      id: 5,
      title: "Digital Health Camp - Rural Outreach",
      date: "2023-08-25",
      time: "7:00 AM - 3:00 PM",
      location: "Multiple Villages, Sundarbans",
      category: "Health Camps",
      participants: 400,
      description:
        "Mobile health camp providing free medical checkups, telemedicine consultations, and health awareness sessions.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "400 people screened, 50 referred for specialized care",
      materials: ["Health Report", "Follow-up Plan", "Awareness Materials"],
      featured: false,
      year: "2023",
    },
    {
      id: 6,
      title: "Youth Leadership Development Workshop",
      date: "2023-07-18",
      time: "9:00 AM - 6:00 PM",
      location: "HAPEF Youth Center, Kolkata",
      category: "Skill Development",
      participants: 60,
      description:
        "Intensive leadership training for young community members, focusing on project management, communication, and social entrepreneurship.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "60 youth trained, 8 community projects initiated",
      materials: ["Leadership Manual", "Project Templates", "Mentorship Guide"],
      featured: false,
      year: "2023",
    },
    {
      id: 7,
      title: "Organic Farming Certification Drive",
      date: "2023-06-10",
      time: "10:00 AM - 4:00 PM",
      location: "Organic Certification Center, West Bengal",
      category: "Training Workshops",
      participants: 75,
      description:
        "Workshop on organic farming certification process, documentation requirements, and market linkage opportunities.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "75 farmers registered for certification, 45 completed documentation",
      materials: ["Certification Guide", "Documentation Templates", "Market Directory"],
      featured: false,
      year: "2023",
    },
    {
      id: 8,
      title: "International Day of Rural Women Celebration",
      date: "2023-10-15",
      time: "2:00 PM - 7:00 PM",
      location: "Community Centers, Multiple Locations",
      category: "Cultural Events",
      participants: 300,
      description:
        "Celebrating the contributions of rural women with cultural programs, skill exhibitions, and recognition ceremonies.",
      image: "/placeholder.svg?height=200&width=300",
      outcomes: "300 women participated, 50 skills showcased",
      materials: ["Event Highlights", "Skill Catalog", "Cultural Performances"],
      featured: false,
      year: "2023",
    },
  ]

  const filteredEvents = pastEvents.filter((event) => {
    const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory
    const matchesYear = selectedYear === "All Years" || event.year === selectedYear
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesYear && matchesSearch
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      "Training Workshops": "bg-blue-100 text-blue-800",
      "Community Meetings": "bg-green-100 text-green-800",
      "Health Camps": "bg-red-100 text-red-800",
      "Cultural Events": "bg-purple-100 text-purple-800",
      "Awareness Programs": "bg-yellow-100 text-yellow-800",
      "Skill Development": "bg-indigo-100 text-indigo-800",
      "Awards & Recognition": "bg-pink-100 text-pink-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search past events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filter:</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                className={selectedYear === year ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow ${event.featured ? "ring-2 ring-blue-200" : ""}`}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                      {event.featured && (
                        <Badge className="bg-orange-100 text-orange-800">
                          <Award className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline">{event.year}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{event.participants} participants</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                  <p className="text-sm text-gray-600">{event.outcomes}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {event.materials.map((material, index) => (
                      <Button key={index} size="sm" variant="outline" className="text-xs bg-transparent">
                        <Download className="h-3 w-3 mr-1" />
                        {material}
                      </Button>
                    ))}
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No events found matching your criteria.</div>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("All Events")
              setSelectedYear("All Years")
              setSearchTerm("")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
