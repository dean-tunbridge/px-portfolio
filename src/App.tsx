import './App.css'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <>
      <div className="font-sans">
        <Navbar />
        <Home />
        <Hero />
        <CaseStudies />
        <Experience />
        <Recommendations />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App
