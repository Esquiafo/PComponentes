import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import finalData from "../../Components/ItemApi.js"
import { Link } from 'react-router-dom';
const Cart = () =>{
  const context = useContext(CartContext);
  const lastValue=finalData()
  let count = -1

  const deleteId = (h)=>{
    context.eliminarId(h.target.value);
    
}
  const fullClear = ()=>{
    context.clear()
    
}


  const products = context.items.map(product => {
    count++
    return (
    <div key={product.id}>
      {lastValue.length!==0? (
      <div>
      <Link  to="/cart">
      <button onClick={deleteId} value={count} >Borrar item</button>
      </Link>
      <ul>
        <li>Id: {product.id}</li>
        <li>Cantidad: {product.cantidad}</li>
        <li>{lastValue[product.id-1][0].title}</li>
        <li>Precio total: ${(lastValue[product.id-1][0].price)*(product.cantidad)}</li>
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

  return (
    <div>
     
    {products.length!==0 ? (
      <div>
      <Link  to="/cart">
      <button onClick={fullClear} >Borrar todo</button>
      </Link>
      <hr />
     {products}
      </div>
      
    ) : (<div>
      <h1>Carrito Vacio</h1>
      </div>
    )}
   </div>
  );
};
export default Cart;
