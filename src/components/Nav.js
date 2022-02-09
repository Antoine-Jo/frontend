import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../assets/Logo.png';

function Nav() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const handleShowMenu = () => {
        setShowLinks(!showLinks)
    }


    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            {/* <div className="navbar__logo">{logo}</div> */}
            <img src={logo} alt="logo" className='navbar__logo' height='100px' width='auto' />
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <Link to='/' className='navbar__link' onClick={handleShowMenu} >Accueil</Link>
                </li>
                <li className="navbar__item  slideInDown-2">
                    <Link to='/Portfolio' className='navbar__link' onClick={handleShowMenu} >Portfolio</Link>
                </li>
                <li className="navbar__item slideInDown-3">
                    <Link to='/About' className='navbar__link' onClick={handleShowMenu} >À propos</Link>
                </li>
                <li className="navbar__item slideInDown-4">
                    <Link to='/Contact' className='navbar__link' onClick={handleShowMenu} >Contact</Link>
                </li>
            </ul>
            <button aria-label="Menu" className="navbar__burger" onClick={handleShowLinks} >
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Nav
