import {useParams} from "react-router-dom"
import finalData from "./ProductDetails.js"
import React, { useContext, useState } from 'react';
import {NewItem} from "./NewItem";
import ShopContext from "./ShopContext"
import stock from "./Stock"
import Shop from "./Shop.js";


const SingleProduct = () => {

  const value = useParams();
  const [contador, setCounter] = useState(1)
  const lastValue=[]
  const context = useContext(ShopContext);
  
  const increase = ()=>{
    setCounter(contador==stock()[value.productId-1].stock ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
  context.addItems({id: stock()[value.productId-1].id, cantidad: contador})
  console.log(context.items)
  }


 
  finalData().map(x=>x.filter(b=>b.id==value.productId ? lastValue.push(b) : null))

  return (
    <div>
     
     {lastValue.length!==0 ? (
       <div key={lastValue[0].id}>
         <ul>
         <li>ID = {lastValue[0].id}</li>
         <li>Product = {lastValue[0].title}</li>
         <li>Category = {lastValue[0].category}</li>
         <li>Price = {lastValue[0].price}</li>
         </ul>
         <h3>Contador: {contador}</h3>
         <h3>Stock: {stock()[value.productId-1].stock}</h3>
         
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={onAdd} >Enviar</button>





       </div>
       
     ) : (
       <h1>Cargando</h1>
     )}
    </div>
  )

  

};

export default SingleProduct;