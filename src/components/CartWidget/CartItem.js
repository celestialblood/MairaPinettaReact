import React from 'react';
import { UseCartContext } from '../../context/CartContext'; 


const CartItem = ({ product }) => {
    const  {removeCart}  = UseCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.name} />
            <div>
                <p>Título: {product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeCart(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;