import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />


      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main Hero Section */}
      <HeroSection />
    </div>
  )
}
