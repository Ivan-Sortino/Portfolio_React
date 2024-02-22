import { Navbar, Proyectos, Contacto, Footer, Boton } from "./components";
import { Computadora, Flecha, Github, Linkedin, logoCss, logoHtml, logoJs, logoReact } from "./assets";


import './App.css'
import { useState } from 'react'


function App() {

  const [darkMode, setdarkMode] = useState(false)

  const handleDarckMode = () => {
    setdarkMode(!darkMode)

  }

  console.log(darkMode)
  return (
    <div className={`pagina ${darkMode ? 'dark' : ''}`}>

      <Navbar handleDarckMode={handleDarckMode} />

      {/* -------------------------------- Hero -------------------------------- */}
      <section >
        <div className='heroSplit'>
          <div className='information'>
            <div className='presentation'>
              <h1 >Hola, soy <span>Iván</span></h1>
              <p className='puntitos'>Frontend Web Developer</p>
            </div>

            <div className='stack'>
              <p>Tech Stack</p>
              <div className='linea'></div>
              <div className='stackImg'>
                <img src={logoHtml} alt='' />
                <img src={logoCss} alt='' />
                <img src={logoJs} alt="" />
                <img src={logoReact} alt="" />
              </div>
            </div>
          </div>

          <div className='logoMio'></div>

          <img className='flecha' src={Flecha} alt="" />
        </div>
      </section >
      {/* -------------------------------- Hero -------------------------------- */}

      {/* -------------------------------- Sobre Mi -------------------------------- */}
      <section>
        <h2>Sobre Mi</h2>
        <div className='contenedor'>


          <div className='contenedorPadre sombra'>
            <div className='contenedorHijo'>
              <div className='colores'>
                <div className='color rojo'></div>
                <div className='color amarillo'></div>
                <div className='color verde'></div>
              </div>

              <Boton direccion={'#'} texto={'Descargar CV'} icono={"bi bi-filetype-pdf"} />
            </div>

            <div className='contenedorDescripcion'>
              <p>¡Hola! Mi nombre es Iván Sortino, tengo 20 años, soy de Argentina,<br />
                como desarrollador Front-End poseo conocimiento de HTML, CSS, <br />
                JavaScript. Me destaco en el diseño y mantenimiento de sitios webs <br />
                que ofrecen una experiencia de usuario fluida y unica. Mi <br />
                experiencia radica en crear interfaces dinámicas y atractivas a <br />
                través de una escritura limpia y código optimizado utilizando <br />
                buenas practicas. Me encanta trabajar en equipo y colaborar con <br />
                otros para enfrentar nuevos desafíos y encontrar soluciones <br />
                creativas y efectivas.</p>

            </div>
          </div>

          <div className='compuPadre sombra'>
            <div className='compuHijo'>
              <div className='compuTitulo'>
                <p> <img className='computadora' src={Computadora} alt="" />Contacto</p>
              </div>

              <button className='exis'>x</button>

            </div>

            <div className='redesSociales'>
              <img src={Linkedin} alt="" />
              <img src={Github} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Sobre Mi */}
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
