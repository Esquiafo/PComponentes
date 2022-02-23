import {useParams} from "react-router-dom"
import finalData from "../../Components/FirebaseApi.js"
import React, { useContext, useState } from 'react';
import CartContext from "../../Context/CartContext"
import stock from "../../Components/Stock"



const ItemDetail = () => {
  const ultimateData = finalData();
  const value = useParams();
  const [contador, setCounter] = useState(1)
  const filterItem=[]
  const context = useContext(CartContext);
  const increase = ()=>{
    setCounter(contador==stock()[value.productId-1].stock ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
    
    context.addItems({id: stock()[value.productId-1].id, cantidad: contador})
    
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

export default ItemDetail;