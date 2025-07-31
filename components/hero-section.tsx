"use client"

import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.3)",
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Samadov Animation Studio
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to our studio of visual innovation, where art and technology come together to create captivating
            graphics for television, advertising, animation and documentary films. We transform ideas into impressive
            visual stories that capture attention and leave a lasting impression.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center space-x-2">
              <span className="tracking-wide uppercase text-sm">Explore Our Services</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="btn-secondary group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Play size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="tracking-wide uppercase text-sm">Watch Our Reel</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                500+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                50+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                10+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
