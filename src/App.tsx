import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="font-sans">
        <header>
          <Navbar />
        </header>
        <main className="pt-14">
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
