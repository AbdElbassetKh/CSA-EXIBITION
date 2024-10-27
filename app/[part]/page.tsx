'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info, Clock, Cpu, ChevronLeft, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ModelViewer } from '@/components/3d/ModelViewer'

// Define the types for our part data
interface HistoryItem {
  year: string;
  event: string;
}

interface Specifications {
  manufacturer: string;
  model: string;
  performance: string;
  powerConsumption: string;
  dimensions: string;
  compatibility: string;
}

interface PartData {
  name: string;
  description: string;
  overview: string;
  history: HistoryItem[];
  specifications: Specifications;
}

// Define the type for our partData object
type PartDataRecord = Record<string, PartData>;

// Import partData (assuming it's in a separate file)
import { partData } from '../partData'

const computerParts: PartDataRecord = partData

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// MainContent Component
const MainContent = ({ part, isModelExpanded, setIsModelExpanded, activeTab, setActiveTab }: {
  part: PartData;
  isModelExpanded: boolean;
  setIsModelExpanded: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => (
  <main className="flex-grow container mx-auto px-4 py-8">
    <section id="model" className="mb-12">
      <motion.section 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Interactive 3D Model</h2>
        <ModelViewer 
          isExpanded={isModelExpanded}
          partName={part.name}
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-400">Click and drag to rotate. Scroll to zoom.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModelExpanded(!isModelExpanded)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {isModelExpanded ? 'Collapse Model' : 'Expand Model'}
          </motion.button>
        </div>
      </motion.section>
    </section>

    <section id="info" className="mb-12">
      <motion.section 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-[#1e1e1e] rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">{part.name} Information</h2>
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="overview" className="text-gray-300">
                  <p>{part.description}</p>
                  <p className="mt-4">{part.overview}</p>
                </TabsContent>
                <TabsContent value="history" className="text-gray-300">
                  <ul className="space-y-4">
                    {part.history.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <strong className="text-gray-100">{item.year}:</strong> {item.event}
                      </motion.li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specifications" className="text-gray-300">
                  <table className="w-full border-collapse">
                    <tbody>
                      {Object.entries(part.specifications).map(([key, value], index) => (
                        <motion.tr 
                          key={key} 
                          className="border-b border-gray-700"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="py-2 font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                          <td className="py-2">{value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </motion.section>
    </section>
  </main>
)

// Footer Component
const Footer = () => (
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
          <li>
            <button 
              onClick={() => scrollToSection('model')}
              className="hover:text-gray-100 transition duration-300 text-left"
            >
              3D Model
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('info')}
              className="hover:text-gray-100 transition duration-300 text-left"
            >
              Information
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
        <div className="flex items-center space-x-4 mt-2">
          <a 
            href="https://www.facebook.com/CSA.Club23" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.instagram.com/abdelbasset_khettabi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>
        <a 
          href="https://forms.gle/1ZhYyemGtbEbAwBQ9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Register for Club
        </a>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
      <p>&copy; 2024 CSA, Badji Mokhtar University. All rights reserved.</p>
    </div>
  </footer>
)

// Main Page Component
export default function PartPage({ params }: { params: { part?: string } }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isModelExpanded, setIsModelExpanded] = useState(false)
  
  const partName = params?.part?.toLowerCase() || ''
  const part = computerParts[partName as keyof typeof computerParts]

  if (!part) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col items-center justify-center bg-[#161616] text-gray-200"
      >
        <h1 className="text-4xl font-bold mb-4">Part Not Found</h1>
        <p className="text-xl mb-8">Sorry, the requested computer part does not exist in our exhibition.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Return to Exhibition
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col bg-[#161616] text-gray-200"
    >
      <header className="bg-[#1e1e1e] shadow-md sticky top-0 z-50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold">{part.name}</h1>
              <p className="text-sm text-gray-400">Computer Parts Exhibition</p>
            </div>
          </Link>
        </div>
      </header>
      
      <MainContent 
        part={part}
        isModelExpanded={isModelExpanded}
        setIsModelExpanded={setIsModelExpanded}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <Footer />
    </motion.div>
  )
}