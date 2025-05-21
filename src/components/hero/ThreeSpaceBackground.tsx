import { Canvas } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ position = [0, 0, 0], size = 2, color = '#ff4500' }: { position: [number, number, number]; size: number; color: string; }) {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
}

export default function ThreeSpaceBackground() {
  return (
    <Canvas className="absolute inset-0 -z-10" camera={{ position: [0, 0, 20], fov: 60 }}>
      <PerspectiveCamera makeDefault fov={60} position={[0, 0, 20]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {/* Starfield from drei, 5000 stars */}
      <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      {/* Floating planets */}
      <Planet position={[8, 0, -10]} size={3} color="#4B4DFF" />
      <Planet position={[-8, 2, -12]} size={2} color="#FFD700" />
      <Planet position={[0, -4, -8]} size={4} color="#FF4500" />
      {/* Optional orbit controls with slow auto-rotate */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
} 