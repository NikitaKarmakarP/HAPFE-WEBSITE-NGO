import { Calendar, Download, FileText, ImageIcon, Video, Newspaper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MediaRoomSidebar() {
  const mediaStats = [
    { label: "Press Releases", count: 24, icon: FileText },
    { label: "Photos", count: 156, icon: ImageIcon },
    { label: "Videos", count: 12, icon: Video },
    { label: "Media Coverage", count: 38, icon: Newspaper },
  ]

  const recentMedia = [
    {
      title: "HAPEF Featured in Agricultural Times",
      date: "2024-01-12",
      type: "Media Coverage",
    },
    {
      title: "Community Training Workshop Photos",
      date: "2024-01-08",
      type: "Photo Gallery",
    },
    {
      title: "Mushroom Farming Success Story Video",
      date: "2024-01-05",
      type: "Video",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Media Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Media Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mediaStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <div className="flex items-center">
                  <stat.icon className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span className="font-semibold text-purple-600">{stat.count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Download Media Kit
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <FileText className="h-4 w-4 mr-2" />
            Brand Guidelines
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <ImageIcon className="h-4 w-4 mr-2" />
            Logo Downloads
          </Button>
        </CardContent>
      </Card>

      {/* Recent Media */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMedia.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <h4 className="font-medium text-sm text-gray-900 mb-1">{item.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600">{item.type}</span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Media Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Media Relations</span>
              <p className="text-gray-600">media@hapef.org</p>
            </div>
            <div>
              <span className="font-medium">Phone</span>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <span className="font-medium">Office Hours</span>
              <p className="text-gray-600">Mon-Fri, 9 AM - 5 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
