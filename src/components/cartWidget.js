import React from 'react';
import cartIcon from './cart-shopping-solid.svg';
import './CartWidget.css';
const CartWidget = () => {

  

        return (
            <div className="icon-cart">
                <a href="#"><img src={cartIcon} className="cart-icon-img"/></a>   
                <div  className="num">0</div>
            </div> 

        )

}

export default CartWidget;