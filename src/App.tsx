import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { initGA, trackPageView } from './utils/analytics'

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);

    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="App bg-luxury-cream">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <ExperienceEducation />
      <Projects />
      <Hackathons />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App
