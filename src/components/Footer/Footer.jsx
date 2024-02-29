import React from 'react'
import './Footer.css'
import { GithubFooter, LinkedinFooter } from '../../assets'



const Footer = () => {
    return (
        <div className='footerContenedor'>
            <p>Copyright © 2024. All rights are reserved</p>
            <div className='footerImg'>
                <a href="https://github.com/Ivan-Sortino" target="_blank"><img src={GithubFooter} alt="" /></a>
                <a href="https://www.linkedin.com/in/ivan-sortino-32440b275/" target="_blank"><img src={LinkedinFooter} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer