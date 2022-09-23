
import CartWidget from './CartWidget'

const Navbar = () => {

    //jsx
    return (   
        <nav className="navbar">

            <h1 className='Brand'>Maira Pinetta</h1>

            <div>

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

                    {CartWidget}
                    <li className="nav-item">

                        <div className="icon-cart">
                            <a href="#"><i id="icon-empty" ></i></a>   
                            <a href="#"><i id="icon-full" ></i></a>   
                            <div id="cart-total" className="num">0</div>
                        </div> 

                    </li>

                </ul>
            
            </div>

        </nav>
    
    ) 
}

export default Navbar