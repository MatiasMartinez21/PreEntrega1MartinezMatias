
// import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Listas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import CartWidget from './components/CartWidget.js/CartWidget';
import Contador from './components/Contador/Contador';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';








function App() {
  return (

    <BrowserRouter>


    {/* <div className="App"> */}

      
{/* navegador */}
      <NavBar/>   
{/* fin navegador componente */}

    <Routes>

      <Route path="/" element={ <ItemListContainer producto="contenedor 1" precio="1600" id={1} /> } />
      <Route path="/nosotros" element={ <nosotros/> } />
      <Route path="/contacto" element={ <contacto/> } />
      {/* <Route path='*' element={ <Error404/>}/> */}
      <Route path='*' element={ <Navigate to="/"/>}/>

    </Routes>



{/* contenedor de listas */}
    {/* <ItemListContainer/> */}
    {/* fin contenedor */}


      {/* <CartWidget></CartWidget>  */}

     

    
     <Contador/>





      

    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
