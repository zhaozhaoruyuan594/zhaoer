"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  MeshTransmissionMaterial,
  Float,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Diamond() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.6}>
        {/* OctahedronGeometry(radius, detail) — detail=0 keeps sharp gem facets */}
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1.2}
          chromaticAberration={0.18}
          anisotropy={0.4}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.1}
          ior={2.4}
          roughness={0}
          color="#ffffff"
          background={undefined}
        />
      </mesh>
    </Float>
  );
}

function Sparkle({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default function ThreeHero() {
  const sparkles: { position: [number, number, number]; color: string }[] = [
    { position: [2.5, 1.5, 0], color: "#f59e0b" },
    { position: [-2.2, -1.2, 1], color: "#06b6d4" },
    { position: [1.8, -2, -0.5], color: "#ec4899" },
    { position: [-2.5, 1.8, -1], color: "#8b5cf6" },
    { position: [0, 2.6, 1.5], color: "#fbbf24" },
    { position: [0, -2.6, -1], color: "#a855f7" },
  ];

  return (
    <div className="h-[420px] w-full md:h-[520px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#ec4899" />
        <pointLight position={[3, -2, 2]} intensity={1} color="#06b6d4" />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Diamond />
          {sparkles.map((s, i) => (
            <Sparkle key={i} {...s} />
          ))}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}
