import { DonateHero } from "@/components/donate/donate-hero"
import { DonationForm } from "@/components/donate/donation-form"
import { DonationImpact } from "@/components/donate/donation-impact"
import { DonationMethods } from "@/components/donate/donation-methods"
import { DonationFAQ } from "@/components/donate/donation-faq"
import { ContactSection } from "@/components/contact-section"

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <DonateHero />
      <DonationForm />
      <DonationImpact />
      <DonationMethods />
      <DonationFAQ />
      <ContactSection />
    </main>
  )
}
