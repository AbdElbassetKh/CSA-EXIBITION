'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

interface ModelViewerProps {
  isExpanded: boolean
  partName: string
}

export function ModelViewer({ isExpanded, partName }: ModelViewerProps) {
  return (
    <motion.div 
      className={`w-full ${isExpanded ? 'h-[80vh]' : 'h-[60vh]'} bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out`}
      layoutId="model-container"
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#0A7CC9" />
          <Html position={[0, 1.2, 0]}>
            <div className="bg-black bg-opacity-50 text-white p-2 rounded">
              {partName}
            </div>
          </Html>
        </mesh>
        <OrbitControls />
      </Canvas>
    </motion.div>
  )
}