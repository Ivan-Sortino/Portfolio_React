import React from 'react'
import Linkedin from '../../assets/img/Linkedin.svg'
import Github from '../../assets/img/github.svg'
import Computadora from '../../assets/img/Computadora.png'
import './SobreMi.css'

const SobreMi = () => {
    return (
        <section>
            <h2>Sobre Mi</h2>
            <div className='contenedor'>


                <div className='contenedorPadre'>
                    <div className='contenedorHijo'>
                        <div className='colores'>
                            <div className='color rojo'></div>
                            <div className='color amarillo'></div>
                            <div className='color verde'></div>
                        </div>
                        <a href="#">
                            <button className='css-button-shadow-border-sliding--grey'>Descargar CV<i class="bi bi-filetype-pdf"></i></button>
                        </a>
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

                <div className='compuPadre'>
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


                    {/* imagen de Linkedin */}
                    {/* imagen de Github */}
                </div>
            </div>
        </section>
    )
}

export default SobreMi