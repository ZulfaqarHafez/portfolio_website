import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import AboutSkills from './components/AboutSkills'
import ProjectsHackathons from './components/ProjectsHackathons'
import ExperienceEducation from './components/ExperienceEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import DraftingCursor from './components/DraftingCursor'
import { initGA, trackPageView } from './utils/analytics'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isIntroLeaving, setIsIntroLeaving] = useState(false);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);
    trackPageView(window.location.pathname);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .stagger-children';
    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach((el) => el.classList.add('visible'));
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

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealDelay = prefersReducedMotion ? 120 : 1150;
    const fadeDuration = prefersReducedMotion ? 80 : 420;

    const leaveTimer = window.setTimeout(() => setIsIntroLeaving(true), revealDelay);
    const hideTimer = window.setTimeout(() => setShowIntro(false), revealDelay + fadeDuration);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="App bg-paper">
      {showIntro && (
        <div
          className={`intro-overlay drafting-grid ${isIntroLeaving ? 'intro-overlay-leave' : ''}`}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="intro-core">
            <p className="intro-doc">Application No. ZH-2026 · Sheet 1 of 1</p>
            <h1 className="intro-title">Zulfaqar Hafez</h1>
            <p className="intro-doc mt-2">Apparatus &amp; Method for Applied Intelligence</p>
            <div className="intro-stamp">
              <span className="stamp">Filed &amp; Approved</span>
            </div>
          </div>
        </div>
      )}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-accent-solid focus:text-white focus:font-annot focus:text-xs"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <DraftingCursor />
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
