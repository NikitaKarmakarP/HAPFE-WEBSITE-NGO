import { Mail, Bell, Download, TrendingUp, Calendar, Users, FileText, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewslettersSidebar() {
  const popularIssues = [
    {
      title: "Women's Empowerment Special Edition",
      date: "October 2023",
      downloads: 1250,
    },
    {
      title: "Annual Impact Report 2023",
      date: "January 2024",
      downloads: 980,
    },
    {
      title: "Climate-Smart Agriculture Guide",
      date: "March 2023",
      downloads: 875,
    },
    {
      title: "Digital Literacy Success Stories",
      date: "September 2023",
      downloads: 720,
    },
  ]

  const upcomingTopics = [
    "Digital Innovation in Rural Development",
    "Youth Leadership Program Results",
    "Sustainable Livelihood Success Stories",
    "Community Health Initiative Updates",
    "Environmental Conservation Projects",
    "Partnership Expansion News",
  ]

  return (
    <div className="space-y-6">
      {/* Newsletter Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Mail className="h-5 w-5 mr-2 text-purple-600" />
            Subscribe to Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest HAPEF newsletter delivered to your inbox every month. Stay updated with our programs, success
            stories, and community impact.
          </p>
          <div className="space-y-3">
            <Input placeholder="Enter your email address" type="email" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Join 2,500+ subscribers. Unsubscribe anytime.</p>
        </CardContent>
      </Card>

      {/* Popular Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
            Most Downloaded
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularIssues.map((issue, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <h4 className="font-medium text-sm text-gray-900 mb-1 hover:text-purple-600 cursor-pointer transition-colors">
                  {issue.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{issue.date}</span>
                  <div className="flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    {issue.downloads.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-purple-600" />
            Upcoming Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {upcomingTopics.map((topic, index) => (
              <div key={index} className="flex items-center py-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Archive */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <FileText className="h-5 w-5 mr-2 text-purple-600" />
            Newsletter Archive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2024 Issues</span>
              <span className="font-semibold text-purple-600">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2023 Issues</span>
              <span className="font-semibold text-purple-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2022 Issues</span>
              <span className="font-semibold text-purple-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2021 Issues</span>
              <span className="font-semibold text-purple-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2020 Issues</span>
              <span className="font-semibold text-purple-600">11</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
            View All Archives
          </Button>
        </CardContent>
      </Card>

      {/* Newsletter Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Award className="h-5 w-5 mr-2 text-purple-600" />
            Newsletter Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">Total Subscribers</span>
              </div>
              <span className="font-semibold text-purple-600">2,500+</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">Average Open Rate</span>
              </div>
              <span className="font-semibold text-purple-600">95%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Download className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">Total Downloads</span>
              </div>
              <span className="font-semibold text-purple-600">15.2K</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">Engagement Rate</span>
              </div>
              <span className="font-semibold text-purple-600">87%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Latest Issue
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Share Newsletter
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Submit Story Idea
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
