

import React, { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail.js';
const ItemDetailContainer = (prop) =>{
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=uI7IbizothufbOj7Svs8ljq7SuItUwvAaTwYaAw8")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items)
    return (
      <div>
       
        <ItemDetail  key={items.date} date={items.date} titulo={items.copyright} explanation={items.explanation} img={items.hdurl} />
        </div>
    );
  }

}
export default ItemDetailContainer;