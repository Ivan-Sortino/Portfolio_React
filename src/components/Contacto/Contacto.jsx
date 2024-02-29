import React from 'react'
import './Contacto.css'
import { Mail, Mano } from '../../assets'

const Contacto = () => {
    return (
        <section className='contactContenedor' id='contacto'>
            <div className='contact'>
                <div className='contactText'>
                    <p>CONTACTO</p>
                    <div className='contactMano'>
                        <h3>¿INTERESADO EN TRABAJAR JUNTOS?</h3>
                        <img src={Mano} alt="" />
                    </div>
                </div>
                <div className='contactMail'>
                    <span><img src={Mail} alt="" /></span>
                    <div className='mailText'>
                        <p>Mail</p>
                        <a>Ivansortino2003@gmail.com</a>
                    </div>
                    
                </div>
            </div>
        </section >
    )
}

export default Contacto