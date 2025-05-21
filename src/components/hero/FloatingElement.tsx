
import { motion } from 'framer-motion';

const FloatingElement = () => {
  return (
    <motion.div 
      className="absolute bottom-20 right-10 hidden lg:block"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div 
        className="floating glassmorphism rounded-full w-24 h-24 flex items-center justify-center"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <motion.div 
          className="animate-rotate3d"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-12 h-12 text-teal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 21C16.9706 21 21 16.9706 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 3C7.02944 3 3 7.02944 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingElement;
