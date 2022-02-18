
import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
const CartWidget= () =>{
  const context = useContext(CartContext)
  return (
    <div className="ui animated fade button"  >
    <div className="hidden content"><i className="shop icon"></i></div>
    <div className="visible content">
    {/* Aca iria el numero actualizado */}
    Shop: {context.items.length}
  
    </div>
    </div>

 
       


  );
}
export default CartWidget;