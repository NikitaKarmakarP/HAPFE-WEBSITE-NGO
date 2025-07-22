import { Calendar, Bell, TrendingUp, Clock, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsEventsSidebar() {
  const upcomingEvents = [
    {
      title: "Mushroom Cultivation Workshop",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Community Center, Village A",
    },
    {
      title: "Women Entrepreneurs Meetup",
      date: "2024-01-28",
      time: "2:00 PM",
      location: "HAPEF Training Center",
    },
    {
      title: "Climate-Resilient Farming Seminar",
      date: "2024-02-02",
      time: "9:00 AM",
      location: "Agricultural Extension Office",
    },
  ]

  const popularArticles = [
    {
      title: "Success Story: From Subsistence to Prosperity",
      views: 2340,
      date: "2024-01-10",
    },
    {
      title: "Innovative Farming Techniques Transform Communities",
      views: 1890,
      date: "2024-01-08",
    },
    {
      title: "Women Leading Change in Rural Development",
      views: 1567,
      date: "2024-01-05",
    },
  ]

  const categories = [
    { name: "Success Stories", count: 15 },
    { name: "Program Updates", count: 12 },
    { name: "Community Impact", count: 18 },
    { name: "Innovation", count: 8 },
    { name: "Training", count: 22 },
    { name: "Partnerships", count: 6 },
  ]

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Mail className="h-5 w-5 mr-2 text-orange-600" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
          <div className="space-y-3">
            <Input placeholder="Enter your email" type="email" />
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-orange-600" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <h4 className="font-medium text-sm text-gray-900 mb-1">{event.title}</h4>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {event.time}
                  </div>
                  <div className="text-xs text-orange-600">{event.location}</div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Popular Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
            Popular Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <h4 className="font-medium text-sm text-gray-900 mb-2 hover:text-orange-600 cursor-pointer">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.views} views</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between py-1 hover:bg-gray-50 px-2 rounded cursor-pointer"
              >
                <span className="text-sm text-gray-700">{category.name}</span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{category.count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">News Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Articles</span>
              <span className="font-semibold text-orange-600">81</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="font-semibold text-orange-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Views</span>
              <span className="font-semibold text-orange-600">45.2K</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
