import ItemCount from './ItemCount.js';
import React from 'react';
const ItemListContainer = (prop) =>{

  return (

  <div style={{backgroundColor: 'whitesmoke'}}>
     <h1>{prop.name}</h1>
     <ItemCount stock='5' initial='1' onAdd='' />
  
  </div>
  );
}
export default ItemListContainer;