"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Upload, FileText, Send, Clock, Users, Award, Mail } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Submit Application",
    description: "Fill out our online application form with your details and upload your resume",
    icon: FileText,
    duration: "5 minutes"
  },
  {
    id: 2,
    title: "Application Review",
    description: "Our HR team reviews your application and qualifications",
    icon: Clock,
    duration: "3-5 business days"
  },
  {
    id: 3,
    title: "Initial Interview",
    description: "Phone or video interview to discuss your background and interest",
    icon: Users,
    duration: "30-45 minutes"
  },
  {
    id: 4,
    title: "Final Interview",
    description: "In-person or video interview with the hiring manager and team",
    icon: Award,
    duration: "1-2 hours"
  },
  {
    id: 5,
    title: "Offer & Onboarding",
    description: "Receive offer letter and begin the onboarding process",
    icon: CheckCircle,
    duration: "1-2 weeks"
  }
]

export function ApplicationProcess() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
    portfolio: "",
    source: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section id="application-process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our application process is designed to be simple and transparent. 
            Follow these steps to join our team and make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Application Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      currentStep >= step.id 
                        ? "bg-green-100 text-green-600" 
                        : "bg-gray-100 text-gray-400"
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <Card className="mt-8 bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Application Tips</CardTitle>
                <CardDescription>
                  Make your application stand out with these helpful tips
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Tailor your cover letter to the specific position and our mission
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Highlight relevant experience in rural development or NGO sector
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Include specific examples of your impact in previous roles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Demonstrate your passion for community development
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Application</CardTitle>
                <CardDescription>
                  Start your application process by filling out this form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Position Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position of Interest *
                      </label>
                      <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="program-manager">Program Manager - Rural Development</SelectItem>
                          <SelectItem value="agricultural-specialist">Agricultural Specialist</SelectItem>
                          <SelectItem value="community-coordinator">Community Outreach Coordinator</SelectItem>
                          <SelectItem value="marketing-intern">Marketing & Communications Intern</SelectItem>
                          <SelectItem value="finance-manager">Finance & Operations Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-4">2-4 years</SelectItem>
                          <SelectItem value="5-8">5-8 years</SelectItem>
                          <SelectItem value="8+">8+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <p className="text-sm text-gray-600 mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, or DOCX (max 5MB)
                        </p>
                      </label>
                      {formData.resume && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <Textarea
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you're interested in this position and how your experience aligns with our mission..."
                      rows={4}
                    />
                  </div>

                  {/* Portfolio/Website */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/Website (Optional)
                    </label>
                    <Input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <Select value={formData.source} onValueChange={(value) => handleInputChange("source", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Our Website</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="indeed">Indeed</SelectItem>
                        <SelectItem value="referral">Employee Referral</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full group bg-green-600 hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this application, you agree to our privacy policy and consent to 
                    being contacted regarding your application.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 