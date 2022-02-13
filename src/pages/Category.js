import data from "./ProductDetails"
import { Link } from "react-router-dom";


const Category = () => {
  const newArrCat = []
  data().map(a => newArrCat.push(a[0].category));
  const filterCategory = [...new Set(newArrCat)];  

  const showCategory = filterCategory.map(x=>{
    return(
      <div key={x}>
          <h3>
          <Link to={`/category/${x}`}>{x}</Link>
          </h3>
      </div>
    )
  })


  return (
    <div>
      <h1>Category Page</h1>
      {showCategory}
    </div>
  );
};

export default Category;
