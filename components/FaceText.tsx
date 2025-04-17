// components/FaceText.tsx
"use client";

import { Text } from "@react-three/drei";

export interface FaceTextProps {
  text: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  onClick?: () => void;
}

export const FaceText: React.FC<FaceTextProps> = ({
  text,
  position,
  rotation = [0, 0, 0],
  onClick,
}) => {
  return (
    <mesh position={position} rotation={rotation} onClick={onClick}>
      <Text fontSize={0.4} color="black" anchorX="center" anchorY="middle">
        {text}
      </Text>
    </mesh>
  );
};
