import { Navbar, Hero, Portfolio, Footer } from './components'
import { useState } from 'react'
import './App.css'

function App() {
  const [showNav, _] = useState(true)

  return (
    <>
      <Navbar isVisible={showNav} />
      <div className="px-8">
        <main className="pt-20 grid grid-cols-3 md:grid-cols-12 grid-gap relative">
          <Hero />
          <Portfolio />
          {/* <Experience /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
