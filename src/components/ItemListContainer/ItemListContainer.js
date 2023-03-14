import { useEffect } from 'react'
import './ItemListContainer.css'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItenList from '../ItemList/ItenList'





const ItemListContainer = ({ producto, precio, id }) => {




    const [productos, setProductos] = useState([])
    console.log(productos)

    const [Loading, setLoading] = useState(true)



    useEffect(() => {




        pedirDatos()
            .then((response) => {
                setProductos(response)

            })
            .catch((error) => {
                console.log(error)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [])




    return (


        <div className="contenedorListas">

            {
                Loading
                    ? <h2>Cargando...</h2>
                    : <ItenList items={productos} />

            }



        </div>


    )




}
export default ItemListContainer 