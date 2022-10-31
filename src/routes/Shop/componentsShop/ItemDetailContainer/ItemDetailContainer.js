import { useEffect, useState } from "react"
import ItemDetail from "../../componentsShop/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getFirestore, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);
        
    return( 
        
        <main className='main-shop'>
             <ItemDetail data={data}/>
        </main>
            
    );
};

export default ItemDetailContainer