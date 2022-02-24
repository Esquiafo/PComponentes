import {useParams} from "react-router-dom"
import finalData from "../../Components/FirebaseApi"
import { Link } from "react-router-dom";

const SingleCategory = () => {
  const filterCategory = finalData()
  const value = useParams();
  const newArr=[]
  if (filterCategory!==undefined) {
    filterCategory.filter(b=>b.category==value.categoryId ? newArr.push(b) : null)
  }
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
    {filterCategory!==undefined ? (
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