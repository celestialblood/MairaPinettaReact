import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';           
import ItemDetail from './componentsShop/ItemDetail/ItemDetail';

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
                                <Link to ={`/shop/${product.id}`}><h3 className='title'>{product.title}-{product.size}</h3></Link>
                            <div className ='subInfo'>
                                <div className='price'>{product.price}<i className='bi bi-flower2'></i></div>                        
                            </div>
                        </div>

                        <div className='overlay'>
                            <button  id= {idButton} className='add fas fa-shopping-cart'></button>
                            <button className='fas fa-heart'></button>
                            <button className='fas fa-search'></button>
                        </div>

                    </div>    
                )}
            </div> 

        </main>
  
  
    )
}

export default ItemListContainer;

