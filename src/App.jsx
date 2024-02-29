import { Navbar, Proyectos, Contacto, Footer, Hero, SobreMi } from "./components";
import { useState } from 'react'
import './App.css'


function App() {

  const [darkMode, setdarkMode] = useState(false)

  const handleDarckMode = () => {
    setdarkMode(!darkMode)

  }

  console.log(darkMode)
  return (
    <div className={`pagina ${darkMode ? 'dark' : ''}`}>
      <Navbar handleDarckMode={handleDarckMode} />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
