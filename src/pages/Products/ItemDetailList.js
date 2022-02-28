import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Icon, Table} from "semantic-ui-react"
import Category from '../Category/Category'

const Items = () => {
  const data = FireBaseApi()
  let products
  if (data!==undefined) {
    products = data.map(product => 
      
      {
      
      return (
    
    <div style={{padding: "0px 10px 0px 10px"}} className="d-flex" key={product.id}>
      
  
    <Image style={{width:"250px", height: "250px"}}src={`${product.img}`}size="" rounded />

     
      <Table definition>
     
      <Table.Body>
        <Table.Row>
          <Table.Cell width={10}>Producto</Table.Cell>
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
  

        </div>
   
      );
    });
  }
  
  return (
    <div className="d-flex">
      
      {data==undefined ? (
        <div>
          Cargando
        </div>
      ) : (

       <div className="col-md-11">
       {products}
       </div>

       
     
      )}
         <Category />
    </div>
  );
};

export default Items;
