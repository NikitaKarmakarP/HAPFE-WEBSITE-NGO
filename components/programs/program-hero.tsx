import { Sprout, Users } from "lucide-react"

interface ProgramHeroProps {
  data: {
    title: string
    subtitle: string
    description: string
    image: string
    stats: Array<{
      number: string
      label: string
    }>
  }
}

export function ProgramHero({ data }: ProgramHeroProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm mb-6">
              <Sprout className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Flagship Program</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>

            <h2 className="text-xl lg:text-2xl text-green-600 font-semibold mb-6">{data.subtitle}</h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{data.description}</p>

            <div className="grid grid-cols-2 gap-6">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-green-100"
                >
                  <div className="text-2xl font-bold text-green-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={data.image || "/placeholder.svg"} alt={data.title} className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-bold text-gray-900">Community Impact</div>
                  <div className="text-sm text-gray-600">Transforming lives daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
