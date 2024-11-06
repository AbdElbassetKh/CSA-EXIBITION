'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useGLTF, Stage, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

function Model({ partName }: { partName: string }) {
  const modelPath = `/models/${partName.toLowerCase()}.glb`
  const { scene } = useGLTF(modelPath)
  
  return <primitive object={scene} />
}

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
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={
          <Html center>
            <div className="text-white">Loading 3D model...</div>
          </Html>
        }>
          <Stage environment="city" intensity={0.5}>
            <Model partName={partName} />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={true}
          enablePan={true}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </motion.div>
  )
}