import { Navbar, Contact, Experience, Hero, Portfolio } from "./components";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css'

function App() {
  const wrapperRef = useRef(null);
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Navbar isVisible={showNav} />
      <main className="pt-20 grid grid-cols-12 grid-gap relative px-8">
        <Hero scrollContainer={wrapperRef} />
        <Portfolio />
        {/* <Experience /> */}
        <Contact />
      </main>
    </>
  )
}

export default App
