import React from 'react';
import {  Link } from "react-router-dom";
import styles from '../elements/Navbar.css';

const navbar= () =>{
  return (
  <div className='navback'>
    <li>
        <a>LOGO</a>
    </li>
    <li>
      <Link to="/">Index</Link>
    </li>
    <li>
      <Link to="/Shop">Shop</Link>
    </li>
    <li>
      <Link to="/Forum">Forum</Link>
    </li>
  </div>
  );
}
export default navbar;