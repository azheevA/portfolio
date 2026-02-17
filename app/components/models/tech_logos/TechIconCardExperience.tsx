"use client";
import * as THREE from "three";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

interface ModelConfig {
  name: string;
  modelPath: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
}

interface TechIconCardExperienceProps {
  model: ModelConfig;
}

const TechIconCardExperience = ({ model }: TechIconCardExperienceProps) => {
  const gltf = useGLTF(model.modelPath) as GLTF;

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      gltf.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.name === "Object_5") {
            mesh.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [gltf, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
