import { useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
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

  return (
    <section id="about" ref={sectionRef} className="container py-12">
      <h2 className="section-heading animate-on-scroll">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 animate-on-scroll">
          <p className="mb-4">
            Hello! I'm Bhanu, an aspiring Software Developer currently pursuing a Bachelor's in Computer Science 
            and Engineering at Keshav Memorial Institute of Technology, with hands-on experience in web development 
            and machine learning.
          </p>
          
          <p className="mb-4">
            I'm proficient in the MERN stack, Java, and Python, with a solid foundation in database 
            management and scalable application development. I'm highly organized and passionate about 
            creating innovative, user-friendly solutions and contributing to dynamic teams.
          </p>
          
          <p className="mb-4">
            When I'm not coding, I'm expanding my knowledge in AI and machine learning, exploring new technologies, 
            or working on personal projects that challenge me to grow as a developer.
          </p>
        </div>
        
        <div className="mx-auto animate-on-scroll w-40 sm:w-48 md:w-56 lg:w-64 aspect-square overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4 animate-on-scroll">
        <a href="https://www.linkedin.com/in/bhanu-nama-654957281/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal/80">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/BhanuNama?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal/80">
          <Github className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
