import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos font awesome 
import { faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ItemListContainer.css';           


const ItemListContainer = () => {

    // parametros para filtrar
    // const {size} = useParams();  
    const [products, setProducts] = useState([]);

    useEffect(() => {   
        fetch("./products.json")
        .then((res) => res.json())
        .then((productsres) => setProducts(productsres));
    }, [])
    
     let  idButton;

    //   const filteredProducts = products.filter((p) => p.size === 'A3');

    // const butttonHandler = (size) => {
        
    // }

    return(
        //  map es como forEach
        
        <main className='main-shop'>

            <div>  
                {/* onClick ={} */}
                {/* <button onClick={() =>butttonHandler(A3)}>A3</button> */}
                <button>A4</button>    
            </div>

            {/* <ItemDetail products ={products}/>  */}
            {/* el itemdetail haria de cards le paso los products */}

             <div className='box-container'>
                {products.map(product => 
                 
                    <div className='box' key={product.id}>
                        <div className='image'>
                            <img className= {product.className} src={product.img}/>
                        </div>

                        <div className='info'> 
                                <h3 className='title'>{product.title}-{product.size}</h3>
                            <div className ='subInfo'>
                                <div className='price'>{product.price}<i className='bi bi-flower2'></i></div>                        
                            </div>
                        </div>

                        <div className='overlay'>
                            <button id= {idButton}><FontAwesomeIcon icon= {faCartPlus}/></button>
                            <button><FontAwesomeIcon icon= {faHeart}/></button>
                            <button><Link to ={`/shop/${product.id}`}><FontAwesomeIcon icon= {faMagnifyingGlass}/></Link></button>
                        </div>

                    </div>    
                )}
            </div> 

        </main>
  
  
    )
}

export default ItemListContainer;

