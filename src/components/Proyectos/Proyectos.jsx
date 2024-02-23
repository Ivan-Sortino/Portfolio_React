import React from 'react'
import './Proyectos.css'
import CardProyect from './CardProyect/CardProyect'
import { Bmw } from '../../assets'








const Proyectos = () => {
    return (
        <div>
            <h2>Proyectos</h2>  
            <CardProyect 
                imagen={Bmw} 
                titulo={'BMW'} 
                descripcion={'Esta es una landing page basado en la marca de autos BMW.'}
                stack1={'HTML'}
                stack2={'CSS'}
                github={'https://github.com/Ivan-Sortino/BMW.git'}
                pagina={'https://ivan-sortino.github.io/BMW/'}
                />
        </div>
    )
}

export default Proyectos