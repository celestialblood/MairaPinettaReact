import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';  //importo el css de bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos font awesome 
import { faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ItemDetail.css';    



const ItemDetail = () => {  


    const [products, setProducts] = useState([]);
    
    const {id} = useParams();

    useEffect(() => {   
        fetch("../../products.json")
        .then((res) => res.json())
        .then((productsres) => setProducts(productsres));
    }, [])
    const product = products.find ((product) => product.id === id);

    // const { img, title, price, size, className } = product; 

    let  idButton;

    
    return(
        //  map es como forEach
        <main className='main-shop'>
            <div className='box-container'>
   
                <div className='boxdetail'>
                    <div className='image'>
                        <img className= {product?.className + "detail"} src={product?.img}/>
                    </div>

                    <div className='info'> 
                            <h3 className='title'> {product?.title}-{product?.size}</h3>    
                        <div className ='subInfo'>  
                            <div className='price'>{product?.price}<i className='bi bi-flower2'></i></div>                        
                            <button className='backtoproductsbutton'><Link to ='/shop'>Back to products</Link></button>
                        </div>
                    </div>

                    <div className='overlay'>
                        <button id= {idButton}><FontAwesomeIcon icon= {faCartPlus}/></button>
                        <button><FontAwesomeIcon icon= {faHeart}/></button>
                        <button><FontAwesomeIcon icon= {faMagnifyingGlass}/></button>
                    </div>

                </div> 

            </div>
        </main>          
  
    )
}

export default ItemDetail;

