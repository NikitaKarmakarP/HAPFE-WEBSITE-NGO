"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Filter, Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export function UpcomingEventsList() {
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All Events",
    "Training Workshops",
    "Community Meetings",
    "Health Camps",
    "Cultural Events",
    "Awareness Programs",
    "Skill Development",
    "Networking Events",
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Mushroom Cultivation Advanced Training",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "HAPEF Training Center, Kolkata",
      category: "Training Workshops",
      participants: 45,
      description:
        "Advanced techniques in mushroom cultivation, including spawn production, substrate preparation, and post-harvest management.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: true,
    },
    {
      id: 2,
      title: "Women's Self-Help Group Annual Meeting",
      date: "2024-02-18",
      time: "2:00 PM - 6:00 PM",
      location: "Community Hall, Village Sundarbans",
      category: "Community Meetings",
      participants: 120,
      description:
        "Annual gathering of women's self-help groups to discuss achievements, challenges, and future plans.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: false,
    },
    {
      id: 3,
      title: "Climate-Smart Agriculture Workshop",
      date: "2024-02-22",
      time: "9:00 AM - 5:00 PM",
      location: "Agricultural Extension Office, Hooghly",
      category: "Training Workshops",
      participants: 60,
      description:
        "Learn about drought-resistant crops, water conservation techniques, and sustainable farming practices.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: true,
    },
    {
      id: 4,
      title: "Community Health Camp",
      date: "2024-02-25",
      time: "8:00 AM - 2:00 PM",
      location: "Primary Health Center, Nadia",
      category: "Health Camps",
      participants: 200,
      description: "Free health checkups, vaccination drive, and health awareness sessions for rural communities.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
      featured: false,
    },
    {
      id: 5,
      title: "Digital Literacy Training for Youth",
      date: "2024-03-01",
      time: "10:00 AM - 3:00 PM",
      location: "HAPEF Computer Center, Kolkata",
      category: "Skill Development",
      participants: 30,
      description: "Basic computer skills, internet usage, and digital tools training for rural youth.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: false,
    },
    {
      id: 6,
      title: "Organic Farming Certification Workshop",
      date: "2024-03-05",
      time: "9:00 AM - 4:00 PM",
      location: "Organic Farm, West Bengal",
      category: "Training Workshops",
      participants: 40,
      description:
        "Learn about organic certification processes, documentation, and market linkages for organic produce.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: true,
    },
    {
      id: 7,
      title: "International Women's Day Celebration",
      date: "2024-03-08",
      time: "3:00 PM - 7:00 PM",
      location: "HAPEF Community Center, Kolkata",
      category: "Cultural Events",
      participants: 150,
      description:
        "Celebrating achievements of women in our programs with cultural performances and recognition ceremony.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
      featured: false,
    },
    {
      id: 8,
      title: "Water Conservation Awareness Program",
      date: "2024-03-12",
      time: "10:00 AM - 2:00 PM",
      location: "Village Schools, Multiple Locations",
      category: "Awareness Programs",
      participants: 300,
      description: "Educational program on water conservation, rainwater harvesting, and sustainable water usage.",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
      featured: false,
    },
  ]

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      "Training Workshops": "bg-blue-100 text-blue-800",
      "Community Meetings": "bg-green-100 text-green-800",
      "Health Camps": "bg-red-100 text-red-800",
      "Cultural Events": "bg-purple-100 text-purple-800",
      "Awareness Programs": "bg-yellow-100 text-yellow-800",
      "Skill Development": "bg-indigo-100 text-indigo-800",
      "Networking Events": "bg-pink-100 text-pink-800",
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
                placeholder="Search events..."
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

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow ${event.featured ? "ring-2 ring-green-200" : ""}`}
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
                      {event.featured && <Badge className="bg-orange-100 text-orange-800">Featured</Badge>}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
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
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">{event.participants} participants expected</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Learn More
                    </Button>
                    {event.registrationOpen && (
                      <Button size="sm" variant="outline">
                        Register Now
                      </Button>
                    )}
                  </div>
                  {!event.registrationOpen && <span className="text-sm text-gray-500">Registration Closed</span>}
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
