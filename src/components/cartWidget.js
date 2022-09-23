
import cartIcon from './cart-shopping-solid.svg';

const CartWidget = () => {

    render()
    {

        return (
            <div className="icon-cart">
                <a href="#"><img src={cartIcon} className="App-logo" alt="logo"/></a>   
                <a href="#"><i id="icon-full" ></i></a>   
                <div id="cart-total" className="num">0</div>
            </div> 

        )
    }

}

export default CartWidget;