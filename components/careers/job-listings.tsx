"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Briefcase, MapPin, Clock, DollarSign, Users, ArrowRight, Search, Filter, Calendar, Building, Upload } from "lucide-react"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Internship"
  experience: string
  salary: string
  postedDate: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  isRemote: boolean
  isUrgent: boolean
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Program Manager - Rural Development",
    department: "Programs",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹8-12 LPA",
    postedDate: "2024-01-15",
    description: "Lead and manage rural development programs focusing on sustainable agriculture and community empowerment.",
    requirements: [
      "Master's degree in Rural Development, Agriculture, or related field",
      "5+ years experience in NGO/social sector",
      "Strong project management skills",
      "Experience with rural communities",
      "Fluent in Bengali and English"
    ],
    responsibilities: [
      "Develop and implement rural development programs",
      "Manage program budgets and timelines",
      "Coordinate with government agencies and partners",
      "Monitor and evaluate program impact",
      "Lead team of field coordinators"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance coverage",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Travel allowances for field visits"
    ],
    isRemote: false,
    isUrgent: true
  },
  {
    id: "2",
    title: "Agricultural Specialist",
    department: "Agriculture",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6-9 LPA",
    postedDate: "2024-01-10",
    description: "Provide technical expertise in sustainable agriculture practices and mushroom cultivation techniques.",
    requirements: [
      "Bachelor's degree in Agriculture or Horticulture",
      "3+ years experience in sustainable farming",
      "Knowledge of mushroom cultivation",
      "Experience with organic farming methods",
      "Strong communication skills"
    ],
    responsibilities: [
      "Develop agricultural training programs",
      "Provide technical support to farmers",
      "Conduct field visits and assessments",
      "Create educational materials",
      "Monitor crop performance and yields"
    ],
    benefits: [
      "Remote work flexibility",
      "Health and wellness benefits",
      "Training and certification opportunities",
      "Performance-based incentives",
      "Equipment and technology support"
    ],
    isRemote: true,
    isUrgent: false
  },
  {
    id: "3",
    title: "Community Outreach Coordinator",
    department: "Community Development",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4-6 LPA",
    postedDate: "2024-01-08",
    description: "Build relationships with rural communities and coordinate outreach programs.",
    requirements: [
      "Bachelor's degree in Social Work or related field",
      "2+ years community engagement experience",
      "Strong interpersonal skills",
      "Knowledge of local communities",
      "Willingness to travel extensively"
    ],
    responsibilities: [
      "Build partnerships with community leaders",
      "Organize community meetings and events",
      "Collect feedback and data from communities",
      "Coordinate volunteer programs",
      "Maintain community relationships"
    ],
    benefits: [
      "Travel and accommodation allowances",
      "Health insurance",
      "Professional development",
      "Community impact recognition",
      "Flexible scheduling"
    ],
    isRemote: false,
    isUrgent: true
  },
  {
    id: "4",
    title: "Marketing & Communications Intern",
    department: "Communications",
    location: "Kolkata, West Bengal",
    type: "Internship",
    experience: "0-1 years",
    salary: "₹15,000/month",
    postedDate: "2024-01-05",
    description: "Support marketing and communications efforts to raise awareness about our programs.",
    requirements: [
      "Currently pursuing or completed degree in Marketing/Communications",
      "Strong writing and design skills",
      "Social media management experience",
      "Creative thinking and problem-solving",
      "Passion for social impact"
    ],
    responsibilities: [
      "Create social media content",
      "Assist with website updates",
      "Help organize events and campaigns",
      "Support donor communications",
      "Conduct market research"
    ],
    benefits: [
      "Hands-on experience in NGO sector",
      "Mentorship from experienced professionals",
      "Certificate upon completion",
      "Potential for full-time conversion",
      "Networking opportunities"
    ],
    isRemote: false,
    isUrgent: false
  },
  {
    id: "5",
    title: "Finance & Operations Manager",
    department: "Finance",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    experience: "4-6 years",
    salary: "₹7-10 LPA",
    postedDate: "2024-01-03",
    description: "Manage financial operations, budgeting, and ensure compliance with NGO regulations.",
    requirements: [
      "CA/CMA or MBA in Finance",
      "4+ years experience in NGO finance",
      "Knowledge of FCRA compliance",
      "Experience with accounting software",
      "Strong analytical skills"
    ],
    responsibilities: [
      "Prepare and manage budgets",
      "Ensure financial compliance",
      "Prepare donor reports",
      "Manage vendor relationships",
      "Oversee audit processes"
    ],
    benefits: [
      "Competitive salary package",
      "Health and life insurance",
      "Professional development",
      "Performance bonuses",
      "Work-life balance"
    ],
    isRemote: false,
    isUrgent: false
  }
]

export function JobListings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesType = selectedType === "all" || job.type === selectedType
    const matchesLocation = selectedLocation === "all" || 
                           (selectedLocation === "remote" && job.isRemote) ||
                           (selectedLocation === "onsite" && !job.isRemote)
    
    return matchesSearch && matchesDepartment && matchesType && matchesLocation
  })

  const departments = Array.from(new Set(jobs.map(job => job.department)))
  const jobTypes = Array.from(new Set(jobs.map(job => job.type)))

  return (
    <section id="job-listings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and make a difference in rural communities across India. 
            Find the perfect role that matches your skills and passion.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {jobTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedDepartment("all")
                setSelectedType("all")
                setSelectedLocation("all")
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new positions.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-600">
          Showing {filteredJobs.length} of {jobs.length} positions
        </div>
      </div>
    </section>
  )
}

function JobCard({ job }: { job: Job }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  const handleApplyNow = () => {
    setIsDialogOpen(false)
    setIsApplyDialogOpen(true)
  }

  const handleSaveJob = () => {
    if (savedJobs.includes(job.id)) {
      setSavedJobs(prev => prev.filter(id => id !== job.id))
    } else {
      setSavedJobs(prev => [...prev, job.id])
    }
  }

  const isJobSaved = savedJobs.includes(job.id)

  return (
    <>
      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl">{job.title}</CardTitle>
                {job.isUrgent && (
                  <Badge variant="destructive" className="text-xs">Urgent</Badge>
                )}
                {job.isRemote && (
                  <Badge variant="secondary" className="text-xs">Remote</Badge>
                )}
              </div>
              <CardDescription className="text-base">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {job.experience} experience
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </div>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                  <DialogDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Job Description</h4>
                    <p className="text-gray-700">{job.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Requirements</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Benefits</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={handleApplyNow}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleSaveJob}
                    >
                      {isJobSaved ? "Saved" : "Save Job"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Apply Now Dialog */}
      <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Apply for {job.title}</DialogTitle>
            <DialogDescription>
              Please fill out the application form below to apply for this position.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <Input placeholder="Enter your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume/CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload-apply"
                />
                <label htmlFor="resume-upload-apply" className="cursor-pointer">
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter
              </label>
              <Textarea
                placeholder="Tell us why you're interested in this position and how your experience aligns with our mission..."
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // Handle form submission here
                  alert("Application submitted successfully!")
                  setIsApplyDialogOpen(false)
                }}
              >
                Submit Application
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsApplyDialogOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 