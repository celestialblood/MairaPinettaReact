import React from 'react';
import CartWidget from './CartWidget'
import './Navbar.css';
const Navbar = () => {

    //jsx
    return (   
       
        <nav className="navbar navbar-expand-lg sticky-lg-top  ">
            <div className="container-fluid">
                <h1 className="navbar-brand">Shop</h1>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="icon-cart-mobile">
                    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>   
                </div>  

                <div className="collapse navbar-collapse" id="navbarScroll">

                    <ul className="navbar-nav navbar-nav-scroll w-100 d-flex justify-content-around " style="--bs-scroll-height: 100px;">
                    
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../index.html">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle " href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Portfolio
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item" href="./portfolio.html#video">Video</a></li>
                            <li><a className="dropdown-item" href="./portfolio.html#photography">Photography</a></li>
                            <li></li>
                            <li><a className="dropdown-item" href="https://teia.art/Celestialblood" target="_blank">NFT</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="./contact.html">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="./about.html" >About</a>
                        </li>

                        <li className="cart-box">

                            <div className="icon-cart">
                                <a href="#"><img src={CartWidget}/></a>   
                                <a href="#"><i id="icon-full" className="iconhidden fa-solid fa-cart-arrow-down"></i></a>   
                                <div id="cart-total" className="num">0</div>
                            </div> 

                            <div className="whole-cart-window hide-it">
                                <h2 className="cart-title">CART</h2>
                                <div id="cartWrapper" className="cart-wrapper">
                                 
                                </div>
                                <div id="subtotal" className="subtotal">Subtotal: $0.00</div>
                                <div className="checkout">Checkout</div>

                            </div>
                            
                        </li>

                    </ul>


                </div>
             </div>
        </nav>
    
    ) 
}

export default Navbar