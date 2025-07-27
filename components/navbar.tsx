"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isKnowledgeHubOpen, setIsKnowledgeHubOpen] = useState(false)
  const [isMediaRoomOpen, setIsMediaRoomOpen] = useState(false)
  const [isNewsEventsOpen, setIsNewsEventsOpen] = useState(false)
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false)
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false)
  // Add state for Thematic Areas dropdown
  const [isThematicOpen, setIsThematicOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);

  const programs = [
    {
      title: "Mushroom Entrepreneurship Program",
      href: "/programs/mushroom-entrepreneurship",
    },
    {
      title: "Christmas Blanket Distribution",
      href: "/programs/christmas-blanket-distribution",
    },
    {
      title: "Climate-Resilient Agriculture & BRC",
      href: "/programs/climate-resilient-agriculture",
    },
    {
      title: "Convergence",
      href: "/programs/convergence",
    },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl text-gray-900">HAPEF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                About Us
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About Us</h4>
                  </div>

                  {/* Main About Us Link */}
                  <Link
                    href="/about#overview"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-blue-600">Overview</div>
                    </div>
                  </Link>

                  {/* Our Story */}
                  <Link
                    href="/about#our-story"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-green-600">Our Story</div>
                    </div>
                  </Link>

                  {/* Timeline */}
                  <Link
                    href="/about#timeline"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-purple-600">Our Timeline</div>
                    </div>
                  </Link>

                  {/* Leadership with Sub-dropdown */}
                  <div className="relative group/leadership">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer mb-1">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Leadership Team</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Leadership */}
                    <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/leadership:opacity-100 group-hover/leadership:visible transition-all duration-300 z-50">
                      <div className="p-3">
                        <h5 className="font-medium text-gray-900 mb-2">Leadership Team</h5>
                        <div className="space-y-1">
                          <Link
                            href="/about#executive-team"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">
                              Executive Team
                            </div>
                          </Link>
                          <Link
                            href="/about#board-directors"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Board of Directors
                            </div>
                          </Link>
                          <Link
                            href="/about#advisory-board"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Advisory Board
                            </div>
                          </Link>
                          <Link
                            href="/about#interns"
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Interns
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recognition */}
                  <Link
                    href="/about#recognition"
                    className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-red-600">
                        Recognition & Awards
                      </div>
                    </div>
                  </Link>

                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <Link
                      href="/about"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      View Complete About Us
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Do Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                What We Do
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Do</h4>
                  </div>

                  {/* Thematic Areas Static List */}
                  <div className="mb-1 relative group/thematic">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Thematic Area</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                    {/* Submenu for Thematic Area */}
                    <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/thematic:opacity-100 group-hover/thematic:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Thematic Area</h5>
                        {/* Desktop Thematic Area submenu */}
                        <div className="space-y-1">
                          <Link href="/programs/empowering-communities" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link">
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Empowering Communities</div>
                          </Link>
                          <Link href="/programs/livelihoods" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link">
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Livelihoods</div>
                          </Link>
                          <Link href="/programs/environment-disaster-mitigation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link">
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Environment Sustainability & Disaster Management</div>
                          </Link>
                          <Link href="/programs/enterprise-marketing-linkages" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link">
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Enterprise & Marketing Linkages</div>
                          </Link>
                          <Link href="/programs/strategic-partnerships" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link">
                            <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">Strategic Partnerships</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Our Projects Sub-dropdown */}
                  <div className="relative group/projects">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Our Projects</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Projects */}
                    <div className="absolute left-full top-0 ml-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/projects:opacity-100 group-hover/projects:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Our Projects</h5>
                        <div className="space-y-1">
                          {programs.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                            >
                              <div className="font-medium text-gray-900 group-hover/link:text-green-600 text-sm">
                                {program.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="pt-3 mt-3 border-t border-gray-200">
                          <Link
                            href="/programs"
                            className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center"
                          >
                            View All Programs
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Impact Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                Our Impact
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Impact</h4>
                  </div>
                  <Link href="/impact#stats" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-green-600">Impact Stats</div>
                    </div>
                  </Link>
                  <Link href="/impact#stories" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-blue-600">Stories of Transformation</div>
                    </div>
                  </Link>
                  <Link href="/impact#map" className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group/link mb-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <div className="font-medium text-gray-800 group-hover/link:text-purple-600">Impact Map</div>
                    </div>
                  </Link>
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <Link href="/impact" className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
                      View Complete Impact
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge Hub Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors py-2">
                Knowledge Hub
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Hub</h4>
                  </div>

                  {/* Resources & Guides with Sub-dropdown */}
                  <div className="relative group/resources">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div>
                          <div className="font-medium text-gray-800">Resources & Guides</div>
                        <div className="text-sm text-gray-600">Training materials and documentation</div>
                      </div>
                    </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Resources & Guides */}
                    <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/resources:opacity-100 group-hover/resources:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Resources & Guides</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              All Resources
                            </div>
                            <div className="text-xs text-gray-600">Browse all training materials and guides</div>
                  </Link>
                          <Link
                            href="/knowledge-hub/annual-reports"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-blue-600 text-sm">
                              Annual Reports
                            </div>
                            <div className="text-xs text-gray-600">2023-24, 2024-25 comprehensive reports</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-dropdown for Media Room */}
                  <div className="relative group/media">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">Media Room</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for Media Room */}
                    <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/media:opacity-100 group-hover/media:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">Media Room</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub/media-room/press-releases"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Press Releases
                            </div>
                            <div className="text-xs text-gray-600">Latest announcements and updates</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/photo-gallery"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Photo Gallery
                            </div>
                            <div className="text-xs text-gray-600">Images from our programs and events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/video-library"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Video Library
                            </div>
                            <div className="text-xs text-gray-600">Training videos and documentaries</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/media-coverage"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-purple-600 text-sm">
                              Media Coverage
                            </div>
                            <div className="text-xs text-gray-600">News articles and features</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-dropdown for News & Events */}
                  <div className="relative group/news">
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-800">News & Events</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* Sub-dropdown for News & Events */}
                    <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/news:opacity-100 group-hover/news:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h5 className="font-medium text-gray-900 mb-3">News & Events</h5>
                        <div className="space-y-1">
                          <Link
                            href="/knowledge-hub/news-events/latest-news"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Latest News
                            </div>
                            <div className="text-xs text-gray-600">Recent updates and announcements</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/upcoming-events"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Upcoming Events
                            </div>
                            <div className="text-xs text-gray-600">Workshops, training, and community events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/past-events"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Past Events
                            </div>
                            <div className="text-xs text-gray-600">Archive of completed events</div>
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/newsletters"
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                          >
                            <div className="font-medium text-gray-900 group-hover/link:text-orange-600 text-sm">
                              Newsletters
                            </div>
                            <div className="text-xs text-gray-600">Monthly updates and stories</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <Link
                      href="/knowledge-hub"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      View All Resources
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/recruitments" className="text-gray-700 hover:text-green-600 transition-colors">
              Get Involved
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact Us
            </Link>
            <Link href="/donate">
              <Button className="bg-green-600 hover:bg-green-700">Donate Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              {/* Mobile About Us Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium"
                >
                  About Us
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAboutUsOpen ? "rotate-180" : ""}`} />
                </button>

                {isAboutUsOpen && (
                  <div className="mt-2 pl-4">
                    {/* Main About Us Link */}
                    <Link
                      href="/about#overview"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Overview
                      </div>
                    </Link>

                    {/* Our Story */}
                    <Link
                      href="/about#our-story"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Our Story
                      </div>
                    </Link>

                    {/* Timeline */}
                    <Link
                      href="/about#timeline"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        Our Timeline
                      </div>
                    </Link>

                    {/* Leadership Sub-section */}
                    <div className="mb-2">
                      <button
                        onClick={() => setIsLeadershipOpen(!isLeadershipOpen)}
                        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-green-600 font-medium py-1"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                          Leadership Team
                        </div>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${isLeadershipOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isLeadershipOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/about#executive-team"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Executive Team
                          </Link>
                          <Link
                            href="/about#board-directors"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Board of Directors
                          </Link>
                          <Link
                            href="/about#advisory-board"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Advisory Board
                          </Link>
                          <Link
                            href="/about#interns"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Interns
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Recognition */}
                    <Link
                      href="/about#recognition"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        Recognition & Awards
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile What We Do Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium"
                >
                  What We Do
                  <ChevronDown className={`h-4 w-4 transition-transform ${isWhatWeDoOpen ? "rotate-180" : ""}`} />
                </button>

                {isWhatWeDoOpen && (
                  <div className="mt-2 pl-4">
                    {/* Thematic Areas Static List */}
                    <div className="mb-2">
                      <div className="flex items-center py-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        <span className="text-gray-700 font-medium">Thematic Area</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        <Link href="/programs/empowering-communities" className="flex items-center py-1 text-sm text-blue-600 hover:text-blue-800 font-bold">
                          Empowering Communities
                        </Link>
                        <Link href="/programs/livelihoods" className="flex items-center py-1 text-sm text-green-600 hover:text-green-800 font-bold">
                          Livelihoods
                        </Link>
                        <Link href="/programs/environment-disaster-mitigation" className="flex items-center py-1 text-sm text-yellow-600 hover:text-yellow-800 font-bold">
                          Environment Sustainability & Disaster Management
                        </Link>
                        <Link href="/programs/enterprise-marketing-linkages" className="flex items-center py-1 text-sm text-purple-600 hover:text-purple-800 font-bold">
                          Enterprise & Marketing Linkages
                        </Link>
                        <Link href="/programs/strategic-partnerships" className="flex items-center py-1 text-sm text-pink-600 hover:text-pink-800 font-bold">
                          Strategic Partnerships
                        </Link>
                      </div>
                    </div>
                    {/* Our Projects Sub-section */}
                    <div className="mb-2">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-green-600 font-medium py-1"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          Our Projects
                        </div>
                        <ChevronDown className={`h-3 w-3 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                      </button>

                      {isProjectsOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          {programs.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {program.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Our Impact Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsImpactOpen(!isImpactOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium"
                >
                  Our Impact
                  <ChevronDown className={`h-4 w-4 transition-transform ${isImpactOpen ? "rotate-180" : ""}`} />
                </button>

                {isImpactOpen && (
                  <div className="mt-2 pl-4">
                    <Link
                      href="/impact#stats"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        Impact Stats
                      </div>
                    </Link>
                    <Link
                      href="/impact#stories"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        Stories of Transformation
                      </div>
                    </Link>
                    <Link
                      href="/impact#map"
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        Impact Map
                      </div>
                    </Link>
                    <div className="pt-2 mt-2 border-t border-gray-200">
                      <Link href="/impact" className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
                        View Complete Impact
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Knowledge Hub Section */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsKnowledgeHubOpen(!isKnowledgeHubOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-green-600 font-medium"
                >
                  Knowledge Hub
                  <ChevronDown className={`h-4 w-4 transition-transform ${isKnowledgeHubOpen ? "rotate-180" : ""}`} />
                </button>

                {isKnowledgeHubOpen && (
                  <div className="mt-2 pl-4">
                    {/* Resources & Guides Sub-section */}
                    <div className="mb-2">
                      <div className="flex items-center py-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700 font-medium">Resources & Guides</span>
                      </div>
                      <div className="pl-6 space-y-1">
                    <Link
                      href="/knowledge-hub"
                          className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                          All Resources
                    </Link>
                        <Link
                          href="/knowledge-hub/annual-reports"
                          className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Annual Reports (2023-24, 2024-25)
                        </Link>
                      </div>
                    </div>

                    {/* Media Room Sub-section */}
                    <div className="mb-2">
                      <button
                        onClick={() => setIsMediaRoomOpen(!isMediaRoomOpen)}
                        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-green-600 font-medium py-1"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                          Media Room
                        </div>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${isMediaRoomOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isMediaRoomOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/knowledge-hub/media-room/press-releases"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Press Releases
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/photo-gallery"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Photo Gallery
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/video-library"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Video Library
                          </Link>
                          <Link
                            href="/knowledge-hub/media-room/media-coverage"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Media Coverage
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* News & Events Sub-section */}
                    <div className="mb-2">
                      <button
                        onClick={() => setIsNewsEventsOpen(!isNewsEventsOpen)}
                        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-green-600 font-medium py-1"
                      >
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                          News & Events
                        </div>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${isNewsEventsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isNewsEventsOpen && (
                        <div className="mt-1 pl-4 space-y-1">
                          <Link
                            href="/knowledge-hub/news-events/latest-news"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Latest News
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/upcoming-events"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Upcoming Events
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/past-events"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Past Events
                          </Link>
                          <Link
                            href="/knowledge-hub/news-events/newsletters"
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Newsletters
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/recruitments" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Get Involved
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <Link href="/donate">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Donate Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Named export for compatibility
export { Navbar }
