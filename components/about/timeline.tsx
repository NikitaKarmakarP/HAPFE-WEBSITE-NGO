import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Sprout } from "lucide-react"

/**
 * Journey timeline shown on /about. Added `id="timeline"`
 * so links like /about#timeline scroll here.
 */
export function Timeline() {
  const milestones = [
    {
      year: "2022",
      title: "Foundation Established",
      description: "HAPEF was officially registered as an NGO in Kolkata with a mission to eradicate rural poverty.",
      icon: Calendar,
      color: "green",
    },
    {
      year: "2022",
      title: "First Mushroom Program",
      description: "Launched our flagship mushroom cultivation program in 5 villages of Pakur district.",
      icon: Sprout,
      color: "emerald",
    },
    {
      year: "2023",
      title: "100 Families Milestone",
      description: "Successfully trained and supported 100 families in sustainable agricultural practices.",
      icon: Users,
      color: "blue",
    },
    {
      year: "2023",
      title: "Government Partnership",
      description: "Established formal partnerships with government departments for program expansion.",
      icon: Award,
      color: "purple",
    },
    {
      year: "2024",
      title: "Climate Resilience Focus",
      description: "Launched climate-resilient agriculture programs addressing environmental challenges.",
      icon: Sprout,
      color: "teal",
    },
    {
      year: "2024",
      title: "500+ Families Impact",
      description: "Reached milestone of supporting over 500 families across 50+ villages.",
      icon: Users,
      color: "orange",
    },
    {
      year: "2025",
      title: "Digital Transformation Initiative",
      description: "Launched comprehensive digital literacy and e-commerce programs to connect rural communities with global markets.",
      icon: Award,
      color: "purple",
    },
  ]

  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of dedicated service, continuous growth, and measurable impact in rural communities.
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 to-blue-200 rounded-full" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={`${m.year}-${m.title}`}
                className={`flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* milestone card */}
                <div className={`w-1/2 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                        <div className={`p-2 rounded-lg bg-${m.color}-100`}>
                          <m.icon className={`h-5 w-5 text-${m.color}-600`} />
                        </div>
                        <span className={`text-2xl font-bold text-${m.color}-600`}>{m.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-gray-600">{m.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* dot */}
                <div className="relative z-10">
                  <div className={`w-4 h-4 bg-${m.color}-500 rounded-full border-4 border-white shadow-lg`} />
                </div>

                {/* empty side */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
