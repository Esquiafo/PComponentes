import React from 'react';
import {  Link } from "react-router-dom";

import { Button, Icon } from 'semantic-ui-react'

const CartWidget= () =>{
  return (
     

      <Link className='link' to="/shop">
      <Button animated>

        <Button.Content visible> 
          <Link className='link' to="/"> <a className='link'>Cart</a></Link>
        </Button.Content>
      <Button.Content hidden>
        <Icon name='shop' /><a className='link'>:</a><a className='link'>N~</a>
      </Button.Content>

      </Button>
      </Link>
       


  );
}
export default CartWidget;