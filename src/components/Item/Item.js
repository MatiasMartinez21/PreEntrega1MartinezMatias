




const Item = ({ item }) => {

    return (





        <div  className='col-3 m-1'>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.descripcion}</p>
            <p>precio: <strong>${item.precio}</strong> </p>
            <p>{item.categoria}</p>
            <button className='btn btn-primary'>Ver mas</button>
        </div>)



}


export default Item

