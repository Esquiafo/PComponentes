import React, {useContext, useState} from 'react';
import CartContext from '../../Context/CartContext';
import finalData from "../../Components/ProductsApi"
import apiData from "../../Components/PushApi"
import ApiContext from '../../Context/ApiContext';
import { Link } from 'react-router-dom';
import { Input, Image } from 'semantic-ui-react';
const Cart = () =>{
  const context = useContext(CartContext);
  const contextApi = useContext(ApiContext);
  const lastValue=finalData()

  const increase = (h)=>{
    context.upCant(h.target.value)
  }
  const decrease = (h)=>{
    context.downCant(h.target.value)
  }
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let count = -1
  let id
  let cantidad
  let items

  const deleteId = (h)=>{
    context.eliminarId(h.target.value);
}
  const fullClear = ()=>{
    context.clear()
}

const exitCart = ()=>{
  contextApi.items=context.items;
  contextApi.name=name;
  contextApi.email=email;
  contextApi.phone=phone;
  apiData(contextApi)
  context.clear()
}

let finalPrice = 0
context.items.map(x=> finalPrice= finalPrice + (x.cantidad*x.price))
  const products = context.items.map(product => {
    
    count++
    id = product.id
    cantidad = product.cantidad
    return (
    <div key={product.id}>
      {lastValue!==undefined? (
        
      <div>
      <div className='d-flex'> 
       <Image className='col-md-4' style={{width:"250px", height: "250px"}} src={`${product.img}`} rounded />
      <ul  className='col-md-8 '>
        <li>{lastValue[product.id-1].title}</li>
        <li>
          Cantidad: {product.cantidad}
          <Link  to="/cart">
           <button value={count} onClick={increase}>+</button>
           <button value={count} onClick={decrease}>-</button>
      </Link>
        </li>
        <li>Precio total: ${(lastValue[product.id-1].price)*(product.cantidad)}</li>
      </ul>
      </div>
      <Link  to="/cart">
      <button onClick={deleteId} value={count} >Borrar item</button>
      </Link>
    </div>
    )  : (
      <div>
   <h1>Cargando</h1>
    </div>
    )}
      
  </div>
  );

})
const handleName = (event) => {
  setName(event.target.value)
}
const handleEmail = (event) => {
  setEmail(event.target.value)


}
const handlePhone = (event) => {
  setPhone(event.target.value)


}
const form = () =>{
  
  return(

  <div style={{margin: "10px 10px 10px 10px"}} className="ui form">

    <div className="field col-bg-12">
      <label>Nombre Completo</label>
      <input  onChange={handleName} type="text" placeholder="Abcdef ghijk" />
    </div>
    <div className="field  col-bg-12">
      <label>Correo Electronico</label>
      <input onChange={handleEmail} type="text" placeholder="email@email.com" />
    </div>
    <div className="field  col-bg-12">
      <label>Telefono</label>
      <input  onChange={handlePhone} type="text" placeholder="+5491100000000" />
    </div>



  </div>
       
  
  )
}
  return (
    <div>

      <div className='d-flex'>
        <div>
            Carrito de compras
        </div>
        <div>
          <Link  to="/cart">
             <button onClick={fullClear} >Borrar todo</button>
          </Link>
        </div>
      </div>

    {products.length!==0 ? (
      <div className='d-flex'>

      <hr />

      <div className='col-md-8'>

     {products}
      </div>
      <div className='col-md-4'>

      {form()}

      <p>Precio articulos: ${finalPrice}</p>
      <p> Iva 21%: ${finalPrice * 0.21} </p>
      <p>Final: ${finalPrice+(finalPrice*0.21)}</p>
        
     {name.length < 8 || phone.length < 8 || email == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ? (null) : (
        <Link to='/'>
        <button onClick={exitCart}>Comprar</button>
        </Link>
     )}
      </div>
      </div>
      
    ) : (<div>
      <h1>Carrito Vacio</h1>
      </div>
    )}
   </div>
  );
};
export default Cart;
