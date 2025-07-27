"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ArrowRight, MapPin, Calendar, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import React from "react"

export function SuccessStoriesGrid() {
  const stories = [
    {
      name: "Priya Devi",
      location: "Pakur District, Jharkhand",
      program: "Mushroom Entrepreneurship",
      story: "Before joining HAPEF's mushroom program, I struggled to support my family of four with just my husband's farming income. The training changed everything. Now I earn ₹18,000 monthly from mushroom cultivation and have become financially independent. My children can attend better schools, and I'm even training other women in my village.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "300% income increase",
      rating: 5,
      beforeIncome: "₹3,000",
      afterIncome: "₹18,000",
      date: "2024",
      achievements: ["Started own business", "Training other women", "Children in better schools"]
    },
    {
      name: "Ram Kumar",
      location: "Hiranpur Block, Jharkhand",
      program: "Climate-Resilient Agriculture",
      story: "Climate change was destroying our traditional farming methods. HAPEF taught us drought-resistant techniques and crop diversification. Our village now has food security year-round, and we've reduced water usage by 40% while increasing yields by 60%. The entire community has benefited from these sustainable practices.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "60% yield increase",
      rating: 5,
      beforeIncome: "₹25,000",
      afterIncome: "₹45,000",
      date: "2024",
      achievements: ["Food security achieved", "40% water reduction", "Community leader"]
    },
    {
      name: "Sunita Kumari",
      location: "Pakur District, Jharkhand",
      program: "Community Leadership",
      story: "I was just a housewife with no voice in community decisions. Through HAPEF's leadership program, I learned to speak up, organize, and lead. Today, I'm the village head and have initiated several development projects. I've helped establish a women's self-help group that now has 50 members and manages a fund of ₹2 lakhs.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Community leader",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹12,000",
      date: "2024",
      achievements: ["Village head", "50-member SHG", "₹2 lakhs fund managed"]
    },
    {
      name: "Lakshmi Devi",
      location: "Bankura District, West Bengal",
      program: "Women's Empowerment",
      story: "As a widow with three children, I had no source of income. HAPEF's women's empowerment program gave me the skills and confidence to start a small tailoring business. Now I earn ₹15,000 monthly and have trained 12 other women in my village.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Self-employed entrepreneur",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹15,000",
      date: "2024",
      achievements: ["Tailoring business", "12 women trained", "Financial independence"]
    },
    {
      name: "Mohan Singh",
      location: "Purulia District, West Bengal",
      program: "Sustainable Agriculture",
      story: "Traditional farming was becoming unsustainable due to climate change. HAPEF introduced us to organic farming techniques and crop rotation. My farm now produces 70% more yield with 50% less water usage. I've also started a small nursery business.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "70% yield increase",
      rating: 5,
      beforeIncome: "₹20,000",
      afterIncome: "₹35,000",
      date: "2024",
      achievements: ["Organic farming", "Nursery business", "Water conservation"]
    },
    {
      name: "Rekha Devi",
      location: "Pakur District, Jharkhand",
      program: "Education & Literacy",
      story: "I was illiterate and couldn't help my children with their studies. Through HAPEF's adult literacy program, I learned to read and write. Now I run a small library in my village and help other women learn basic literacy skills.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Literacy achievement",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹8,000",
      date: "2024",
      achievements: ["Literate", "Village library", "Teaching others"]
    },
    {
      name: "Ajay Kumar",
      location: "Hiranpur Block, Jharkhand",
      program: "Youth Skill Development",
      story: "After completing my education, I had no job opportunities in my village. HAPEF's skill development program trained me in computer skills and digital marketing. Now I run a successful online business and employ 5 other youth from my village.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Digital entrepreneur",
      rating: 5,
      beforeIncome: "₹0",
      afterIncome: "₹25,000",
      date: "2024",
      achievements: ["Online business", "5 youth employed", "Digital skills"]
    },
    {
      name: "Geeta Devi",
      location: "Bankura District, West Bengal",
      program: "Health & Nutrition",
      story: "My family was suffering from malnutrition due to poor dietary habits. HAPEF's nutrition program taught us about balanced diets and kitchen gardening. Now we grow our own vegetables and have improved our family's health significantly.",
      image: "/placeholder.svg?height=100&width=100",
      impact: "Improved nutrition",
      rating: 5,
      beforeIncome: "₹5,000",
      afterIncome: "₹12,000",
      date: "2024",
      achievements: ["Kitchen garden", "Better nutrition", "Health awareness"]
    }
  ]

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible journeys of transformation from individuals and communities across rural India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Dialog key={index} open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-6 w-6 text-green-600" />
                    <div className="flex gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed italic text-sm line-clamp-3">
                    "{story.story.substring(0, 150)}..."
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{story.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Monthly Income</span>
                      <span className="text-xs font-medium text-green-600">{story.impact}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Before</div>
                        <div className="font-bold text-gray-900 text-sm">{story.beforeIncome}</div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-green-600" />
                      <div className="text-center">
                        <div className="text-xs text-gray-500">After</div>
                        <div className="font-bold text-green-600 text-sm">{story.afterIncome}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {story.date}
                    </div>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent text-xs"
                      >
                        Read Full Story
                      </Button>
                    </DialogTrigger>
                  </div>
                </CardContent>
              </Card>
              
              <DialogContent className="max-w-2xl w-full">
                <DialogTitle className="text-xl">{story.name} - {story.program}</DialogTitle>
                <div className="flex items-center gap-4 mb-4 mt-2">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </div>
                    <div className="text-sm text-green-600 font-medium">{story.program}</div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 mb-6 text-lg">"{story.story}"</blockquote>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Income Transformation</h4>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Before</div>
                        <div className="font-bold text-gray-900">{story.beforeIncome}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      <div className="text-center">
                        <div className="text-sm text-gray-500">After</div>
                        <div className="font-bold text-green-600">{story.afterIncome}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {story.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center">
                          <TrendingUp className="h-3 w-3 text-green-600 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    Impact: <span className="font-medium text-green-600">{story.impact}</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
} 