import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Share2 } from "lucide-react"
import Link from "next/link"

export function SuccessStoriesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Be Part of the Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            These stories show the real impact of our programs. Join us in creating more success stories 
            and transforming lives across rural India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg group"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg group"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Share these inspiring stories with your network
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Share2 className="h-4 w-4 mr-2" />
                Share on Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Share2 className="h-4 w-4 mr-2" />
                Share on Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <Share2 className="h-4 w-4 mr-2" />
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 