
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <a href="#about" aria-label="Scroll down" className="animate-pulse-shadow rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-teal">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </a>
    </motion.div>
  );
};

export default ScrollIndicator;
