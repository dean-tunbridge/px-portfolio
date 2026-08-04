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
        <h1 className="p-24 border rounded-md border-merlot-500 text-white bg-brick-500 ">
          Test
        </h1>
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
