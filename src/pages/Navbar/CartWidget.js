
import React from "react";

const CartWidget= (props) =>{

  return (
    <div className="ui animated fade button"  >
    <div className="hidden content"><i className="shop icon"></i></div>
    <div className="visible content">
    {/* Aca iria el numero actualizado */}
    Shop: 1
   
    </div>
    </div>

 
       


  );
}
export default CartWidget;