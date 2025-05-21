
import { useEffect, useState } from 'react';

interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string;
}

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  const education: Education[] = [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Hyderabad, India",
      period: "Dec 2021 - June 2025",
      details: "CGPA: 8.3",
    },
    {
      institution: "Sri Gayatri College",
      degree: "Telangana State Board of Intermediate Education (MPC)",
      location: "Hyderabad, India",
      period: "2019 - 2021",
      details: "Percentage: 97%",
    },
    {
      institution: "Prerana High School",
      degree: "Board of Secondary Education",
      location: "Nalgonda, India",
      period: "2019",
      details: "GPA: 10.0",
    },
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-heading animate-on-scroll">Education & Experience</h2>
      
      <div className="glass-card p-8 animate-on-scroll">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-lightest-slate mb-4">Education Timeline</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{edu.period}</div>
                <h4 className="text-xl font-semibold text-lightest-slate">{edu.institution}</h4>
                <p className="text-light-slate">{edu.degree}</p>
                <p className="text-light-slate">{edu.location}</p>
                <p className="text-teal font-mono text-sm mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
