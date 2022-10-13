import React from 'react';
import './App.css';
// import logo from './logo.svg';

//routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Permanent Components
import NavBar from './components/NavBar/NavBar';

//routes pages
import ItemListContainer from './routes/Shop/ItemListContainer';
import ItemDetail from './routes/Shop/componentsShop/ItemDetail/ItemDetail';
import Home from './routes/Home/Home';


function App() {
  return (
      
    <BrowserRouter> {/*Meto el contenido dentro del browser routes para organziar el contenido en las url*/}
    
      <NavBar/> {/*dejo fuera de route los que quedan fijos ej footer navbar para cambiar el icono dependiendo la pagina usar renderizadoc ondicional*/}
     
      <Routes> {/*ruteo componentes como si fueran páginas*/}
        {/* <Route path='/Detail/:id' element={<ItemDetailContainer/>}/> */}
        <Route exact path= "/" element={<Home/>} /> {/*Paso el componente home  a la ruta que quiero que este asociado*/} 
        <Route exact path= "/shop" element={<ItemListContainer/>} />
        <Route exact path= "/shop/:id" element={<ItemDetail/>} />

      </Routes>
    
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

