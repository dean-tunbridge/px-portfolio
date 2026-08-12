import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <CaseStudies />
      </main>
    </>
  )
}

export default App
