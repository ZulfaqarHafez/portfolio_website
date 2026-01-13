import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import ExperienceEducation from './components/ExperienceEducation'
import ProjectsHackathons from './components/ProjectsHackathons'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { initGA, trackPageView } from './utils/analytics'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize Google Analytics
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);

    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

  return (
    <div className={`App transition-colors duration-300 ${theme === 'light' ? 'bg-luxury-cream' : 'bg-primary'}`}>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <AboutSkills />
      <ExperienceEducation />
      <ProjectsHackathons />
      <Footer />
    </div>
  )
}

export default App
