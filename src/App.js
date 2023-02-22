
// import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Listas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
  import CartWidget from './components/CartWidget.js/CartWidget';



function App() {
  return (
    <div className="App">

      
{/* navegador */}
      <NavBar/>   
{/* fin navegador componente */}


{/* contenedor de listas */}
    <ItemListContainer/>
    {/* fin contenedor */}


      <CartWidget></CartWidget> 

     <Button variant='primary'size='lg'> click </Button>

    
     





      

    </div>
  );
}

export default App;
