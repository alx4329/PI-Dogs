import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/dog.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoDogs" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/create" >Load Your Dog</NavLink>
                        <NavLink exact to="/" >Home</NavLink>
                    
                    </li>
                </ul>
            </nav>
        </header>
    )
}