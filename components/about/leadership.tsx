"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, GraduationCap, Calendar, Users, Award, Target } from "lucide-react"

const executiveTeam = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & Executive Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading HAPEF's mission with 15+ years in rural development and agricultural innovation.",
    email: "rajesh@hapef.org",
    linkedin: "#",
    expertise: ["Rural Development", "Agricultural Innovation", "Community Leadership"],
  },
  {
    name: "Priya Sharma",
    role: "Program Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Overseeing program implementation and community engagement across all HAPEF initiatives.",
    email: "priya@hapef.org",
    linkedin: "#",
    expertise: ["Program Management", "Community Engagement", "Strategic Planning"],
  },
  {
    name: "Amit Ghosh",
    role: "Community Relations Head",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Building strong relationships with local communities and stakeholder partnerships.",
    email: "amit@hapef.org",
    linkedin: "#",
    expertise: ["Community Relations", "Stakeholder Management", "Partnership Development"],
  },
  {
    name: "Dr. Sunita Devi",
    role: "Agricultural Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in sustainable farming practices and climate-resilient agriculture techniques.",
    email: "sunita@hapef.org",
    linkedin: "#",
    expertise: ["Sustainable Agriculture", "Climate Resilience", "Farmer Training"],
  },
]

const boardMembers = [
  {
    name: "Mr. Anil Sharma",
    role: "Chairman",
    designation: "Former IAS Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bringing decades of administrative experience and governance expertise to guide HAPEF's strategic direction.",
    email: "anil.chairman@hapef.org",
    linkedin: "#",
    experience: "35+ years in Public Administration",
    specialization: "Governance & Policy",
  },
  {
    name: "Dr. Meera Patel",
    role: "Vice Chairperson",
    designation: "Agricultural Economist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading agricultural economist with expertise in rural economics and sustainable development policies.",
    email: "meera.vice@hapef.org",
    linkedin: "#",
    experience: "25+ years in Agricultural Economics",
    specialization: "Rural Economics & Policy",
  },
  {
    name: "Mr. Ravi Gupta",
    role: "Treasurer",
    designation: "Chartered Accountant",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensuring financial transparency and strategic financial planning for sustainable organizational growth.",
    email: "ravi.treasurer@hapef.org",
    linkedin: "#",
    experience: "20+ years in Financial Management",
    specialization: "Financial Strategy & Compliance",
  },
  {
    name: "Ms. Kavita Singh",
    role: "Secretary",
    designation: "Legal Expert",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Legal advisor ensuring compliance and providing strategic legal guidance for all organizational activities.",
    email: "kavita.secretary@hapef.org",
    linkedin: "#",
    experience: "18+ years in Legal Practice",
    specialization: "Corporate Law & Compliance",
  },
]

const advisoryBoard = [
  {
    name: "Prof. Dr. S.K. Mishra",
    role: "Agricultural Research Advisor",
    institution: "Former Director, ICAR",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Renowned agricultural scientist providing strategic guidance on research and innovation initiatives.",
    email: "sk.mishra@hapef.org",
    linkedin: "#",
    expertise: ["Agricultural Research", "Innovation Strategy", "Technology Transfer"],
    achievements: "50+ Research Publications, National Agriculture Award",
  },
  {
    name: "Ms. Rashida Khan",
    role: "Community Development Advisor",
    institution: "Former UN Development Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "International development expert specializing in community-driven development programs.",
    email: "rashida@hapef.org",
    linkedin: "#",
    expertise: ["Community Development", "International Cooperation", "Gender Equality"],
    achievements: "UN Excellence Award, 30+ Countries Experience",
  },
  {
    name: "Dr. Vikram Joshi",
    role: "Technology & Innovation Advisor",
    institution: "IIT Delhi, Computer Science",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technology expert helping integrate digital solutions for rural development and agricultural innovation.",
    email: "vikram@hapef.org",
    linkedin: "#",
    expertise: ["Digital Innovation", "AgriTech", "Data Analytics"],
    achievements: "Tech Innovation Award, 15+ Patents",
  },
  {
    name: "Mr. Deepak Verma",
    role: "Financial Strategy Advisor",
    institution: "Former CFO, Rural Development Bank",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Financial strategist with extensive experience in rural finance and microfinance operations.",
    email: "deepak@hapef.org",
    linkedin: "#",
    expertise: ["Rural Finance", "Microfinance", "Impact Investment"],
    achievements: "Banking Excellence Award, Rural Finance Pioneer",
  },
]

const interns = [
  {
    name: "Ananya Sharma",
    role: "Program Management Intern",
    university: "IIM Calcutta",
    duration: "6 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "MBA student specializing in social impact and program management, supporting HAPEF's operational excellence.",
    email: "ananya.intern@hapef.org",
    linkedin: "#",
    focus: ["Program Evaluation", "Impact Assessment", "Strategic Planning"],
    startDate: "January 2024",
  },
  {
    name: "Rohit Kumar",
    role: "Agricultural Research Intern",
    university: "Agricultural University",
    duration: "4 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Agricultural engineering student researching sustainable farming techniques and climate adaptation.",
    email: "rohit.intern@hapef.org",
    linkedin: "#",
    focus: ["Sustainable Farming", "Climate Adaptation", "Technology Integration"],
    startDate: "February 2024",
  },
  {
    name: "Priyanka Das",
    role: "Community Outreach Intern",
    university: "TISS (Tata Institute of Social Sciences)",
    duration: "3 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Social work student focusing on community engagement and participatory development approaches.",
    email: "priyanka.intern@hapef.org",
    linkedin: "#",
    focus: ["Community Engagement", "Social Research", "Participatory Development"],
    startDate: "March 2024",
  },
  {
    name: "Arjun Patel",
    role: "Digital Marketing Intern",
    university: "Jadavpur University",
    duration: "6 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Communications student developing digital strategies to amplify HAPEF's impact and reach.",
    email: "arjun.intern@hapef.org",
    linkedin: "#",
    focus: ["Digital Marketing", "Content Strategy", "Social Media Management"],
    startDate: "January 2024",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who guide HAPEF's mission to transform rural communities through sustainable
            development and innovative solutions.
          </p>
        </div>

        {/* Executive Leadership Team */}
        <div id="executive-team" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership Team</h3>
            <p className="text-lg text-gray-600">
              Our core leadership driving day-to-day operations and strategic initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {member.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {member.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div id="board-directors" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h3>
            <p className="text-lg text-gray-600">
              Strategic oversight and governance leadership ensuring organizational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">Board</Badge>
                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.designation}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Award className="h-3 w-3 mr-1" />
                      {member.experience}
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Target className="h-3 w-3 mr-1" />
                      {member.specialization}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {member.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {member.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div id="advisory-board" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h3>
            <p className="text-lg text-gray-600">
              Expert advisors providing strategic guidance and specialized knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white">Advisory</Badge>
                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.institution}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-center text-gray-500">
                      <Award className="h-3 w-3 inline mr-1" />
                      {member.achievements}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {member.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {member.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interns */}
        <div id="interns" className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Interns</h3>
            <p className="text-lg text-gray-600">
              Talented young professionals bringing fresh perspectives and innovative ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interns.map((intern, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                      <img
                        src={intern.image || "/placeholder.svg"}
                        alt={intern.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white">Intern</Badge>
                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{intern.name}</h4>
                    <p className="text-orange-600 font-medium mb-1">{intern.role}</p>
                    <p className="text-sm text-gray-500 mb-1">{intern.university}</p>
                    <p className="text-xs text-gray-400 mb-3">{intern.duration}</p>
                    <p className="text-sm text-gray-600 mb-4">{intern.bio}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {intern.focus.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Started: {intern.startDate}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {intern.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {intern.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Program CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Join Our Internship Program</h3>
            <p className="text-xl mb-8 opacity-90">
              Are you passionate about rural development and social impact? Join our dynamic team and gain hands-on
              experience in creating meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Internship
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Learn About Our Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
