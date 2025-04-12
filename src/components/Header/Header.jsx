import React from 'react'
import { NavLink } from 'react-router'
import './Header.css'

const Header = () =>{
    return(
        <>
        <nav>
            <ul>
                <NavLink className='nav-link' >Home</NavLink>
                <NavLink className='nav-link'to='/Historique'>Historiques</NavLink>
            </ul>
        </nav>
        </>
    )
}

export default Header