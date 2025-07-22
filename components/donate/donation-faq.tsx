"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function DonationFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, HAPEF is registered under Section 80G of the Income Tax Act. You can claim 50% tax deduction on your donations. We provide official receipts for all donations.",
    },
    {
      question: "How is my donation used?",
      answer:
        "100% of your donation goes directly to our programs. Our operational costs are covered by grants and partnerships. Your money supports mushroom farming training, blanket distribution, sustainable agriculture programs, and community development initiatives.",
    },
    {
      question: "Can I donate monthly?",
      answer:
        "Yes, we offer monthly donation options. You can set up recurring donations through our online form. You can modify or cancel your monthly donation anytime by contacting us.",
    },
    {
      question: "Do you accept international donations?",
      answer:
        "Currently, we accept donations from Indian residents only. We are working on enabling international donations through FCRA registration. Please contact us for more information about international contributions.",
    },
    {
      question: "How do I get a donation receipt?",
      answer:
        "Donation receipts are automatically generated and sent to your email within 24 hours of your donation. For bank transfers, please email us your transaction details to receive your receipt.",
    },
    {
      question: "Can I donate for a specific program?",
      answer:
        "Yes, you can specify which program you'd like to support in the message field during donation. We offer donations for mushroom farming, blanket distribution, climate-resilient agriculture, and general community development.",
    },
    {
      question: "Is online donation secure?",
      answer:
        "Yes, all online donations are processed through secure, encrypted payment gateways. We use industry-standard security measures to protect your personal and financial information.",
    },
    {
      question: "Can I visit your programs?",
      answer:
        "Yes, donors are welcome to visit our programs in Pakur district, Jharkhand. Please contact us in advance to arrange a visit. We also organize donor visits and impact tours periodically.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about donating to HAPEF</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:donate@hapef.org"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
