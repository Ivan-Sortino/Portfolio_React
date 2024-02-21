import React, { useState } from 'react'
import "./Navbar.css";

const Navbar = ({handleDarckMode}) => {


    return (
        <header>
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre Mi</a>
                <a href="#">Proyectos</a>
                <a href="#">Contacto</a>
            </nav>

            <div className='buttonChange'>
                <button className='darkMode' onClick={handleDarckMode}>
                    <span><i class="bi bi-sun-fill"></i></span>
                    <span><i class="bi bi-moon-fill"></i></span>
                </button>
            </div>
        </header>
    )
}

export default Navbar