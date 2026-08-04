import './App.css'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <>
      <div className="font-sans p-8 space-y-4">
        <Home />
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
