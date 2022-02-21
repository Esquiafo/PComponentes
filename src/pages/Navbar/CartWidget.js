
import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
const CartWidget= () =>{
  const context = useContext(CartContext)
  let itemspush = 0
  context.items.map(x => itemspush=x.cantidad+itemspush)
  return(
    <div className="ui animated button" >
    <Link  to="/cart">
  
    <div className="visible content">Shop: {itemspush}</div>
  
    <div className="hidden content">
    <i className="shop icon"></i>
  
    </div>
  
    </Link>
    </div>
  )
};
export default CartWidget;