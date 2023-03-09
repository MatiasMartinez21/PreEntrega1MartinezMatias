
import{ useState } from "react" //FUNCION DE REACT IMPORTADA PARA QUE FUNCIONE




const Contador =()=>{

        //estado  memoria de mi componente                   //(DESESTRUCTURA DE ARRAY)
    let[counter, setCounter]= useState(0) // ESTRUCTURA LET =[VARIABLE, "SET"+NOMBREDE VARIABLE (ES UNA FUNCION)]

    console.log(counter)


    //funcion que modifica el estado
    const handleClick =()=>{
        setCounter( counter + 1)  //LLAMO A LA FUNCION "SETCOUNTER" PARA PODER VER EL ESTADO MODIFICADO Y PASO EL NUEVO VALOR POR PARAMETRO
        
    }

    //esta es la parte que se renderiza y se ve en el dom 
    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me!</button>
            <p>Click:{counter} </p>
        </div>

    )

}
export default Contador