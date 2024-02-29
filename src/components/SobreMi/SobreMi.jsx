import React from 'react'
import { Computadora, Github, Linkedin } from '../../assets'
import Boton from '../Boton/Boton'
import './SobreMi.css'

const SobreMi = () => {
    return (
        <section className="containerPadre">
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
                        <p>¡Hola! Mi nombre es Iván Sortino, tengo 20 años, soy de Argentina
                            como desarrollador Front-End poseo conocimiento de HTML, CSS,
                            JavaScript. Me destaco en el diseño y mantenimiento de sitios webs
                            que ofrecen una experiencia de usuario fluida y unica. Mi
                            experiencia radica en crear interfaces dinámicas y atractivas a
                            través de una escritura limpia y código optimizado utilizando
                            buenas practicas. Me encanta trabajar en equipo y colaborar con
                            otros para enfrentar nuevos desafíos y encontrar soluciones
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
                        <a href="https://www.linkedin.com/in/ivan-sortino-32440b275/" target="_blank"><img src={Linkedin} alt="" /></a>

                        <a href="https://github.com/Ivan-Sortino" target="_blank"><img src={Github} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi