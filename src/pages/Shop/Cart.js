import React, {useContext, useState} from 'react';
import CartContext from '../../Context/CartContext';
import finalData from "../../Components/ProductsApi"
import apiData from "../../Components/PushApi"
import ApiContext from '../../Context/ApiContext';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
const Cart = () =>{
  const context = useContext(CartContext);
  const contextApi = useContext(ApiContext);
  const lastValue=finalData()
  let count = -1
  let name
  let email
  let items
  let phone
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


  const products = context.items.map(product => {
    count++

    return (
    <div key={product.id}>
      {lastValue!==undefined? (
      <div>
      <Link  to="/cart">
      <button onClick={deleteId} value={count} >Borrar item</button>
      </Link>
      <ul>
        <li>Id: {product.id}</li>
        <li>Cantidad: {product.cantidad}</li>
        <li>{lastValue[product.id-1].title}</li>
        <li>Precio total: ${(lastValue[product.id-1].price)*(product.cantidad)}</li>
      </ul>
        <hr />
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

  name = event.target.value;
}
const handleEmail = (event) => {
  email = event.target.value;

}
const handlePhone = (event) => {
  phone = event.target.value;

}
const form = () =>{
  return(

  <div className="ui form">
  <div className="three fields">
    <div className="field">
      <label>Nombre Completo</label>
      <input  onChange={handleName} type="text" placeholder="Abcdef ghijk" />
    </div>
    <div className="field">
      <label>Correo Electronico</label>
      <input onChange={handleEmail} type="text" placeholder="email@email.com" />
    </div>
    <div className="field">
      <label>Telefono</label>
      <input  onChange={handlePhone} type="text" placeholder="+5491100000000" />
    </div>
  </div>
  <Link to='/'>
  <button onClick={exitCart}>Comprar</button>
  </Link>
  </div>
       
  
  )
}
  return (
    <div>
     
    {products.length!==0 ? (
      <div>

      <hr />
      {form()}
     {products}
     
     <Link  to="/cart">
      <button onClick={fullClear} >Borrar todo</button>
      </Link>
      </div>
      
    ) : (<div>
      <h1>Carrito Vacio</h1>
      </div>
    )}
   </div>
  );
};
export default Cart;
