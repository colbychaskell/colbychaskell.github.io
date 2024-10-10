import { Navbar, Hero, Portfolio, Footer } from './components'
import { useState } from 'react'
import './App.css'

function App() {
  const [showNav, _] = useState(true)

  return (
    <>
      <Navbar isVisible={showNav} />
      <main className="px-8 pt-24">
        <Hero />
        <Portfolio />
        {/* <Experience /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
