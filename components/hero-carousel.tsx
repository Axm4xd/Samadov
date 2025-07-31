"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    quote: "Every great design begins with an even better story",
    author: "LORINDA MAMO",
    title: "DESIGNER",
    background: "bg-gradient-to-br from-red-500 via-orange-500 to-red-600",
  },
  {
    id: 2,
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "STEVE JOBS",
    title: "CO-FOUNDER OF APPLE, INC.",
    background: "bg-gradient-to-br from-red-500 via-orange-500 to-red-600",
  },
  {
    id: 3,
    quote:
      "The more I deal with the work as something that is my own, as something that is personal, the more successful it is.",
    author: "MARIAN BANTJES",
    title: "DESIGNER AND AUTHOR",
    background: "bg-gradient-to-br from-red-500 via-orange-500 to-red-600",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 transform translate-x-0"
              : index < currentSlide
                ? "opacity-0 transform -translate-x-full"
                : "opacity-0 transform translate-x-full"
          } ${slide.background}`}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="text-6xl md:text-8xl text-white/20 font-serif leading-none">"</span>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2)",
                }}
              >
                {slide.quote}
              </h1>

              <div className="space-y-2">
                <p
                  className="text-lg md:text-xl text-white/90 font-medium tracking-widest uppercase"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.author}
                </p>
                <p
                  className="text-sm md:text-base text-white/80 tracking-wider uppercase"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                </p>
              </div>

              <div className="mt-8">
                <span className="text-6xl md:text-8xl text-white/20 font-serif leading-none">"</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
