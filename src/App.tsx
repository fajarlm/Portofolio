import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Send, ChevronUp, ArrowRight, Phone, Code2, Globe, Terminal, User } from 'lucide-react';
import type { Theme } from './types';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

export default function App() {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const socialLinks = {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    whatsapp: "https://wa.me/6281234567890"
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-quad' });
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen transition-all duration-500 bg-[var(--bg)] overflow-x-hidden text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        onOpenSidebar={() => setSidebarOpen(true)} 
        isSidebarOpen={isSidebarOpen} 
      />
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className={`transition-all duration-700 min-h-screen flex flex-col ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'}`}>
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-32 lg:pt-40 relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 space-y-8" data-aos="fade-up">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                    <span className="w-8 h-[1px] bg-current"></span>
                    <span>Student • Web Developer • Class 11</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-nowrap">
                    DESIGN <br /> 
                    <span className="accent-text">& CODE.</span>
                  </h1>

                  <p className="text-lg md:text-xl opacity-50 max-w-xl font-medium leading-tight tracking-tight">
                    Saya membangun aplikasi web yang minimalis, berperforma tinggi, dan berfokus pada pengalaman pengguna.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#proyek" className="bg-[var(--text)] text-[var(--bg)] px-10 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2">
                      <Terminal size={18} />
                      View Projects
                    </a>
                    <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-[var(--border)] px-10 py-4 rounded-full font-bold transition-all hover:border-[var(--text)] flex items-center gap-3 group">
                      Get touch
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[var(--border)] w-max opacity-60">
                    <div>
                      <p className="text-4xl font-black tracking-tight">2+</p>
                      <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest">Years</p>
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
                      className="relative aspect-[4/5] overflow-hidden border-2 border-[var(--border)] rotate-3 group-hover:rotate-0 transition-all duration-700 shadow-2xl bg-[var(--card)]"
                      style={{ borderRadius: '3.5rem', isolation: 'isolate' }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                        alt="Profile" 
                        className="w-full h-full object-cover transition-all duration-700"
                        style={{ borderRadius: '3.5rem' }}
                      />
                      <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-3xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
                        <Code2 className="text-[var(--accent)] mb-2 mx-auto" size={24} />
                        <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Current Focus</p>
                        <p className="text-sm font-black leading-none">React & Fullstack</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <About />
          
          <div className="px-6 md:px-12 lg:px-24">
            <TechStack />
            <Projects />
          </div>

          <section id="contact" className="py-40 px-6 border-t border-[var(--border)]">
            <div className="container mx-auto max-w-5xl text-center mb-24" data-aos="fade-up">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] opacity-30 mb-6">Available for projects</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                SAY <span className="accent-text italic">HELLO.</span>
              </h3>
              <a href={`mailto:kusumafajar080802@gmail.com`} className="text-2xl md:text-4xl font-light hover:opacity-50 transition-opacity border-b border-[var(--border)] pb-2 inline-flex items-center gap-4 text-nowrap">
                <Mail size={32} className="opacity-50" />
                kusumafajar080802@gmail.com
              </a>
            </div>

            <div className="container mx-auto max-w-5xl grid lg:grid-cols-5 gap-12 text-nowrap">
              <div className="lg:col-span-2 space-y-12" data-aos="fade-right">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-30">Social Presence</p>
                  <div className="flex flex-col gap-4 font-bold text-lg">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-all w-max flex items-center gap-3 group">
                      <Globe size={18} /> GitHub <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-all w-max flex items-center gap-3 group">
                      <User size={18} /> LinkedIn <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                    <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:accent-text transition-all w-max flex items-center gap-3 group text-emerald-600">
                      <Phone size={18} /> WhatsApp <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3" data-aos="fade-left">
                <form action="https://formspree.io/f/xlezlowg" method="POST" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <input type="text" name="name" required placeholder="NAME" className="w-full bg-transparent border-b border-[var(--border)] py-4 outline-none focus:border-[var(--text)] transition-all font-bold text-sm uppercase tracking-widest" />
                    <input type="email" name="email" required placeholder="EMAIL" className="w-full bg-transparent border-b border-[var(--border)] py-4 outline-none focus:border-[var(--text)] transition-all font-bold text-sm uppercase tracking-widest" />
                  </div>
                  <textarea name="message" rows={4} required placeholder="MESSAGE" className="w-full bg-transparent border-b border-[var(--border)] py-4 outline-none focus:border-[var(--text)] transition-all font-bold text-sm uppercase tracking-widest resize-none"></textarea>
                  <button type="submit" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:accent-text transition-all pt-4">
                    Send Message
                    <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--text)] group-hover:translate-x-2 transition-all text-nowrap">
                      <Send size={16} />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 px-6 border-t border-[var(--border)]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
            <div className="flex items-center gap-4">
              <span className="text-lg font-black tracking-tighter uppercase">fajarlm.</span>
              <span className="w-4 h-[1px] bg-current opacity-20"></span>
              <p className="text-[10px] font-bold uppercase tracking-widest">© {new Date().getFullYear()}</p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Local Time: {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</p>
              </div>
              <div className="flex gap-4">
                <Globe size={16} className="opacity-50 hover:opacity-100 cursor-pointer" />
                <Terminal size={16} className="opacity-50 hover:opacity-100 cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>

        <button onClick={scrollToTop} className={`fixed bottom-10 right-10 p-4 rounded-full bg-[var(--text)] text-[var(--bg)] shadow-2xl transition-all duration-700 z-50 hover:scale-110 active:scale-90 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
          <ChevronUp size={20} />
        </button>
      </div>
    </div>
  );
}