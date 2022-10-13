import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';    
import {Link} from 'react-router-dom';


const ItemDetail = () => {  

    const [products, setProducts] = useState([]);

    useEffect(() => {   
        fetch("./products.json")
        .then((res) => res.json())
        .then((productsres) => setProducts(productsres));
    }, [])
    
    const {productId} = useParams();

    const product = products.find ((product) === product.id === productId);
    const { img, title, price, size, className } = product; 

    let  idButton;

    
    return(
        //  map es como forEach
        
        <div className='box'>
            <div className='image'>
                <img className= {className} src={img}/>
            </div>

            <div className='info'> 
                    <h3 className='title'> {title}-{size}</h3>    
                <div className ='subInfo'>  
                    <div className='price'>{price}<i className='bi bi-flower2'></i></div>                        
                    <Link to ='/shop/'><h1>Back to products</h1></Link>
                </div>
            </div>

            <div className='overlay'>
                <button  id= {idButton} className='add fas fa-shopping-cart'></button>
                <button className='fas fa-heart'></button>
                <button className='fas fa-search'></button>
            </div>

        </div>   
  
    )
}

export default ItemDetail;

