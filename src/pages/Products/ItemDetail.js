import {Link, useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi.js"
import React, { useContext, useState } from 'react';
import CartContext from "../../Context/CartContext"



const ItemDetail = () => {
  const ultimateData = finalData();
  const value = useParams();
  const [contador, setCounter] = useState(1)
  const filterItem=[]
  const context = useContext(CartContext);
  const increase = ()=>{
    setCounter(contador==ultimateData[value.productId-1].stock ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
  
    context.addItems({id: ultimateData[value.productId-1].id, cantidad: contador, price:ultimateData[value.productId-1].price, title: ultimateData[value.productId-1].title })
    
  }

  
  if (finalData()!==undefined) {
    filterItem.push(ultimateData.filter(x=>x.id==value.productId))
  }
  return (
    <div>
     
     {filterItem.length!==0 ? (
       <div key={filterItem[0][0].id}>
         <ul>
         <li>ID = {filterItem[0][0].id}</li>
         <li>Product = {filterItem[0][0].title}</li>
         <li>Category = {filterItem[0][0].category}</li>
         <li>Price = {filterItem[0][0].price}</li>
         </ul>
         <h3>Contador: {contador}</h3>
         <h3>Stock: {ultimateData[value.productId-1].stock}</h3>
         
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <Link to="/cart" >
    <button onClick={onAdd} >Enviar</button>
    </Link>
       </div>
       
      ) : (
       <h1>Cargando</h1>
     )}
    </div>
  )

  

};

export default ItemDetail;