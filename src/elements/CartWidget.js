import React from 'react';
import {  Link } from "react-router-dom";

import { Button, Icon } from 'semantic-ui-react'

const CartWidget= () =>{
  return (
     

    <Link className='link' to="/products">

    <div className="ui animated fade button"  >

    <div className="hidden content"> <i className="shop icon"></i></div>

    <div className="visible content">
    Product
 
    </div>
    </div>

    </Link>
       


  );
}
export default CartWidget;