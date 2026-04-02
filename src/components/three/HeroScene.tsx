'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import { useSpring, a } from '@react-spring/three'
import { useIsMobile } from '@/hooks/useIsMobile'

// ── Particle System ──────────────────────────────
function ParticleField({ count = 800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)

  // Generate random positions within bounds
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8     // x: -4 to 4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6 // y: -3 to 3
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 // z: -2 to 2
    }
    return positions
  }, [count])

  useFrame(() => {
    // Upward drift animation
    if (!points.current) return
    const positions = points.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += 0.0005 // drift speed
      // reset to bottom if it goes too high
      if (positions[i * 3 + 1] > 3) {
        positions[i * 3 + 1] = -3
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={points} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        // Luxury Light theme: particles are burnished gold, slightly opaque
        color="#A07830"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// ── Camera Controller (Mouse Parallax) ───────────
function CameraRig() {
  const { camera, pointer } = useThree()
  
  // Spring animation for smooth camera lag
  const { rotation } = useSpring({
    rotation: [
      pointer.y * 0.03, // x rotation
      -pointer.x * 0.03, // y rotation
      0
    ],
    config: { mass: 1, tension: 100, friction: 30 }
  })

  // Apply spring values to camera
  useFrame(() => {
    camera.rotation.x = rotation.get()[0]
    camera.rotation.y = rotation.get()[1]
  })

  return null
}

// ── Main Scene ───────────────────────────────────
export default function HeroScene() {
  // SSR-safe check, and skip entirely on mobile
  const isMobile = useIsMobile()
  
  // Hardware check to downgrade effects if needed
  const isLowEnd = typeof window !== 'undefined' && (navigator.hardwareConcurrency || 4) < 4

  if (isMobile) return null

  return (
    <div className="three-canvas-wrapper absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]} // limit pixel ratio to 2x for perf
        gl={{ alpha: false, antialias: false }} // alpha false overrides bg
      >
        <Suspense fallback={null}>
          {/* Luxury Light Theme: Warm ivory fog/bg */}
          <color attach="background" args={['#FAF6EF']} />
          <fog attach="fog" args={['#FAF6EF', 1, 8]} />
          
          <ambientLight intensity={0.8} />
          
          {/* Orbiting amber accent light */}
          <RotatingLight />
          
          {/* Particle Field */}
          <ParticleField count={isLowEnd ? 300 : 800} />
          
          <CameraRig />

          {/* Post Processing: Film Grain */}
          {!isLowEnd && (
            <EffectComposer multisampling={0}>
              <Noise
                premultiply
                blendFunction={BlendFunction.OVERLAY}
                opacity={0.02} // very subtle on light bg
              />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}

// ── Helper: Rotating Light ───────────────────────
function RotatingLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  
  useFrame(({ clock }) => {
    if (!lightRef.current) return
    const t = clock.elapsedTime
    lightRef.current.position.x = Math.sin(t * 0.3) * 3
    lightRef.current.position.y = Math.cos(t * 0.2) * 2
  })

  return (
    <pointLight
      ref={lightRef}
      color="#C9A86C" // secondary gold
      intensity={0.8}
      position={[2, 3, 3]}
    />
  )
}
