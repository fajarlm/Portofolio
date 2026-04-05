import React from 'react';
import { Menu } from 'lucide-react';
import type { Theme } from '../types';

interface NavbarProps {
  theme: string;
  setTheme: (t: Theme) => void;
  onOpenSidebar: () => void;
  isSidebarOpen: boolean; // Tambahkan ini
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme, onOpenSidebar, isSidebarOpen }) => {
  return (
    <header className={`fixed top-0 right-0 z-50 p-4 transition-all duration-500 ${isSidebarOpen ? 'lg:left-72' : 'left-0'}`}>
      <nav className="container mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4 text-[var(--text)]">
          {!isSidebarOpen && (
            <button onClick={onOpenSidebar} className="p-2 opacity-70 hover:opacity-100 transition-opacity">
              <Menu size={20} />
            </button>
          )}
          <a href="#home" className="text-xl font-bold tracking-tighter text-[var(--text)]">
            Porto<span className="accent-text">.</span>
          </a>
        </div>

        <div className="flex items-center gap-2 bg-black/5 p-1 rounded-full border border-[var(--border)]">
          {(['light', 'dark', 'cyan'] as Theme[]).map((t) => (
            <button 
              key={t}
              onClick={() => setTheme(t)}
              className={`w-7 h-7 rounded-full transition-all ${theme === t ? 'scale-110 shadow-lg ring-2 ring-[var(--accent)]' : 'scale-90 opacity-50'} ${t === 'light' ? 'bg-white' : t === 'dark' ? 'bg-slate-800' : 'bg-cyan-500'}`}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;