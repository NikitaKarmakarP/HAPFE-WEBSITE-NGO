import { Calendar, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pressReleases = [
  {
    id: 1,
    title: "HAPEF Launches New Mushroom Entrepreneurship Program in Rural Communities",
    date: "2024-01-15",
    excerpt:
      "HAPEF announces the expansion of its mushroom cultivation training program to reach 500 more farmers across rural areas, providing sustainable income opportunities.",
    category: "Program Launch",
    downloadUrl: "#",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Partnership Announcement: HAPEF Collaborates with Local Universities",
    date: "2024-01-10",
    excerpt:
      "Strategic partnership formed with three universities to enhance research capabilities and provide technical support for agricultural programs.",
    category: "Partnership",
    downloadUrl: "#",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "HAPEF Receives Recognition for Climate-Resilient Agriculture Initiative",
    date: "2024-01-05",
    excerpt:
      "Organization honored with sustainability award for innovative approaches to climate-resilient farming practices and community empowerment.",
    category: "Recognition",
    downloadUrl: "#",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Annual Impact Report 2023: Reaching New Milestones",
    date: "2023-12-20",
    excerpt:
      "HAPEF's 2023 impact report showcases significant achievements in community development, with over 2,000 beneficiaries across multiple programs.",
    category: "Impact Report",
    downloadUrl: "#",
    readTime: "5 min read",
  },
]

export function PressReleasesList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Latest Press Releases</h2>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Media Kit
        </Button>
      </div>

      <div className="space-y-6">
        {pressReleases.map((release) => (
          <Card key={release.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">{release.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-purple-600 cursor-pointer">{release.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
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
              <p className="text-gray-600 mb-4 leading-relaxed">{release.excerpt}</p>
              <div className="flex items-center gap-3">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Full Release
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Press Releases
        </Button>
      </div>
    </div>
  )
}
