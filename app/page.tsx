import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const computerParts = [
  { name: "CPU", description: "Central Processing Unit" },
  { name: "GPU", description: "Graphics Processing Unit" },
  { name: "RAM", description: "Random Access Memory" },
  { name: "Hard Drive", description: "Solid State Drive" },
  { name: "Motherboard", description: "Main Circuit Board" },
]

export default function ExhibitionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#161616] text-gray-200">
      <header className="bg-[#1e1e1e] shadow-md sticky top-0 z-50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/CSAclub_Transparent-01.png" alt="CSA Logo" width={80} height={80} className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold">Computer Parts Exhibition</h1>
              <p className="text-sm text-gray-400">CSA Club, Badji Mokhtar University</p>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-[#161616] text-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8">Explore Computer Parts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {computerParts.map((part) => (
          <div key={part.name} className="bg-[#1e1e1e] rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{part.name}</h2>
              <p className="text-gray-400 mb-4">{part.description}</p>
            </div>
            <Link 
              href={`/${part.name.toLowerCase()}`}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center justify-end"
            >
              Learn More
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>

      <footer className="bg-[#111111] text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CSA, Badji Mokhtar University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}