
import axios from "axios";
import { useEffect, useState } from "react";
const ItemApi = () => {
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
const finalData = data.map( product => [{
  id: product.id,
  title: product.title,
  price: product.price,
  category: product.category,
}]

)
return finalData

}

export default ItemApi