import Header from "@/components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">Portfolio</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Explore our latest projects and creative works that showcase our expertise in animation and visual
              storytelling.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 card-component"
                >
                  <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Creative animation project showcasing our expertise in visual storytelling.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
