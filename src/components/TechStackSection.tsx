import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { SiReact, SiMongodb, SiPython, SiDocker, SiGit, SiJavascript, SiHtml5, SiCss3, SiLinux } from 'react-icons/si';
import { DiNodejs, DiJava } from 'react-icons/di';
import { FaBrain, FaAws } from 'react-icons/fa';
import { Database } from 'lucide-react';

const techList = [
  { name: 'React', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'MongoDB', category: 'Databases and Cloud' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Operating Systems', category: 'Subjects & Other' },
  { name: 'DSA', category: 'Subjects & Other' },
  { name: 'MySQL', category: 'Databases and Cloud' },
  { name: 'AWS', category: 'Databases and Cloud' },
];

const iconMap: Record<string, { component: React.ElementType; color: string }> = {
  React: { component: SiReact, color: '#61DAFB' },
  'Node.js': { component: DiNodejs, color: '#339933' },
  MongoDB: { component: SiMongodb, color: '#47A248' },
  HTML: { component: SiHtml5, color: '#E34F26' },
  CSS: { component: SiCss3, color: '#1572B6' },
  JavaScript: { component: SiJavascript, color: '#F7DF1E' },
  Python: { component: SiPython, color: '#3776AB' },
  Java: { component: DiJava, color: '#007396' },
  Docker: { component: SiDocker, color: '#2496ED' },
  Git: { component: SiGit, color: '#F05032' },
  'Operating Systems': { component: SiLinux, color: '#FCC624' },
  DSA: { component: FaBrain, color: '#FFB300' },
  MySQL: { component: Database, color: '#4479A1' },
  AWS: { component: FaAws, color: '#FF9900' },
};

const categories = ['All', 'Frameworks', 'Languages', 'Databases and Cloud', 'DevOps', 'Subjects & Other'];

const TechStackSection: React.FC = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? techList : techList.filter(t => t.category === selected);

  return (
    <section id="skills" className="container relative py-24 overflow-hidden">
      <AnimatedBackground />
      <h2 className="section-heading">Skills & Tools</h2>
      <div className="relative z-10">
        <div className="flex flex-wrap gap-4 mt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${selected === cat ? 'bg-teal text-white' : 'bg-light-navy text-light-slate hover:bg-teal hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mt-12">
          {filtered.map(({ name }) => {
            const entry = iconMap[name];
            if (!entry) return null;
            const IconComp = entry.component;
            return (
              <div key={name} className="flex flex-col items-start">
                <IconComp
                  className="w-20 h-20 md:w-24 md:h-24 transform transition-transform duration-200 hover:scale-110 hover:shadow-lg"
                  style={{ color: entry.color }}
                  title={name}
                />
                <span className="mt-2 text-xs font-mono text-lightest-slate">{name}</span>
              </div>
            );
          })}
                </div>
            </div>
    </section>
  );
};

export default TechStackSection;
