

import React, { useEffect, useState } from 'react';
import Product from './Product';
const ItemDetailContainer = (prop) =>{
 
  
  const [values, setShowMe] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setShowMe([
        {
          id: 1,
          titulo: "A",
          descripcion: "ABC",
          precio: 1,
          img: "XS"
        },
        {
          id: 2,
          titulo: "Z",
          descripcion: "XYZ",
          precio: 2,
          img: "XL"
        }
      ]);
    }, 2000);
    setShowMe([])
  }, [])

  return (

  <div style={{backgroundColor: 'lightblue'}}>
    <button className="ui button">
    Show detail
  </button>
  
  {values.values.length.map(x => (
                      <Product key={x.id.toString()} id={x.id} titulo={x.titulo} descripcion={x.descripcion} key={x.precio.toString()} precio={x.precio} img={x.img} />
                    ))}

  </div>
  );
}
export default ItemDetailContainer;