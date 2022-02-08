

import React, { useEffect , useState } from 'react';
import Product from './Product';
const ItemDetailContainer = (prop) =>{
 
  
  const [values, setShowMe] = useState([
    {      
      id: 0,
      titulo: "TEST",
      descripcion: "TEST",
      precio: 0,
      img: "TEST"}
  ]);
  const [num, setNum] = useState(0)
  const Increase = () => {
    setNum(num===0 ? num+1 : num-1)
  }
  useEffect (() => {
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
  }, [])

  return (

  <div style={{backgroundColor: 'lightblue'}}>
    <button onClick={Increase} className="ui button">
    Change
   </button>

      <Product id={{values}.values[num].id} 
      titulo={{values}.values[num].titulo} descripcion={{values}.values[num].descripcion}
      precio={{values}.values[num].precio} img={{values}.values[num].img} />

  
  </div>
  );
}
export default ItemDetailContainer;