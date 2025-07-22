import { Award, Trophy, Star, Medal, Users } from "lucide-react"

export function Recognition() {
  const awards = [
    {
      title: "Excellence in Rural Development",
      organization: "Ministry of Rural Development, India",
      year: "2023",
      description:
        "Recognized for outstanding contribution to rural livelihood enhancement through innovative agricultural programs.",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      title: "Best NGO for Community Impact",
      organization: "West Bengal State Government",
      year: "2023",
      description: "Awarded for exceptional work in community empowerment and sustainable development initiatives.",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Innovation in Agriculture Award",
      organization: "Indian Council of Agricultural Research",
      year: "2022",
      description: "Honored for pioneering mushroom cultivation techniques and climate-resilient farming practices.",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Social Impact Recognition",
      organization: "United Nations Development Programme",
      year: "2022",
      description:
        "Acknowledged for significant contribution to poverty alleviation and sustainable development goals.",
      icon: Medal,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  const mediaFeatures = [
    {
      title: "Featured in The Times of India",
      date: "March 2023",
      description: "HAPEF's mushroom entrepreneurship program highlighted as a model for rural development.",
      type: "Newspaper",
    },
    {
      title: "Documentary on DD National",
      date: "January 2023",
      description: "30-minute documentary showcasing HAPEF's impact on rural communities aired nationally.",
      type: "Television",
    },
    {
      title: "Interview on All India Radio",
      date: "December 2022",
      description: "Founder's interview discussing innovative approaches to poverty eradication.",
      type: "Radio",
    },
    {
      title: "Featured in Rural Development Magazine",
      date: "November 2022",
      description: "Cover story on HAPEF's climate-resilient agriculture initiatives.",
      type: "Magazine",
    },
  ]

  const partnerships = [
    {
      name: "Ministry of Rural Development",
      type: "Government Partnership",
      description: "Collaborative programs for rural livelihood enhancement",
    },
    {
      name: "NABARD",
      type: "Financial Institution",
      description: "Support for microfinance and rural development projects",
    },
    {
      name: "Indian Council of Agricultural Research",
      type: "Research Institution",
      description: "Technical collaboration for agricultural innovation",
    },
    {
      name: "West Bengal State Rural Livelihood Mission",
      type: "State Government",
      description: "Joint initiatives for community empowerment",
    },
  ]

  return (
    <section
      id="recognition"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm mb-6">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Recognition & Awards</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Honors &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Recognition
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedication to rural development and community empowerment has been recognized by prestigious
            organizations and featured in leading media outlets across India.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon
              return (
                <div
                  key={index}
                  className={`${award.bgColor} ${award.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${award.color} p-3 bg-white rounded-xl shadow-sm`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{award.title}</h4>
                        <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                          {award.year}
                        </span>
                      </div>
                      <p className={`${award.color} font-medium mb-3`}>{award.organization}</p>
                      <p className="text-gray-700 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Media Coverage</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 flex-1">{feature.title}</h4>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                    {feature.type}
                  </span>
                </div>
                <p className="text-sm text-blue-600 font-medium mb-2">{feature.date}</p>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-green-600 font-medium mb-2">{partner.type}</p>
                <p className="text-xs text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Recognition Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-100">Awards Received</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100">Media Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-green-100">Key Partnerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-green-100">Government Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recognition
