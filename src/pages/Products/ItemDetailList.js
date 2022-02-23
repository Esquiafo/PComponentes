import FireBaseApi from "../../Components/FirebaseApi"
import { Link } from "react-router-dom";


const Items = () => {
  const data = FireBaseApi()
  let products
  if (data!==undefined) {
    products = data.map(product => {
      return (
        <div key={product.id}>
          <h3>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </h3>
          <p>Id: {product.id}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
  
          <hr />
        </div>
      );
    });
  }
  
  return (
    <div>
      {data==undefined ? (
        <div>
          Cargando
        </div>
      ) : (
        <div>
          {products}
        </div>
      )}
    </div>
  );
};

export default Items;
