
// import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Listas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import CartWidget from './components/CartWidget.js/CartWidget';
import Contador from './components/Contador/Contador';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';






function App() {
  return (

    <BrowserRouter>


      {/* navegador */}
      <NavBar />
      {/* fin navegador componente */}

      <Routes>

        <Route path="/" element={<ItemListContainer producto="contenedor 1" precio="1600" id={1} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* <Route path='*' element={ <Error404/>}/> */}
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>



      <Contador />


  
    </BrowserRouter>
  );
}

export default App;
