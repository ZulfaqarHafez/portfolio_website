import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import AboutSkills from './components/AboutSkills'
import ProjectsHackathons from './components/ProjectsHackathons'
import ExperienceEducation from './components/ExperienceEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'
import { initGA, trackPageView } from './utils/analytics'

function App() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);
    trackPageView(window.location.pathname);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .stagger-children, .observe-visible';
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App bg-base">
      <div className="grain" aria-hidden="true"></div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-accent-solid focus:t-on-accent focus:rounded-full focus:font-semibold"
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
