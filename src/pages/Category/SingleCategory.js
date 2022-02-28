import {useParams} from "react-router-dom"
import finalData from "../../Components/ProductsApi"
import { Link } from "react-router-dom";
import {Image,  Divider, Header, Icon, Table} from "semantic-ui-react"
import Category from "./Category";
const SingleCategory = () => {
  const filterCategory = finalData()
  const value = useParams();
  const newArr=[]
  if (filterCategory!==undefined) {
    filterCategory.filter(b=>b.category==value.categoryId ? newArr.push(b) : null)
  }
  const lastFilter = newArr.map(x=> {
    return (
      <div style={{padding: "0px 10px 0px 10px"}} className="d-flex" key={x.id}>
      
  
    <Image style={{width:"250px", height: "250px"}}src={`${x.img}`}size="" rounded />

     
      <Table definition>
     
      <Table.Body>
        <Table.Row>
          <Table.Cell width={10}>Producto</Table.Cell>
          <Table.Cell> 
          {x.stock <=0 ? (
        <div>
          {x.title}
        </div>
      ) : (
        <Link to={`/products/${x.id}`}>{x.title}</Link> 
      )}
          
          
          </Table.Cell>
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
  

        </div>
    )
  })
  return (
  <div className="d-flex">
    {filterCategory!==undefined ? (
        <div className=" col-md-11">
        {lastFilter}
      </div>
    ) : (
      <div>
      <h1>Cargando</h1>
      </div>
    )}
    <Category />
   </div>
  )
};

export default SingleCategory;