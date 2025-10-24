import { Hero } from "@/components/hero"
import { TourDates } from "@/components/tour-dates"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TourDates />
      <Footer />
    </main>
  )
}
