import React, { useState } from 'react'
import "./Navbar.css";

const Navbar = ({handleDarckMode}) => {

    const [menuHamburguesa, setMenuHamburguesa] = useState(false)

    const handleHamburguesa = ()=>{
        setMenuHamburguesa(!menuHamburguesa)
    }

    console.log(menuHamburguesa)
    return (
        <header className={menuHamburguesa ? 'menuDesplegable' : 'header'}>
            <nav>
                <a href="#"><i class="bi bi-house"></i>Home</a>
                <a href="#"><i class="bi bi-person"></i>Sobre Mi</a>
                <a href="#"><i class="bi bi-code-slash"></i>Proyectos</a>
                <a href="#"><i class="bi bi-chat-left-dots"></i>Contacto</a>
            </nav>

            <div className='buttonChange'>
                <button className='darkMode' onClick={handleDarckMode}>
                    <span><i class="bi bi-sun-fill"></i></span>
                    <span><i class="bi bi-moon-fill"></i></span>
                </button>
            </div>
            
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