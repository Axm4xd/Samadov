"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import Link from "next/link"
import Logo from "./logo"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo isDark={isDark} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 font-medium text-sm tracking-wide uppercase">
              <li>
                <Link
                  href="/"
                  className={`transition-all duration-200 hover:scale-105 transform relative group ${
                    isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-all duration-200 hover:scale-105 transform relative group ${
                    isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`transition-all duration-200 hover:scale-105 transform relative group ${
                    isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`transition-all duration-200 hover:scale-105 transform relative group ${
                    isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-all duration-200 hover:scale-105 transform relative group ${
                    isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 transform ${
                isDark
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 text-yellow-400 hover:from-gray-700 hover:to-gray-600 shadow-lg shadow-gray-800/50"
                  : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300 shadow-lg shadow-gray-300/50"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDark ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t transition-all duration-300 ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <nav className="py-4">
              <ul className="space-y-4 font-medium text-sm tracking-wide uppercase">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 transition-colors duration-200 ${
                      isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block py-2 transition-colors duration-200 ${
                      isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className={`block py-2 transition-colors duration-200 ${
                      isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`block py-2 transition-colors duration-200 ${
                      isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block py-2 transition-colors duration-200 ${
                      isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
