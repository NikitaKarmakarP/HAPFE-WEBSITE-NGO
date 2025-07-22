import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Bell, BookOpen, Users } from "lucide-react"

export function KnowledgeCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g fill="currentColor" fillOpacity="0.4">
              <circle cx="30" cy="30" r="2" />
              <circle cx="10" cy="10" r="2" />
              <circle cx="50" cy="10" r="2" />
              <circle cx="10" cy="50" r="2" />
              <circle cx="50" cy="50" r="2" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Stay Updated with Latest Resources</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our knowledge hub newsletter and get the latest guides, training materials, and success stories
            delivered to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Get Notified</h3>
            <p className="text-blue-100 leading-relaxed">
              Receive instant notifications when new resources, guides, and training materials are published.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Exclusive Content</h3>
            <p className="text-blue-100 leading-relaxed">
              Access subscriber-only content including detailed case studies and advanced training materials.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Join Community</h3>
            <p className="text-blue-100 leading-relaxed">
              Connect with other practitioners, share experiences, and learn from the HAPEF community.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-4 mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-blue-200 text-center">Join 1000+ subscribers. No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
