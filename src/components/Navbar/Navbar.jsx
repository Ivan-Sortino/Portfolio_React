import React, { useState } from 'react'
import "./Navbar.css";

const Navbar = () => {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

    const handleHamburguesa = ()=>{
        setMenuHamburguesa(!menuHamburguesa)
    }

    console.log(menuHamburguesa)
    return (
        <header className={menuHamburguesa ? 'menuDesplegable' : 'header'}>
            <nav>
                <a href="#"><i class="bi bi-house"></i>Home</a>
                <a href="#sobreMi"><i class="bi bi-person"></i>Sobre Mi</a>
                <a href="#proyectos"><i class="bi bi-code-slash"></i>Proyectos</a>
                <a href="#contacto"><i class="bi bi-chat-left-dots"></i>Contacto</a>
            </nav>
 
            <div className='containerMobile'>
                {
                    menuHamburguesa ?
                    <i class="bi bi-x-lg close" onClick={handleHamburguesa}></i>
                    : 
                    <i class="bi bi-list hamburguesa" onClick={handleHamburguesa}></i>
                }
                
                
            </div>
            
            
        </header>
    )
}

export default Navbar