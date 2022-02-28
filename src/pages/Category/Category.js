import data from "../../Components/ProductsApi"
import { Link } from "react-router-dom";


const Category = () => {
  const test = data()
  const newArrCat = []
  let showCategory;
  if (data()!==undefined) {
    test.map(a => newArrCat.push(a.category));
    const filterCategory = [...new Set(newArrCat)];
    showCategory = filterCategory.map(x=>{
      return(
        <div key={x}>
          
            <Link to={`/category/${x}`}>{x}</Link>
           
        </div>
      )
    })
  }



  return (
    <div>
      {test!==undefined ? (
        <div>
        {showCategory}
        </div>
      ) : (
     
        <h1>Cargando</h1>
     
      )}
    </div>
  );
};

export default Category;
