
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => (
  <group>
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe opacity={0.3} transparent>
          <color attach="color" args={["#64ffda"]} />
        </meshStandardMaterial>
      </mesh>
    </Float>
    
    <Float speed={1} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh position={[2, -1, -2]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial wireframe opacity={0.4} transparent>
          <color attach="color" args={["#64ffda"]} />
        </meshStandardMaterial>
      </mesh>
    </Float>
    
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh position={[0, 1, -1]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial wireframe opacity={0.3} transparent>
          <color attach="color" args={["#64ffda"]} />
        </meshStandardMaterial>
      </mesh>
    </Float>
  </group>
);

export default FloatingGeometry;
