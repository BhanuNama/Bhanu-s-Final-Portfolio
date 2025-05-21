import { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  link: string;
  githubLink: string;
  image?: string;
}

const ProjectsSection = () => {
  useEffect(() => {
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

  const projects: Project[] = [
    {
      title: "Campus Connect",
      description: "A MERN stack application to enhance campus communication and academic management. Implemented role-based access control using JWT for secure access, created real-time attendance tracking and exam results management systems, and applied MongoDB and Express.js for efficient data handling and smooth user experience.",
      technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "JWT"],
      period: "Jan 2023 - June 2023",
      link: "https://campus-connect-rouge.vercel.app/",
      githubLink: "https://github.com/BhanuNama/Campus-Connect",
      image: "/images/campus-connect.png",
    },
    {
      title: "Nutri Guide",
      description: "A full-stack AI-driven web application that generates personalized meal plans using Gemini API for natural language understanding and contextual recommendations. Implemented dynamic meal scheduling with macro breakdowns and visual analytics using Chart.js, and built custom modules like Mindful Eating Score and Food Doctor, integrating NLP for meal scoring, nutrition deficiency analysis, and AI-generated goal-specific recipes.",
      technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "Gemini API", "Chart.js", "Tailwind CSS"],
      period: "Aug 2023 - Jan 2024",
      link: "https://neutri-guide.vercel.app/",
      githubLink: "https://github.com/BhanuNama/Nutri-Guide",
      image: "/images/nutri-guide.png",
    },
    {
      title: "Age and Gender Prediction",
      description: "Designed a machine learning pipeline using CNN, achieving 92% accuracy in predicting age and gender from facial images. Built an advanced machine learning model to predict age and gender based on facial features, encompassing the entire pipeline from data collection and preprocessing to model development and evaluation. Utilized Convolutional Neural Networks (CNN) for feature extraction and classification, optimizing model performance for high accuracy in real-world applications.",
      technologies: ["Python", "CNN", "Machine Learning", "Computer Vision"],
      period: "Dec 2022 - March 2023",
      link: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="container py-12">
      <h2 className="section-heading animate-on-scroll">Projects I've Built</h2>
      
      <div className="space-y-24 md:space-y-36">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative md:grid md:grid-cols-12 items-center animate-on-scroll ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Content */}
            <div
              className={`relative z-10 md:col-span-7 ${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
              }`}
            >
              <p className="font-mono text-teal text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate mb-4">{project.title}</h3>
              
              <div className="glass-card p-6 mb-4">
                <p className={`text-light-slate ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  {project.description}
                </p>
              </div>
              
              <div className={`flex flex-wrap mb-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={`flex space-x-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="text-light-slate hover:text-teal transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="text-light-slate hover:text-teal transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                </a>
              </div>
              
              <p className="font-mono text-sm text-light-slate mt-2">
                {project.period}
              </p>
            </div>
            
            {/* Project Image */}
            {project.image && (
              <div
                className={`relative md:col-span-7 flex justify-center ${
                  index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
                }`}
              >
                <img src={project.image} alt={`${project.title} Screenshot`} className="max-w-full h-auto object-contain rounded-lg" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
