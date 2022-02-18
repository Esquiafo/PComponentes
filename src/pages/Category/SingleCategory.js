import {useParams} from "react-router-dom"
import finalData from "../../Components/ItemApi.js"
import { Link } from "react-router-dom";

const SingleCategory = () => {
  
  const value = useParams();
  const newArr=[]
  finalData().map(x=>x.filter(b=>b.category==value.categoryId ? newArr.push(b) : null))
  const lastFilter = newArr.map(x=> {
    
    return (
      <div key={x.id}>
        <h3>
          <Link to={`/products/${x.id}`}>{x.title}</Link>
        </h3>
        <p>Id: {x.id}</p>
        <p>Category: {x.category}</p>
        <p>Price: ${x.price}</p>

        <hr />
      </div>
    )
  })
  return (
  <div>
    {lastFilter.length!==0 ? (
      <div>
      {lastFilter}
      </div>
    ) : (
      <div>
      <h1>Cargando</h1>
      </div>
    )}
   </div>
  )

  

  
};

export default SingleCategory;