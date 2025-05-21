import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroIntro = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 3D tilt effect for the title
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 10;
        const y = (clientY / window.innerHeight - 0.5) * 10;
        
        titleRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Type animation for the subtitle
    const text = "I build things for the web.";
    const subtitle = document.getElementById('subtitle');
    let charIndex = 0;
    
    if (subtitle) {
      subtitle.textContent = '';
      const typeAnimation = setInterval(() => {
        if (charIndex < text.length) {
          subtitle.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeAnimation);
        }
      }, 100);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.p 
        className="font-mono text-teal mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        ref={titleRef}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 transition-transform duration-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        Bhanu Nama.
      </motion.h1>
      
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-6 h-[4rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Typewriter
          words={[
            'Full Stack Developer',
            'UnderGraduate in CSE'
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h2>
      
      <motion.p 
        className="max-w-xl text-slate mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm an aspiring Software Developer specializing in building exceptional digital experiences.
        Currently, I'm focused on MERN stack, Java, and Python with a solid foundation in database management
        and scalable application development.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.a 
          href="#projects" 
          className="btn group relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Check out my work!</span>
          <span className="absolute inset-0 bg-teal/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </motion.a>
      </motion.div>
    </>
  );
};

export default HeroIntro;
