import React, {useContext} from 'react';
import {  Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"


const CartWidget= () =>{
  
  const context = useContext(CartContext)
  const numberCart = context.cantityItems()

  return (
 

    <Link className='link' to="/shop">

    <div className="ui animated fade button"  >

    <div className="hidden content"><i className="shop icon"></i></div>

    <div className="visible content">
    Shop: {true ? (
     <span>{numberCart}</span>
 
    ): (
      0
    )}
  
    </div>
    </div>

    </Link>
       


  );
}
export default CartWidget;