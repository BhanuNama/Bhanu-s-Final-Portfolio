import { Canvas } from '@react-three/fiber';
import Scene3D from './Scene3D';

export default function Canvas3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Scene3D />
      </Canvas>
    </div>
  );
} 