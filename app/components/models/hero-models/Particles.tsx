"use client";
import { Points, BufferAttribute } from "three";
import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";

interface Particle {
  position: [number, number, number];
  speed: number;
}

const createParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      Math.random() * 10 + 5,
      (Math.random() - 0.5) * 10,
    ],
    speed: 0.005 + Math.random() * 0.001,
  }));
};

const Particles = ({ count = 200 }: { count?: number }) => {
  const mesh = useRef<Points>(null!);

  const [particleData] = useState(() => createParticles(count));

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particleData.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [particleData, count]);

  useFrame(() => {
    if (!mesh.current) return;
    const attr = mesh.current.geometry.attributes.position as BufferAttribute;
    const array = attr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      let y = array[i * 3 + 1];
      y -= particleData[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      array[i * 3 + 1] = y;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
