import { useEffect, useState } from "react"
import ItemDetail from "../../componentsShop/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getFirestore, getDoc } from 'firebase/firestore'
import {db} from "../../../../index";


const ItemDetailContainer = () => {

	const [item, setItem] =useState({})
	const {id}= useParams()
	useEffect(()=>{  
  		const coleccionProd = collection(db, "Items")
  		const referenciaDoc = doc(coleccionProd, id)
  		getDoc(referenciaDoc)
  		.then((result)=>{
    		setItem({
      			id:result.id,
      			...result.data()
   			})
  		})
  		.catch((error)=> console.log(error))
	}, [id])

	return( 
		<main className='main-shop'> 
			<ItemDetail item={item}/>
		</main>

	)
	// const [data, setData] = useState({});
	// const { detalleId } = useParams();

	// useEffect(() => {
	// 	const querydb = getFirestore();
	// 	const queryDoc = doc(querydb, "products", detalleId);
	// 	getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	// }, [detalleId]);
        
    // return( 
        
    //     <main className='main-shop'>
    //          <ItemDetail data={data}/>
    //     </main>
            
    // );
};

export default ItemDetailContainer