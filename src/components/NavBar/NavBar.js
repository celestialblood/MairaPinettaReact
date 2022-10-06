import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {

    //jsx
    return (   
        <nav className="navbar">

            <Link to='/'> <h2 className='Brand'>Maira Pinetta </h2></Link>

            <ul>
            
                {/* <li className="nav-item">
                    <a href="../App.js">Home</a>
                </li> */}

                <li className="nav-item">
                    <Link to='/shop'>Shop</Link>
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
                    <a><CartWidget/></a> {/*paso el componente cartwidget con el icono*/}
                </li>
            </ul>

        </nav>
    
    ) 
}

export default NavBar