import { Metadata } from "next"
import { SuccessStoriesHero } from "@/components/success-stories/success-stories-hero"
import { SuccessStoriesGrid } from "@/components/success-stories/success-stories-grid"
import { SuccessStoriesCTA } from "@/components/success-stories/success-stories-cta"

export const metadata: Metadata = {
  title: "Success Stories - HAPEF",
  description: "Discover inspiring success stories from individuals and communities whose lives have been transformed through HAPEF's programs. Read about real impact and positive change.",
}

export default function SuccessStoriesPage() {
  return (
    <main>
      <SuccessStoriesHero />
      <SuccessStoriesGrid />
      <SuccessStoriesCTA />
    </main>
  )
} 