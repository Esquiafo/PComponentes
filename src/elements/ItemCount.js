import { render } from "@testing-library/react";
import React from "react";

const ItemCount= (props) => {
  const [contador, setCounter] = React.useState(parseInt(props.initial))

  const increase = ()=>{
    setCounter(contador==props.stock ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
   alert("Agregaste "+contador+" item al carrito")
  }

    return (
    <div>

    <h3>Contador: {contador}</h3>
    <h3>Stock: {props.stock}</h3>
    
    <button onClick={increase}>Agregar</button>
    <button onClick={decrease}>Quitar</button>
    <button onClick={onAdd} >Enviar</button>
    </div>
    )
    
  }

export default ItemCount;