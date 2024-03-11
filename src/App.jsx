import { Navbar, Proyectos, Contacto, Footer, Hero, SobreMi, BotonMail } from "./components";
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
      <BotonMail/>
    </div>
  )
}

export default App
