import React from 'react'
import {Link} from 'react-router-dom'
import './Components.css'

export function NavBar() {
  return (
    <div className='d-flex justify-content-between p-1 navbar'>
        <div>
            <Link to='/'>
                <h1>Paula Tabbia</h1>
            </Link>
        </div>
        <div className='d-flex'>
            <ul>
                <li>
                    <Link to='/about-me'>Sobre Mi</Link>
                </li>
                <li>
                    <Link to='/porfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/services'>Servicios</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contacto</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
