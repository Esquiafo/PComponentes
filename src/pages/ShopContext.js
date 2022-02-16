import { clear } from '@testing-library/user-event/dist/clear';
import { createContext, useState} from 'react';


const ShopContext = createContext({
    // Array de productos
    items: [],
    // Funcion que agrega nuevos productos
    addItems(x){
    this.items.length!==0 ?
       this.lookItem(x)!==true ? this.items.push(x) : alert('Ya esta en el carrito')
     : this.items.push(x)
    },
    // Funcion que busca un ID repetido
    lookItem(b){
    for (let i = 0; i < this.items.length; i++) {
    if (b.id==this.items[i].id) {return true}
    } return false
    },
    clear(){
    this.items=[];
    }
});


export default ShopContext;
