import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function ProgramsCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Join Our Programs?</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in participating, volunteering, or partnering with us, we'd love to hear from you.
            Together, we can create lasting change in rural communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Apply for Programs</h3>
            <p className="text-green-100 mb-6">
              Join our programs as a beneficiary and transform your livelihood through sustainable practices.
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Volunteer</h3>
            <p className="text-green-100 mb-6">
              Share your skills and time to directly contribute to our community development programs.
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
              Volunteer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Partner With Us</h3>
            <p className="text-green-100 mb-6">
              Collaborate with us to amplify impact through strategic partnerships and joint initiatives.
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
              Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5" />
              <span>+91 XXXX XXXXXX</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="h-5 w-5" />
              <span>programs@hapef.org</span>
            </div>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
