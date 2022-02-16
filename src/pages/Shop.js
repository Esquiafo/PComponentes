import React, {useContext} from 'react';
import styles from '../pages/Shop.css';
import ShopContext from './ShopContext';
import finalData from "./ProductDetails.js"

const Shop = () =>{
  const context = useContext(ShopContext);
  const lastValue=finalData()
  const fullClear = () =>{
    context.clear()
    }
  const products = context.items.map(product => {
    return (
    <div key={product.id}>
      {lastValue.length!==0? (
      <div>
        
      <ul>
        <li>Id: {product.id}</li>
        <li>Cantidad: {product.cantidad}</li>
        <li>{lastValue[product.id-1][0].title}</li>
        <li>Precio total: ${(lastValue[product.id-1][0].price)*(product.cantidad)}</li>
      </ul>
        <hr />
      </div>
      
    ) : (
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
     <button onClick={fullClear} >Borrar todo</button>
     {products}
     
      </div>
      
    ) : (<div>
      <h1>Carrito Vacio</h1>
      </div>
    )}
   </div>
  );
};
export default Shop;
