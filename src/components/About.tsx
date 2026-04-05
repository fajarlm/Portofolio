import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education'>('bio');
  const t = translations[lang].about;

  return (
    <section id="tentang" className="py-24 md:py-32 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative lg:sticky lg:top-32 flex justify-center lg:block" data-aos="fade-up">
            <div className="w-full max-w-[350px] lg:max-w-none aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden card-minimal relative z-10 shadow-2xl">
              <img 
                src="https://ui-avatars.com/api/?name=Fajar+Kusuma&background=18181b&color=fff&size=512" 
                alt="Fajar Kusuma Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent)] opacity-10 rounded-full blur-2xl -z-0"></div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-center lg:text-left mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30 text-[var(--text)]">{lang === 'en' ? 'Professional Profile' : 'Profil Profesional'}</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6 text-[var(--text)] tracking-tighter italic text-nowrap">{t.title.split(' ').slice(0, -1).join(' ')} <span className="accent-text opacity-70">{t.title.split(' ').slice(-1)}</span></h3>
              <p className="text-sm md:text-base text-[var(--text)] opacity-60 leading-relaxed font-medium">
                {lang === 'en' ? 'As an 11th-grade student majoring in Software Engineering, I am committed to building user-oriented digital solutions through code efficiency and measured visual aesthetics.' : 'Sebagai siswa kelas 11 jurusan Pengembangan Perangkat Lunak, saya berkomitmen untuk membangun solusi digital yang berorientasi pada pengguna melalui efisiensi kode dan estetika visual yang terukur.'}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mb-4">
              {['bio', 'education'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all pb-2 border-b-2 ${activeTab === tab ? 'border-[var(--text)] text-[var(--text)]' : 'border-transparent opacity-30 hover:opacity-100'}`}
                >
                  {tab === 'bio' ? (lang === 'en' ? 'Biography' : 'Biografi') : (lang === 'en' ? 'Education' : 'Pendidikan')}
                </button>
              ))}
            </div>

            <hr className="border-[var(--border)] mb-8" />

            <div className="min-h-[250px]">
              {activeTab === 'bio' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in duration-500">
                  <div>
                    <p className="text-[9px] uppercase opacity-30 mb-1 tracking-widest font-bold text-nowrap">{lang === 'en' ? 'Location' : 'Lokasi'}</p>
                    <p className="text-sm font-bold opacity-80 text-nowrap">{lang === 'en' ? 'Bogor, West Java' : 'Bogor, Jawa Barat'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase opacity-30 mb-1 tracking-widest font-bold text-nowrap">{lang === 'en' ? 'Availability' : 'Status'}</p>
                    <p className="text-sm font-bold text-emerald-600/80 uppercase tracking-tighter text-nowrap">{lang === 'en' ? 'Ready for Internship' : 'Siap untuk Magang'}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-[9px] uppercase opacity-30 mb-1 tracking-widest font-bold text-nowrap">{lang === 'en' ? 'Correspondence' : 'Korespondensi'}</p>
                    <p className="text-sm font-bold opacity-80 break-all">kusumafajar080802@gmail.com</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="relative pl-8 border-l-2 border-[var(--border)] ml-2 text-nowrap">
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-sm bg-[var(--text)] rotate-45"></div>
                    <p className="text-[9px] font-bold opacity-30 tracking-widest uppercase">{lang === 'en' ? '2022 - Present' : '2022 - Sekarang'}</p>
                    <h4 className="text-sm font-bold opacity-80">{lang === 'en' ? 'Vocational High School (PPLG)' : 'SMK (Jurusan PPLG)'}</h4>
                    <p className="text-xs opacity-50 mt-1">{lang === 'en' ? 'Focus: Software Engineering, Web & Mobile Development.' : 'Fokus: Rekayasa Perangkat Lunak, Pengembangan Web & Mobile.'}</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-[var(--border)] ml-2 opacity-50 text-nowrap">
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-sm bg-[var(--border)] rotate-45"></div>
                    <p className="text-[9px] font-bold opacity-30 tracking-widest uppercase">2019 - 2022</p>
                    <h4 className="text-sm font-bold opacity-80">{lang === 'en' ? 'Junior High School' : 'SMP'}</h4>
                  </div>
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