
import { useRef, useEffect } from 'react';

const HeroMouseEffect = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Mouse follow effect for the blob
    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 30 - 15;
        const y = (clientY / window.innerHeight) * 30 - 15;
        
        blobRef.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return blobRef;
};

export default HeroMouseEffect;
