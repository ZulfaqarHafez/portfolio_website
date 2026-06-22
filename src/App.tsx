import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import AboutSkills from './components/AboutSkills'
import ExperienceEducation from './components/ExperienceEducation'
import ProjectsHackathons from './components/ProjectsHackathons'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'
import { initGA, trackPageView } from './utils/analytics'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroLeaving, setIsIntroLeaving] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);

    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .stagger-children');
      animatedElements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all scroll-animated elements
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .stagger-children');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealDelay = prefersReducedMotion ? 120 : 820;
    const fadeDuration = prefersReducedMotion ? 80 : 420;

    const leaveTimer = window.setTimeout(() => {
      setIsIntroLeaving(true);
    }, revealDelay);

    const hideTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, revealDelay + fadeDuration);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`App transition-colors duration-300 ${theme === 'light' ? 'bg-luxury-cream' : 'bg-primary'}`}>
      {showIntro && (
        <div
          className={`intro-overlay ${theme === 'dark' ? 'intro-overlay-dark' : 'intro-overlay-light'} ${isIntroLeaving ? 'intro-overlay-leave' : ''}`}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="intro-core">
            <div className="intro-mark">ZH</div>
            <p className={`intro-title ${theme === 'dark' ? 'text-luxury-cream' : 'text-primary'}`}>Zulfaqar Hafez</p>
            <p className={`intro-subtitle ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>AI Engineer and Community Innovator</p>
            <div className="intro-track" aria-hidden="true">
              <div className="intro-track-fill"></div>
            </div>
          </div>
        </div>
      )}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-gold-gradient focus:text-primary focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechMarquee />
        <AboutSkills />
        <ProjectsHackathons />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
