import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//font awesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className='icon-cart'/>
			<span>{totalProducts() || ""}</span>
        </>
    )

}

export default CartWidget;