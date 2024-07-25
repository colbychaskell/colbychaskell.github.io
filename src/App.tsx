import { Navbar, Hero, Portfolio, Footer } from "./components";
import { useRef, useState } from 'react';
import './App.css'

function App() {
  const wrapperRef = useRef(null);
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Navbar isVisible={showNav} />
      <div className="px-8">
        <main className="pt-20 grid grid-cols-12 grid-gap relative">
          <Hero scrollContainer={wrapperRef} />
          <Portfolio />
          {/* <Experience /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
