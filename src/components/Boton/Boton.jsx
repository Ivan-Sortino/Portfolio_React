import React from 'react'
import './Boton.css' 

const Boton = ({direccion, texto, icono}) => {
    return (

        <a href={direccion}>
            <button className='css-button-shadow-border-sliding--grey '>
                {texto}<i class={icono}/>
            </button>
        </a>
    )
}

export default Boton