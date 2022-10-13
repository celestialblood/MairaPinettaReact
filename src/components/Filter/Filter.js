// import { useEffect } from "react";
// import './Filter.css';


// function Filter({setActivesize, activeSize, products}) { 


//     useEffect (() => {
//         if(activeSize === 0){
//             setFiltered(products);
//             return;
//         }

//         const filtered = products.filter((product)  => 
//             product.size.includes(activeSize)    
//         );

//     },[activeSize]);

//     return (
//         <div className="filter-container">
            
//             <button className='buttonProduct' onClick={() => setActivesize(0)} >A4</button>
//             <button className='buttonProduct' onClick={() => setActivesize(A4)} >A4</button>
//             <button  className='buttonProduct' onClick={() => setActivesize(A3)} >A3</button>

//         </div>


//     );
// }

// export default Filter;