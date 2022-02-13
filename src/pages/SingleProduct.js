import {useParams} from "react-router-dom"
import finalData from "./ProductDetails.js"

const SingleProduct = () => {
  const value = useParams();
  const lastValue=[]
  finalData().map(x=>x.filter(b=>b.id==value.productId ? lastValue.push(b) : null))
  return (
    <div>

     {lastValue.length!==0 ? (
       <div key={lastValue[0].id}>
         <ul>
         <li>ID = {lastValue[0].id}</li>
         <li>Product = {lastValue[0].title}</li>
         <li>Category = {lastValue[0].category}</li>
         <li>Price = {lastValue[0].price}</li>
         </ul>
       </div>
     ) : (
       <h1>Cargando</h1>
     )}
    </div>
  )

  

};

export default SingleProduct;