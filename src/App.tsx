import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App bg-luxury-cream">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Projects />
      <Hackathons />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App
