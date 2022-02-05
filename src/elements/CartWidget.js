import React from 'react';
import {  Link } from "react-router-dom";

import { Button, Icon } from 'semantic-ui-react'

const CartWidget= () =>{
  return (
     

    <Link className='link' to="/shop">

    <div className="ui animated fade button"  >

    <div className="hidden content">Shop</div>

    <div className="visible content">
    <i className="shop icon"></i>
    
    </div>
    </div>

    </Link>
       


  );
}
export default CartWidget;