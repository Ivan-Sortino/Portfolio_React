import React from 'react'
import './BotonMail.css'
import { Mail } from '../../assets'


const BotonMail = () => {
    return (
        
            <div className='contactMail'>
                <a href="mailto:Ivansortino2003@gmail.com" className='botonMail'><img src={Mail} alt="" /></a>
            </div>
        
    )
}

export default BotonMail
