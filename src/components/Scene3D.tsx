import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ position = [0, 0, 0], color = '#64ffda' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 2) / 2;
    mesh.current.rotation.y = Math.sin(t / 2) / 2;
    mesh.current.position.y = Math.sin(t / 2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position = [0, 0, 0], color = '#64ffda' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 2) / 2;
    mesh.current.rotation.y = Math.sin(t / 2) / 2;
    mesh.current.position.y = Math.sin(t / 2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position = [0, 0, 0], color = '#64ffda' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 2) / 2;
    mesh.current.rotation.y = Math.sin(t / 2) / 2;
    mesh.current.position.y = Math.sin(t / 2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[50vh] w-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCube position={[-2, 0, 0]} />
      <FloatingSphere position={[0, 0, 0]} />
      <FloatingTorus position={[2, 0, 0]} />
      <OrbitControls enableZoom={false} />
    </div>
  );
} 