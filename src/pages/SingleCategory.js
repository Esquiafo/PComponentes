import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SingleProduct = (props) => {

  return (
    <div>
   <ul>

     <li>{props.category}</li>

   </ul>
    </div>
  )
};

export default SingleProduct;

