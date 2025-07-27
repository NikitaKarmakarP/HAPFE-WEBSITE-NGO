"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Shield, Lock, CreditCard, Gift, Star, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [selectedFrequency, setSelectedFrequency] = useState("one-time")
  const [selectedProgram, setSelectedProgram] = useState("general")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [showReceipt, setShowReceipt] = useState(true)

  const presetAmounts = [
    { value: "500", label: "₹500", impact: "Train 1 farmer" },
    { value: "1000", label: "₹1,000", impact: "Support 2 families" },
    { value: "2000", label: "₹2,000", impact: "Monthly family support" },
    { value: "5000", label: "₹5,000", impact: "Blankets for 10 families" },
    { value: "10000", label: "₹10,000", impact: "Complete mushroom unit" },
    { value: "25000", label: "₹25,000", impact: "Village transformation" },
  ]

  const programs = [
    { value: "general", label: "General Fund", description: "Most needed areas" },
    { value: "agriculture", label: "Agricultural Innovation", description: "Mushroom farming & sustainable practices" },
    { value: "community", label: "Community Empowerment", description: "Leadership training & skill development" },
    { value: "rural", label: "Rural Development", description: "Infrastructure & sustainable projects" },
  ]

  const frequencies = [
    { value: "one-time", label: "One Time", description: "Single donation" },
    { value: "monthly", label: "Monthly", description: "Recurring support" },
    { value: "quarterly", label: "Quarterly", description: "Seasonal impact" },
  ]

  return (
    <section id="donation-form" className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-green-200 shadow-xl mb-8 group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-lg font-bold text-gray-800">Secure Donation</span>
            <Shield className="h-5 w-5 text-green-600" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Donation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution makes a real difference. Choose your amount and program to start transforming lives today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  Donation Details
                  <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {presetAmounts.map((amount) => (
                      <div
                        key={amount.value}
                        className={`group relative cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount.value
                            ? "border-green-500 bg-green-50 shadow-lg"
                            : "border-gray-200 hover:border-green-300 bg-white"
                        }`}
                        onClick={() => setSelectedAmount(amount.value)}
                      >
                        <div className="text-center">
                          <div className={`text-2xl font-bold mb-2 ${
                            selectedAmount === amount.value ? "text-green-600" : "text-gray-900"
                          }`}>
                            {amount.label}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">{amount.impact}</div>
                        </div>
                        {selectedAmount === amount.value && (
                          <div className="absolute -top-2 -right-2">
                            <CheckCircle className="h-6 w-6 text-green-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <div className="mt-6">
                    <Label className="text-lg font-semibold text-gray-900">Or Enter Custom Amount</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">₹</span>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount("")
                        }}
                        className="pl-8 py-4 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Frequency Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">Donation Frequency</Label>
                  <RadioGroup value={selectedFrequency} onValueChange={setSelectedFrequency} className="grid grid-cols-3 gap-4">
                    {frequencies.map((frequency) => (
                      <div
                        key={frequency.value}
                        className={`group relative cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 hover:scale-105 ${
                          selectedFrequency === frequency.value
                            ? "border-green-500 bg-green-50 shadow-lg"
                            : "border-gray-200 hover:border-green-300 bg-white"
                        }`}
                      >
                        <RadioGroupItem value={frequency.value} className="sr-only" />
                        <div className="text-center">
                          <div className={`text-lg font-bold mb-2 ${
                            selectedFrequency === frequency.value ? "text-green-600" : "text-gray-900"
                          }`}>
                            {frequency.label}
                          </div>
                          <div className="text-sm text-gray-600">{frequency.description}</div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Program Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">Program Area</Label>
                  <RadioGroup value={selectedProgram} onValueChange={setSelectedProgram} className="grid grid-cols-2 gap-4">
                    {programs.map((program) => (
                      <div
                        key={program.value}
                        className={`group relative cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 hover:scale-105 ${
                          selectedProgram === program.value
                            ? "border-green-500 bg-green-50 shadow-lg"
                            : "border-gray-200 hover:border-green-300 bg-white"
                        }`}
                      >
                        <RadioGroupItem value={program.value} className="sr-only" />
                        <div>
                          <div className={`text-lg font-bold mb-2 ${
                            selectedProgram === program.value ? "text-green-600" : "text-gray-900"
                          }`}>
                            {program.label}
                          </div>
                          <div className="text-sm text-gray-600">{program.description}</div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-900">Personal Information</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                      <Input id="firstName" className="mt-1 py-3 border-2 border-gray-200 focus:border-green-500 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                      <Input id="lastName" className="mt-1 py-3 border-2 border-gray-200 focus:border-green-500 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                    <Input id="email" type="email" className="mt-1 py-3 border-2 border-gray-200 focus:border-green-500 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1 py-3 border-2 border-gray-200 focus:border-green-500 rounded-xl" />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                    />
                    <Label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                      Make this donation anonymous
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="receipt"
                      checked={showReceipt}
                      onCheckedChange={(checked) => setShowReceipt(checked as boolean)}
                    />
                    <Label htmlFor="receipt" className="text-sm font-medium text-gray-700">
                      Send me a tax receipt
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                  <span className="flex items-center gap-3">
                    <Heart className="h-6 w-6 group-hover:animate-pulse" />
                    Complete Donation
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Badge */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-8 w-8" />
                  <h3 className="text-xl font-bold">100% Secure</h3>
                  <Lock className="h-6 w-6" />
                </div>
                <p className="text-green-100 text-sm">
                  Your donation is protected by bank-level security encryption
                </p>
              </CardContent>
            </Card>

            {/* Impact Preview */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Gift className="h-6 w-6 text-green-600" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹{selectedAmount || customAmount || "0"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedAmount === "500" && "Will train 1 farmer in mushroom cultivation"}
                    {selectedAmount === "1000" && "Will support 2 families for a week"}
                    {selectedAmount === "2000" && "Will support a family for one month"}
                    {selectedAmount === "5000" && "Will provide blankets for 10 families"}
                    {selectedAmount === "10000" && "Will set up a complete mushroom unit"}
                    {selectedAmount === "25000" && "Will transform an entire village"}
                    {!selectedAmount && customAmount && "Will create meaningful impact"}
                    {!selectedAmount && !customAmount && "Choose an amount to see your impact"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Why Trust Us?
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Registered NGO since 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>100% transparency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Tax deductible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Instant receipt</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
