import { useEffect } from 'react'
import './ItemListContainer.css'
import { useState } from 'react'


const MOCK_DATA=[
    {

     id: 1,
    name: "producto 1",
     descripcion: "loren ipsum producto 1",
   precio: 6500,
    img: "https://via.placeholder.com/220"


 },

 {

    id: 2,
   name: "producto 2",
    descripcion: "loren ipsum producto 1",
  precio: 6500,
   img: "https://via.placeholder.com/220"


},

{

    id: 3,
   name: "producto 3",
    descripcion: "loren ipsum producto 1",
  precio: 6500,
   img: "https://via.placeholder.com/220"


},

{

    id: 4,
   name: "producto 4",
    descripcion: "loren ipsum producto 1",
  precio: 6500,
   img: "https://via.placeholder.com/220"


},


{

    id: 5,
   name: "producto 5",
    descripcion: "loren ipsum producto 1",
  precio: 6500,
   img: "https://via.placeholder.com/220"


},

{

    id: 6,
   name: "producto 6",
    descripcion: "loren ipsum producto 1",
  precio: 6500,
   img: "https://via.placeholder.com/220"


},



 ]


 const pedirDatos=()=>{
    return new Promise((resolver, reject )=>{
        setTimeout(()=>{
            resolver(MOCK_DATA)
        }, 5000)

    })
 }

const ItemListContainer =({producto, precio, id}) => {
 



const [productos, setProductos ] = useState([])
console.log(productos)

    
        useEffect(()=>{

            pedirDatos()
            .then((response)=>{
                setProductos(response)
                })
            .catch((error)=>{
                console.log(error)
                })
//                 .fanally(()=>{
// //             console.log("fin de proceso")
//                  })
},[])
   



    return(
            <div className="contenedorListas">
                <h2>Contenedor de listas</h2>
                 {/* <p>producto:{producto}</p>
                <p>precio:{precio}</p>
                <p>id:{id}</p>  */}


                <hr/>
                <div className='row my-5 '>
                    {productos.map((el)=>(

                    <div key={el.id} className='col-3 m-1'>
                        <img src={el.img} alt={el.name}/> 
                        <h4>{el.name}</h4>
                        <p>{el.descripcion}</p>
                        <p>precio: <strong>${el.precio}</strong> </p>
                        


                    </div>)
                    )}
                </div>


                {/*mostrar el array de producto */}






            </div>
            

    )




}
export default ItemListContainer 