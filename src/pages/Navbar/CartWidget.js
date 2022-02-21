
import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
const CartWidget= () =>{
  const context = useContext(CartContext)
  const itemspush = 0
  const values = context.items.map(x => itemspush+x.cantidad)
  return(
    <div className="ui animated button" >
    <Link  to="/products">
  
    <div className="visible content">Shop: {values}</div>
  
    <div className="hidden content">
    <i className="shop icon"></i>
  
    </div>
  
    </Link>
    </div>
  )
};
export default CartWidget;