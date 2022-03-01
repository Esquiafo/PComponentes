import React, {useContext, useState} from 'react';
import CartContext from '../../Context/CartContext';
import finalData from "../../Components/ProductsApi"
import apiData from "../../Components/PushApi"
import ApiContext from '../../Context/ApiContext';
import { Link } from 'react-router-dom';
import { Input, Image, Form } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-bootstrap';
const Cart = () =>{
  const context = useContext(CartContext);
  const contextApi = useContext(ApiContext);
  const lastValue=finalData()
  
  const increase = (h)=>{
    context.upCant(h.target.value)
  }
  const decrease = (h)=>{
    context.downCant(h.target.value)
  }
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let count = -1
  let id
  let cantidad
  let items
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
  let validName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name)
  let validPhone = /\b(?:\d[ ]*?){6,}\b/.test(phone)
  const deleteId = (h)=>{
    context.eliminarId(h.target.value);
}
  const fullClear = ()=>{
    context.clear()
}

const exitCart = ()=>{
  contextApi.items=context.items;
  contextApi.name=name;
  contextApi.email=email;
  contextApi.phone=phone;
  apiData(contextApi)
  context.clear()
}

let finalPrice = 0
context.items.map(x=> finalPrice= finalPrice + (x.cantidad*x.price))
  const products = context.items.map(product => {
    
    count++
    id = product.id
    cantidad = product.cantidad
    return (
    <div key={product.id}>
      {lastValue!==undefined? (
        
      <Container >
      <Row> 
       <Col><Image className=' col-md-12' style={{width:"250px", height: "250px"}} src={`${product.img}`} rounded /></Col>
      <Col>
      <ul  className='col-md-12 '>
        <li>{lastValue[product.id-1].title}</li>
        <li>
          Cantidad: {product.cantidad}
          <Link  to="/cart">
           <button value={count} onClick={increase}>+</button>
           <button value={count} onClick={decrease}>-</button>
      </Link>
        </li>
        <li>Precio total: ${(lastValue[product.id-1].price)*(product.cantidad)}</li>
      </ul>
      <Link  to="/cart">
      <button onClick={deleteId} value={count} >Borrar item</button>
      </Link>
      </Col>
      </Row>
    </Container>
    )  : (
      <div>
   <h1>Cargando</h1>
    </div>
    )}
      
  </div>
  );

})
const handleName = (event) => {
  setName(event.target.value)
}
const handleEmail = (event) => {
  console.log(validEmail)
  setEmail(event.target.value)


}
const handlePhone = (event) => {
  setPhone(event.target.value)


}
const form = () =>{
  
  return(

  <div style={{margin: "10px 10px 10px 10px"}} className="ui form">

    <div className=" field col-xs-12">
 
      {validName==true ? (
      <Form.Field
      required
      id='form-input-control-error-name'
      control={Input}
      label='Nombre completo'
      placeholder='Cosme Fulanito'
      onChange={handleName}/>
   
      ) : (
        <Form.Field
        required
        id='form-input-control-error-name'
        control={Input}
        label='Nombre completo'
        placeholder='Cosme Fulanito'
        error={{
          content: 'Ingresa tu nombre valido',
          pointing: 'below',
        }}
        onChange={handleName}/>
      )}

    </div>
    <div className="field  col-xs-12">
      {validEmail==true ? (
      <Form.Field
      required
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      onChange={handleEmail}/>
   
      ) : (
        <Form.Field
        required
        id='form-input-control-error-email'
        control={Input}
        label='Correo electronico'
        placeholder='joe@schmoe.com'
        error={{
          content: 'Ingresa un correo valido',
          pointing: 'below',
        }}
        onChange={handleEmail}/>
      )}
    </div>

    <div className="field  col-xs-12">
    {validPhone==true ? (
      <Form.Field
      required
      id='form-input-control-error-phone'
      control={Input}
      label='Nombre completo'
      placeholder='Cosme Fulanito'
      onChange={handlePhone}/>
   
      ) : (
        <Form.Field
        required
        id='form-input-control-error-phone'
        control={Input}
        label='Telefono'
        placeholder='11223344'
        error={{
          content: 'Ingresa un telefono valido',
          pointing: 'below',
        }}
        onChange={handlePhone}/>
      )}
    </div>



  </div>
       
  
  )
}

  return (

    <div>

    {products.length!==0 ? (
    <Container>
      <Row>
      <Col sm={8}>
          Carrito de compras
      </Col >
      <Col>
        <Link  to="/cart">
           <button onClick={fullClear} >Borrar todo</button>
        </Link>
      </Col>
     </Row>
      <Row>
      
      <Col md={8}>
        {products}
      </Col>
      <Col md={4}>
      {form()}
      <Col md={6}>
        <Container>
          <Row>
            <Col> 
            <p>Precio articulos: ${finalPrice}</p>
            <p> Iva 21%: ${finalPrice * 0.21} </p>
             <p>Final: ${finalPrice+(finalPrice*0.21)}</p>
            </Col>
            <Col>
            { (!validName || !validPhone || !validEmail ) ? (null) : (
        <Link to='/'>
        <button onClick={exitCart}>Comprar</button>
        </Link>
     )}
            </Col>
          </Row>
        </Container>
      </Col>
    
      </Col>
      </Row>
      </Container>
    ) : (
    <div>
      <h1>IMAGEN CARRITO VACIO</h1>
    </div>
    )}
   </div>
  );
};
export default Cart;
