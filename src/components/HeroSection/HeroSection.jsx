import React from 'react'
import './HeroSection.css'
import logoHtml from "../../assets/img/HTML.svg";
import logoCss from "../../assets/img/CSS.svg";
import logoJs from "../../assets/img/JS.svg";
import logoReact from "../../assets/img/React.svg";
import flecha from '../../assets/img/Flecha.svg'

const HeroSection = () => {
    return (
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
                
                <img className='flecha' src={flecha} alt="" />
            </div>
        </section >
    )
}

export default HeroSection