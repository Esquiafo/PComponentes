import data from "../../Components/FirebaseApi"
import { Link } from "react-router-dom";


const Category = () => {
  const newArrCat = []
  if (data()!==undefined) {
    data().map(a => newArrCat.push(a.category));
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
  }



  return (
    <div>
      <h1>Category Page</h1>
      
    </div>
  );
};

export default Category;
