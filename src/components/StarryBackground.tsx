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
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.75]}>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={6000}
            factor={7}
            saturation={1}
            fade
            speed={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
