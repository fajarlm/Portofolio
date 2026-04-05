import { ArrowRight, Code2 } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import imageProfil from '../assets/profil.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-15 lg:pt-25 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8" data-aos="fade-up">
            <div className="flex items-center gap-3 rounded-full p-2 bg-[var(--title-hero)] text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 text-nowrap">
              <span className="w-8 h-[1px] bg-current"></span>
              <span>fajar kusuma • Web Developer</span>
            </div>

            <h1 className="text-2xl md:text-2xl lg:text-4xl font-black leading-[0.85] tracking-tighter uppercase">
              Hi, I am <br /> 
              Fajar <span className="accent-text italic">Kusuma.</span>
            </h1>

            <p className="text-lg md:text-2xl opacity-50 max-w-xl font-medium leading-tight tracking-tight">
              Allow me to introduce myself. <br className="hidden md:block" /> 
              Saya membangun aplikasi web yang minimalis dan efisien.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#proyek" className="bg-[var(--text)] text-[var(--bg)] px-10 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95">
                View Projects
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-[var(--border)] px-10 py-4 rounded-full font-bold transition-all hover:border-[var(--text)] flex items-center gap-3 group">
                Get in touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-[var(--border)] w-full max-w-md opacity-60">
              <div>
                <p className="text-4xl font-black tracking-tight">2+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Years</p>
              </div>
              <div>
                <p className="text-4xl font-black tracking-tight">10+</p>
                <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest">Works</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative group">
              <div 
                className="relative aspect-[4/5] overflow-hidden border-2 border-[var(--border)] rotate-3 group-hover:rotate-0 transition-all duration-700 shadow-xl bg-[var(--card)]"
                style={{ borderRadius: '3.5rem', isolation: 'isolate' }}
              >
                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                <img 
                  src={imageProfil} 
                  alt="Fajar Kusuma" 
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ borderRadius: '3.5rem' }}
                />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-3xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
                  <Code2 className="text-[var(--accent)] mb-2 mx-auto" size={24} />
                  <p className="text-[10px] font-bold opacity-70 text-emerald-200 uppercase tracking-widest">fajarlm</p>
                  <p className="text-sm font-black leading-none tracking-tight">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
