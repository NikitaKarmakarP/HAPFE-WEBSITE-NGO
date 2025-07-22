"use client"

import { useState } from "react"
import { Calendar, Download, Eye, Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export function NewslettersList() {
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [searchTerm, setSearchTerm] = useState("")

  const years = ["All Years", "2024", "2023", "2022", "2021"]

  const newsletters = [
    {
      id: 1,
      title: "HAPEF Newsletter - January 2024",
      subtitle: "New Year, New Beginnings",
      date: "2024-01-15",
      year: "2024",
      issue: "Vol. 4, Issue 1",
      description:
        "Celebrating our achievements in 2023 and outlining ambitious goals for 2024. Features success stories from our mushroom cultivation program and upcoming training schedules.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+January+2024",
      highlights: [
        "2023 Impact Report Summary",
        "New Mushroom Cultivation Centers",
        "Women's Empowerment Success Stories",
        "Upcoming Training Calendar",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "HAPEF Newsletter - December 2023",
      subtitle: "Year-End Celebrations & Achievements",
      date: "2023-12-15",
      year: "2023",
      issue: "Vol. 3, Issue 12",
      description:
        "Our annual wrap-up featuring major milestones, community celebrations, and recognition of outstanding contributors to our mission.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+December+2023",
      highlights: [
        "Annual Achievement Awards",
        "Community Development Summit Highlights",
        "Year-End Financial Report",
        "Holiday Celebrations Across Villages",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "HAPEF Newsletter - November 2023",
      subtitle: "Harvest Season & Gratitude",
      date: "2023-11-15",
      year: "2023",
      issue: "Vol. 3, Issue 11",
      description:
        "Celebrating the harvest season with stories of agricultural success, climate-smart farming adoption, and community resilience.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+November+2023",
      highlights: [
        "Harvest Festival Celebrations",
        "Climate-Smart Agriculture Results",
        "Farmer Success Stories",
        "Winter Crop Planning",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "HAPEF Newsletter - October 2023",
      subtitle: "Women's Empowerment Month",
      date: "2023-10-15",
      year: "2023",
      issue: "Vol. 3, Issue 10",
      description:
        "Special edition focusing on women's achievements, leadership development, and the impact of our self-help group programs.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+October+2023",
      highlights: [
        "Women's Empowerment Awards",
        "Self-Help Group Achievements",
        "Leadership Training Programs",
        "Entrepreneurship Success Stories",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "HAPEF Newsletter - September 2023",
      subtitle: "Education & Skill Development",
      date: "2023-09-15",
      year: "2023",
      issue: "Vol. 3, Issue 9",
      description:
        "Highlighting our education initiatives, digital literacy programs, and skill development workshops that are transforming rural communities.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+September+2023",
      highlights: [
        "Digital Literacy Program Launch",
        "Youth Skill Development",
        "Education Center Updates",
        "Technology Training Results",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "HAPEF Newsletter - August 2023",
      subtitle: "Health & Wellness Focus",
      date: "2023-08-15",
      year: "2023",
      issue: "Vol. 3, Issue 8",
      description:
        "Comprehensive coverage of our health initiatives, mobile health camps, telemedicine services, and community wellness programs.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+August+2023",
      highlights: [
        "Mobile Health Camp Results",
        "Telemedicine Service Launch",
        "Nutrition Awareness Programs",
        "Community Health Statistics",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "HAPEF Newsletter - July 2023",
      subtitle: "Monsoon Preparedness & Agriculture",
      date: "2023-07-15",
      year: "2023",
      issue: "Vol. 3, Issue 7",
      description:
        "Monsoon season preparations, water conservation efforts, and sustainable agriculture practices to ensure food security.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+July+2023",
      highlights: [
        "Monsoon Preparedness Training",
        "Water Conservation Projects",
        "Flood-Resistant Crop Varieties",
        "Emergency Response Plans",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "HAPEF Newsletter - June 2023",
      subtitle: "Environmental Conservation",
      date: "2023-06-15",
      year: "2023",
      issue: "Vol. 3, Issue 6",
      description:
        "World Environment Day special featuring our conservation efforts, tree plantation drives, and sustainable development initiatives.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+June+2023",
      highlights: [
        "Tree Plantation Drive Results",
        "Waste Management Programs",
        "Renewable Energy Projects",
        "Environmental Education",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 9,
      title: "HAPEF Newsletter - May 2023",
      subtitle: "Youth Leadership & Innovation",
      date: "2023-05-15",
      year: "2023",
      issue: "Vol. 3, Issue 5",
      description:
        "Showcasing young leaders in our communities, innovation in rural development, and technology adoption success stories.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+May+2023",
      highlights: [
        "Youth Leadership Awards",
        "Innovation in Agriculture",
        "Technology Adoption Stories",
        "Future Leaders Program",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
    {
      id: 10,
      title: "HAPEF Newsletter - April 2023",
      subtitle: "Spring Initiatives & Growth",
      date: "2023-04-15",
      year: "2023",
      issue: "Vol. 3, Issue 4",
      description:
        "Spring season brings new opportunities for growth, featuring our latest program expansions and community development initiatives.",
      image: "/placeholder.svg?height=300&width=400&text=Newsletter+April+2023",
      highlights: [
        "Program Expansion Updates",
        "Spring Crop Planning",
        "Community Infrastructure Projects",
        "Partnership Announcements",
      ],
      downloadUrl: "#",
      viewUrl: "#",
      featured: false,
    },
  ]

  const filteredNewsletters = newsletters.filter((newsletter) => {
    const matchesYear = selectedYear === "All Years" || newsletter.year === selectedYear
    const matchesSearch =
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesYear && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search newsletters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Filter by year:</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(year)}
              className={selectedYear === year ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>

      {/* Newsletter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNewsletters.map((newsletter) => (
          <Card
            key={newsletter.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow ${newsletter.featured ? "ring-2 ring-purple-200" : ""}`}
          >
            <div className="relative">
              <img
                src={newsletter.image || "/placeholder.svg"}
                alt={newsletter.title}
                className="w-full h-48 object-cover"
              />
              {newsletter.featured && (
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Featured</Badge>
              )}
            </div>

            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {newsletter.issue}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(newsletter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <CardTitle className="text-lg">{newsletter.title}</CardTitle>
              <p className="text-sm text-purple-600 font-medium">{newsletter.subtitle}</p>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 text-sm mb-4">{newsletter.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">In This Issue:</h4>
                <ul className="space-y-1">
                  {newsletter.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1 h-1 bg-purple-600 rounded-full mr-2"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Eye className="h-4 w-4 mr-1" />
                  Read Online
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNewsletters.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No newsletters found matching your criteria.</div>
          <Button
            variant="outline"
            onClick={() => {
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
