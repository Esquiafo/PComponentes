import React from "react"
import {useParams} from "react-router-dom"
import data from "./ProductDetails"

function SingleProduct() {
    const {productId} = useParams()
    const emptyArr=[]
    const destructuringData = data().map(prod => prod.length==0 ? destructuringData
      : emptyArr.push(prod[0])
      )
    const finalData = emptyArr.find(x => x.id== productId);
    console.log()
    return (
        <div>
           {finalData.id}
           {finalData.price}
           {finalData.title}
           {finalData.category}
        </div>
    )
}

export default SingleProduct