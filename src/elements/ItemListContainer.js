// import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import React from 'react';
const ItemListContainer = (prop) =>{
  const values = [
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
  ];
  return (

  <div style={{backgroundColor: 'whitesmoke'}}>
     <h1>{prop.name}</h1>
     {/* <ItemCount stock='5' initial='1' onAdd='' /> */}
      <ItemList itemsArr={values}/>
  </div>
  );
}
export default ItemListContainer;