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
      <Link to="/Shop">Cats</Link>
    </li>
    <li>
      <Link to="/Forum">Sheeps</Link>
    </li>
  </div>
  );
}
export default navbar;