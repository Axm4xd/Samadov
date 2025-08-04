import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with us to discuss your next project.
          </p>
        </div>
      </section>

      {/* Phone Number Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">GIVE US A CALL</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Phone className="w-8 h-8 text-gray-900 dark:text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">+994 50 777 52 00</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@samadov.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>55 Rashid Behbudov St, Baku 1022, Azerbaijan</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +994 50 777 52 00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">READY TO COLLABORATE?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Get In Touch</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Samadov Studio
            </Button>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h3>

                <div className="space-y-6">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                          <p className="text-gray-600 dark:text-gray-300">info@samadov.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            55 Rashid Behbudov St, Baku 1022, Azerbaijan
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-300">+994 50 777 52 00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Message</h3>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <form className="space-y-6">
                      <div>
                        <Input type="text" placeholder="Your Name" className="w-full" />
                      </div>

                      <div>
                        <Input type="email" placeholder="Your Email" className="w-full" />
                      </div>

                      <div>
                        <Input type="text" placeholder="Subject" className="w-full" />
                      </div>

                      <div>
                        <Textarea placeholder="Your Message" rows={6} className="w-full resize-none" />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section (moved outside the grid for better height balance) */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Location on Map</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden w-[1200px] h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3685.877718352511!2d49.83674824042912!3d40.38211898278052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d640daa4cb5%3A0x8f57e7e504a1dd71!2sAF%20City!5e0!3m2!1sen!2sus!4v1754307781503!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
