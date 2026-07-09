import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Wins', href: '#hackathons' },
  { name: 'Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'about', 'skills', 'projects', 'hackathons', 'experience', 'contact'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let currentSection = 'home';
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    activeSection === href.slice(1) ||
    (href === '#projects' && activeSection === 'skills');

  const ThemeIcon = theme === 'dark' ? (
    // sun
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4l1.4-1.4" />
    </svg>
  ) : (
    // moon
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.4 15.4A9 9 0 018.6 3.6 9 9 0 1020.4 15.4z" />
    </svg>
  );

  return (
    <>
      <header className="fixed top-4 md:top-5 left-0 right-0 z-50 px-4">
        <nav
          className="mx-auto max-w-3xl flex items-center justify-between gap-2 rounded-full border b-line pl-4 pr-2 py-2"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--surface) 78%, transparent)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            boxShadow: 'var(--shadow-card)',
          }}
          aria-label="Primary"
        >
          {/* Mark */}
          <a href="#home" className="flex items-center gap-2 group shrink-0" aria-label="Back to top">
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-accent-solid t-on-accent font-bold text-sm">
              Z
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--emerald)' }}></span>
            </span>
            <span className="hidden md:block font-semibold text-sm t-ink tracking-tight group-hover:t-accent transition-colors">
              zulfaqar.dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-accent-wash t-accent font-semibold'
                    : 't-soft hover:t-ink hover:bg-accent-wash'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border b-line t-soft hover:t-accent hover:b-accent flex items-center justify-center transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {ThemeIcon}
            </button>
            <a
              href="/Zulfaqar_Hafez_Resume.pdf"
              download
              className="hidden md:inline-flex btn-gold !py-2 !px-4 !text-xs"
            >
              Résumé
            </a>
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full border b-line t-ink flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 md:hidden bg-base flex flex-col justify-center px-8"
        >
          <div className="glow-blob breathe w-72 h-72 -top-10 -right-16" style={{ background: 'var(--glow-a)', position: 'absolute' }} aria-hidden="true"></div>
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-4xl py-2.5 transition-colors ${
                  isActive(link.href) ? 't-accent' : 't-ink'
                }`}
              >
                <span className="label t-faint mr-3 align-middle">0{idx + 1}</span>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex gap-3">
            <a href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-gold flex-1" onClick={() => setIsMobileMenuOpen(false)}>
              Résumé
            </a>
            <a href="#contact" className="btn-outline flex-1" onClick={() => setIsMobileMenuOpen(false)}>
              Say hi
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
