import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CaseStudies from './components/CaseStudies'
import BrowserBar from './components/BrowserBar'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <CaseStudies />
        <BrowserBar />
      </main>
    </>
  )
}

export default App
