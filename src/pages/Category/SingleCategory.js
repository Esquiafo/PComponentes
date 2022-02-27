import {useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Icon, Table} from "semantic-ui-react"
const SingleCategory = () => {
  const filterCategory = finalData()
  const value = useParams();
  const newArr=[]
  if (filterCategory!==undefined) {
    filterCategory.filter(b=>b.category==value.categoryId ? newArr.push(b) : null)
  }
  const lastFilter = newArr.map(x=> {
    return (
      <div style={{padding: "25px 25px 25px 25px"}} className="d-flex flex-wrap shadow-sm p-3 mb-5 bg-body rounded" key={x.id}>

      <Divider horizontal>
      <Image className="flex-wrap center " src={`${x.img}`}size="small" rounded />
  
        <Header as='h4'>
          <Icon name='bar chart' />
          Specifications
        </Header>
        <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={10}>Producto</Table.Cell>
            <Table.Cell> <Link to={`/products/${x.id}`}>{x.title}</Link> </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Product ID</Table.Cell>
            <Table.Cell>{x.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Categoria</Table.Cell>
            <Table.Cell> {x.category} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Precio</Table.Cell>
            <Table.Cell> ${x.price}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Disponibles</Table.Cell>
            <Table.Cell>{x.stock}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Divider>
  
          </div>
    )
  })
  return (
  <div>
    {filterCategory!==undefined ? (
        <div className="d-flex flex-wrap ">
        {lastFilter}
      </div>
    ) : (
      <div>
      <h1>Cargando</h1>
      </div>
    )}
   </div>
  )
};

export default SingleCategory;