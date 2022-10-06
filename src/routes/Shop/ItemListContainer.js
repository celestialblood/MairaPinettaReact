import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'; 

const ItemListContainer = () => {

    // parametros para filtrar
    const {size} = useParams();  
    const [products, setProducts] = useState([]);

    useEffect(() => {   
        fetch("./products.json")
        .then((res) => res.json())
        .then((productsres) => setProducts(productsres));
    }, [size])
    
    let  idButton;
    
    
    return(
        //  map es como forEach
        
        <main className='main-shop'>
            <div className='box-container'>
                {products.map(product => 
                 
                    <div className='box'>
                        <div className='image'>
                            <img className= {product.class} src={product.img}/>
                        </div>

                        <div className='info'> 
                                <h3 className='title'> {product.title}-{product.size}</h3>    
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

