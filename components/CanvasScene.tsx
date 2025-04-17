// components/CanvasScene.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";

export const CanvasScene = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};
