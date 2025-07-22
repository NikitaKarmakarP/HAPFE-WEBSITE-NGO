interface PastEventsHeroProps {
  title: string
  description: string
  breadcrumb: string
}

export function PastEventsHero({ title, description, breadcrumb }: PastEventsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-700 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="mb-4">
            <span className="text-blue-200 text-sm">Knowledge Hub / {breadcrumb}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">{description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-blue-200 text-sm">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5,000+</div>
              <div className="text-blue-200 text-sm">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25</div>
              <div className="text-blue-200 text-sm">Locations Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Years of Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
