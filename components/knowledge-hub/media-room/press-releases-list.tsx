"use client"

import { Calendar, Download, ExternalLink, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pressReleases = [
  {
    id: 1,
    title: "HAPEF Launches New Mushroom Entrepreneurship Program in Rural Communities",
    date: "2024-01-15",
    excerpt:
      "HAPEF announces the expansion of its mushroom cultivation training program to reach 500 more farmers across rural areas, providing sustainable income opportunities.",
    category: "Program Launch",
    downloadUrl: "/press-releases/hapef-mushroom-entrepreneurship-program-2024.pdf",
    readUrl: "/press-releases/hapef-mushroom-entrepreneurship-program-2024",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Partnership Announcement: HAPEF Collaborates with Local Universities",
    date: "2024-01-10",
    excerpt:
      "Strategic partnership formed with three universities to enhance research capabilities and provide technical support for agricultural programs.",
    category: "Partnership",
    downloadUrl: "/press-releases/hapef-university-partnership-2024.pdf",
    readUrl: "/press-releases/hapef-university-partnership-2024",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 3,
    title: "HAPEF Receives Recognition for Climate-Resilient Agriculture Initiative",
    date: "2024-01-05",
    excerpt:
      "Organization honored with sustainability award for innovative approaches to climate-resilient farming practices and community empowerment.",
    category: "Recognition",
    downloadUrl: "/press-releases/hapef-climate-agriculture-recognition-2024.pdf",
    readUrl: "/press-releases/hapef-climate-agriculture-recognition-2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Annual Impact Report 2023: Reaching New Milestones",
    date: "2023-12-20",
    excerpt:
      "HAPEF's 2023 impact report showcases significant achievements in community development, with over 2,000 beneficiaries across multiple programs.",
    category: "Impact Report",
    downloadUrl: "/press-releases/hapef-annual-impact-report-2023.pdf",
    readUrl: "/press-releases/hapef-annual-impact-report-2023",
    readTime: "5 min read",
    featured: true,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Program Launch":
      return "bg-green-100 text-green-800 border-green-200"
    case "Partnership":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Recognition":
      return "bg-orange-100 text-orange-800 border-orange-200"
    case "Impact Report":
      return "bg-purple-100 text-purple-800 border-purple-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export function PressReleasesList() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Press Releases</h2>
          <p className="text-gray-600">Stay updated with our latest news and announcements</p>
        </div>
        <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
          <Download className="h-4 w-4 mr-2" />
          Media Kit
        </Button>
      </div>

      <div className="grid gap-8">
        {pressReleases.map((release) => (
          <Card 
            key={release.id} 
            className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              release.featured ? "ring-2 ring-purple-200 bg-gradient-to-r from-purple-50 to-white" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`${getCategoryColor(release.category)} text-xs font-medium`}>
                      {release.category}
                    </Badge>
                    {release.featured && (
                      <Badge className="bg-purple-600 text-white text-xs">
                        Featured
                      </Badge>
                    )}
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {release.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 hover:text-purple-600 cursor-pointer transition-colors">
                    {release.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(release.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">{release.excerpt}</p>
              <div className="flex items-center gap-3">
                <Button 
                  size="sm" 
                  className="bg-purple-600 hover:bg-purple-700 shadow-sm"
                  onClick={() => window.open(release.readUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Full Release
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.open(release.downloadUrl, '_blank')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button 
          variant="outline" 
          size="lg"
          className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8"
        >
          Load More Press Releases
        </Button>
      </div>
    </div>
  )
}
