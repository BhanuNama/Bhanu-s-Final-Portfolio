import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import Chat from '@/pages/Chat';
import { AiOutlineComment, AiOutlineArrowDown } from 'react-icons/ai';

const Index = () => {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('chatBannerSeen')) {
      const timer = setTimeout(() => setShowBanner(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleBannerClose = () => {
    localStorage.setItem('chatBannerSeen', 'true');
    setShowBanner(false);
  };

  useEffect(() => {
    // Update document title
    document.title = "Bhanu Nama | Software Developer";
    
    // Scroll animation logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <motion.div 
      className="relative min-h-screen scroll-smooth"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        
        <motion.div variants={sectionVariants}>
          <AboutSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ExperienceSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <TechStackSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
      <ThemeToggle />
      {/* One-time chatbot banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }} className="fixed bottom-32 right-6 bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center justify-between space-x-2">
              <p className="text-sm">Bhanu’s Bot: It doesn’t sleep, unlike me waiting for npm install to finish 👇</p>
              <button onClick={handleBannerClose} className="text-white hover:text-gray-200">×</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Chat />
    </motion.div>
  );
};

export default Index;
