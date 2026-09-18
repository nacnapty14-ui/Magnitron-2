import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'О приборе', href: '#about' },
    { label: 'Прорыв', href: '#breakthrough' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Показания', href: '#indications' },
    { label: 'Профилактика', href: '#prevention' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-brand-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src="/logo_magnitron.svg" alt="" className="h-9 w-9 group-hover:scale-105 transition-transform" />
          <span className="font-bold text-xl text-brand-600 tracking-tight">Магнитрон</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#buy"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 transition-all shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 hover:scale-[1.03]"
        >
          Где купить
        </a>

        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-brand-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-brand-600 py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#buy"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-white px-5 py-3 rounded-full bg-brand-500 text-center mt-2"
            >
              Где купить
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
