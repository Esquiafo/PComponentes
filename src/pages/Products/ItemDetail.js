import {Link, useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi.js"
import React, { useContext, useState } from 'react';
import CartContext from "../../Context/CartContext"
import { Dimmer, Loader, Image, Segment, Icon, Table, Divider, Header } from 'semantic-ui-react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const ItemDetail = () => {
  const ultimateData = finalData();
  const value = useParams();
  const [contador, setCounter] = useState(1)
  let count=-1
  const filterItem=[]
  
  const context = useContext(CartContext);
  const increase = ()=>{
    setCounter(contador==ultimateData[value.productId-1].stock ? contador+0 : contador+1)
  }
  const decrease = ()=>{
    setCounter(contador==1 ? contador+0 : contador-1)
  }
  const onAdd = () =>{
  
    context.addItems({img: ultimateData[value.productId-1].img, id: ultimateData[value.productId-1].id, cantidad: contador, price:ultimateData[value.productId-1].price, title: ultimateData[value.productId-1].title, stock: ultimateData[value.productId-1].stock })
    
  }

  let filterView

  if (finalData()!==undefined) {
    filterItem.push(ultimateData.filter(x=>x.id==value.productId && x.stock > 0))
    if (filterItem[0][0].f1!==undefined) {
      filterView = filterItem[0][0].f1.map(x=>{
        count++
        return(
          <div key={count}>
    

    <Segment clearing>
    <Header as='h2' floated='left'>
      {x}
      <Divider  vertical />
    </Header>
    

    
    <Header as='h2' floated='right'>
    <Divider  vertical />
     {filterItem[0][0].f2[count]}
    </Header>
  </Segment>

            
          </div>
        )
      })
    }
    

}
  

  
  return (
    <div>
     
     {filterItem.length!==0 ? (
      filterItem[0][0] == undefined ? (
        <h1>
          No disponible
        </h1>
      ) : (
        
        <div key={filterItem[0][0].id}>
        <Container>
          <Row xs={1} md={2}>
            <Col>
            <Image  src={`${filterItem[0][0].img}`} size="medium" rounded  />
            <h2>Precio unitario: ${filterItem[0][0].price}</h2>
            <h2>Cantidad:  <Button onClick={decrease}>-</Button> {contador}   <Button onClick={increase}>+</Button> <a style={{color: "grey"}}>(Disponibles: {ultimateData[value.productId-1].stock})</a></h2>
          
           
          
            <Link to="/cart" >
            <Button onClick={onAdd} >Agregar al carrito</Button>
            </Link>
        
            </Col>
            <Col>
            {filterView==undefined ? (null) : (<div>
              
              <Divider horizontal>
               <Header as='h2'>
                <Icon name='bar chart' />
                Especificaciones
               </Header>
              </Divider>

              {filterView}


              </div>

              )}
  
        
            </Col>
          </Row>
        </Container>
          

      </div>
      )
       
      ) : (
        
        <div className="d-flex col-md-12  justify-content-center">
          <br></br>
        <div style={{width: "100px",  height: "100px"}}  className="spinner-border" role="status">
          <span  className="visually-hidden">Loading...</span>
        </div>
      </div>
     )}
    </div>
  )

  

};

export default ItemDetail;