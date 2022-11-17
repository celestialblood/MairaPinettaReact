import "./ItemList.css"
import { Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import {getFirestore, collection, getDocs} from "firebase/firestore";
import  'bootstrap/dist/css/bootstrap.min.css';  //importo el css de bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos font awesome 
import { faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ItemFilter from "../../../../components/ItemFilter/ItemFIlter";
import ItemCount from '../../componentsShop/ItemCount/ItemCount'
import { useCartContext } from "../../../../context/CartContext";


const ItemList = ({item}) => {

    const [goCart , setGoCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (cantidad) => {
        setGoCart(true);
        addProduct(item, cantidad);
    };

    //usestatepara listar los productos
    const [products, setProducts] = useState([]);

    let idButton;

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

    return (

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

                    {goCart ? ( <Link to="/cart"> Go to Cart</Link> 
                
                    ) : ( 
                    <ItemCount initial={0} stock={10} onAdd={onAdd} />)}
                </div>    
            )}
        </div> 

    )
}

export default ItemList