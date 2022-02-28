import FireBaseApi from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Icon, Table} from "semantic-ui-react"


const Items = () => {
  const data = FireBaseApi()
  let products
  if (data!==undefined) {
    products = data.map(product => {
      
      return (
    
    <div style={{padding: "25px 25px 25px 25px"}} className="d-flex flex-wrap shadow-sm p-3 mb-5 bg-body rounded" key={product.id}>

    <Divider horizontal>
    <Image className="flex-wrap center " src={`${product.img}`}size="small" rounded />

      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
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
    </Divider>

        </div>
   
      );
    });
  }
  
  return (
    <div className="null">
      {data==undefined ? (
        <div>
          Cargando
        </div>
      ) : (
        <div className="d-flex  flex-wrap ">
          {products}
        </div>
      )}
    </div>
  );
};

export default Items;
