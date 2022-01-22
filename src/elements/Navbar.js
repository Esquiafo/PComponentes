import React from 'react';
import {  Link } from "react-router-dom";
import styles from '../elements/Navbar.css';
import CartWidget  from '../elements/CartWidget';
import { Button, Icon } from 'semantic-ui-react'

const navbar= () =>{
  return (
  <div className='navback'>
     
      <Link className='link' to="/">
      <Button animated>
      <Button.Content visible> <Link className='link' to="/">Index</Link></Button.Content>
      <Button.Content hidden>
        <Icon name='long arrow alternate left' />
        </Button.Content>
      </Button>
      </Link>




      <Link className='link' to="/forum">
      <Button animated>

        <Button.Content visible> 
         <Link className='link' to="/forum">Forum</Link>
        </Button.Content>
      <Button.Content hidden>
        <Icon name='chat' />
      </Button.Content>

      </Button>
      </Link>
        

      <CartWidget />


  </div>
  );
}
export default navbar;