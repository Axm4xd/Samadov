import Header from "@/components/header"

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Stay updated with the latest trends, insights, and behind-the-scenes stories from the world of animation.
            </p>

            <div className="space-y-8 mt-16 text-left">
              {[1, 2, 3].map((item) => (
                <article
                  key={item}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    The Future of Animation Technology
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Exploring the latest trends and innovations that are shaping the animation industry...
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>January {item}, 2024</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
