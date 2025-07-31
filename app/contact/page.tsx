import Header from "@/components/header"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Ready to bring your vision to life? Get in touch with us to discuss your next project.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@samadov.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">Baku, Rashid Behbudov St., 59</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+994 XX XXX XX XX</p>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h2>
                <form className="form-component">
                  <input type="text" placeholder="Your Name" className="input-component" />
                  <input type="email" placeholder="Your Email" className="input-component" />
                  <textarea placeholder="Your Message" rows={4} className="textarea-component"></textarea>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
