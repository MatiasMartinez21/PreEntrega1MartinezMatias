import './Navbar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget.js/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {



    return (
        <header className="header">
            <div className="headerConteiner">


                <div className='headerLogo'>
                    <Link to="/" className='navabarLink'> <CartWidget ></CartWidget></Link>

                </div>
                <h1 className="headerTitulo">Mi Carrito</h1>


                <nav className="navbar">
                    {/* <a href="#"className="navbarLink">Productos</a>
                <a href="#"className="navbarLink">Catalogo</a>
                <a href="#"className="navbarLink">Carrito</a>
                <a href="#"className="navbarLink">Contactos</a> */}


                    <Link to="/" className="navbarLink">Inicio</Link>
                    <Link to="/micarrito" className="navbarLink">Ver Carrito</Link >
                    <Link to="/nosotros" className="navbarLink">Nosotros</Link>
                    <Link to="/contacto" className="navbarLink">Contactos</Link>



                </nav>
            </div>

            <hr></hr>

        </header>

    )
}

export default Navbar