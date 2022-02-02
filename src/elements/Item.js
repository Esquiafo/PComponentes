import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function Item(items) {
    const values = [
        {id:1, title : "A", price:1, img:"xs"},
        {id:2, title : "B", price:2, img:"m"},
        {id:3, title : "C", price:3, img:"x"}
      ]
    return(
    <div>
        <Card.Group>
        <Card>
        <Card.Content>
    <h1>ID: {items.id}</h1>
    <h1>Titulo: {items.titulo}</h1>
    <Card.Description>
    <h1>Descripcion: {items.descripcion}</h1>
    </Card.Description>
    </Card.Content>
    <h1>Price :{items.precio}</h1>
    <h1>Picture: {items.img}</h1>
        </Card>
        </Card.Group>
    </div>
    )
}

export default Item