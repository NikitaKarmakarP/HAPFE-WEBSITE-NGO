import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Download, FileText, Eye, ArrowRight, TrendingUp, Users, MapPin } from "lucide-react"

export function AnnualReportsGrid() {
  const annualReports = [
    {
      year: "2024-25",
      title: "HAPEF Annual Report 2024-25",
      subtitle: "Empowering Rural Communities Through Innovation",
      description: "Our latest annual report showcasing transformative impact across rural India, featuring mushroom entrepreneurship success stories, climate-resilient agriculture initiatives, and community development programs.",
      highlights: [
        "500+ families empowered through sustainable programs",
        "50+ villages reached with development initiatives", 
        "3 major programs launched successfully",
        "100% financial transparency maintained"
      ],
      stats: {
        beneficiaries: "500+",
        villages: "50+",
        programs: "8",
        transparency: "100%"
      },
      image: "/placeholder.svg?height=300&width=400",
      downloads: 245,
      views: 1200,
      fileSize: "8.5 MB",
      fileType: "PDF",
      isLatest: true,
    },
    {
      year: "2023-24", 
      title: "HAPEF Annual Report 2023-24",
      subtitle: "Building Sustainable Futures Together",
      description: "Comprehensive overview of our second year of operations, highlighting the expansion of mushroom farming programs, introduction of climate-resilient agriculture, and community empowerment initiatives.",
      highlights: [
        "300+ families benefited from programs",
        "35+ villages engaged in development",
        "5 new programs initiated",
        "Strong community partnerships established"
      ],
      stats: {
        beneficiaries: "300+",
        villages: "35+", 
        programs: "5",
        transparency: "100%"
      },
      image: "/placeholder.svg?height=300&width=400",
      downloads: 189,
      views: 980,
      fileSize: "7.2 MB",
      fileType: "PDF",
      isLatest: false,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Reports (2023-24, 2024-25)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive annual reports to learn about our impact, achievements, and commitment to transparency.
          </p>
        </div>

        <div className="space-y-12">
          {annualReports.map((report, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {report.isLatest && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Latest
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {report.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-indigo-600 font-medium">Annual Report</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-lg text-indigo-600 font-medium mb-4">{report.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{report.description}</p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-indigo-50 rounded-lg">
                      <Users className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
                      <div className="font-bold text-gray-900">{report.stats.beneficiaries}</div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                      <div className="font-bold text-gray-900">{report.stats.villages}</div>
                      <div className="text-xs text-gray-600">Villages</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <div className="font-bold text-gray-900">{report.stats.programs}</div>
                      <div className="text-xs text-gray-600">Programs</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-bold text-gray-900">{report.stats.transparency}</div>
                      <div className="text-xs text-gray-600">Transparency</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 group">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{report.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{report.downloads} downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{report.fileSize} • {report.fileType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our Reports</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our annual reports provide comprehensive documentation of our programs, impact metrics, financial transparency, 
              and success stories. Each report is independently audited and follows international NGO reporting standards 
              to ensure complete transparency and accountability to our stakeholders and beneficiaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 