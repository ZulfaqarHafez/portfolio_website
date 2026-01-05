import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
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
