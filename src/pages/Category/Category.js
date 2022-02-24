import data from "../../Components/FirebaseApi"
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
            <h3>
            <Link to={`/category/${x}`}>{x}</Link>
            </h3>
        </div>
      )
    })
  }



  return (
    <div>
      <h1>Category Page</h1>
      {test!==undefined ? (
        <div>
        {showCategory}
        </div>
      ) : (
      <div>
        <h1>Cargando</h1>
      </div>
      )}
    </div>
  );
};

export default Category;
