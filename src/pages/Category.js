import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCategory from "./SingleCategory";

const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log({data}.category)
  return (
    
    <div className="App">
      {data.map(({ id, title, price, category }) => {
        return (
          

            <ul className="list-group">
            <Link to={`products/${id}`}>
              <SingleCategory key={id} id={id} category={category} title={title} price={price}/>
            </Link>
            </ul>

        );
      })}
    </div>
  );
};

export default Product;
