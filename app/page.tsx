'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere } from '@react-three/drei'
import { Info, Clock, Cpu, Menu, X, ChevronLeft, ChevronRight, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const computerParts = [
  { name: "CPU", description: "Central Processing Unit" },
  { name: "GPU", description: "Graphics Processing Unit" },
  { name: "RAM", description: "Random Access Memory" },
  { name: "SSD", description: "Solid State Drive" },
  { name: "Motherboard", description: "Main Circuit Board" },
]

function ComputerPart({ name }: { name: string }) {
  switch (name) {
    case "CPU":
      return <Box args={[1, 0.1, 1]} material-color="#4a4a4a" />
    case "GPU":
      return <Box args={[1.5, 0.05, 0.8]} material-color="#2a2a2a" />
    case "RAM":
      return <Box args={[1.2, 0.05, 0.2]} material-color="#3a3a3a" />
    case "SSD":
      return <Box args={[0.8, 0.1, 0.5]} material-color="#5a5a5a" />
    case "Motherboard":
      return <Box args={[1.5, 0.05, 1.5]} material-color="#1a1a1a" />
    default:
      return <Sphere args={[0.5]} material-color="#6a6a6a" />
  }
}

export default function ExhibitionPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPartIndex, setCurrentPartIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartIndex((prevIndex) => (prevIndex + 1) % computerParts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#161616] text-gray-200">
      {/* Header */}
      <header className="bg-[#1e1e1e] shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/CSAclub_Transparent-01.png" alt="CSA Logo" width={100} height={100} className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-200">Computer Science and Automation Club</span>
              <span className="text-sm text-gray-400">Badji Mokhtar University, Annaba.</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-100 hidden md:block">Computer Parts Showcase</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-[#2a2a2a] p-4 md:hidden"
            >
              <ul className="space-y-2">
                <li><a href="#model" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded transition duration-300" onClick={() => setIsMenuOpen(false)}>3D Model</a></li>
                <li><a href="#info" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded transition duration-300" onClick={() => setIsMenuOpen(false)}>Information</a></li>
                <li><a href="#featured" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded transition duration-300" onClick={() => setIsMenuOpen(false)}>Featured Parts</a></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* 3D Model Viewer */}
        <section id="model" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Interactive 3D Model</h2>
          <div className="w-full h-[60vh] bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <ComputerPart name={computerParts[currentPartIndex].name} />
              <OrbitControls />
            </Canvas>
          </div>
          <p className="text-gray-400 mt-2 text-center">Click and drag to rotate. Scroll to zoom.</p>
        </section>

        {/* Information Section */}
        <section id="info" className="mb-12">
          <div className="bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Computer Part Information</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-4 bg-[#2a2a2a]">
                <TabsTrigger value="overview" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white transition duration-300">
                  <Info className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white transition duration-300">
                  <Clock className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger value="specifications" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white transition duration-300">
                  <Cpu className="w-4 h-4 mr-2" />
                  Specifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="text-gray-300">
                <p>This computer part is a crucial component in modern computing systems. It plays a vital role in processing data and enabling various functionalities within the computer.</p>
                <p className="mt-2">Key features include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>High-speed data processing</li>
                  <li>Energy-efficient design</li>
                  <li>Compatibility with various systems</li>
                  <li>Advanced thermal management</li>
                </ul>
              </TabsContent>
              <TabsContent value="history" className="text-gray-300">
                <section className="mb-12" id="history" aria-labelledby="timeline">
                  <h2 id="timeline" className="text-3xl font-bold mb-4 text-center">Evolution of CPU</h2>
                  <div className="space-y-4">
                    {[
                      { year: 1971, event: "Intel 4004: First commercially available microprocessor", details: "The 4-bit CPU had 2,300 transistors and ran at 740 kHz." },
                      { year: 1978, event: "Intel 8086: Introduction of x86 architecture", details: "This 16-bit processor became the foundation for modern PC architecture." },
                      { year: 1993, event: "Intel Pentium: Superscalar architecture", details: "Introduced parallel execution of instructions, significantly boosting performance." },
                      { year: 2005, event: "AMD Athlon 64 X2: First x86 dual-core processor", details: "Marked the beginning of multi-core processors for consumer PCs." },
                      { year: 2017, event: "AMD Ryzen: High core count consumer CPUs", details: "Brought 8-core, 16-thread processors to mainstream consumers." }
                    ].map((milestone, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-24 font-bold text-blue-400">{milestone.year}</div>
                        <div className="flex-grow border-t border-gray-700 transition-colors duration-300"></div>
                        <div className="flex-shrink-0 w-3/4 pl-4">
                          <h3 className="font-semibold">{milestone.event}</h3>
                          <p className="text-sm text-gray-400">{milestone.details}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>
              <TabsContent value="specifications" className="text-gray-300">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 font-semibold">Manufacturer</td>
                      <td className="py-2">TechCorp</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 font-semibold">Model</td>
                      <td className="py-2">XYZ-1000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 font-semibold">Performance</td>
                      <td className="py-2">10 GHz</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 font-semibold">Power Consumption</td>
                      <td className="py-2">45W</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 font-semibold">Dimensions</td>
                      <td className="py-2">50mm x 50mm x 5mm</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">Compatibility</td>
                      <td className="py-2">ATX, Micro-ATX, Mini-ITX</td>
                    </tr>
                  </tbody>
                </table>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Parts Carousel */}
        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Featured Computer Parts</h2>
          <div className="relative bg-[#1e1e1e] rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentPartIndex((prevIndex) => (prevIndex - 1 + computerParts.length) % computerParts.length)}
                className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#3a3a3a] transition duration-300"
              >
                <ChevronLeft />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-100">{computerParts[currentPartIndex].name}</h3>
                <p className="text-gray-400">{computerParts[currentPartIndex].description}</p>
              </div>
              <button
                onClick={() => setCurrentPartIndex((prevIndex) => (prevIndex + 1) % computerParts.length)}
                className="bg-[#2a2a2a] p-2 rounded-full hover:bg-[#3a3a3a] transition duration-300"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-300 py-8">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-xl font-semibold mb-2">Exhibition Details</h3>
      <p className="font-semibold">Dates: November 1-3, 2024</p>
      <p>Location: Faculty of Technology, Sidi Amar</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1">
        <li><a href="#model" className="hover:text-gray-100 transition duration-300">3D Model</a></li>
        <li><a href="#info" className="hover:text-gray-100 transition duration-300">Information</a></li>
        <li><a href="#featured" className="hover:text-gray-100 transition duration-300">Featured Parts</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
      <div className="flex items-center space-x-4 mt-2">
        <a href="https://www.facebook.com/CSA.Club23" className="text-gray-300 hover:text-gray-100 transition duration-300">
          <Facebook size={24} />
        </a>
        <a href="https://www.instagram.com/abdelbasset_khettabi" className="text-gray-300 hover:text-gray-100 transition duration-300">
          <Instagram size={24} />
        </a>
      </div>
      <button onClick={() => window.location.href = 'https://forms.gle/1ZhYyemGtbEbAwBQ9'} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Register for Club
      </button>
    </div>
  </div>
  <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
    <p>&copy; 2024 CSA, Badji Mokhtar University. All rights reserved.</p>
  </div>
</footer>
    </div>
  )
}
