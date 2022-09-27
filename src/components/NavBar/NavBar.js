import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {

    //jsx
    return (   
        <nav className="navbar">

            <h2 className='Brand'>Maira Pinetta</h2>

            <ul>
            
                <li className="nav-item">
                    <a href="../App.js">Home</a>
                </li>

                <li className="nav-item">
                    <a href='#'>Portfolio</a>
                </li>

                <li className="nav-item">
                    <a href="#">Contact</a>
                </li>

                <li className="nav-item">
                    <a href="#" >About</a>
                </li>

                <li className="nav-item">
                    <img src={CartWidget}/>    
                </li>
            </ul>

        </nav>
    
    ) 
}

export default NavBar