
import { useEffect, useRef } from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
}

const SkillsSection = () => {
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target === skillBarsRef.current) {
              const skillBars = entry.target.querySelectorAll('.skill-bar');
              skillBars.forEach((bar, index) => {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
                }, index * 100);
              });
            }
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 70 },
      ],
    },
    {
      name: "Web Technologies",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "AWS", level: 70 },
      ],
    },
    {
      name: "Specialized Areas",
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "Operating Systems", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-heading animate-on-scroll">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-on-scroll">
          <div ref={skillBarsRef} className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-xl font-semibold text-lightest-slate mb-4 flex items-center">
                  <span className="text-teal font-mono mr-2">0{catIndex + 1}.</span>
                  {category.name}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-sm text-light-slate">{skill.name}</span>
                        <span className="font-mono text-xs text-teal">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-light-navy rounded-full overflow-hidden">
                        <div 
                          className="skill-bar w-0" 
                          data-level={skill.level}
                          style={{ width: '0%' }} 
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="glass-card p-6 h-full">
            <h3 className="text-xl font-semibold text-lightest-slate mb-6">Soft Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {["Communication", "Time Management", "Adaptability", "Problem Solving", "Team Collaboration", "Critical Thinking", "Attention to Detail", "Leadership"].map((skill, index) => (
                <div key={index} className="flex items-center p-3 border border-lightest-navy rounded-lg hover:border-teal transition-colors duration-200">
                  <span className="text-teal mr-2">▹</span>
                  <span className="text-light-slate">{skill}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-lightest-slate mt-10 mb-6">Certifications</h3>
            
            <div className="space-y-4">
              <div className="glass-card border border-lightest-navy p-4 rounded-lg hover:border-teal transition-colors duration-200">
                <h4 className="font-semibold text-lightest-slate">Microsoft & LinkedIn</h4>
                <p className="text-light-slate">Essentials in Software Development</p>
              </div>
              
              <div className="glass-card border border-lightest-navy p-4 rounded-lg hover:border-teal transition-colors duration-200">
                <h4 className="font-semibold text-lightest-slate">Udemy</h4>
                <p className="text-light-slate">Java & C++</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
