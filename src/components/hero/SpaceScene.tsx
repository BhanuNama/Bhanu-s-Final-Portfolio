import AnimatedBackground from '../AnimatedBackground';
import { Rocket, Moon } from 'lucide-react';

export default function SpaceScene() {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <AnimatedBackground />
      <div className="absolute w-32 h-32 top-12 left-12 animate-planet">
        <Moon className="w-full h-full text-gray-500" />
      </div>
      <div className="absolute w-20 h-20 bottom-8 right-8 animate-rocket">
        <Rocket className="w-full h-full text-red-500" />
      </div>
    </div>
  );
} 