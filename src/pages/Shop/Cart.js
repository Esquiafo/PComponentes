import React, {useContext, useState} from 'react';
import CartContext from '../../Context/CartContext';
import finalData from "../../Components/ProductsApi"
import apiData from "../../Components/PushApi"
import ApiContext from '../../Context/ApiContext';
import { Link } from 'react-router-dom';
import { Input, Image, Form, Step, Icon, List, Label, Segment, Header } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Cart.css"
import AOS from 'aos';
AOS.init({
  once: true,
  easing: 'ease-in-out'
});

const Cart = () =>{
  const context = useContext(CartContext);
  const contextApi = useContext(ApiContext);
  const lastValue=finalData()
  
  const increase = (h)=>{
    console.log(h.target.value)
    context.upCant(h.target.value)
  }
  const decrease = (h)=>{
    context.downCant(h.target.value)
  }
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [validemail, setValidemail] = useState('')
  let [phone, setPhone] = useState('')
  let count = -1
  let id
  let cantidad
  let items
  let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
  let validName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name)
  let validPhone = /\b(?:\d[ ]*?){6,}\b/.test(phone)
  let validEmailEmail = email == validemail

  const deleteId = (h)=>{
    context.eliminarId(h.target.value);
    
  const testAos = false
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
      <Segment  style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
   <Container><Row style={{justifyContent: "center"}}>
      <Col xs={6} md={3} style={{display: 'flex',paddingTop: '10px', justifyContent: 'center' }}><Image size='medium' src={`${product.img}`} rounded /></Col>

      <Col xs={6} md={3} className="text-break" style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto', marginTop: 'auto',   marginBottom: 'auto'}}><h2>{product.title}</h2></Col>

      <Col  md={3}   style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}>
 
        <Link style={{display:'flex'}} to="/cart">

          <Button variant="danger"  style={{width: '35px'}} value={count} onClick={decrease}>-</Button>
          <Input   style={{width: '65px', textAlign: 'center'}} value={product.cantidad}/>    
          <Button variant="success" style={{width: '35px'}} value={count} onClick={increase}>+</Button>
       
        </Link> 
 
        
      </Col>

      <Col  md={3} style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}><h2><Label tag size={'big'} as='a'>${(product.price)*(product.cantidad)}</Label></h2></Col>
      <Col  md={1}  style={{display: 'flex',paddingTop: '10px', justifyContent: 'center', marginTop: 'auto',   marginBottom: 'auto'}}>
                <Link  to="/cart">
          
                <Label circular color={'red'} onClick={deleteId} value={count}  key={'red'}>X</Label>
                </Link>

      </Col>
    



      </Row></Container>
      </Segment>
    


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

  setEmail(event.target.value)
}
const handleValidEmail = (event) => {
  setValidemail(event.target.value)
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
      <div>
      <Form.Field
      required
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='cosme@fulanito.com'
      onChange={handleEmail}/>

        {email!==validemail ? (
      <Form.Field
      required
      id='form-input-control-error-email'
      control={Input}
      label='Re-Email'
      placeholder='cosme@fulanito.com'
      error={{
        content: 'Los correos no coinciden',
        pointing: 'below',
      }}
      onChange={handleValidEmail}/>
        ) : (
      <Form.Field
      required
      id='form-input-control-error-email'
      control={Input}
      label='Re-Email'
      placeholder='cosme@fulanito.com'
      onChange={handleValidEmail}/>
        )}
      </div>
      ) : (
      <div>
      <Form.Field
        required
        id='form-input-control-error-email'
        control={Input}
        label='Correo electronico'
        placeholder='cosme@fulanito.com'
        error={{
          content: 'Ingresa un correo valido',
          pointing: 'below',
        }}
        onChange={handleEmail}/>
      </div>
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
      <Row style={{padding: '10px 0px 10px 0px'}}>
      <Col style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}} sm={8}>
      <Header as='h2'>
        <Icon name='cart' />
        <Header.Content>Carrito de compras</Header.Content>
      </Header>
      </Col >
      <Col style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}> 
        <Link  to="/cart">
           <Button variant="danger" onClick={fullClear} >Vaciar</Button>
        </Link>
      </Col>
     </Row>
      <Row>
      
      <Col xs={12} md={8}>
        {products}
      </Col>
      <Col md={4}>
      {form()}
      <Col md={12}>
            <Col> 
            
            <Container>
            <Row xs={2} md={2}>
            <Step.Group widths={2}>
            <Step >

            <Step.Content>
            <Step.Title>Precio base</Step.Title>
            </Step.Content>
            </Step>
            <Step >
      
            <Step.Content>
            <Step.Title>${finalPrice}</Step.Title>
            </Step.Content>
            </Step>
            </Step.Group>
            </Row>

            <Row xs={2} md={2}>
            <Step.Group widths={2}>
            <Step >

            <Step.Content>
            <Step.Title>IVA 21%</Step.Title>
            </Step.Content>
            </Step>
            <Step >
      
            <Step.Content>
            <Step.Title>${finalPrice*0.21}</Step.Title>
            </Step.Content>
            </Step>
            </Step.Group>
            </Row>
            <Row xs={2} md={2}>
            <Step.Group widths={2}>
            <Step >

            <Step.Content>
            <Step.Title>Precio final</Step.Title>
            </Step.Content>
            </Step>
            <Step >
      
            <Step.Content>
            <Step.Title>${(finalPrice+finalPrice*0.21).toFixed(2) }</Step.Title>
            </Step.Content>
            </Step>
            </Step.Group>
             </Row>
            </Container>

            </Col>
            <Col>
            { (!validEmailEmail || !validName || !validPhone || !validEmail ) ? (null) : (
        <Link to='/'>
        <Button variant="success" onClick={exitCart}>Comprar</Button>
        </Link>
     )}
            </Col>
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
