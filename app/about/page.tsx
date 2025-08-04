import Header from "@/components/header"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              ABOUT US
            </h1>
          </div>

          {/* Content Section - Zigzag Layout */}
          <div className="space-y-20">
            {/* First Section - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Time, creativity, and uniqueness are things that are constantly on the line in your work. You know
                  that quality graphics are the means that can make your project stand out and keep looking attractive.
                  However, when deadlines are tight and budgets are limited, you need to find the right balance between
                  speed and quality.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  And when graphic content demands increase and available time is shrinking, it can feel like everything
                  is going against you.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=384&width=320&text=Creative+Studio"
                    alt="Creative studio workspace"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Section - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="w-80 h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=256&width=320&text=Live+Event"
                    alt="Live event production"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We understand your pain, the lack of time to detail graphic solutions, the pressure of deadlines and
                  budgets, the fear of missing important details, and the uncertainty of the end result.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  That's why we offer not only creating graphics from scratch, but also ready-made solutions that have
                  already proven their effectiveness.
                </p>
              </div>
            </div>

            {/* Third Section - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Thanks to our experienced team, we can visit our graphics shop page, which allows you to choose
                  ready-made works, or you can send us your requirements, and we will create purchasing which you become
                  the proud owner of these works.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  They can get in instant and progressive, without unnecessary delays and risks.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-72 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=288&width=320&text=Animation+Work"
                    alt="Animation production"
                    width={320}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Fourth Section - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="w-80 h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=256&width=320&text=TV+Production"
                    alt="TV production studio"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We have been working with graphics for television and advertising since 2001 accumulating 25 years
                  decades of experience in creating visual content that attracts and retains viewers.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We specialise in intros, TV rebranding, documentaries and animations films, advertising and commercial
                  presentations.
                </p>
              </div>
            </div>

            {/* Fifth Section - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our unique advantage is our flexible pricing based on our clients' needs and the ability to buy
                  ready-made work. We know what it means to work under pressure and time limits so we can provide the
                  budget to help you achieve not only custom solutions, but also quick access to high-quality content.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">Content that can be implemented immediately.</p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-64 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=256&width=320&text=Architecture+Design"
                    alt="Architectural visualization"
                    width={320}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Final Call to Action Section */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 text-center border border-red-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Create Something Impressive?</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-3xl mx-auto">
                Ready to purchase yourself and become the owner of your projects? Visit our shop section and choose the
                graphics that will become the new face of your content, or check out our work in the{" "}
                <span className="text-red-400 font-semibold">portfolio</span> section to order any graphic work and
                advertising.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                Let our experience and friendly assistance make your job easier. Increase your clients' trust and free
                up your time for what really matters - contact us and let's create something impressive together.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  <a href="../portfolio">View Portfolio</a>
                </button>
                <button className="btn-secondary px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
                  <a href="../contact">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
