import React from 'react'
import { useEffect, useState } from 'react'

const ProductPage = (props) => {
    interface check{
        id: number,
        name: string
       }

       const [data,setData] = useState([])
       
       useEffect(()=>{setData(props)},[props])
    

    

  return (
    <div>
        <div>Product Page</div>
<div> {props.products.map((item:check) => 
{
    return (
        <div key={item.id}>
        <h2>{item.name}</h2>
        <h2>{item.price}</h2>
        <h2>{item.desc}</h2>
        <h2>{item.category}</h2>
        </div>
        
    )
})}  </div>
    </div>
  )
}

export default ProductPage