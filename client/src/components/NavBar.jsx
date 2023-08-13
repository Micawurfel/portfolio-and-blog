import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Components.css'
import { UserContext } from '../UserContext'

export function NavBar() {
    const {setUserInfo, userInfo} = useContext(UserContext)

    useEffect(() => {  
      fetch('http://localhost:3001/profile', {
        credentials: 'include'})
        .then(res => res.json(res)) 
        .then(res=> setUserInfo(res.id))
        .catch(err=> console.log(err))
    }, [])

    console.log(userInfo)
    
    function logout(){
        fetch('http://localhost:3001/logout',{
            method: 'POST',
            credentials: 'include',
        }) 
        setUserInfo('')
        console.log(userInfo)      
    }

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
                    <Link to='/portfolio'>Portfolio</Link>
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
        <div className='d-flex'> 
            {userInfo!='' && userInfo!=undefined 
              ?
                <>
                    <Link to='/blog'><button>Crear Post</button></Link>
                    <button onClick={logout}>Log out</button>
                </>
                :
                <Link to='/login'><button>Login</button></Link>
            }  
        </div>
    </div>
  )
}
