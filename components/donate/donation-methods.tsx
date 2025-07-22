"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Building, QrCode, Copy, Shield, Award, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DonationMethods() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)

    // Show success animation
    const toast = document.createElement("div")
    toast.innerHTML = `
      <div class="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Copied to clipboard! ✨
        </div>
      </div>
    `
    document.body.appendChild(toast)
    setTimeout(() => document.body.removeChild(toast), 3000)
  }

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Online Payment",
      description: "Secure payment via credit/debit cards, net banking, and wallets",
      features: ["Instant confirmation", "Multiple card support", "Secure encryption"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      emoji: "💳",
    },
    {
      icon: Smartphone,
      title: "UPI Payment",
      description: "Quick and easy payment via UPI",
      features: ["Instant transfer", "No transaction fees", "Works with all UPI apps"],
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      emoji: "📱",
      upiId: "hapef@upi",
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer for larger donations",
      features: ["No processing fees", "Bulk donations", "Corporate friendly"],
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      emoji: "🏦",
      bankDetails: {
        account: "1234567890",
        ifsc: "SBIN0001234",
        bank: "State Bank of India",
      },
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Scan to pay instantly",
      features: ["Quick scan", "Any UPI app", "Instant payment"],
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      emoji: "📲",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg mb-8">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-800">Multiple Payment Options</span>
            <Shield className="h-4 w-4 text-green-600" />
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Preferred Method
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We support multiple secure payment methods to make donating convenient for you. All transactions are
            encrypted and tax-deductible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${method.bgGradient} hover:scale-105 hover:-translate-y-2`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 text-center relative z-10">
                {/* Icon with Animation */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                  >
                    <method.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce group-hover:animate-spin">
                    {method.emoji}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {method.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className={`h-4 w-4 text-${method.color}-500`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Special Content for UPI */}
                {method.upiId && (
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl mb-4 border border-green-200">
                    <div className="text-sm font-mono text-gray-800 mb-2">{method.upiId}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(method.upiId!)}
                      className={`border-${method.color}-500 text-${method.color}-600 hover:bg-${method.color}-50 group-hover:scale-105 transition-all duration-300`}
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy UPI ID
                    </Button>
                  </div>
                )}

                {/* Special Content for Bank */}
                {method.bankDetails && (
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-sm space-y-1 border border-purple-200">
                    <div>
                      <strong>A/C:</strong> {method.bankDetails.account}
                    </div>
                    <div>
                      <strong>IFSC:</strong> {method.bankDetails.ifsc}
                    </div>
                    <div>
                      <strong>Bank:</strong> {method.bankDetails.bank}
                    </div>
                  </div>
                )}

                {/* QR Code for QR method */}
                {method.title === "QR Code" && (
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-200">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <QrCode className="h-12 w-12 text-gray-500" />
                    </div>
                    <div className="text-xs text-gray-500">Scan with any UPI app</div>
                  </div>
                )}

                {/* Action Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${method.gradient} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white font-semibold py-3 rounded-xl mt-4`}
                >
                  {method.title === "QR Code" ? "Scan QR" : `Pay via ${method.title.split(" ")[0]}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Tax Benefits Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="tax-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#tax-pattern)" />
              </svg>
            </div>

            <div className="relative text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Award className="h-6 w-6 animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold">Tax Benefits & Security</h3>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Shield className="h-6 w-6 animate-bounce" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    80G
                  </div>
                  <div className="text-green-100 font-medium mb-2">Tax Exemption Certificate</div>
                  <div className="text-sm text-green-200">Official government recognition</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    50%
                  </div>
                  <div className="text-green-100 font-medium mb-2">Tax Deduction Available</div>
                  <div className="text-sm text-green-200">Save on your income tax</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    24hrs
                  </div>
                  <div className="text-green-100 font-medium mb-2">Receipt Generation</div>
                  <div className="text-sm text-green-200">Instant email confirmation</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Tax Benefits
                    </h4>
                    <p className="text-green-100 leading-relaxed">
                      HAPEF is registered under Section 80G of the Income Tax Act. You can claim 50% tax deduction on
                      your donations. Official receipts are generated within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Promise
                    </h4>
                    <p className="text-green-100 leading-relaxed">
                      All transactions use bank-grade encryption. Your personal and financial information is protected
                      with industry-standard security measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
