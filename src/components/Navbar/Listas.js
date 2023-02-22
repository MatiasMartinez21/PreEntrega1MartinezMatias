 import './Navbar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget.js/CartWidget'

const Navbar =()=>{



    return(
        <header className="header">
            <div className="headerConteiner">

                <img src={logo}alt='logo'className='headerLogo'/>

                <h1 className="headerTitulo">Mi Carrito</h1>
               

                <nav className="navbar">
                <a href="#"className="navbarLink">Productos</a>
                <a href="#"className="navbarLink">Catalogo</a>
                <a href="#"className="navbarLink">Carrito</a>
                <a href="#"className="navbarLink">Contactos</a>

                </nav>
            </div>
           
            <hr></hr>

        </header>

    )
}

export default Navbar