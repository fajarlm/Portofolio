import React, { useRef, useEffect, useState } from 'react';
import { techStack } from '../data/portfolioData';

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const xPosRef = useRef(0);

  useEffect(() => {
    let animId: number;

    const animate = () => {
      const container = containerRef.current;
      if (container && !isPaused) {
        xPosRef.current += 0.8;
        if (xPosRef.current >= container.scrollWidth / 3) {
          xPosRef.current = 0;
        }
        container.scrollLeft = xPosRef.current;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <section id="keahlian" className="py-32 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-xs font-extrabold uppercase tracking-[0.4em] mb-16 opacity-50 text-[var(--text)]">
          Tech Stack
        </h2>
        
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-20 flex" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-12 whitespace-nowrap w-max px-10 cursor-pointer">
            {[...techStack, ...techStack, ...techStack].map((s, i) => (
              <div key={i} className="relative group flex-shrink-0 px-2 flex flex-col items-center">
                {/* Tooltip */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl z-20 whitespace-nowrap">
                  {s.desc}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
                </div>

                <div className="p-6 card-minimal rounded-3xl flex flex-col items-center justify-center min-w-[140px] gap-4 group-hover:scale-105 transition-all duration-500">
                  <div className="tech-icon-container w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-sm overflow-hidden">
                    <img src={s.icon} alt={s.name} className="w-10 h-10 object-contain mx-auto" />
                  </div>
                  <p className="font-bold text-[10px] tracking-widest uppercase opacity-60 text-[var(--text)] group-hover:opacity-100 transition-opacity">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-70">
          <span className="px-6 py-2 border rounded-full text-[10px] font-bold uppercase tracking-widest border-[var(--border)] text-[var(--text)]">
            Hover untuk detail
          </span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;