import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
//font awesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';



const CartWidget = () => {

    return (

    <FontAwesomeIcon icon={faCartShopping} className='icon-cart'/>
    
    )

}

export default CartWidget;