import React from 'react'
import './Proyectos.css'
import CardProyect from './CardProyect/CardProyect'
import { Auto, Bmw, GlobeTrotter, Hombre, Ruso, avion} from '../../assets'








const Proyectos = () => {
    return (
        <section className='centro'>
            <h2>Proyectos</h2>

            <CardProyect
                imagen={Bmw}
                titulo={'BMW'}
                icono={Auto}
                descripcion={`Esta es una landing page
                            basado en la marca
                            de autos BMW.`}
                stack1={'HTML'}
                stack2={'CSS'}
                github={'https://github.com/Ivan-Sortino/BMW.git'}
                pagina={'https://ivan-sortino.github.io/BMW/'}
            />
            <CardProyect 
                imagen={GlobeTrotter}
                titulo={'GlobeTrotter'}
                icono={avion}
                descripcion={`Esta es una landing page de turismo y vuelos, 
                si estas interesado en viajar, en esta pagina
                podes comprar paquetes de vuelos hacia 
                distintos lugares del mundo.`}
                stack1={'HTML'}
                stack2={'CSS'}
                github={'https://github.com/Ivan-Sortino/PaginaViajes.git'}
                pagina={'https://ivan-sortino.github.io/PaginaViajes/'}
                />
            <CardProyect
                imagen={Ruso}
                titulo={'Presentacion'}
                icono={Hombre}
                descripcion={`Esta es una Hero page, con un diseño unico 
                            e innovador, en esta pagina podemos
                            presentarnos y mostrar nuestros
                            trabajos.`}
                stack1={'HTML'}
                stack2={'CSS'}
                github={'https://github.com/Ivan-Sortino/Hero'}
                pagina={'https://ivan-sortino.github.io/Hero/#'}
            />

        </section>
    )
}

export default Proyectos