import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.css';
import CartWidget  from './CartWidget';


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

  {true ? (
    <Link className='link' to="/cart">

          <CartWidget />

    
    </Link>
  ):(
    <div>
    </div>
  )}
  
        




  </div>
  );
}
export default Navbar;