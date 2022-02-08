import React, { useEffect, useState } from 'react';
import Item from "./Item.js"
import { Button, Icon } from 'semantic-ui-react'

function ItemList(items) {

    const [showMe, setShowMe] = useState("hidden");
    useEffect(() => {
      setTimeout(() => {
      setShowMe("visible")
      }, 2000);
      setShowMe("hidden")
    }, []);
        return (
            <div>
            <div className='container'>
            <div className="row">
            <div className='' style={{display: 'flex', visibility: showMe}}>
            {items.itemsArr.map(x => (
                      <Item key={x.id.toString()} id={x.id} titulo={x.titulo} descripcion={x.descripcion} key={x.precio.toString()} precio={x.precio} img={x.img} />
                    ))}
    
            </div>
            </div>
            </div>
    
            </div>
          );
    
    
}

export default ItemList