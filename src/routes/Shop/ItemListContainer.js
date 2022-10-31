import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./componentsShop/ItemList/ItemList"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    
    const clickHandler = (e) => {
        console.log("click");
    }
    return (
        <main className='main-shop'>
            <div>  
                <button onClick ={clickHandler}>A4</button>    
            </div>

            <ItemList/>
      </main>
    );

};

export default ItemListContainer