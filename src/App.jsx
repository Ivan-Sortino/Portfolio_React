import { Navbar, Proyectos, Contacto, Footer, Hero, SobreMi } from "./components";
import { useState } from 'react'
import './App.css'


function App() {


  return (
    <div >
      <Navbar/>
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
