'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { Info, Clock, Cpu, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const computerParts = [
  { name: "CPU", description: "Central Processing Unit" },
  { name: "GPU", description: "Graphics Processing Unit" },
  { name: "RAM", description: "Random Access Memory" },
  { name: "SSD", description: "Solid State Drive" },
  { name: "Motherboard", description: "Main Circuit Board" },
]

export function ExhibitionPageComponent() {
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
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSA_Vector-Nse3SmNOpJAvruX771X0bR9EfrI3Nn.svg" alt="CSA Logo" width={80} height={80} className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-200">Computer Science and Automation Club</span>
              <span className="text-sm text-gray-400">Badji Mokhtar University, Annaba</span>
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
                <li><a href="#model" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded" onClick={() => setIsMenuOpen(false)}>3D Model</a></li>
                <li><a href="#info" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded" onClick={() => setIsMenuOpen(false)}>Information</a></li>
                <li><a href="#featured" className="block py-2 px-4 hover:bg-[#3a3a3a] rounded" onClick={() => setIsMenuOpen(false)}>Featured Parts</a></li>
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
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#0A7CC9" />
                <Html position={[0, 1.2, 0]}>
                  <div className="bg-black bg-opacity-50 text-white p-2 rounded">
                    Computer Part
                  </div>
                </Html>
              </mesh>
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
                <TabsTrigger value="overview" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white">
                  <Info className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white">
                  <Clock className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
                <TabsTrigger value="specifications" className="flex items-center justify-center data-[state=active]:bg-[#3a3a3a] data-[state=active]:text-white">
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
                <ul className="space-y-4">
                  <li>
                    <strong className="text-gray-100">1970s:</strong> Initial development of the part
                    <p className="mt-1 text-sm">Early prototypes were created, laying the foundation for future advancements.</p>
                  </li>
                  <li>
                    <strong className="text-gray-100">1980s:</strong> First commercial implementation
                    <p className="mt-1 text-sm">The technology became available for widespread use in personal computers.</p>
                  </li>
                  <li>
                    <strong className="text-gray-100">1990s:</strong> Widespread adoption
                    <p className="mt-1 text-sm">Rapid improvements in manufacturing led to increased performance and lower costs.</p>
                  </li>
                  <li>
                    <strong className="text-gray-100">2000s:</strong> Significant performance improvements
                    <p className="mt-1 text-sm">Introduction of multi-core designs and advanced manufacturing processes.</p>
                  </li>
                  <li>
                    <strong className="text-gray-100">2010s:</strong> Integration and miniaturization
                    <p className="mt-1 text-sm">Focus on energy efficiency and integration with other components.</p>
                  </li>
                  <li>
                    <strong className="text-gray-100">Present:</strong> Cutting-edge advancements
                    <p className="mt-1 text-sm">Exploration of new materials and architectures for future computing needs.</p>
                  </li>
                </ul>
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
                className="bg-[#2a2a2a] p-2 rounded-full"
              >
                <ChevronLeft />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-100">{computerParts[currentPartIndex].name}</h3>
                <p className="text-gray-400">{computerParts[currentPartIndex].description}</p>
              </div>
              <button
                onClick={() => setCurrentPartIndex((prevIndex) => (prevIndex + 1) % computerParts.length)}
                className="bg-[#2a2a2a] p-2 rounded-full"
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
            <p className="font-semibold">Date: November 1-3, 2024.</p>
            <p>Location: Faculty of Technology, Sidi Amar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#model" className="hover:text-gray-100">3D Model</a></li>
              <li><a href="#info" className="hover:text-gray-100">Information</a></li>
              <li><a href="#featured" className="hover:text-gray-100">Featured Parts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <div className="flex items-center space-x-4 mt-2">
              <Image src="/placeholder.svg?height=80&width=80" alt="QR Code" width={80} height={80} className="bg-white p-2 rounded" />
              <span>Scan for more exhibits</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2024 CSA, Badji Mokhtar University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}