import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';  //importo el css de bootstrap
import './App.css';
//routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Permanent Components
import NavBar from './components/NavBar/NavBar';

//routes pages
import ItemListContainer from './routes/Shop/ItemListContainer';
import ItemDetailContainer from './routes/Shop/componentsShop/ItemDetailContainer/ItemDetailContainer';
import Home from './routes/Home/Home';
import Cart from './routes/Cart/Cart';
import Contact from './routes/Contact/Contact';
import CartProvider from "./context/CartContext";
import 'moment-timezone';

function App() {
  return (
    
    <BrowserRouter> {/*Meto el contenido dentro del browser routes para organziar el contenido en las url*/}
      <CartProvider>
        <NavBar/> {/*dejo fuera de route los que quedan fijos ej footer navbar para cambiar el icono dependiendo la pagina usar renderizadoc ondicional*/}

        <Routes> {/*ruteo componentes como si fueran páginas*/}
          <Route path="/contact" element={<Contact/>} />
          <Route exact path= "/" element={<Home/>} /> {/*Paso el componente home  a la ruta que quiero que este asociado*/} 
          <Route exact path= "/shop" element={<ItemListContainer/>} />
          <Route exact path= "/shop/:id" element={<ItemDetailContainer/>} />
          <Route path="category/:categoryName" element={<ItemListContainer />} />
          <Route exact path= "/cart" element={<Cart/>}/>

                {/* Las rutas con : esperan un parametro,
                que se guarda con el useParams del ItemListContainer cuando seleccionas categoria en el navbar */}
                {/* <Route path="category/:categoryName" element={<ItemListContainer />} /> */}

        </Routes>
      </CartProvider>        
    </BrowserRouter>

  );
}


export default App;

