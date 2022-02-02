import React from "react";
import Item from "./Item.js"

function ItemList(items) {
    return (
        <div>

        <div className="container">
        <div className="row">
        <div style={{display: 'flex'}}>
            
        {items.itemsArr.map(x => (
                  <Item id={x.id} titulo={x.titulo} descripcion={x.descripcion} precio={x.precio} img={x.img} />
                ))}

        </div>
        </div>
        </div>

        </div>
      );
}

export default ItemList