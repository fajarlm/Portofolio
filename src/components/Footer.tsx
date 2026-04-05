import { Globe, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border)] bg-zinc-50/30 dark:bg-zinc-950/30 text-[var(--text)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
        <div className="flex items-center gap-4">
          <span className="text-lg font-black tracking-tighter uppercase text-nowrap">fajarlm<span className="accent-text">.</span></span>
          <span className="w-4 h-[1px] bg-current opacity-20"></span>
          <p className="text-[10px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} FAJAR KUSUMA</p>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Local: {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false })} WIB</p>
          </div>
          <div className="flex gap-4">
            <Globe size={16} className="opacity-50 hover:opacity-100 cursor-pointer" />
            <Terminal size={16} className="opacity-50 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
