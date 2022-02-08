import React from "react";
import { Card } from 'semantic-ui-react'

function Product(items) {
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

export default Product