'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const computerParts = [
  { name: "CPU", description: "Central Processing Unit", icon: "🧠" },
  { name: "GPU", description: "Graphics Processing Unit", icon: "🖼️" },
  { name: "RAM", description: "Random Access Memory", icon: "💾" },
  { name: "Hard Drive", description: "Solid State Drive", icon: "💽" },
  { name: "Motherboard", description: "Main Circuit Board", icon: "🖥️" },
  { name: "Network Card", description: "Network Interface Controller", icon: "🌐" },
]

export default function ExhibitionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <header className="bg-black bg-opacity-50 backdrop-blur-md shadow-lg sticky top-0 z-50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/CSAclub_Transparent-01.png" alt="CSA Logo" width={80} height={80} className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold text-blue-400">Computer Parts Exhibition</h1>
              <p className="text-sm text-gray-400">CSA Club, Badji Mokhtar University</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-blue-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Computer Parts
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {computerParts.map((part, index) => (
            <motion.div 
              key={part.name} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{part.icon}</span>
                  <h2 className="text-2xl font-bold text-blue-400">{part.name}</h2>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{part.description}</p>
                <Link 
                  href={`/${part.name.toLowerCase().replace(/\s+/g, '')}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300 text-center"
                >
                  Learn More
                  <ChevronRight className="inline-block ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-black bg-opacity-50 text-gray-300 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Exhibition Details</h3>
            <p className="font-semibold">Dates: November 1-3, 2024</p>
            <p>Location: Faculty of Technology, Sidi Amar</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Connect With Us</h3>
            <div className="flex items-center space-x-4 mt-2">
              <a 
                href="https://www.facebook.com/CSA.Club23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/CSA.Club23" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
            <a 
              href="https://forms.gle/1ZhYyemGtbEbAwBQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Register for Club
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2024 CSA, Badji Mokhtar University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}