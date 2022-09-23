import React from 'react';
import cartIcon from './cart-shopping-solid.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';
const CartWidget = () => {

    return (

        <a href="#"><img src={cartIcon} className="cart-icon-img"/></a>   

    )

}

export default CartWidget;