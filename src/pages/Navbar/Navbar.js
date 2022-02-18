import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.css';
import CartWidget  from './CartWidget';
import CartContext from '../../Context/CartContext'

const Navbar= () =>{
  const context = useContext(CartContext)
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
  <Link  to="/category">

  <div className="visible content">Category</div>

  <div className="hidden content">
  <i className="chat icon"></i>

  </div>

  </Link>
  </div>
  
  
  <div className="ui animated button" >
  <Link  to="/products">

  <div className="visible content">Product</div>

  <div className="hidden content">
  <i className="message icon"></i>

  </div>

  </Link>
  </div>
  {/* Problemas para taer el numero actualizado */}
  {true ? (
    <Link className='link' to="/cart">

          <CartWidget />

    
    </Link>
  ):(
    null
  )}
  
        




  </div>
  );
}
export default Navbar;