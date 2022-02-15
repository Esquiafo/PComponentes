import React, {useContext} from 'react';
import {  Link } from "react-router-dom";
import ShopContext from "../pages/ShopContext"


const CartWidget= () =>{
  const context = useContext(ShopContext);
  return (
 

    <Link className='link' to="/shop">

    <div className="ui animated fade button"  >

    <div className="hidden content">Shop: {context.items.length}</div>

    <div className="visible content">
    
    <i className="shop icon"></i>
    </div>
    </div>

    </Link>
       


  );
}
export default CartWidget;