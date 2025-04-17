// components/Cube.tsx
"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { FaceText } from "./FaceText";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { useRouter } from "next/navigation";

export const Cube = () => {
  const groupeRef = useRef<Group>(null);
  const router = useRouter();
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <group ref={groupeRef}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach="material-0" color="lightblue" />
        {/* front */}
        <meshStandardMaterial attach="material-1" color="lightgreen" />
        {/* back */}
        <meshStandardMaterial attach="material-2" color="lightcoral" />
        {/* top */}
        <meshStandardMaterial attach="material-3" color="lightyellow" />
        {/* bottom */}
        <meshStandardMaterial attach="material-4" color="lightpink" />
        {/* right */}
        <meshStandardMaterial attach="material-5" color="lightskyblue" />
        {/* left */}
      </mesh>

      {/* 各面の中心にテキストを貼り付け */}
      <FaceText
        text="About"
        position={[0, 0, 1.01]}
        onClick={() => handleClick("/about")}
      />
      <FaceText
        text="Works"
        position={[0, 0, -1.01]}
        rotation={[0, Math.PI, 0]}
        onClick={() => "/works"}
      />
      <FaceText
        text="Skills"
        position={[0, 1.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => "/skills"}
      />
      <FaceText
        text="About"
        position={[0, -1.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        onClick={() => "/about"}
      />
      <FaceText
        text="Skills"
        position={[1.01, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        onClick={() => "/skills"}
      />
      <FaceText
        text="Works"
        position={[-1.01, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={() => "/works"}
      />
    </group>
  );
};
