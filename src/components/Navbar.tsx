import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/portfolio';

type NavbarProps = {
  isLight: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ isLight, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.querySelector(item.href);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.href);
        },
        { rootMargin: '-34% 0px -58% 0px', threshold: 0.01 },
      );
      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-2xl light:border-slate-200 light:bg-white/82">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Yohan Ishara home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 font-black text-slate-950">YI</span>
          <span className="hidden text-sm font-semibold text-white light:text-slate-950 sm:block">Yohan Ishara</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link ${active === item.href ? 'nav-link-active' : ''}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 light:border-slate-200 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
            aria-label="Toggle color theme"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href={profile.cv}
            download
            className="hidden h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 light:bg-slate-950 light:text-white light:hover:bg-slate-800 sm:inline-flex"
          >
            <Download size={16} />
            CV
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden light:border-slate-200 light:bg-white light:text-slate-950"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="section-shell pb-4 xl:hidden">
          <div className="glass-card grid gap-1 rounded-2xl p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${active === item.href ? 'nav-link-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
