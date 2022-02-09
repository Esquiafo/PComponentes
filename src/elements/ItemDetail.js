import { render } from "@testing-library/react";
import React from "react";
import { Card, Image } from 'semantic-ui-react'

function ItemDetail(items) {
    console.log(items)
    return(
    <div>
       
    <h1>date: {items.date}</h1>
    <h1>Creador: {items.titulo}</h1>

    <h1>explanation: {items.explanation}</h1>

    <h1>img: <Image src={items.img} size='small' /></h1>

    </div>
    )
}

export default ItemDetail