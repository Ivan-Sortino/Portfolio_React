import React from 'react'
import { Flecha, logoCss, logoHtml, logoJs, logoReact } from '../../assets'
import './Hero.css'
const Hero = () => {
    return (
        <section >
            <div className='heroSplit'>
                <div className='information'>
                    <div className='presentation'>
                        <h1 >Hola, soy <span>Iván</span></h1>
                        <p className='puntitos'>Frontend Web Developer</p>
                    </div>
                    <div className="tech">
                        <div className='stack'>
                            <p>Tech Stack</p>
                            <div className='stackImg'>
                                <img src={logoHtml} alt='' />
                                <img src={logoCss} alt='' />
                                <img src={logoJs} alt="" />
                                <img src={logoReact} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='logoMio'></div>

                <img className='flecha' src={Flecha} alt="" />
            </div>
        </section >
    )
}

export default Hero