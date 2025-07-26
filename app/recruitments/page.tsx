import { Metadata } from "next"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobListings } from "@/components/careers/job-listings"
import { ApplicationProcess } from "@/components/careers/application-process"
import { CareersCTA } from "@/components/careers/careers-cta"

export const metadata: Metadata = {
  title: "Recruitments - Join Our Team | HAPEF",
  description: "Explore recruitment opportunities at HAPEF. Join our mission to empower rural communities through sustainable development programs.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <JobListings />
      <ApplicationProcess />
      <CareersCTA />
    </main>
  )
} 