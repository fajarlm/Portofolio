import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biodata' | 'pendidikan' | 'sertifikat'>('biodata');

  return (
    <section id="tentang" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative lg:sticky lg:top-32 flex justify-center lg:block" data-aos="fade-up">
            <div className="w-full max-w-[350px] lg:max-w-none aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden card-minimal relative z-10 shadow-2xl">
              <img 
                src="https://ui-avatars.com/api/?name=Siswa+PPLG&background=18181b&color=fff&size=512" 
                alt="Profil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent)] opacity-10 rounded-full blur-2xl -z-0"></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30 text-[var(--text)]">About Me</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6 text-[var(--text)] tracking-tighter">Siswa <span className="accent-text opacity-70">PPLG.</span></h3>
              <p className="text-sm md:text-base text-[var(--text)] opacity-50 leading-relaxed font-medium">Berfokus pada penciptaan produk digital yang efisien dan estetik.</p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mb-4">
              {['biodata', 'pendidikan', 'sertifikat'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all pb-2 border-b-2 ${activeTab === tab ? 'border-[var(--text)] text-[var(--text)]' : 'border-transparent opacity-30 hover:opacity-100'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <hr className="border-[var(--border)] mb-8" />

            <div className="min-h-[250px]">
              {activeTab === 'biodata' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in duration-500">
                  <div>
                    <p className="text-[9px] uppercase opacity-30 mb-1">Location</p>
                    <p className="text-sm font-bold opacity-80">Bogor, Indonesia</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase opacity-30 mb-1">Status</p>
                    <p className="text-sm font-bold text-emerald-600/80">Ready for PKL</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[9px] uppercase opacity-30 mb-1">Email</p>
                    <p className="text-sm font-bold opacity-80 break-all">kusumafajar080802@gmail.com</p>
                  </div>
                </div>
              )}

              {activeTab === 'pendidikan' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="relative pl-8 border-l-2 border-[var(--border)] ml-2">
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-sm bg-[var(--text)] rotate-45"></div>
                    <p className="text-[9px] font-bold opacity-30">2022 - Present</p>
                    <h4 className="text-sm font-bold opacity-80">SMK Jurusan PPLG</h4>
                  </div>
                  <div className="relative pl-8 border-l-2 border-[var(--border)] ml-2 opacity-50">
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-sm bg-[var(--border)] rotate-45"></div>
                    <p className="text-[9px] font-bold opacity-30">2019 - 2022</p>
                    <h4 className="text-sm font-bold opacity-80">Sekolah Menengah Pertama</h4>
                  </div>
                </div>
              )}

              {activeTab === 'sertifikat' && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  {certificatesData.map((cert) => (
                    <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--text)] transition-all group bg-white dark:bg-black/20 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--icon-bg)] flex items-center justify-center text-[var(--accent)]"><Award size={20} /></div>
                        <div>
                          <h4 className="text-xs font-bold opacity-80 group-hover:opacity-100">{cert.title}</h4>
                          <p className="text-[9px] opacity-40 uppercase tracking-widest">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all text-[var(--text)]" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;