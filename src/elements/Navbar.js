import React from 'react';
import {  Link } from "react-router-dom";
import styles from '../elements/Navbar.css';
import CartWidget  from '../elements/CartWidget';
import { Button, Icon } from 'semantic-ui-react'

const Navbar= () =>{
  return (
  <div className='navback'>

  <div className="ui animated button" >
  <Link  to="/">

  <div className="visible content">Index</div>

  <div className="hidden content">
  <i className="right arrow icon"></i>

  </div>

  </Link>
  </div>


  <div className="ui animated button" >
  <Link  to="/forum">

  <div className="visible content">Forum</div>

  <div className="hidden content">
  <i className="chat icon"></i>

  </div>

  </Link>
  </div>


  <CartWidget />
        




  </div>
  );
}
export default Navbar;