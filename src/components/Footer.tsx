import React from 'react';
import { translations } from '../data/portfolioData';
import type { Language } from '../types';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="py-12 border-t border-[var(--border)] mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;