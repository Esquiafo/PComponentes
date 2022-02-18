import data from "../../Components/ItemApi";
import { Link } from "react-router-dom";


const Items = () => {
  const products = data().map(product => {
    
    return (
      <div key={product[0].id}>
        <h3>
          <Link to={`/products/${product[0].id}`}>{product[0].title}</Link>
        </h3>
        <p>Id: {product[0].id}</p>
        <p>Category: {product[0].category}</p>
        <p>Price: ${product[0].price}</p>

        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default Items;
