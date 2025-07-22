interface UpcomingEventsHeroProps {
  title: string
  description: string
  breadcrumb: string
}

export function UpcomingEventsHero({ title, description, breadcrumb }: UpcomingEventsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <nav className="mb-4">
            <span className="text-green-200 text-sm">Knowledge Hub / {breadcrumb}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">{description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-green-200 text-sm">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-green-200 text-sm">Expected Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-green-200 text-sm">Event Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="text-green-200 text-sm">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
