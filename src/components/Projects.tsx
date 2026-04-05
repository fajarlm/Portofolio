import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Globe, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'desktop'>('all');

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <section id="proyek" className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="container mx-auto text-[var(--text)]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30 text-nowrap">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter">Selected Works.</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {(['all', 'web', 'mobile', 'desktop'] as const).map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-[var(--border)] transition-all ${filter === cat ? 'bg-[var(--text)] text-[var(--bg)] border-[var(--text)] shadow-lg' : 'hover:border-[var(--text)] opacity-60 hover:opacity-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group card-minimal rounded-[2rem] overflow-hidden p-4 shadow-sm hover:shadow-xl transition-all duration-500" data-aos="fade-up">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/90 text-[var(--text)] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20">
                  {p.type}
                </div>
              </div>
              <div className="px-2">
                <h4 className="text-lg md:text-xl font-bold mb-4 tracking-tight">{p.title}</h4>
                
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[var(--icon-bg)] text-[var(--text)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all">
                      <Globe size={14} /> Repo
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;