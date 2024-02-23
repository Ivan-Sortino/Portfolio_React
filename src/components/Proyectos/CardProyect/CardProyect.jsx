import React from 'react'
import './CardProyect.css'



const CardProyect = ({imagen, titulo, descripcion, stack1, stack2, github, pagina}) => {
    return (
        <div className='cardContenedor'>


            <div className='cardPadre'>
                
                    <div className='cardImage'>
                        <img src={imagen} alt="" />
                    </div>
                    <div className='cardText'>
                        <p className='cardTitulo'> {titulo} </p>

                        <p className='cardDescripcion'>{descripcion}</p>

                        <div className='cardStack'>
                            <p>{stack1}</p>
                            <p>{stack2}</p>
                        </div>

                        <div className='cardCodigo'>
                            <a href={github}>Codigo <i class="bi bi-github"></i></a>
                            <a href={pagina}>Live Demo <i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CardProyect