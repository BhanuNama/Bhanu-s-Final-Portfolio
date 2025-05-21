import { useRef } from 'react';
// import ThreeScene from './hero/ThreeScene'; // removed per user request
// import ThreeSpaceBackground from './hero/ThreeSpaceBackground';
import HeroIntro from './hero/HeroIntro';
import SocialLinks from './hero/SocialLinks';
import ScrollIndicator from './hero/ScrollIndicator';
// import FloatingElement from './hero/FloatingElement';
// import HeroMouseEffect from './hero/HeroMouseEffect';

const HeroSection = () => {
  // Simplified hero without complex animations
  
  return (
    <section id="hero" className="relative flex items-center min-h-screen pt-32 pb-16 scroll-snap-section overflow-hidden">
      <div className="container relative z-10">
        <HeroIntro />
        <SocialLinks />
        {/* Simplified hero intro; space-themed styling applied via Tailwind */}
      </div>
      
      {/* Animated scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
