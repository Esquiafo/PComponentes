import React, {useContext} from 'react';
import {Link,Switch} from "react-router-dom";
import styles from './Navbar.css';
import CartWidget  from './CartWidget';
import CartContext from '../../Context/CartContext'
const Navbar= () =>{
  const context = useContext(CartContext)
  return (
  <div className='navback'>

  <div className="d-grid gap-3 d-md-block">

  <button className="btn ui animated button" type="button">
    
  <Link  to="/">
  <div className="visible content">Index</div>
  <div className="hidden content">
  <i className="right arrow icon"></i>
  </div>
  </Link>

  </button>

  <button className="btn ui animated button" type="button">

  <Link  to="/category">
  <div className="visible content">Category</div>
  <div className="hidden content">
  <i className="chat icon"></i>
  </div>
  </Link>

  </button>

  <button className="btn ui animated button" type="button">
    
  <Link  to="/products">
  <div className="visible content">Product</div>
  <div className="hidden content">
  <i className="tag icon"></i>
  </div>
  </Link>

  </button>

  {/* Problemas para taer el numero actualizado */}
  {context.items.length > 0 ? (
  <Link to="/cart">
    <Switch>
          <CartWidget />
    </Switch>
  </Link>

    
  ):(
    null
  )}
  
  
  </div>



  </div>
  );
}
export default Navbar;