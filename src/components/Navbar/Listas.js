 import './Navbar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget.js/CartWidget'
import {Link}  from 'react-router-dom'

const Navbar =()=>{



    return(
        <header className="header">
            <div className="headerConteiner">

                
               
                <h1 className="headerTitulo">Mi Carrito</h1>
                
                <div className='headerLogo'>
                    <CartWidget ></CartWidget>
                </div>


                <nav className="navbar">
                {/* <a href="#"className="navbarLink">Productos</a>
                <a href="#"className="navbarLink">Catalogo</a>
                <a href="#"className="navbarLink">Carrito</a>
                <a href="#"className="navbarLink">Contactos</a> */}


                <Link to="/"className="navbarLink">Productos</Link>
                <Link to="/nosotros"className="navbarLink">Catalogo</Link>
                <Link to="/contacto"className="navbarLink">Carrito</Link >
                <Link to=""className="navbarLink">Contactos</Link>



                </nav>
            </div>
           
            <hr></hr>

        </header>

    )
}

export default Navbar