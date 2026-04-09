"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function StarryBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Stars
            radius={120}
            depth={60}
            count={3500}
            factor={4}
            saturation={1}
            fade
            speed={0.9}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
