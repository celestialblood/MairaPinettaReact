import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

import  'bootstrap/dist/css/bootstrap.min.css';  //importo el css de bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos font awesome 
import { faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ItemDetail.css';   

import {getFirestore, collection, getDocs} from "firebase/firestore";

import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from  "../../../../context/CartContext";



const ItemDetail = ({data}) => {  

    const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

    const [products, setProducts] = useState([]);
    
    const {id} = useParams();

    //traigo los productos de firestore
    useEffect(()=> {
        const db = getFirestore();
        const productsCollection = collection(db, "products");

        //snapshot es la response de firestore
        getDocs(productsCollection).then(snapshot=> {
            const arrproducts = snapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data(),
            }));
            //.data metodo para ver el contenido transformo el array, convierto a json
            //traigo la colleccion de docs lo transformo en json y asocio el doc.id a id para poder visualizarlo y usarlo d ekey  
            setProducts(arrproducts);
        }); 
            

    }, []);

    const product = products.find ((product) => product.id === id);

    // const { img, title, price, size, className } = product; 

    let  idButton;

    
    return(
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
                <div>
                    {goToCart ? (
						<Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={3} stock={5} onAdd={onAdd} />
					)}
                </div>
        </div>
        
  
    )
}

export default ItemDetail;

