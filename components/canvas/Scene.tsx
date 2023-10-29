"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import tunnel from "tunnel-rat";

const Out = tunnel().Out;

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <Out />
      <Preload all />
    </Canvas>
  );
}
