import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import SobreMi from './components/SobreMi/SobreMi'
import './App.css'
import { useState } from 'react'

function App() {

  const [darkMode, setdarkMode] = useState(false)

  const handleDarckMode = () =>{
    setdarkMode(!darkMode)
  }

  console.log(darkMode)
  return (
    <div className={`pagina ${darkMode ? 'dark' : ''}`}>
      <Navbar handleDarckMode={handleDarckMode}/>
      <HeroSection />
      <SobreMi/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
