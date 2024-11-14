'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useGLTF, Stage, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

function Model({ partName }: { partName: string }) {
  const modelPath = `/models/${partName.toLowerCase()}.glb`
  const { scene } = useGLTF(modelPath)
  
  useEffect(() => {
    // Auto-scale model to fit view
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 2 / maxDim // Scale to fit in a 2 unit sphere
    scene.scale.setScalar(scale)

    // Center the model
    box.setFromObject(scene)
    box.getCenter(scene.position)
    scene.position.multiplyScalar(-1)
  }, [scene])

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
        <PerspectiveCamera 
          makeDefault 
          position={[0, 0, 5]}
          fov={50}
          near={0.1}
          far={1000}
        />
        <Suspense fallback={
          <Html center>
            <div className="text-white">Loading 3D model...</div>
          </Html>
        }>
          <Stage
            environment="city"
            intensity={0.5}
            adjustCamera={false}
            shadows={false}
          >
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
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </motion.div>
  )
}
