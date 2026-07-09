import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Abstract', href: '#about' },
  { name: 'Exhibits', href: '#projects' },
  { name: 'Field Trials', href: '#hackathons' },
  { name: 'Records', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'about', 'skills', 'projects', 'hackathons', 'experience', 'contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 140;
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

    window.addEventListener('scroll', handleScroll);
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

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper border-b transition-shadow duration-300 ${
        isScrolled ? 'b-strong shadow-md' : 'b-line'
      }`}
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(8px)' }}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-stretch justify-between h-16 md:h-[4.5rem]">
          {/* Title block */}
          <a href="#home" className="flex items-center gap-3 group min-w-0">
            <div className="w-9 h-9 md:w-10 md:h-10 border b-strong flex items-center justify-center font-display text-lg t-accent shrink-0 group-hover:bg-accent-wash transition-colors">
              ZH
            </div>
            <div className="hidden sm:block min-w-0 leading-tight">
              <div className="font-display text-lg t-ink truncate">Zulfaqar Hafez</div>
              <div className="annot t-faint">Application No. ZH-2026</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`annot-md relative py-1 transition-colors ${
                  isActive(link.href) ? 't-accent' : 't-soft hover:t-ink'
                }`}
              >
                <span className="t-faint mr-1.5">{String(idx + 1).padStart(2, '0')}</span>
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent-solid transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="annot t-soft border b-line px-3 py-2.5 hover:b-accent hover:t-accent hover:bg-accent-wash transition-colors"
              aria-label={theme === 'dark' ? 'Switch to paper theme' : 'Switch to blueprint theme'}
              title={theme === 'dark' ? 'Switch to paper' : 'Switch to blueprint'}
            >
              {theme === 'dark' ? 'Paper' : 'Blueprint'}
            </button>
            <a href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-ink !py-2.5 !px-4 text-xs">
              Résumé
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden self-center p-2 border b-line t-ink hover:bg-accent-wash transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation-mobile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            id="primary-navigation-mobile"
            className="lg:hidden py-3 pb-5 border-t b-line max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`block py-3 px-2 annot-md border-b b-line last:border-b-0 transition-colors ${
                  isActive(link.href) ? 't-accent' : 't-soft'
                }`}
              >
                <span className="t-faint mr-2">{String(idx + 1).padStart(2, '0')}</span>
                {link.name}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <button
                onClick={toggleTheme}
                className="annot t-soft border b-line px-3 py-2.5 flex-1"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? 'Paper mode' : 'Blueprint mode'}
              </button>
              <a href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-ink !py-2.5 !px-4 text-xs flex-1">
                Résumé
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
