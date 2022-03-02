import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Icon, Table} from "semantic-ui-react"
import Category from '../Category/Category'
import { Container, Row, Col, Button  } from 'react-bootstrap';

const Items = () => {
  const data = FireBaseApi()
  let products
  if (data!==undefined) {
    products = data.map(product => {
      return (
    <div key={product.id}>
        {product.stock !=0 ? (
      
     

      <Col>
      <Image src={`${product.img}`} height="200px" rounded  centered />
        <Table definition >
        <Table.Body>
          
          <Table.Row>
            
            <Table.Cell width={2}>Producto</Table.Cell>
            <Table.Cell> 
            {product.stock <=0 ? (
          <div>
            {product.title}
          </div>
        ) : (
          <Link to={`/products/${product.id}`}>{product.title}</Link> 
        )}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Product ID</Table.Cell>
            <Table.Cell>{product.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Categoria</Table.Cell>
            <Table.Cell> {product.category} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Precio</Table.Cell>
            <Table.Cell> ${product.price}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Disponibles</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Col> 

        ) : (
        <Col>
          <Image  src={`${product.img}`} height="200px" rounded centered />
          <Table definition>
          <Table.Body>
            
            <Table.Row>
              
              <Table.Cell disabled width={2}>Producto</Table.Cell>
              <Table.Cell disabled> 
              {product.stock <=0 ? (
            <div>
              {product.title}
            </div>
          ) : (
            <Link to={`/products/${product.id}`}>{product.title}</Link> 
          )}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell disabled>ID</Table.Cell>
              <Table.Cell disabled>{product.id}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell disabled>Categoria</Table.Cell>
              <Table.Cell disabled> {product.category} </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell disabled>Precio</Table.Cell>
              <Table.Cell disabled> ${product.price}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell disabled>Disponibles</Table.Cell>
              <Table.Cell disabled>{product.stock}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </Col> 
        )}
       
         
     
   </div>
      );
    });
  }
  
  return (
    <div>

      {data==undefined ? (
        <div>
          Cargando
        </div>
      ) : (

        <div>
          <Container>
          <Row xs={2} md={4}>
           {products}
           </Row>
          </Container>
        </div>


       
     
      )}
      
         <Category />
    </div>
  );
};

export default Items;
